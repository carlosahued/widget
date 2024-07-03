(function () {
  const config = window.embeddedChatbotConfig || {};
  const chatbotId = config.chatbotId || "";
  const domain = config.domain || "";

  if (!chatbotId || !domain) {
    console.error("Chatbot configuration is missing.");
    return;
  }

  // Create the script tag to load React and ReactDOM if not already loaded
  if (!window.React || !window.ReactDOM) {
    const reactScript = document.createElement("script");
    reactScript.src = "https://unpkg.com/react/umd/react.production.min.js";
    reactScript.defer = true;
    document.head.appendChild(reactScript);

    const reactDomScript = document.createElement("script");
    reactDomScript.src =
      "https://unpkg.com/react-dom/umd/react-dom.production.min.js";
    reactDomScript.defer = true;
    document.head.appendChild(reactDomScript);
  }

  // Load the widget script
  const widgetScript = document.createElement("script");
  widgetScript.src = `https://${domain}/widget.js`;
  widgetScript.defer = true;
  document.head.appendChild(widgetScript);

  // Wait for React and ReactDOM to be loaded
  widgetScript.onload = function () {
    if (window.React && window.ReactDOM) {
      // Create a div for the widget
      const widgetDiv = document.createElement("div");
      widgetDiv.id = "my-widget";
      document.body.appendChild(widgetDiv);

      // Render the React component
      const { useState } = window.React;
      const { render } = window.ReactDOM;

      const ChatWidget = function () {
        const [isOpen, setIsOpen] = useState(false);
        const [messages, setMessages] = useState([]);
        const [message, setMessage] = useState("");

        const handleSendMessage = async () => {
          setMessages([...messages, message]);
          setMessage("");

          // Aquí puedes enviar el mensaje al servidor
          await fetch(`https://${domain}/api/send-message`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
          });
        };

        return window.React.createElement(
          "div",
          { className: "widget" },
          window.React.createElement(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
            },
            "Chat with us!"
          ),
          isOpen &&
            window.React.createElement(
              "div",
              { className: "chatBox" },
              window.React.createElement(
                "div",
                { className: "messages" },
                messages.map((msg, index) =>
                  window.React.createElement("div", { key: index }, msg)
                )
              ),
              window.React.createElement("input", {
                type: "text",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                placeholder: "Type your message",
              }),
              window.React.createElement(
                "button",
                {
                  onClick: handleSendMessage,
                },
                "Send"
              )
            )
        );
      };

      render(
        window.React.createElement(ChatWidget),
        document.getElementById("my-widget")
      );
    } else {
      console.error("Failed to load React or ReactDOM");
    }
  };
})();

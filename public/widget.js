// public/widget.js
(function () {
  const script = document.createElement("script");
  script.src = "https://your-nextjs-site.com/_next/static/chunks/main.js"; // Reemplaza esta URL con la URL correcta del archivo JavaScript compilado
  script.async = true;
  script.onload = function () {
    const widgetContainer = document.createElement("div");
    widgetContainer.id = "intercom-widget";
    document.body.appendChild(widgetContainer);
    ReactDOM.render(React.createElement(Widget), widgetContainer);
  };
  document.head.appendChild(script);
})();

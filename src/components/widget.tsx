"use client";
// components/Widget.tsx
import React, { useState } from "react";

const widgetButtonStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const chatContainerStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "300px",
  height: "400px",
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "none",
};

const chatContainerVisibleStyle: React.CSSProperties = {
  ...chatContainerStyle,
  display: "block",
};

const Widget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button style={widgetButtonStyle} onClick={toggleChat}>
        💬
      </button>
      <div style={isOpen ? chatContainerVisibleStyle : chatContainerStyle}>
        <iframe
          src="/hello"
          width="100%"
          height="100%"
          style={{ border: "1px solid red" }}
          title="Chat"
        ></iframe>
      </div>
    </>
  );
};

export default Widget;

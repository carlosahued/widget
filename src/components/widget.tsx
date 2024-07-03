// src/components/widget.tsx
"use client";

import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: "435px", height: "400px", background: "red" }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Cerrar" : "Abrir"} Chat
      </button>
      {isOpen && (
        <div
          style={{
            backgroundColor: "blue",
          }}
        >
          Hola Mundo
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

// src/components/widget.tsx
"use client";

import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Cerrar" : "Abrir"} Chat
      </button>
      {isOpen && (
        <div
          style={{
            width: 300,
            height: 400,
            backgroundColor: "white",
            border: "1px solid black",
            padding: 10,
          }}
        >
          Hola Mundo
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

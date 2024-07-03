// src/components/widget.tsx
"use client";

import React, { useState, useEffect } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      setId(id);
    }
  }, []);

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
          Hola Mundo ID: {id}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

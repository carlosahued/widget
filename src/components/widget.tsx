// src/components/widget.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        {isOpen ? "Cerrar" : "Abrir"} Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: "blue",
            }}
          >
            Hola Mundo ID: {id}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;

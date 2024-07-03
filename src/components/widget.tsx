// src/components/widget.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppDashed, App, Tv, VideoFill } from "../../public/symbols";
import styles from "./styles.module.scss";
import Pictures from "./pictures";

const ChatWidget = () => {
  const [id, setId] = useState("");
  const [open, setOpen] = useState(true);
  const [start, setStart] = useState(false);
  const audioRef: any = useRef(null);
  const audioRefe: any = useRef(null);
  // TESR
  const [pictures, setPictures] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      setId(id);
    }
  }, []);

  useEffect(() => {
    if (open && audioRef.current) {
      audioRef.current.play();
      setTimeout(() => {
        audioRefe.current.play();
      }, 1000);
    }
  }, [open]);

  let imageUrl =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div style={{ width: "100%" }}>
      <button onClick={() => setOpen(!open)}>{open ? "CLOSE" : "OPEN"}</button>
      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.q}
            style={{ height: pictures ? 400 : 161 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear" }}
          >
            {/* HEADER */}
            <div className={styles.w}>
              <div className={styles.w2}>
                <img src={imageUrl} alt="picture" />
                <App />
              </div>
              <div className={styles.w3}>
                <p>Clipme</p>
                <p>Online</p>
              </div>
              <button className={styles.w4} onClick={() => setOpen(false)}>
                <Tv />
              </button>
            </div>
            {/* ACTIONS */}
            <div className={styles.e1}>
              <button>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={styles.bar}
                    // style={{ height: `${barHeights[index]}px` }}
                  ></span>
                ))}
              </button>
              {start ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <button key={i} onClick={() => setPictures(!pictures)}>
                    <AppDashed height="19" />
                    <span className={styles.tool}>Screen</span>
                  </button>
                ))
              ) : (
                <button
                  style={{ backgroundColor: "#32D74B" }}
                  onClick={() => setStart(true)}
                >
                  <VideoFill />
                  <p>Join</p>
                </button>
              )}
            </div>
            {/* DYNAMIC-UI */}
            <AnimatePresence>
              {pictures && <div>{pictures && <Pictures />}</div>}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/sounds/o1.mp3"
        preload="auto"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ChatWidget;

"use client";

import { useState } from "react";
import { Tv } from "../../public/symbols";
import { Spinner } from "@/components/spinner";
import styles from "./styles-p.module.scss";
import { motion } from "framer-motion";

export default function Pictures() {
  const [loading, setLoading] = useState(false);

  let imageUrl =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        height: 0,
        // scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "linear" },
      }}
      transition={{ delay: 0.4, ease: "linear" }}
    >
      {/*  */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={styles.stack}>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <img src={imageUrl} alt="Picture" className={styles.picture} />
              <button className={styles.button}>
                <Tv height="11" />
              </button>
            </>
          )}
        </div>
      ))}
      {/*  */}
    </motion.div>
  );
}

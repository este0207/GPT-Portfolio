"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}



export default function Hero() {
     const title = useTypewriter("Bienvenue.", 35);
        const subtitle = useTypewriter(
            "Pose une question. Découvre mon travail. Explore mon univers.",
            20
        );

  return (
    <section className="text-center max-w-3xl mb-20">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-5xl md:text-6xl font-semibold tracking-tight whitespace-pre-line mb-6"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-600 leading-relaxed whitespace-pre-line"
      >
        {subtitle}
      </motion.p>
    </section>
  );
}
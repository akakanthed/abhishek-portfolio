"use client";

import { motion } from "framer-motion";

export default function SubHeading({ text }: { text: string }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "var(--text-xl)",
        fontWeight: 400,
        lineHeight: 1.3,
        color: "var(--text-primary)",
        marginTop: "2.5rem",
        marginBottom: "1rem",
      }}
    >
      {text}
    </motion.h3>
  );
}

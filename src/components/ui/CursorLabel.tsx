"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface CursorLabelProps {
  visible: boolean;
  x: number;
  y: number;
  label: string;
}

export default function CursorLabel({ visible, x, y, label }: CursorLabelProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, width: 40, height: 40 }}
      animate={{
        opacity: visible ? 1 : 0,
        width: visible ? "auto" : 40,
        height: 40,
      }}
      transition={{
        width: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.15 },
      }}
      style={{
        position: "fixed",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        background: "#ffffff",
        color: "#0a0a0a",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        padding: "0 20px",
        borderRadius: "100px",
        whiteSpace: "nowrap",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.span
        animate={{
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15, delay: visible ? 0.12 : 0 }}
      >
        {label}
      </motion.span>
    </motion.div>,
    document.body
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function StickyBackButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        top: "72px",
        left: "2rem",
        zIndex: 45,
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "0.45rem 1rem",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "var(--text-sm)",
        color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
        background: hovered ? "var(--bg-card, var(--bg-elevated))" : "var(--bg-elevated)",
        border: `1px solid ${hovered ? "var(--border-default)" : "var(--border-subtle)"}`,
        borderRadius: "100px",
        textDecoration: "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transform: hovered ? "translateX(-2px)" : "translateX(0)",
        transition:
          "color 0.3s ease, background 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <ArrowLeft size={14} />
      Back
    </Link>
  );
}

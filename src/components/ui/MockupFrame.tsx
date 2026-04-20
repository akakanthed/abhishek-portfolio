"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GlowColor = "blue" | "indigo" | "amber" | "neutral";

interface MockupFrameProps {
  src: string;
  alt: string;
  type: "browser" | "fullscreen" | "card";
  glow?: boolean;
  glowColor?: GlowColor;
  caption?: string;
  className?: string;
}

const glowShadows: Record<GlowColor, string> = {
  blue:    "0 0 60px rgba(99,120,255,0.15), 0 2px 4px rgba(0,0,0,0.4)",
  indigo:  "0 0 60px rgba(139,92,246,0.15), 0 2px 4px rgba(0,0,0,0.4)",
  amber:   "0 0 60px rgba(251,146,60,0.15), 0 2px 4px rgba(0,0,0,0.4)",
  neutral: "0 0 60px rgba(255,255,255,0.06), 0 2px 4px rgba(0,0,0,0.4)",
};

const fadeUp = {
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      quality={85}
      sizes="(max-width: 768px) 100vw, 600px"
      className={className}
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}

export default function MockupFrame({
  src,
  alt,
  type,
  glow = true,
  glowColor = "blue",
  caption,
  className = "",
}: MockupFrameProps) {
  const shadow = glow ? glowShadows[glowColor] : undefined;

  /* ── CARD ──────────────────────────────────────────────────── */
  if (type === "card") {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ height: "100%" }}>
        <Img src={src} alt={alt} className="w-full h-auto block" />
        {/* gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>
    );
  }

  /* ── BROWSER ───────────────────────────────────────────────── */
  if (type === "browser") {
    return (
      <div className={className}>
        <motion.div
          {...fadeUp}
          style={{
            background: "#1a1a1a",
            border: "1px solid var(--mockup-border)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: shadow,
          }}
        >
          {/* Browser chrome bar */}
          <div
            style={{
              height: "40px",
              background: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              borderBottom: "1px solid var(--mockup-border)",
            }}
          >
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57", display: "block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e", display: "block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", display: "block" }} />
            </div>
            <div
              style={{
                width: "40%",
                height: "22px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "4px",
              }}
            />
            <div style={{ width: "44px" }} />
          </div>

          <Img src={src} alt={alt} className="w-full h-auto block" />
        </motion.div>

        {caption && (
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "13px",
              marginTop: "12px",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            {caption}
          </p>
        )}
      </div>
    );
  }

  /* ── FULLSCREEN ────────────────────────────────────────────── */
  return (
    <div className={className}>
      <motion.div
        {...fadeUp}
        style={{
          border: "1px solid var(--mockup-border)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: shadow,
        }}
      >
        <Img src={src} alt={alt} className="w-full h-auto block" />
      </motion.div>

      {caption && (
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "13px",
            marginTop: "12px",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

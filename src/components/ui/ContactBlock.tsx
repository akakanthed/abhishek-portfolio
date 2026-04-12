"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function NoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number;
    let frame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const drawNoise = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() * 255;
        imageData.data[i]     = value;
        imageData.data[i + 1] = value;
        imageData.data[i + 2] = value;
        imageData.data[i + 3] = 15;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      frame++;
      if (frame % 5 === 0) drawNoise();
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
}

export default function ContactBlock() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        background: "var(--bg-primary)",
        padding: "var(--space-10) var(--space-9)",
      }}
    >
      {/* ── Two-column layout ──────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "var(--space-8)",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Left — heading + subtext */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "var(--text-3xl)",
              color: "var(--text-primary)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Want to work together?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "var(--text-base)",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "380px",
              marginTop: "16px",
              marginBottom: 0,
            }}
          >
            I am currently open to new opportunities. If you&apos;d like to chat
            about a role, a product challenge, or just good design — get in touch.
          </p>
        </motion.div>

        {/* Right — interactive email container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            onClick={() => { window.location.href = "mailto:kanthed.abhishek@gmail.com"; }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              overflow: "hidden",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "48px 40px",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {/* Layer 1 — noise texture */}
            <NoiseCanvas />

            {/* Layer 2 — color seep from right on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                background:
                  "linear-gradient(to left, rgba(99,120,255,0.18) 0%, transparent 60%)",
              }}
            />

            {/* Layer 3 — email content */}
            <div
              style={{
                position: "relative",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "var(--text-lg)",
                  fontWeight: 400,
                  color: isHovered ? "#ffffff" : "var(--text-primary)",
                  transition: "color 300ms",
                }}
              >
                kanthed.abhishek@gmail.com
              </span>

              <motion.span
                animate={{ rotate: isHovered ? -45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  color: isHovered ? "var(--text-primary)" : "var(--text-secondary)",
                  transition: "color 300ms",
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Divider + copyright ────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            marginTop: "var(--space-8)",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "var(--text-sm)",
            color: "var(--text-muted)",
            textAlign: "center",
            paddingTop: "var(--space-6)",
            margin: 0,
          }}
        >
          Design &amp; Code © Abhishek Kanthed 2025
        </p>
      </div>
    </section>
  );
}

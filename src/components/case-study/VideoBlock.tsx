"use client";

import { motion } from "framer-motion";
import ImageFrame, { type ImageVariant } from "./lib/ImageFrame";

interface VideoBlockProps {
  src: string;
  poster?: string;
  caption?: string;
  maxWidth?: string;
  variant?: ImageVariant;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function VideoBlock({
  src,
  poster,
  caption,
  maxWidth,
  variant,
  controls = true,
  autoPlay = true,
  loop = true,
}: VideoBlockProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: maxWidth ?? "1100px",
        margin: "0 auto var(--space-7)",
        padding: "0 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <ImageFrame variant={variant}>
          <video
            autoPlay={autoPlay}
            muted
            loop={loop}
            playsInline
            controls={controls}
            controlsList="nodownload"
            preload="metadata"
            poster={poster}
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <source src={src} />
          </video>
        </ImageFrame>
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

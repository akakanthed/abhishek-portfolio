"use client";

import { motion } from "framer-motion";
import ImageFrame from "./lib/ImageFrame";

interface HeroVideoProps {
  videoSrc: string;
  posterSrc?: string;
  maxWidth?: string;
}

export default function HeroVideo({ videoSrc, posterSrc, maxWidth }: HeroVideoProps) {
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
        <ImageFrame variant="borderless">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            controlsList="nodownload"
            preload="metadata"
            poster={posterSrc}
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <source src={videoSrc} />
          </video>
        </ImageFrame>
      </motion.div>
    </div>
  );
}

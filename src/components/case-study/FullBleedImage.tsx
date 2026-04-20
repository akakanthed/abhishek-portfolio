"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageFrame, { type ImageVariant } from "./lib/ImageFrame";

interface FullBleedImageProps {
  src: string;
  caption?: string;
  maxWidth?: string;
  variant?: ImageVariant;
  priority?: boolean;
}

export default function FullBleedImage({ src, caption, maxWidth, variant, priority }: FullBleedImageProps) {
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
          <Image
            src={src}
            alt={caption || ""}
            width={1760}
            height={1100}
            quality={85}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 880px"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
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

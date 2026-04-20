"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ImageCell, TwoColSplit } from "@/data/case-studies/types";
import ImageFrame from "./lib/ImageFrame";

function splitToCols(split: TwoColSplit = "50/50"): string {
  if (split === "40/60") return "2fr 3fr";
  if (split === "60/40") return "3fr 2fr";
  return "1fr 1fr";
}

function ImageView({ cell }: { cell: ImageCell }) {
  return (
    <figure style={{ margin: 0 }}>
      <ImageFrame variant={cell.variant}>
        <Image
          src={cell.src}
          alt={cell.caption ?? ""}
          width={1200}
          height={800}
          quality={85}
          sizes="(max-width: 768px) 100vw, 440px"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </ImageFrame>
      {(cell.number || cell.caption) && (
        <figcaption
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "10px",
            alignItems: "baseline",
          }}
        >
          {cell.number && (
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
              }}
            >
              {cell.number}
            </span>
          )}
          {cell.caption && (
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-sm)",
                color: "var(--text-secondary)",
              }}
            >
              {cell.caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function TextView({ heading, text }: { heading?: string; text: string }) {
  const lines = text.split("\n");
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {heading && (
        <div
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "var(--text-base)",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "10px",
          }}
        >
          {heading}
        </div>
      )}
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "var(--text-base)",
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--text-secondary)",
        }}
      >
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TwoColImageText({
  image,
  text,
  imagePosition,
  split,
}: {
  image: ImageCell;
  text: { heading?: string; text: string };
  imagePosition: "left" | "right";
  split?: TwoColSplit;
}) {
  const imageFirst = imagePosition === "left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="cs-two-col"
      style={
        {
          "--cs-two-col-cols": splitToCols(split),
          display: "grid",
          gap: "3rem",
          marginBottom: "var(--space-7)",
        } as React.CSSProperties
      }
    >
      {imageFirst ? (
        <>
          <ImageView cell={image} />
          <TextView heading={text.heading} text={text.text} />
        </>
      ) : (
        <>
          <TextView heading={text.heading} text={text.text} />
          <ImageView cell={image} />
        </>
      )}
    </motion.div>
  );
}

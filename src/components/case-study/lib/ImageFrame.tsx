"use client";

import type { CSSProperties, ReactNode } from "react";

export type ImageVariant = "default" | "browser" | "device" | "borderless";

const CONTAINER_BG = "rgba(255,255,255,0.02)";
const CONTAINER_BORDER = "1px solid rgba(255,255,255,0.06)";

function BrowserChrome() {
  return (
    <div
      style={{
        background: "#2a2a2a",
        height: 36,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", gap: 6 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "40%",
          height: 20,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 999,
        }}
      />
    </div>
  );
}

export default function ImageFrame({
  variant = "default",
  children,
  outerStyle,
}: {
  variant?: ImageVariant;
  children: ReactNode;
  outerStyle?: CSSProperties;
}) {
  if (variant === "browser") {
    return (
      <div
        style={{
          background: CONTAINER_BG,
          border: CONTAINER_BORDER,
          borderRadius: 12,
          padding: 0,
          overflow: "hidden",
          ...outerStyle,
        }}
      >
        <BrowserChrome />
        <div style={{ display: "block" }}>{children}</div>
      </div>
    );
  }

  if (variant === "device") {
    return (
      <div
        style={{
          background: CONTAINER_BG,
          border: CONTAINER_BORDER,
          borderRadius: 12,
          padding: "2rem",
          ...outerStyle,
        }}
      >
        <div style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
          <div
            style={{
              background: "#1a1a1a",
              padding: 12,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <div style={{ borderRadius: 4, overflow: "hidden", display: "block" }}>
              {children}
            </div>
          </div>
          <div
            style={{
              background: "#1a1a1a",
              height: 16,
              margin: "0 -8px",
              borderRadius: "0 0 6px 6px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          />
        </div>
      </div>
    );
  }

  if (variant === "borderless") {
    return (
      <div
        style={{
          borderRadius: 4,
          overflow: "hidden",
          ...outerStyle,
        }}
      >
        {children}
      </div>
    );
  }

  // default
  return (
    <div
      style={{
        background: CONTAINER_BG,
        border: CONTAINER_BORDER,
        borderRadius: 12,
        padding: "2rem",
        ...outerStyle,
      }}
    >
      <div style={{ borderRadius: 8, overflow: "hidden", display: "block" }}>
        {children}
      </div>
    </div>
  );
}

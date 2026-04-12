"use client";

interface TextBlockProps {
  text: string;
}

function parseBold(text: string) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ fontWeight: 600, color: "var(--text-primary)" }}>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function TextBlock({ text }: TextBlockProps) {
  const lines = text.split(/<br\s*\/?>/gi);

  return (
    <p
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "var(--text-base)",
        color: "var(--text-secondary)",
        lineHeight: 1.75,
        marginBottom: "var(--space-6)",
        marginTop: 0,
      }}
    >
      {lines.map((line, i) => (
        <span key={i}>
          {parseBold(line)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

// src/components/SectionHeader.jsx
export default function SectionHeader({ title, sub, style = {} }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48, ...style }} className="fade-in-up">
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 900,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#fff",
          marginBottom: 12,
        }}
      >
        {title}
      </h2>
      <p style={{ color: "#888", fontSize: 15, letterSpacing: 1, maxWidth: 500, margin: "0 auto" }}>
        {sub}
      </p>
      <div
        style={{
          width: 60, height: 3,
          background: "linear-gradient(90deg, #8b00ff, #bf40ff)",
          margin: "16px auto 0",
          borderRadius: 2,
        }}
      />
    </div>
  );
}
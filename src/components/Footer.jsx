// src/components/Footer.jsx
import { NAV_LINKS } from "../data/constants";

export default function Footer({ scrollTo }) {
  return (
    <footer style={{ borderTop: "1px solid rgba(139,0,255,0.15)", padding: "40px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Text-only brand in Footer (same as Navbar) */}
        <div
          onClick={() => scrollTo("home")}
          style={{
            fontSize: 22, fontWeight: 900, letterSpacing: 3,
            cursor: "pointer", color: "#fff", textTransform: "uppercase",
            fontFamily: "'Rajdhani', sans-serif", display: "inline-block",
          }}
        >
          <span style={{ color: "#8b00ff", fontSize: 50 }}>T</span>URN
          <span style={{ color: "#8b00ff" ,fontSize: 50 }}> 2</span>FITNESS
        </div>

        <p style={{ color: "#666", fontSize: 13, marginTop: 8 }}>
          Forging champions since 2026 · Changanassery, Kerala, India
        </p>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", color: "#666",
                cursor: "pointer", fontSize: 12, letterSpacing: 2,
                textTransform: "uppercase", padding: "4px 12px",
                fontFamily: "inherit",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        <p style={{ color: "#444", fontSize: 12, marginTop: 24 }}>
          © Akshay Hari | Turn2 Fitness | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

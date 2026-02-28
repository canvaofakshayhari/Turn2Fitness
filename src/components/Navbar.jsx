// src/components/Navbar.jsx
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ activeSection, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <nav
      style={{
        position: "fixed", top: 0, width: "100%", zIndex: 1000,
        background: "rgba(5,5,5,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139,0,255,0.25)",
      }}
    >
      <div
        style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Text-only brand in Navbar */}
        <div
          onClick={() => scrollTo("home")}
          style={{
            fontSize: 22, fontWeight: 900, letterSpacing: 3,
            cursor: "pointer", color: "#fff", textTransform: "uppercase",
            fontFamily: "'Rajdhani', sans-serif",
          }}
        >
          <span style={{ color: "#8b00ff", fontSize: 50 }}>T</span>URN<span style={{ color: "#8b00ff" ,fontSize: 50  }}>2F</span>
          ITNESS
        </div>

        {/* Desktop nav links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`nav-link-btn${activeSection === link ? " active" : ""}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger icon */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: 24, height: 2,
                background: "#bf40ff", borderRadius: 2, transition: "all 0.3s",
                ...(menuOpen && i === 0 ? { transform: "rotate(45deg) translate(5px,5px)" } : {}),
                ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
                ...(menuOpen && i === 2 ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}),
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          style={{
            display: "flex", flexDirection: "column",
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid rgba(139,0,255,0.2)",
            padding: "8px 0",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none", color: "#ddd",
                padding: "14px 24px", fontSize: 15, letterSpacing: 2,
                textTransform: "uppercase", cursor: "pointer",
                textAlign: "left", fontFamily: "inherit",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
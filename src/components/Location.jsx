// src/components/Location.jsx
import SectionHeader from "./SectionHeader";

const INFO = [
  [
    "📍",
    "Turn 2 Fitness",
    "Changanassery,\nKottayam,\nKerala",
  ],
  [
    "🕐",
    "Opening Hours",
    "Mon – Fri: Loading... – Loading...\nSaturday: Loading... – Loading...\nSunday: Loading... – Loading...",
  ],
  [
    "📞",
    "Contact",
    "Phone: +91 9544961698\nEmail: Loading... \nInstagram: Loading...",
  ],
];

export default function Location() {
  return (
    <section
      id="location"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}
    >
      <SectionHeader title="FIND US" sub="Located in the heart of the city — easy to reach from anywhere" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "start" }}>
        {/* Info cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {INFO.map(([icon, title, text]) => (
            <div
              key={title}
              style={{
                background: "rgba(10,5,20,0.8)",
                border: "1px solid rgba(139,0,255,0.2)",
                borderRadius: 14, padding: 20,
                display: "flex", gap: 16, alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: 28, margin: 0 }}>{icon}</p>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#bf40ff", marginBottom: 6, letterSpacing: 1 }}>{title}</h3>
                <p style={{ color: "#aaa", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
                  {text.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                </p>
              </div>
            </div>
          ))}

          <a
            href="https://www.google.com/maps/search/Tcs+Kochi"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn"
            style={{ textDecoration: "none", marginTop: 8, textAlign: "center" }}
          >
            🗺️ Open in Google Maps
          </a>
        </div>

        {/* Map placeholder */}
        <div
          style={{
            background: "rgba(10,5,20,0.9)",
            border: "1px solid rgba(139,0,255,0.3)",
            borderRadius: 20, minHeight: 340,
            display: "flex", alignItems: "center", justifyContent: "center",
            backgroundImage: "linear-gradient(rgba(139,0,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,0,255,0.05) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        >
          <div style={{ textAlign: "center", padding: 24 }}>
            <span style={{ fontSize: 52, display: "block", marginBottom: 12 }}>📍</span>
            <p style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Turn2 Fitness</p>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>Iron District, MG Road, Mumbai</p>
            <a
              href="https://www.google.com/maps/search/Tcs+Kochi"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn-sm"
            >
              Navigate Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/Facilities.jsx
import { FACILITIES } from "../data/constants";
import SectionHeader from "./SectionHeader";

export default function Facilities() {
  return (
    <section id="facilities" style={{ background: "rgba(139,0,255,0.04)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <SectionHeader title="WORLD-CLASS FACILITIES" sub="Everything you need to reach your peak performance" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {FACILITIES.map((f, i) => (
            <div
              key={i}
              className="facility-card"
              style={{
                background: "rgba(10,5,20,0.7)",
                border: "1px solid rgba(139,0,255,0.15)",
                borderRadius: 16, padding: 28,
              }}
            >
              <span style={{ fontSize: 36, display: "block", marginBottom: 14 }}><img src="/icons/weightlifting.png" alt="" /></span>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: 1 }}>{f.title}</h3>
              <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
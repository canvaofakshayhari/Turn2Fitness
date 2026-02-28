// src/components/Offers.jsx
import { CURRENT_OFFERS, PLANS } from "../data/constants";
import SectionHeader from "./SectionHeader";

export default function Offers({ setFormData, scrollTo }) {
  return (
    <section
      id="offers"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}
    >
      {/* Current deals */}
      <SectionHeader title="CURRENT OFFERS" sub="Grab these limited-time deals before they're gone" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 24 }}>
        {CURRENT_OFFERS.map((o, i) => (
          <div
            key={i}
            className="card-hover"
            style={{
              background: "rgba(15,5,25,0.8)",
              border: "1px solid rgba(139,0,255,0.25)",
              borderRadius: 16, padding: 28,
            }}
          >
            <span style={{ fontSize: 10, letterSpacing: 3, color: "#bf40ff", fontWeight: 700, display: "block", marginBottom: 12 }}>{o.tag}</span>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: 1 }}>{o.title}</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{o.desc}</p>
            <button className="outline-btn-sm" onClick={() => scrollTo("Enquiry")}>Claim Now →</button>
          </div>
        ))}
      </div>

      {/* Membership plans */}
      <SectionHeader title="MEMBERSHIP PLANS" sub="Flexible plans to match your commitment" style={{ marginTop: 80 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {PLANS.map((plan, i) => (
          <div
            key={i}
            className="card-hover"
            style={{
              background: plan.badge ? "rgba(139,0,255,0.08)" : "rgba(10,5,20,0.9)",
              border: `1px solid ${plan.badge ? "rgba(139,0,255,0.6)" : "rgba(139,0,255,0.2)"}`,
              boxShadow: plan.badge ? "0 0 40px rgba(139,0,255,0.15)" : "none",
              borderRadius: 20, padding: "32px 24px",
              position: "relative", display: "flex", flexDirection: "column", gap: 8,
            }}
          >
            {plan.badge && (
              <span style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #8b00ff, #bf40ff)",
                color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 2,
                padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap",
              }}>
                {plan.badge}
              </span>
            )}
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: 2, marginTop: 8 }}>{plan.duration}</h3>
            <p style={{ fontSize: 14, color: "#555", textDecoration: "line-through", margin: "4px 0 0" }}>{plan.original}</p>
            <p style={{ fontSize: 38, fontWeight: 900, color: "#bf40ff", letterSpacing: 2, textShadow: "0 0 20px rgba(191,64,255,0.4)" }}>{plan.price}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 20px", flex: 1 }}>
              {plan.features.map((f, j) => (
                <li key={j} style={{ fontSize: 13, color: "#bbb", padding: "5px 0", letterSpacing: 0.5 }}>
                  <span style={{ color: "#8b00ff", fontWeight: 700, marginRight: 6 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              className="glow-btn-sm"
              onClick={() => {
                setFormData((p) => ({ ...p, plan: plan.duration }));
                scrollTo("Enquiry");
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
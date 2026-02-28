// src/components/OffersBanner.jsx
import { CURRENT_OFFERS } from "../data/constants";

export default function OffersBanner() {
  return (
    <div
      style={{
        background: "rgba(139,0,255,0.15)",
        borderTop: "1px solid rgba(139,0,255,0.3)",
        borderBottom: "1px solid rgba(139,0,255,0.3)",
        overflow: "hidden",
        padding: "12px 0",
      }}
    >
      <div className="scroll-ticker">
        {[...CURRENT_OFFERS, ...CURRENT_OFFERS].map((o, i) => (
          <span key={i} style={{ fontSize: 18, letterSpacing: 2, color: "#ddd", padding: "0 8px" }}>
            <span style={{ color: "#bf40ff", fontWeight: 1000 }}>{o.tag}</span> {o.title}
            &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
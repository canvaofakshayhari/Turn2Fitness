// src/components/Enquiry.jsx
import { useState } from "react";
import { PLANS } from "../data/constants";
import SectionHeader from "./SectionHeader";
import emailjs from "@emailjs/browser";

const WHY = [
  "special offers for new members",
  "Personal trainer consultation on signup",
  "Free In-Body Test",
  "Flexible payment options",
];

export default function Enquiry({ formData, setFormData }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    plan: formData.plan,
    message: formData.message,
  };

  emailjs
    .send(
      "service_dfxnb1d",
      "template_g7djw2r",
      templateParams,
      "VPh61rE6GzLVdY6zU"
    )
    .then(
      () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", phone: "", email: "", message: "", plan: "" });
      },
      (error) => {
        console.error("FAILED...", error);
      }
    );
};

  return (
    <section id="enquiry" style={{ background: "rgba(139,0,255,0.04)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <SectionHeader title="GET IN TOUCH" sub="Have questions?  We'd love to hear from you." />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
          {/* Left column */}
          <div>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 24, letterSpacing: 2 }}>
              Why join Turn2 Fitness?
            </h3>
            {WHY.map((item, i) => (
              <p key={i} style={{ color: "#bbb", fontSize: 14, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", letterSpacing: 0.5 }}>
                <span style={{ color: "#8b00ff", fontWeight: 700, marginRight: 6 }}>✓</span> {item}
              </p>
            ))}
            <div style={{ marginTop: 32, padding: 20, background: "rgba(139,0,255,0.1)", border: "1px solid rgba(139,0,255,0.3)", borderRadius: 12 }}>
              <p style={{ color: "#b070ff", marginBottom: 4 }}>Direct line:</p>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>+91 9544961698</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex", flexDirection: "column", gap: 16,
              background: "rgba(10,5,20,0.8)",
              border: "1px solid rgba(139,0,255,0.2)",
              borderRadius: 20, padding: 32,
            }}
          >
            {submitted && (
              <div className="fade-in-up" style={{ background: "rgba(139,0,255,0.2)", border: "1px solid rgba(139,0,255,0.4)", borderRadius: 10, padding: "14px 18px", color: "#bf40ff", fontSize: 14, textAlign: "center", fontWeight: 700 }}>
                🎉 Thanks! We'll contact you within 24 hours.
              </div>
            )}

            <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input className="form-input" placeholder="Your Name *" required
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input className="form-input" placeholder="Phone Number *" required
                value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>

            <input className="form-input" placeholder="Email Address *" type="email" required
              value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

            <select className="form-input" value={formData.plan} onChange={(e) => setFormData({ ...formData, plan: e.target.value })}>
              <option value="">Interested Plan (optional)</option>
              {PLANS.map((p) => (
                <option key={p.duration} value={p.duration}>{p.duration} — {p.price}</option>
              ))}
              <option value="Free Trial">Just a Free Trial</option>
            </select>

            <textarea className="form-input" placeholder="Your message or questions..."
              style={{ minHeight: 110, resize: "vertical" }}
              value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

            <button type="submit" className="glow-btn" style={{ width: "100%", fontSize: 16, padding: 16 }}>
              SEND ENQUIRY 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
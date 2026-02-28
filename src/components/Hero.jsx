// src/components/Hero.jsx
// Uses your actual uploaded logo.png in the hero section.
// The logo has a transparent background and glows on hover.

import { useState, useEffect } from "react";
import logo from "../assets/logo.png"; // ← your uploaded Turn2 Fitness logo

export default function Hero({ scrollTo }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", paddingTop: 80, overflow: "hidden",
      }}
    >
      {/* Floating particles */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.size, height: p.size,
              animationDuration: `${p.speed}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Radial purple bg */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(139,0,255,0.18) 0%, transparent 70%)", zIndex: 0 }} />
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(139,0,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(139,0,255,0.07) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Main hero content */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 24px", maxWidth: 900 }}>
      <div className="fade-in-up" style={{ animationDelay: "0.15s" }}>
          <p style={{ fontSize: 13, letterSpacing: 4, color: "#8b00ff", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
             WELCOME TO THE GRIND
          </p>
        </div>
        
        {/* ── ACTUAL LOGO PNG with glow hover ── */}
        <div className="fade-in-up" style={{ animationDelay: "0s", marginBottom: 20 }}>
          <img
            src={logo}
            alt="Turn2 Fitness Logo"
            className="logo-hero"
            style={{
              width: "clamp(260px, 50vw, 660px)",
              height: "auto",
            }}
          />
        </div>

        

        

        <p
          className="fade-in-up"
          style={{
            fontSize: "clamp(14px,2vw,18px)", color: "#aaa",
            maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.6,
            letterSpacing: 1, animationDelay: "0.5s",
          }}
        >
          Where champions are forged. Unleash your potential in a world-class facility built for warriors.
        </p>

        <div className="fade-in-up hero-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.7s" }}>
          <button className="glow-btn" onClick={() => scrollTo("Enquiry")}>JOIN NOW</button>
          <button className="outline-btn" onClick={() => scrollTo("Offers")}>SEE OFFERS</button>
        </div>
      </div>

      {/* Stats row */}
      <div className="stats-row" style={{ position: "relative", zIndex: 1, display: "flex", gap: 16, marginTop: 60, padding: "0 24px 48px", flexWrap: "wrap", justifyContent: "center" }}>
        {[["Best", "Equipments"], ["Experienced", "Trainers"], ["5★", "Rated"], ["Flexible", "Timing"]].map(([num, label]) => (
          <div
            key={label}
            className="stat-card"
            style={{
              background: "rgba(139,0,255,0.1)", border: "1px solid rgba(139,0,255,0.3)",
              borderRadius: 12, padding: "16px 28px", textAlign: "center", backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ display: "block", fontSize: 32, fontWeight: 900, color: "#bf40ff", letterSpacing: 2 }}>{num}</span>
            <span style={{ display: "block", fontSize: 11, letterSpacing: 3, color: "#888", textTransform: "uppercase", marginTop: 4 }}>{label}</span>
          </div>
        ))}
      </div>

      <div className="bounce" style={{ position: "absolute", bottom: 24, left: "50%", color: "#8b00ff", fontSize: 18, zIndex: 1 }}>▼</div>
    </section>
  );
}
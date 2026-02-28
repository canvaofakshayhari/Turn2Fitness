// src/App.jsx
import { useState, useEffect } from "react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import OffersBanner from "./components/OffersBanner";
import Offers      from "./components/Offers";
import Facilities  from "./components/Facilities";
import Location    from "./components/Location.jsx";
import Enquiry     from "./components/Enquiry";
import Footer      from "./components/Footer";
import { NAV_LINKS } from "./data/constants";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen]           = useState(false);
  const [formData, setFormData]           = useState({
    name: "", phone: "", email: "", message: "", plan: "",
  });

  // Scroll-spy: update active nav link based on which section is visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((name) =>
        document.getElementById(name.toLowerCase())
      );
      sections.forEach((sec) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(
              sec.id.charAt(0).toUpperCase() + sec.id.slice(1)
            );
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        background: "#050505",
        color: "#fff",
        fontFamily: "'Rajdhani', sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <Hero scrollTo={scrollTo} />
      <OffersBanner />
      <Offers  setFormData={setFormData} scrollTo={scrollTo} />
      <Facilities />
      <Location />
      <Enquiry formData={formData} setFormData={setFormData} />
      <Footer  scrollTo={scrollTo} />
    </div>
  );
}
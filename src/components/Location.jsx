// src/components/Location.jsx
import SectionHeader from "./SectionHeader";

const INFO = [
  [
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#8C1AF6"><path d="M307-111q-67-31-67-79 0-26 23-49.5t63-38.5l45 42q-20 5-39 18.5T299-190q17 20 70.5 35T480-140q57 0 111-15t71-35q-14-15-35-28t-41-18l46-42q42 15 65 38.5t23 49.5q0 48-67 79T480-80q-106 0-173-31Zm174-164q109-81 164-164t55-155q0-112-71-169t-149-57q-77 0-148.5 57T260-594q0 73 55 152t166 167Zm-1 75Q340-304 270-402t-70-192q0-71 25.5-124.5t66-89.5q40.5-36 90-54t98.5-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/></svg>,
    "Turn 2 Fitness",
    "Changanassery,\nKottayam,\nKerala",
  ],
  [
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#8C1AF6"><path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z"/></svg>,
    "Opening Hours",
    "Mon – Fri: Loading... – Loading...\nSaturday: Loading... – Loading...\nSunday: Loading... – Loading...",
  ],
  [
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#8C1AF6"><path d="M631.5-552.5Q620-564 620-581t11.5-28.5Q643-621 660-621t28.5 11.5Q700-598 700-581t-11.5 28.5Q677-541 660-541t-28.5-11.5ZM568-637l-38-39q26-26 59.64-40.5 33.63-14.5 70.5-14.5 36.86 0 70.36 14.5T790-676l-38 39q-19-19-42.27-29-23.27-10-49.73-10-26.46 0-49.73 10Q587-656 568-637Zm-77-79-38-38q42-42 95-64.5T660-841q59 0 112 22.5t95 64.5l-38 38q-34.02-34.08-77.7-52.04Q707.63-786 659.81-786q-47.81 0-90.89 18.42Q525.83-749.16 491-716Zm304 596q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"/></svg>,
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
            <span style={{ fontSize: 52, display: "block", marginBottom: 12 }}>  <svg xmlns="http://www.w3.org/2000/svg" height="55px" viewBox="0 -960 960 960" width="55px" fill="#8C1AF6"><path d="M307-111q-67-31-67-79 0-26 23-49.5t63-38.5l45 42q-20 5-39 18.5T299-190q17 20 70.5 35T480-140q57 0 111-15t71-35q-14-15-35-28t-41-18l46-42q42 15 65 38.5t23 49.5q0 48-67 79T480-80q-106 0-173-31Zm174-164q109-81 164-164t55-155q0-112-71-169t-149-57q-77 0-148.5 57T260-594q0 73 55 152t166 167Zm-1 75Q340-304 270-402t-70-192q0-71 25.5-124.5t66-89.5q40.5-36 90-54t98.5-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z"/></svg></span>
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
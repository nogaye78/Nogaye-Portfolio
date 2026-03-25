import { useReveal } from "../hooks/useReveal";

const skills = ["React", "Tailwind CSS", "JavaScript", "TypeScript", "React Native", "Node.js", "Figma", "Git"];

export default function About({ dark }) {
  const { ref, visible } = useReveal();
  const bg = dark ? "#141414" : "#F5F5F5";
  const text = dark ? "#F5F5F5" : "#111111";
  const sub = dark ? "#AAAAAA" : "#666666";

  return (
    <section id="about" style={{ padding: "6rem 5rem", background: bg, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-8rem", left: "-3rem", fontFamily: "'Playfair Display', serif", fontSize: "30rem", color: "#FF2D6B", opacity: 0.04, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>"</div>

      <div ref={ref} className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem", alignItems: "center", maxWidth: 1100, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
        <div style={{ position: "relative" }}>
         <img
  src="/WhatsApp Image 2026-03-23 at 11.36.12.jpeg"
  alt="Nogaye"
  style={{
    width: "100%",
    aspectRatio: "3/4",
    objectFit: "cover",
    borderRadius: "40% 60% 40% 60% / 50% 40% 60% 50%",
    boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
    transition: "border-radius 0.6s ease",
    display: "block"
  }}
  onMouseEnter={e => e.currentTarget.style.borderRadius = "50%"}
  onMouseLeave={e => e.currentTarget.style.borderRadius = "40% 60% 40% 60% / 50% 40% 60% 50%"}
/>
          <div style={{ position: "absolute", bottom: -20, right: -20, width: 120, height: 120, border: "2px solid #FF2D6B", borderRadius: "50%", opacity: 0.4 }} />
        </div>

        <div>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#FF2D6B", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ display: "inline-block", width: 30, height: 1, background: "#FF2D6B" }} />Mon histoire
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: text, lineHeight: 1.15, marginBottom: "1.2rem" }}>
            À propos de <em style={{ fontStyle: "italic", color: "#FF2D6B" }}>moi</em>
          </h2>
          <p style={{ fontSize: "1.05rem", color: sub, lineHeight: 1.9, fontWeight: 300, marginBottom: "1rem" }}>
            Je suis Nogaye Ndao, développeuse web et mobile passionnée par React et Tailwind CSS. J'adore créer des applications modernes, lumineuses et attrayantes.
          </p>
          <p style={{ fontSize: "1.05rem", color: sub, lineHeight: 1.9, fontWeight: 300, marginBottom: "2rem" }}>
            Mon objectif est de transformer vos idées en projets digitaux élégants — alliant esthétique soignée et code robuste.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {skills.map(skill => (
              <span key={skill} style={{ padding: "0.4rem 1rem", borderRadius: 100, fontSize: "0.78rem", fontWeight: 500, background: "transparent", color: sub, border: `1px solid ${dark ? "#333" : "#ddd"}`, transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#FF2D6B"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "#FF2D6B"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = sub; e.currentTarget.style.borderColor = dark ? "#333" : "#ddd"; }}
              >{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
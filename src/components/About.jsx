import { useReveal } from "../hooks/useReveal";

const skills = ["React", "Tailwind CSS", "JavaScript", "Bootstrap", "Django", "Node.js","Git"];

export default function About({ dark }) {
  const { ref, visible } = useReveal();
  const bg = dark ? "#161616" : "#EFEFEF";
  const text = dark ? "#F9F9F9" : "#111111";
  const sub = dark ? "#777" : "#888";
  const skillBorder = dark ? "#2a2a2a" : "#D8D8D8";

  return (
    <section id="about" style={{ padding: "7rem 5rem", background: bg, position: "relative", overflow: "hidden" }}>
      <div ref={ref} className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem", alignItems: "center", maxWidth: 1100, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>

        <div style={{ position: "relative" }}>
          <img
            src="/WhatsApp Image 2026-03-23 at 11.36.12.jpeg"
            alt="Nogaye"
            style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 24, display: "block", boxShadow: dark ? "0 20px 60px rgba(0,0,0,0.5)" : "0 20px 60px rgba(0,0,0,0.1)", transition: "border-radius 0.6s ease" }}
            onMouseEnter={e => e.currentTarget.style.borderRadius = "50%"}
            onMouseLeave={e => e.currentTarget.style.borderRadius = "24px"}
          />
          <div style={{ position: "absolute", bottom: -16, right: -16, width: 80, height: 80, borderRadius: "50%", background: "#E85D4A", opacity: 0.1 }} />
          <div style={{ position: "absolute", bottom: -8, right: -8, width: 40, height: 40, borderRadius: "50%", border: "2px solid #E85D4A", opacity: 0.3 }} />
        </div>

        <div>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />Mon histoire
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: text, lineHeight: 1.15, marginBottom: "1.5rem" }}>
            À propos de <em style={{ fontStyle: "italic", color: "#E85D4A" }}>moi</em>
          </h2>
          <p style={{ fontSize: "1rem", color: sub, lineHeight: 1.9, fontWeight: 300, marginBottom: "1rem" }}>
            Je suis Nogaye Ndao, développeuse web avec des compétences en React et Tailwind CSS. Je crée des interfaces modernes, dynamiques et adaptées aux besoins des utilisateurs.
          </p>
          <p style={{ fontSize: "1rem", color: sub, lineHeight: 1.9, fontWeight: 300, marginBottom: "2rem" }}>
            Mon objectif est de transformer vos idées en projets digitaux élégants — alliant esthétique soignée et code robuste.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {skills.map(skill => (
              <span key={skill} style={{ padding: "0.4rem 1rem", borderRadius: 6, fontSize: "0.78rem", fontWeight: 500, background: "transparent", color: sub, border: "1px solid " + skillBorder, transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#E85D4A"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "#E85D4A"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = sub; e.currentTarget.style.borderColor = skillBorder; }}
              >{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}









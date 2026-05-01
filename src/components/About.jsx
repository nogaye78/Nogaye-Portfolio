import { useReveal } from "../hooks/useReveal";

const IconFrontend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const IconBackend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const IconOutils = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconMarketing = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const competences = [
  {
    categorie: "Frontend",
    Icon: IconFrontend,
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind", "Bootstrap"],
  },
  {
    categorie: "Backend",
    Icon: IconBackend,
    skills: ["Node.js", "Django", "API REST", "PostgreSQL", "MongoDB"],
  },
  {
    categorie: "Outils",
    Icon: IconOutils,
    skills: ["Git", "GitHub", "Figma", "Google Analytics", "Agile / Scrum"],
  },
  {
    categorie: "Marketing",
    Icon: IconMarketing,
    skills: ["Community Management", "Stratégie digitale", "Création de contenu"],
  },
];

export default function About({ dark }) {
  const { ref, visible } = useReveal();

  const bgSection  = dark ? "#161616" : "#EFEFEF";
  const cardBg     = dark ? "#111111" : "#FFFFFF";
  const text       = dark ? "#F0F0F0" : "#111111";
  const sub        = dark ? "#666"    : "#888";
  const border     = dark ? "#2a2a2a" : "#E8E8E8";
  const chipBorder = dark ? "#2a2a2a" : "#ddd";
  const chipColor  = dark ? "#888"    : "#666";
  const badgeBg    = dark ? "#1A1A1A" : "#FFFFFF";
  const badgeBorder = dark ? "#2a2a2a" : "#E8E8E8";

  const Label = ({ children }) => (
    <div style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 500, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <span style={{ display: "inline-block", width: 22, height: 1, background: "#E85D4A" }} />
      {children}
    </div>
  );

  return (
    <section id="about" style={{ padding: "7rem 5rem", background: bgSection }}>
      <style>{`
        @media (max-width: 768px) {
          #about { padding: 4rem 1.5rem !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>

        {/* Titre */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
            <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
            Mon histoire
            <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: text }}>
            À propos de <em style={{ fontStyle: "italic", color: "#E85D4A" }}>moi</em>
          </h2>
        </div>

        {/* Photo + Bio */}
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "center", marginBottom: "4rem" }}>

          {/* Photo */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -20, background: dark ? "#1A1A1A" : "#EFEFEF", borderRadius: "40% 60% 40% 60% / 50% 40% 60% 50%", zIndex: 0, animation: "morphBlob 10s ease-in-out infinite" }} />

              <img
                src="/WhatsApp Image 2026-03-23 at 11.36.12.jpeg"
                alt="Nogaye Ndao"
                style={{ position: "relative", zIndex: 1, width: 280, height: 350, objectFit: "cover", objectPosition: "top", borderRadius: "40% 60% 40% 60% / 50% 40% 60% 50%", display: "block", transition: "border-radius 0.6s ease", boxShadow: dark ? "0 30px 60px rgba(0,0,0,0.5)" : "0 30px 60px rgba(232,93,74,0.15)" }}
                onMouseEnter={e => e.currentTarget.style.borderRadius = "50%"}
                onMouseLeave={e => e.currentTarget.style.borderRadius = "40% 60% 40% 60% / 50% 40% 60% 50%"}
              />

              <div style={{ position: "absolute", bottom: 20, left: -28, zIndex: 2, background: badgeBg, padding: "0.8rem 1.2rem", borderRadius: 12, boxShadow: dark ? "0 8px 30px rgba(0,0,0,0.4)" : "0 8px 30px rgba(0,0,0,0.08)", border: "1px solid " + badgeBorder, fontSize: "0.78rem", fontWeight: 500, color: dark ? "#888" : "#666", display: "flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
                <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", animation: "pulse 2s infinite", display: "inline-block" }} />
                Disponible pour un stage
              </div>

              <div style={{ position: "absolute", top: 20, right: -20, zIndex: 2, background: "#E85D4A", padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.7rem", fontWeight: 600, color: "white", boxShadow: "0 4px 16px rgba(232,93,74,0.4)", whiteSpace: "nowrap" }}>
                Developpeuse web
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p style={{ fontSize: "1rem", color: sub, lineHeight: 1.9, fontWeight: 300, marginBottom: "1rem" }}>
              Développeuse web junior, je crée des interfaces modernes, dynamiques et orientées utilisateur, tout en contribuant au développement de solutions web complètes.
            </p>
            <p style={{ fontSize: "1rem", color: sub, lineHeight: 1.9, fontWeight: 300 }}>
              Grâce à mes compétences en marketing digital, j'apporte une vision axée sur la performance et l'expérience utilisateur. Motivée et rigoureuse, je recherche un stage ou un poste junior.
            </p>
          </div>
        </div>

        {/* Compétences */}
        <div>
          <Label>Compétences</Label>
          <div className="about-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
            {competences.map(({ categorie, Icon, skills }) => (
              <div key={categorie} style={{ background: cardBg, border: "1px solid " + border, borderRadius: 16, padding: "1.4rem", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#E85D4A"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                  <Icon />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: text, letterSpacing: "0.05em", textTransform: "uppercase" }}>{categorie}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {skills.map(s => (
                    <span key={s} style={{ padding: "0.3rem 0.8rem", borderRadius: 4, fontSize: "0.75rem", background: dark ? "#0F0F0F" : "#F5F5F5", color: chipColor, border: "1px solid " + chipBorder }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
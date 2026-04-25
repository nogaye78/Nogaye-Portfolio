import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    title: "Site statique HTML CSS",
    tag: "HTML · CSS",
    desc: "Site web statique développé en HTML et CSS, avec une interface simple et responsive.",
    img: "/image.png",
    link: "https://poetic-naiad-b89246.netlify.app/",
    preview: "/image.png",
    tech: ["HTML", "CSS"],
  },
  {
    title: "App Bancaire",
    tag: "React · Node.js",
    desc: "Application web développée avec React pour le frontend et Node.js pour le backend.",
    img: "/img2.png",
    link: "https://tache-21-frontt.vercel.app/",
    preview: "/img2.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Admin Panel",
    tag: "React · Django",
    desc: "Application d'administration développée avec React et Django REST Framework.",
    img: "/image copy.png",
    link: "https://tektal-administration.vercel.app/chemins",
    preview: "/image copy.png",
    tech: ["React", "Django", "PostgreSQL"],
  },
];

function PreviewModal({ proj, dark, onClose }) {
  useEffect(() => {
    const handleKey = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  if (!proj) return null;

  const modalBg = dark ? "#161616" : "#FFFFFF";
  const text = dark ? "#F9F9F9" : "#111111";
  const sub = dark ? "#777" : "#888";
  const tagBg = dark ? "#1e1e1e" : "#F5F5F5";
  const btnBorder = dark ? "#2a2a2a" : "#E0E0E0";

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backdropFilter: "blur(12px)", overflowY: "auto" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: modalBg, borderRadius: 16, maxWidth: 680, width: "100%", boxShadow: dark ? "0 40px 80px rgba(0,0,0,0.6)" : "0 40px 80px rgba(0,0,0,0.12)", border: "1px solid " + (dark ? "#222" : "#E8E8E8"), position: "relative", maxHeight: "90vh", display: "flex", flexDirection: "column" }}>

        {/* Bouton X */}
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, zIndex: 20, background: dark ? "#222" : "#F0F0F0", border: "none", color: dark ? "#888" : "#666", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#E85D4A"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "scale(1.1) rotate(90deg)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = dark ? "#222" : "#F0F0F0"; e.currentTarget.style.color = dark ? "#888" : "#666"; e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}>
          ✕
        </button>

        <div style={{ overflowY: "auto", maxHeight: "90vh" }}>
          <img src={proj.preview} alt={proj.title} style={{ width: "100%", height: 260, objectFit: "cover", display: "block", borderRadius: "16px 16px 0 0" }} />

          <div style={{ padding: "2rem" }}>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 600, marginBottom: "0.5rem" }}>{proj.tag}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", fontWeight: 700, color: text, marginBottom: "0.8rem" }}>{proj.title}</h3>
            <p style={{ fontSize: "0.92rem", color: sub, lineHeight: 1.8, marginBottom: "1.5rem" }}>{proj.desc}</p>

            <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 600, marginBottom: "0.6rem" }}>Stack technique</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {proj.tech.map(t => (
                <span key={t} style={{ padding: "0.3rem 0.9rem", borderRadius: 6, fontSize: "0.75rem", fontWeight: 500, background: tagBg, color: sub, border: "1px solid " + (dark ? "#2a2a2a" : "#E8E8E8") }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.8rem" }}>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#E85D4A", color: "white", padding: "0.9rem", borderRadius: 8, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none", transition: "all 0.3s", boxShadow: "0 4px 16px rgba(232,93,74,0.3)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#D4432F"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#E85D4A"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Voir le projet →
              </a>
              <button onClick={onClose} style={{ padding: "0.9rem 1.5rem", borderRadius: 8, background: "transparent", border: "1px solid " + btnBorder, color: sub, fontSize: "0.8rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#E85D4A"; e.currentTarget.style.color = "#E85D4A"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = btnBorder; e.currentTarget.style.color = sub; }}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ proj, dark, onPreview }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  const cardBg = dark ? "#161616" : "#FFFFFF";
  const text = dark ? "#F9F9F9" : "#111111";
  const sub = dark ? "#777" : "#888";
  const border = dark ? "#222" : "#E8E8E8";

  return (
    <div ref={ref} style={{ background: cardBg, borderRadius: 16, overflow: "hidden", border: hovered ? "1px solid #E85D4A" : "1px solid " + border, boxShadow: hovered ? "0 16px 50px rgba(232,93,74,0.15)" : (dark ? "0 2px 16px rgba(0,0,0,0.3)" : "0 2px 16px rgba(0,0,0,0.05)"), transform: hovered ? "translateY(-6px)" : "translateY(0)", transition: "all 0.35s ease, opacity 0.8s ease", opacity: visible ? 1 : 0, cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPreview(proj)}
    >
      <div style={{ width: "100%", height: 200, overflow: "hidden", position: "relative" }}>
        <img src={proj.img} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.5s ease" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(232,93,74,0.08)", display: "flex", alignItems: "center", justifyContent: "center", opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}>
          <div style={{ background: "rgba(0,0,0,0.65)", color: "white", padding: "0.5rem 1.2rem", borderRadius: 6, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Aperçu
          </div>
        </div>
      </div>

      <div style={{ padding: "1.4rem" }}>
        <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 600, marginBottom: "0.4rem" }}>{proj.tag}</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: text, marginBottom: "0.6rem" }}>{proj.title}</div>
        <p style={{ fontSize: "0.82rem", color: sub, lineHeight: 1.7, fontWeight: 300 }}>{proj.desc}</p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1rem", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: "#E85D4A" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Voir l'aperçu
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ dark }) {
  const { ref, visible } = useReveal();
  const [selectedProject, setSelectedProject] = useState(null);
  const text = dark ? "#F9F9F9" : "#111111";
  const bg = dark ? "#111111" : "#F9F9F9";

  return (
    <section id="portfolio" style={{ padding: "7rem 5rem", background: bg }}>
      <div ref={ref} style={{ textAlign: "center", marginBottom: "4rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
        <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
          <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
          Mes réalisations
          <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: text }}>
          Mes <em style={{ fontStyle: "italic", color: "#E85D4A" }}>Projets</em>
        </h2>
        <p style={{ color: dark ? "#555" : "#AAA", marginTop: "0.8rem", fontSize: "0.88rem" }}>
          Cliquez sur une carte pour voir l'aperçu
        </p>
      </div>

      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: 1100, margin: "0 auto" }}>
        {projects.map(proj => (
          <ProjectCard key={proj.title} proj={proj} dark={dark} onPreview={setSelectedProject} />
        ))}
      </div>

      {selectedProject && (
        <PreviewModal proj={selectedProject} dark={dark} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}









// import { useState, useEffect } from "react";
// import { useReveal } from "../hooks/useReveal";

// const projects = [
//   {
//     title: "Site statique HTML CSS",
//     tag: "HTML · CSS",
//     desc: "Site web statique développé en HTML et CSS, avec une interface simple et responsive.",
//     img: "/image.png",
//     link: "https://poetic-naiad-b89246.netlify.app/",
//     preview: "/image.png",
//     tech: ["HTML", "CSS"],
//   },
//   {
//     title: "App Bancaire",
//     tag: "React · Node.js",
//     desc: "Application web développée avec React pour le frontend et Node.js pour le backend.",
//     img: "/img2.png",
//     link: "https://tache-21-frontt.vercel.app/",
//     preview: "/img2.png",
//     tech: ["React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Admin Panel",
//     tag: "React · Django",
//     desc: "Application d'administration développée avec React et Django REST Framework.",
//     img: "/image copy.png",
//     link: "https://tektal-administration.vercel.app/chemins",
//     preview: "/image copy.png",
//     tech: ["React", "Django", "PostgreSQL"],
//   },
// ];

// function PreviewModal({ proj, dark, onClose }) {
//   useEffect(() => {
//     const handleKey = e => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", handleKey);
//     document.body.style.overflow = "hidden";
//     return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
//   }, [onClose]);

//   if (!proj) return null;

//   const modalBg = dark ? "#1A1A1A" : "#FFFFFF";
//   const text = dark ? "#F0F0F0" : "#111111";
//   const sub = dark ? "#666" : "#888";
//   const tagBg = dark ? "#222" : "#F0EEF8";
//   const btnBorder = dark ? "#2a2a2a" : "#D0CCF0";

//   return (
//     <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backdropFilter: "blur(12px)", overflowY: "auto" }}>
//       <div onClick={e => e.stopPropagation()} style={{ background: modalBg, borderRadius: 20, maxWidth: 680, width: "100%", boxShadow: "0 40px 80px rgba(0,0,0,0.5)", border: "1px solid " + (dark ? "#2a2a2a" : "#DDD8F8"), position: "relative", maxHeight: "90vh", display: "flex", flexDirection: "column" }}>

//         <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, zIndex: 20, background: dark ? "#222" : "#EEE8FF", border: "none", color: dark ? "#A78BFA" : "#7C6BE0", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", fontWeight: 700 }}
//           onMouseEnter={e => { e.currentTarget.style.background = "#A78BFA"; e.currentTarget.style.color = "#0F0F0F"; e.currentTarget.style.transform = "scale(1.1) rotate(90deg)"; }}
//           onMouseLeave={e => { e.currentTarget.style.background = dark ? "#222" : "#EEE8FF"; e.currentTarget.style.color = dark ? "#A78BFA" : "#7C6BE0"; e.currentTarget.style.transform = "scale(1) rotate(0deg)"; }}>
//           ✕
//         </button>

//         <div style={{ overflowY: "auto", maxHeight: "90vh" }}>
//           <img src={proj.preview} alt={proj.title} style={{ width: "100%", height: 260, objectFit: "cover", display: "block", borderRadius: "20px 20px 0 0" }} />

//           <div style={{ padding: "2rem" }}>
//             <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", fontWeight: 600, marginBottom: "0.5rem" }}>{proj.tag}</div>
//             <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", fontWeight: 700, color: text, marginBottom: "0.8rem" }}>{proj.title}</h3>
//             <p style={{ fontSize: "0.92rem", color: sub, lineHeight: 1.8, marginBottom: "1.5rem" }}>{proj.desc}</p>

//             <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", fontWeight: 600, marginBottom: "0.6rem" }}>Stack technique</div>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
//               {proj.tech.map(t => (
//                 <span key={t} style={{ padding: "0.3rem 0.9rem", borderRadius: 6, fontSize: "0.75rem", fontWeight: 500, background: tagBg, color: dark ? "#A78BFA" : "#7C6BE0", border: "1px solid " + (dark ? "#3a2f5c" : "#D0CCF0") }}>{t}</span>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: "0.8rem" }}>
//               <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#A78BFA", color: "#0F0F0F", padding: "0.9rem", borderRadius: 8, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(167,139,250,0.4)" }}
//                 onMouseEnter={e => { e.currentTarget.style.background = "#9172F8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.background = "#A78BFA"; e.currentTarget.style.transform = "translateY(0)"; }}>
//                 Voir le projet →
//               </a>
//               <button onClick={onClose} style={{ padding: "0.9rem 1.5rem", borderRadius: 8, background: "transparent", border: "1px solid " + btnBorder, color: sub, fontSize: "0.8rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.3s" }}
//                 onMouseEnter={e => { e.currentTarget.style.borderColor = "#A78BFA"; e.currentTarget.style.color = "#A78BFA"; }}
//                 onMouseLeave={e => { e.currentTarget.style.borderColor = btnBorder; e.currentTarget.style.color = sub; }}>
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProjectCard({ proj, dark, onPreview }) {
//   const { ref, visible } = useReveal();
//   const [hovered, setHovered] = useState(false);
//   const cardBg = dark ? "#1A1A1A" : "#FFFFFF";
//   const text = dark ? "#F0F0F0" : "#111111";
//   const sub = dark ? "#666" : "#888";
//   const border = dark ? "#222" : "#E8E4F8";

//   return (
//     <div ref={ref} style={{ background: cardBg, borderRadius: 16, overflow: "hidden", border: hovered ? "1px solid #A78BFA" : "1px solid " + border, boxShadow: hovered ? "0 16px 50px rgba(167,139,250,0.2)" : (dark ? "0 2px 16px rgba(0,0,0,0.4)" : "0 2px 16px rgba(167,139,250,0.08)"), transform: hovered ? "translateY(-6px)" : "translateY(0)", transition: "all 0.35s ease, opacity 0.8s ease", opacity: visible ? 1 : 0, cursor: "pointer" }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => onPreview(proj)}
//     >
//       <div style={{ width: "100%", height: 200, overflow: "hidden", position: "relative" }}>
//         <img src={proj.img} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.5s ease" }} />
//         <div style={{ position: "absolute", inset: 0, background: "rgba(167,139,250,0.12)", display: "flex", alignItems: "center", justifyContent: "center", opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}>
//           <div style={{ background: "rgba(15,15,15,0.8)", color: "#A78BFA", padding: "0.5rem 1.2rem", borderRadius: 6, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.4rem" }}>
//             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
//             Aperçu
//           </div>
//         </div>
//       </div>

//       <div style={{ padding: "1.4rem" }}>
//         <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA", fontWeight: 600, marginBottom: "0.4rem" }}>{proj.tag}</div>
//         <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: text, marginBottom: "0.6rem" }}>{proj.title}</div>
//         <p style={{ fontSize: "0.82rem", color: sub, lineHeight: 1.7, fontWeight: 300 }}>{proj.desc}</p>
//         <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1rem", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: "#A78BFA" }}>
//           <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
//           Voir l'aperçu
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Portfolio({ dark }) {
//   const { ref, visible } = useReveal();
//   const [selectedProject, setSelectedProject] = useState(null);
//   const text = dark ? "#F0F0F0" : "#111111";
//   const bg = dark ? "#0F0F0F" : "#F0F0F0";

//   return (
//     <section id="portfolio" style={{ padding: "7rem 5rem", background: bg }}>
//       <div ref={ref} style={{ textAlign: "center", marginBottom: "4rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
//         <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#A78BFA", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
//           <span style={{ display: "inline-block", width: 30, height: 1, background: "#A78BFA" }} />
//           Mes réalisations
//           <span style={{ display: "inline-block", width: 30, height: 1, background: "#A78BFA" }} />
//         </div>
//         <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: text }}>
//           Mes <em style={{ fontStyle: "italic", color: "#A78BFA" }}>Projets</em>
//         </h2>
//         <p style={{ color: dark ? "#444" : "#AAA", marginTop: "0.8rem", fontSize: "0.88rem" }}>
//           Cliquez sur une carte pour voir l'aperçu
//         </p>
//       </div>

//       <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: 1100, margin: "0 auto" }}>
//         {projects.map(proj => (
//           <ProjectCard key={proj.title} proj={proj} dark={dark} onPreview={setSelectedProject} />
//         ))}
//       </div>

//       {selectedProject && (
//         <PreviewModal proj={selectedProject} dark={dark} onClose={() => setSelectedProject(null)} />
//       )}
//     </section>
//   );
// }
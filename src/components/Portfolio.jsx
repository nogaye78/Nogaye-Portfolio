import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

// Liste des projets
const projects = [
  {
    title: "Site static HTML CSS",
    tag: "React & Node js",
    desc: "Ce projet est un site web statique conçu uniquement avec HTML et CSS. Il met en avant mes compétences en intégration web, en structuration de contenu et en design responsive. J’ai travaillé sur la mise en page, l’harmonie des couleurs ainsi que l’adaptabilité du site sur différents écrans (mobile, tablette, desktop).",
    icon: "✦",
    bg: "linear-gradient(135deg, #1a0a10 0%, #2a0d18 100%)",
    link: "https://strong-travesseiro-1756f8.netlify.app/",
    preview: "/image.png",
    tech: ["HTML-CSS"],
  },
  {
    title: "Application Bancaire – React & Node.js",
    tag: "React · Node.js",
    desc: "Cette application bancaire est une plateforme web fullstack permettant aux utilisateurs de gérer leurs comptes financiers en toute simplicité. Elle combine un frontend dynamique développé avec React et un backend robuste avec Node.js pour assurer la gestion sécurisée des données et des transactions.",
    icon: "◆",
    bg: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
    link: "https://tache-21-frontt.vercel.app/",
    preview: "/img2.png",
    tech: ["React", "Tailwind CSS" , "Node.js", "MongoDB"],
  },
  {
    title: "Blog App",
    tag: "React Native",
    desc: "Application mobile de blog avec authentification et éditeur de contenu riche.",
    icon: "◉",
    bg: "linear-gradient(135deg, #1a0814 0%, #2a1020 100%)",
    link: "#",
    preview: "/blog-app.jpeg", // image dans public/
    tech: ["React Native", "Firebase", "Expo"],
  },
];

// Modal d'aperçu
function PreviewModal({ proj, dark, onClose }) {
  if (!proj) return null;
  const bg = dark ? "#141414" : "#ffffff";
  const text = dark ? "#F5F5F5" : "#111111";
  const sub = dark ? "#AAAAAA" : "#666666";
  const tagBg = dark ? "#1a1a1a" : "#f5f5f5";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: bg,
          borderRadius: 24,
          overflow: "hidden",
          maxWidth: 680,
          width: "100%",
          boxShadow: "0 40px 100px rgba(255,45,107,0.25)",
          border: "1px solid #FF2D6B33",
        }}
      >
        {/* Image preview */}
        <div style={{ position: "relative" }}>
          <img
            src={proj.preview}
            alt={proj.title}
            style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "white",
              width: 36,
              height: 36,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Infos */}
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF2D6B",
              fontWeight: 500,
              marginBottom: "0.5rem",
            }}
          >
            {proj.tag}
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: text,
              marginBottom: "0.8rem",
            }}
          >
            {proj.title}
          </h3>
          <p style={{ fontSize: "0.95rem", color: sub, lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {proj.desc}
          </p>

          {/* Tech stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {proj.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: "0.3rem 0.9rem",
                  borderRadius: 100,
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  background: tagBg,
                  color: sub,
                  border: "1px solid #FF2D6B33",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href={proj.link}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                background: "#FF2D6B",
                color: "white",
                padding: "0.9rem",
                borderRadius: 100,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FF5C8A")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FF2D6B")}
            >
              Voir le projet →
            </a>
            <button
              onClick={onClose}
              style={{
                padding: "0.9rem 1.5rem",
                borderRadius: 100,
                background: "transparent",
                border: `1px solid ${dark ? "#333" : "#ddd"}`,
                color: sub,
                fontSize: "0.82rem",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FF2D6B")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = dark ? "#333" : "#ddd")}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Carte projet
function ProjectCard({ proj, dark, onPreview }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);
  const bg = dark ? "#141414" : "#ffffff";
  const text = dark ? "#F5F5F5" : "#111111";
  const sub = dark ? "#AAAAAA" : "#666666";

  return (
    <div
      ref={ref}
      style={{
        background: bg,
        borderRadius: 24,
        overflow: "hidden",
        border: hovered ? "1px solid #FF2D6B" : `1px solid ${dark ? "#222" : "#e5e5e5"}`,
        boxShadow: hovered
          ? "0 20px 60px rgba(255,45,107,0.2)"
          : `0 4px 20px rgba(0,0,0,${dark ? "0.3" : "0.08"})`,
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.4s ease, opacity 0.8s ease",
        opacity: visible ? 1 : 0,
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPreview(proj)}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: "100%",
          height: 220,
          background: proj.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          color: "#FF2D6B",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.6s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {proj.icon}
        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,45,107,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "0.6rem 1.4rem",
              borderRadius: 100,
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Aperçu
          </div>
        </div>
      </div>

      {/* Infos */}
      <div style={{ padding: "1.6rem" }}>
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FF2D6B",
            fontWeight: 500,
            marginBottom: "0.5rem",
          }}
        >
          {proj.tag}
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: text,
            marginBottom: "0.7rem",
          }}
        >
          {proj.title}
        </div>
        <p style={{ fontSize: "0.85rem", color: sub, lineHeight: 1.7, fontWeight: 300 }}>{proj.desc}</p>
      </div>
    </div>
  );
}

// Composant principal
export default function Portfolio({ dark }) {
  const { ref, visible } = useReveal();
  const [selectedProject, setSelectedProject] = useState(null);
  const text = dark ? "#F5F5F5" : "#111111";
  const bg = dark ? "#0D0D0D" : "#FAFAFA";

  return (
    <section id="portfolio" style={{ padding: "6rem 5rem", background: bg }}>
      <div
        ref={ref}
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#FF2D6B",
            fontWeight: 500,
            marginBottom: "0.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
          }}
        >
          <span style={{ display: "inline-block", width: 30, height: 1, background: "#FF2D6B" }} />
          Mes réalisations
          <span style={{ display: "inline-block", width: 30, height: 1, background: "#FF2D6B" }} />
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: text }}>
          Mes <em style={{ fontStyle: "italic", color: "#FF2D6B" }}>Projets</em>
        </h2>
        <p style={{ color: dark ? "#AAAAAA" : "#777", marginTop: "0.8rem", fontSize: "0.9rem" }}>Cliquez sur une carte pour voir l'aperçu</p>
      </div>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.title} proj={proj} dark={dark} onPreview={setSelectedProject} />
        ))}
      </div>

      <PreviewModal proj={selectedProject} dark={dark} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
import { useState, useEffect } from "react";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = dark ? "rgba(17,17,17,0.95)" : "rgba(249,249,249,0.95)";
  const textColor = dark ? "#888" : "#666";
  const logoColor = dark ? "#F9F9F9" : "#111111";
  const borderColor = scrolled ? (dark ? "#2a2a2a" : "#E8E8E8") : "transparent";

  const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#portfolio", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.2rem 3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      backdropFilter: "blur(20px)",
      background: bg,
      borderBottom: "1px solid " + borderColor,
      boxShadow: scrolled ? "0 1px 20px rgba(232,93,74,0.06)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.4rem", fontWeight: 900,
        color: logoColor, letterSpacing: "-0.02em",
      }}>
        Nogaye<span style={{ color: "#E85D4A" }}>.</span>
      </div>

      <ul className="nav-desktop" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{
              fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase",
              color: textColor, textDecoration: "none", fontWeight: 500, transition: "color 0.3s",
            }}
              onMouseEnter={e => e.target.style.color = "#E85D4A"}
              onMouseLeave={e => e.target.style.color = textColor}
            >{label}</a>
          </li>
        ))}
      </ul>

      <button onClick={() => setDark(!dark)} style={{
        background: "transparent",
        border: "1px solid " + (dark ? "#2a2a2a" : "#E0E0E0"),
        borderRadius: 100, padding: "0.4rem 1rem",
        cursor: "pointer", fontSize: "0.78rem",
        color: textColor, fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.3s", display: "flex", alignItems: "center", gap: "0.4rem",
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "#E85D4A"}
        onMouseLeave={e => e.currentTarget.style.borderColor = dark ? "#2a2a2a" : "#E0E0E0"}
      >
        {dark ? "☀️ Clair" : "🌙 Sombre"}
      </button>

      <div className="nav-hamburger" onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", fontSize: "1.3rem", display: "none", color: logoColor }}>
        {open ? "✕" : "☰"}
      </div>

      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: bg, backdropFilter: "blur(20px)",
          padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1rem",
          borderBottom: "1px solid " + (dark ? "#2a2a2a" : "#E8E8E8"),
        }}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              style={{ color: textColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}






import { useState, useEffect } from "react";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = dark ? "rgba(13,13,13,0.92)" : "rgba(250,250,250,0.92)";
  const textColor = dark ? "#AAAAAA" : "#555555";
  const borderColor = scrolled ? "#FF2D6B" : "transparent";

  const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#portfolio", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1.2rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(16px)", background: bg, borderBottom: `1px solid ${borderColor}`, boxShadow: scrolled ? "0 1px 30px rgba(255,45,107,0.1)" : "none", transition: "all 0.3s" }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 900, color: dark ? "#F5F5F5" : "#111" }}>
        N<span style={{ color: "#FF2D6B" }}>.</span>
      </div>

      <ul className="nav-desktop" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{ fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: textColor, textDecoration: "none", fontWeight: 500, transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = "#FF2D6B"}
              onMouseLeave={e => e.target.style.color = textColor}
            >{label}</a>
          </li>
        ))}
      </ul>

      {/* Toggle dark/light */}
      <button
        onClick={() => setDark(!dark)}
        style={{ background: dark ? "#1a1a1a" : "#eeeeee", border: `1px solid ${dark ? "#333" : "#ddd"}`, borderRadius: 100, padding: "0.4rem 1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: dark ? "#AAAAAA" : "#555", fontFamily: "'DM Sans', sans-serif", transition: "all 0.3s" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "#FF2D6B"}
        onMouseLeave={e => e.currentTarget.style.borderColor = dark ? "#333" : "#ddd"}
      >
        {dark ? "☀️ Clair" : "🌙 Sombre"}
      </button>

      <div className="nav-hamburger" onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", fontSize: "1.4rem", display: "none", color: dark ? "#F5F5F5" : "#111" }}>
        {open ? "✖" : "☰"}
      </div>

      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: bg, backdropFilter: "blur(16px)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.2rem", borderBottom: "1px solid #FF2D6B" }}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              style={{ color: textColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>{label}</a>
          ))}
          <button onClick={() => setDark(!dark)} style={{ background: "transparent", border: "none", color: textColor, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", textAlign: "left", cursor: "pointer", padding: 0 }}>
            {dark ? "☀️ Passer en clair" : "🌙 Passer en sombre"}
          </button>
        </div>
      )}
    </nav>
  );
}
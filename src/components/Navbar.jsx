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

  const SunIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );

  const MoonIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );

  const Logo = () => (
    <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="38" height="38">
        <rect width="160" height="160" rx="28" fill={dark ? "#1A1A1A" : "#111111"}/>
        <rect x="120" y="0" width="40" height="7" rx="3.5" fill="#E85D4A"/>
        <rect x="153" y="0" width="7" height="40" rx="3.5" fill="#E85D4A"/>
        <rect x="0" y="153" width="40" height="7" rx="3.5" fill="#E85D4A"/>
        <rect x="0" y="120" width="7" height="40" rx="3.5" fill="#E85D4A"/>
        <rect x="26" y="38" width="11" height="84" rx="3" fill="#F0F0F0"/>
        <polygon points="26,38 37,38 87,122 76,122" fill="#F0F0F0"/>
        <rect x="76" y="38" width="11" height="84" rx="3" fill="#F0F0F0"/>
        <circle cx="100" cy="80" r="4" fill="#E85D4A"/>
        <rect x="107" y="38" width="11" height="84" rx="3" fill="#F0F0F0"/>
        <polygon points="107,38 118,38 145,122 134,122" fill="#F0F0F0"/>
        <rect x="134" y="38" width="11" height="84" rx="3" fill="#F0F0F0"/>
      </svg>
    </a>
  );

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

      <Logo />

      <ul className="nav-desktop" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: textColor, textDecoration: "none", fontWeight: 500, transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = "#E85D4A"}
              onMouseLeave={e => e.target.style.color = textColor}
            >{label}</a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setDark(!dark)}
        style={{
          background: dark ? "rgba(232,93,74,0.08)" : "rgba(232,93,74,0.06)",
          border: "1px solid " + (dark ? "#5a2a20" : "#F5C4BC"),
          borderRadius: 100, padding: "0.45rem 1.1rem",
          cursor: "pointer", fontSize: "0.78rem",
          color: dark ? "#E85D4A" : "#C04030",
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.3s",
          display: "flex", alignItems: "center", gap: "0.5rem",
          fontWeight: 500,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(232,93,74,0.15)";
          e.currentTarget.style.borderColor = "#E85D4A";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = dark ? "rgba(232,93,74,0.08)" : "rgba(232,93,74,0.06)";
          e.currentTarget.style.borderColor = dark ? "#5a2a20" : "#F5C4BC";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {dark ? <><SunIcon /> Clair</> : <><MoonIcon /> Sombre</>}
      </button>

      <div className="nav-hamburger" onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", fontSize: "1.3rem", display: "none", color: logoColor }}>
        {open ? "✕" : "☰"}
      </div>

      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: bg, backdropFilter: "blur(20px)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1rem", borderBottom: "1px solid " + (dark ? "#2a2a2a" : "#E8E8E8") }}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              style={{ color: textColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>{label}</a>
          ))}
          <button onClick={() => { setDark(!dark); setOpen(false); }} style={{ background: "transparent", border: "none", color: "#E85D4A", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", textAlign: "left", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
            {dark ? <><SunIcon /> Passer en clair</> : <><MoonIcon /> Passer en sombre</>}
          </button>
        </div>
      )}
    </nav>
  );
}
export default function Hero({ dark }) {
  const text = dark ? "#F9F9F9" : "#111111";
  const sub = dark ? "#777" : "#888";
  const sectionBg = dark ? "#111111" : "#F9F9F9";
  const badgeBg = dark ? "#1A1A1A" : "#FFFFFF";
  const badgeBorder = dark ? "#2a2a2a" : "#E8E8E8";

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      padding: "0 5rem", paddingTop: "5rem",
      gap: "4rem", position: "relative", overflow: "hidden",
      background: sectionBg,
    }}>
      {/* Blobs décoratifs subtils */}
      <div style={{ position: "absolute", width: 500, height: 500, background: "radial-gradient(circle, rgba(232,93,74,0.07) 0%, transparent 70%)", borderRadius: "50%", top: "-10%", right: "-5%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, background: "radial-gradient(circle, rgba(232,93,74,0.04) 0%, transparent 70%)", borderRadius: "50%", bottom: "10%", left: "5%", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 500, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
          Développeuse Web
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, lineHeight: 1.05, color: text, marginBottom: "1.5rem", animation: "fadeUp 0.9s ease 0.2s both" }}>
          Bonjour, je suis<br />
          <em style={{ fontStyle: "italic", color: "#E85D4A" }}>Nogaye</em>
        </h1>

        <p style={{ fontSize: "1rem", color: sub, lineHeight: 1.9, maxWidth: 460, marginBottom: "2.5rem", fontWeight: 300, animation: "fadeUp 0.9s ease 0.4s both" }}>
          Je transforme vos idées en expériences digitales soignées — avec React, Node.js et une attention particulière aux détails.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.9s ease 0.6s both" }}>
          <a href="#portfolio" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "#E85D4A", color: "white",
            padding: "0.9rem 2rem", borderRadius: 8,
            fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase",
            fontWeight: 500, textDecoration: "none", transition: "all 0.3s",
            boxShadow: "0 4px 20px rgba(232,93,74,0.3)",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#D4432F"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(232,93,74,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#E85D4A"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(232,93,74,0.3)"; }}
          >
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
            </svg>
          </a>

          <a href="/cv-nogaye.pdf" download style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "transparent", color: dark ? "#ccc" : "#333",
            padding: "0.9rem 2rem", borderRadius: 8,
            fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase",
            fontWeight: 500, textDecoration: "none",
            border: "1px solid " + (dark ? "#2a2a2a" : "#D8D8D8"),
            transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#E85D4A"; e.currentTarget.style.color = "#E85D4A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = dark ? "#2a2a2a" : "#D8D8D8"; e.currentTarget.style.color = dark ? "#ccc" : "#333"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger CV
          </a>
        </div>
      </div>

      <div className="hero-visual" style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", animation: "fadeLeft 0.9s ease 0.3s both" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -16, background: dark ? "#1A1A1A" : "#EFEFEF", borderRadius: "40% 60% 40% 60% / 50% 40% 60% 50%", zIndex: -1, animation: "morphBlob 10s ease-in-out infinite" }} />
          <img
            src="/WhatsApp Image 2026-03-23 at 11.36.12.jpeg"
            alt="Nogaye"
            style={{ width: 300, height: 380, objectFit: "cover", borderRadius: "40% 60% 40% 60% / 50% 40% 60% 50%", display: "block", transition: "border-radius 0.6s ease", boxShadow: dark ? "0 30px 60px rgba(0,0,0,0.5)" : "0 30px 60px rgba(0,0,0,0.1)" }}
            onMouseEnter={e => e.currentTarget.style.borderRadius = "50%"}
            onMouseLeave={e => e.currentTarget.style.borderRadius = "40% 60% 40% 60% / 50% 40% 60% 50%"}
          />
          <div style={{ position: "absolute", bottom: 16, left: -24, background: badgeBg, padding: "0.8rem 1.2rem", borderRadius: 12, boxShadow: dark ? "0 8px 30px rgba(0,0,0,0.4)" : "0 8px 30px rgba(0,0,0,0.08)", border: "1px solid " + badgeBorder, fontSize: "0.78rem", fontWeight: 500, color: dark ? "#888" : "#666", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", animation: "pulse 2s infinite", display: "inline-block" }} />
            Disponible pour des projets
          </div>
        </div>
      </div>
    </section>
  );
}





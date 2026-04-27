export default function Hero({ dark }) {
  const text = dark ? "#F0F0F0" : "#111111";
  const sub = dark ? "#777" : "#888";
  const sectionBg = dark ? "#111111" : "#F9F9F9";

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 5rem", paddingTop: "5rem",
      gap: "2rem", position: "relative", overflow: "hidden",
      background: sectionBg,
      textAlign: "center",
    }}>
      <div style={{ position: "absolute", width: 500, height: 500, background: "radial-gradient(circle, rgba(232,93,74,0.07) 0%, transparent 70%)", borderRadius: "50%", top: "-10%", right: "-5%", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
        <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 500, marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
          <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
          Développeuse Web Junior
          <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, color: text, marginBottom: "1.5rem", animation: "fadeUp 0.9s ease 0.2s both" }}>
          Bonjour,<br />je suis<br />
          <em style={{ fontStyle: "italic", color: "#E85D4A" }}>Nogaye Ndao</em>
        </h1>

        <p style={{ fontSize: "0.95rem", color: sub, lineHeight: 1.9, maxWidth: 420, margin: "0 auto 2rem", fontWeight: 300, animation: "fadeUp 0.9s ease 0.4s both" }}>
          Je crée des interfaces modernes et orientées utilisateur, tout en contribuant au développement de solutions web complètes.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", animation: "fadeUp 0.9s ease 0.6s both" }}>
          <a href="#portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "#E85D4A", color: "white", padding: "0.9rem 2rem", borderRadius: 8, fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(232,93,74,0.3)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#D4432F"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#E85D4A"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </a>

          <a href="/cv-nogaye.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "transparent", color: dark ? "#ccc" : "#333", padding: "0.9rem 2rem", borderRadius: 8, fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none", border: "1px solid " + (dark ? "#2a2a2a" : "#D8D8D8"), transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#E85D4A"; e.currentTarget.style.color = "#E85D4A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = dark ? "#2a2a2a" : "#D8D8D8"; e.currentTarget.style.color = dark ? "#ccc" : "#333"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Télécharger CV
          </a>
        </div>
      </div>
    </section>
  );
}
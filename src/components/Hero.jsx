export default function Hero({ dark }) {
  const text = dark ? "#F5F5F5" : "#111111";
  const sub = dark ? "#AAAAAA" : "#666666";
  const badgeBg = dark ? "#141414" : "#ffffff";
  const badgeBorder = dark ? "#222" : "#e5e5e5";
  const blobBg = dark ? "rgba(255,45,107,0.15)" : "rgba(255,45,107,0.08)";

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 5rem",
        paddingTop: "5rem",
        gap: "4rem",
        position: "relative",
        overflow: "hidden",
        background: dark
          ? "radial-gradient(ellipse 60% 70% at 80% 30%, rgba(255,45,107,0.12) 0%, transparent 70%), #0D0D0D"
          : "radial-gradient(ellipse 60% 70% at 80% 30%, rgba(255,45,107,0.07) 0%, transparent 70%), #FAFAFA",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "#FF2D6B",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: dark ? 0.15 : 0.07,
          top: "10%",
          right: "5%",
          animation: "floatBlob 8s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#FF2D6B",
            fontWeight: 500,
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <span
            style={{ display: "inline-block", width: 40, height: 1, background: "#FF2D6B" }}
          />
          Développeuse Web & Mobile
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: text,
            marginBottom: "1.5rem",
            animation: "fadeUp 0.9s ease 0.2s both",
          }}
        >
          Salut, je suis
          <br />
          <em style={{ fontStyle: "italic", color: "#FF2D6B" }}>Nogaye</em>
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: sub,
            lineHeight: 1.8,
            maxWidth: 480,
            marginBottom: "2.5rem",
            fontWeight: 300,
            animation: "fadeUp 0.9s ease 0.4s both",
          }}
        >
          Je transforme vos idées en expériences digitales élégantes — avec React, Tailwind CSS,
          et beaucoup de passion.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            animation: "fadeUp 0.9s ease 0.6s both",
          }}
        >
          {/* CTA projets */}
          <a
            href="#portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              background: "#FF2D6B",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: 100,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(255,45,107,0.35)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF5C8A";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FF2D6B";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </a>

          {/* Télécharger CV */}
          <a
            href="/file:///C:/Users/hp/Desktop/Mon%20CV/CV%20-%20Junior%20Web%20Developer.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              background: "transparent",
              color: "#FF2D6B",
              padding: "1rem 2rem",
              borderRadius: 100,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #FF2D6B",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF2D6B";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#FF2D6B";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger CV
          </a>
        </div>
      </div>

      <div
        className="hero-visual"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          animation: "fadeLeft 0.9s ease 0.3s both",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 400,
              background: blobBg,
              borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
              top: -20,
              right: -20,
              zIndex: -1,
              animation: "morphBlob 10s ease-in-out infinite",
            }}
          />
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
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: -20,
              background: badgeBg,
              padding: "1rem 1.4rem",
              borderRadius: 16,
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              border: `1px solid ${badgeBorder}`,
              fontSize: "0.8rem",
              fontWeight: 500,
              color: sub,
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#4CAF50",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
                display: "inline-block",
              }}
            />
            Disponible pour des projets
          </div>
        </div>
      </div>
    </section>
  );
}
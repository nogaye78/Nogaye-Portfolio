import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── CONFIGURATION EMAILJS ────────────────────────────────────────────────────
// Remplace ces 3 valeurs par les tiennes sur https://www.emailjs.com
const EMAILJS_SERVICE_ID  = "service_zx6cuae";   // ex: "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_65d6jun";  // ex: "template_xyz456"  
const EMAILJS_PUBLIC_KEY  = "O_bfxTNfxiiqx-14C";     // ex: "aBcDeFgHiJkLmNoP"
// ─────────────────────────────────────────────────────────────────────────────

// Hook d'animation au scroll (interne, pas besoin d'import externe)
function useReveal() {
  const [visible, setVisible] = useState(false);
  const ref = (node) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(node);
  };
  return { ref, visible };
}

export default function Contact({ dark = false }) {
  const { ref: ref1, visible: v1 } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();

  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [btnHovered, setBtnHovered] = useState(false);
  const [status, setStatus]     = useState("idle"); // idle | sending | sent | error

  const bg         = dark ? "#141414" : "#F5F5F5";
  const text       = dark ? "#F5F5F5" : "#111111";
  const sub        = dark ? "rgba(245,245,245,0.5)" : "#888888";
  const inputBg    = dark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const inputBorder = dark ? "#222" : "#ddd";

  const inputStyle = {
    width: "100%",
    background: inputBg,
    border: `1px solid ${inputBorder}`,
    borderRadius: 12,
    padding: "1.1rem 1.4rem",
    color: text,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.3s, background 0.3s",
    boxSizing: "border-box",
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    // Validation simple
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const btnLabel =
    status === "sending" ? "Envoi en cours…"
    : status === "sent"  ? "Message envoyé ✓"
    : "Envoyer le message";

  const btnBg =
    status === "sent"    ? "#22c55e"
    : btnHovered         ? "#FF5C8A"
    : "#FF2D6B";

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 5rem",
        background: bg,
        color: text,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark décoratif */}
      <div
        style={{
          position: "absolute",
          bottom: "-4rem",
          right: "-2rem",
          fontFamily: "'Playfair Display', serif",
          fontSize: "18rem",
          fontWeight: 900,
          opacity: 0.03,
          color: "#FF2D6B",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        Bonjour.
      </div>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          maxWidth: 1100,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* ── Colonne gauche : infos ── */}
        <div
          ref={ref1}
          style={{
            opacity: v1 ? 1 : 0,
            transform: v1 ? "translateY(0)" : "translateY(40px)",
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
              gap: "0.8rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 30,
                height: 1,
                background: "#FF2D6B",
              }}
            />
            Travaillons ensemble
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: text,
              lineHeight: 1.15,
              marginBottom: "1.2rem",
            }}
          >
            Contactez-
            <em style={{ fontStyle: "italic", color: "#FF2D6B" }}>moi</em>
          </h2>

          <p
            style={{
              color: sub,
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Vous avez un projet ? Une idée ? Je suis là pour donner vie à votre
            vision digitale.
          </p>

          {[
            { icon: "✉", label: "nogayedev02@email.com" },
            { icon: "◉", label: "Dakar, Sénégal" },
            { icon: "↗", label: "github.com/nogaye78" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.2rem",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: `1px solid ${dark ? "#333" : "#ddd"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FF2D6B",
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
              <span style={{ fontSize: "0.9rem", color: sub }}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── Colonne droite : formulaire ── */}
        <div
          ref={ref2}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            opacity: v2 ? 1 : 0,
            transform: v2 ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Votre nom"
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#FF2D6B";
              e.target.style.background = "rgba(255,45,107,0.05)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = inputBorder;
              e.target.style.background = inputBg;
            }}
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Votre email"
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#FF2D6B";
              e.target.style.background = "rgba(255,45,107,0.05)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = inputBorder;
              e.target.style.background = inputBg;
            }}
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message..."
            style={{ ...inputStyle, height: 140, resize: "none" }}
            onFocus={(e) => {
              e.target.style.borderColor = "#FF2D6B";
              e.target.style.background = "rgba(255,45,107,0.05)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = inputBorder;
              e.target.style.background = inputBg;
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={status === "sending" || status === "sent"}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.8rem",
              background: btnBg,
              color: "white",
              padding: "1.1rem 2.5rem",
              borderRadius: 100,
              border: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: status === "sending" || status === "sent" ? "not-allowed" : "pointer",
              transform: btnHovered && status === "idle" ? "translateY(-2px)" : "translateY(0)",
              boxShadow: "0 8px 30px rgba(255,45,107,0.35)",
              transition: "all 0.3s",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {btnLabel}
            {status === "idle" && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22,2 15,22 11,13 2,9" />
              </svg>
            )}
          </button>

          {/* Message d'erreur */}
          {status === "error" && (
            <p
              style={{
                color: "#FF2D6B",
                fontSize: "0.85rem",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              ⚠ Une erreur est survenue. Réessaie dans quelques instants.
            </p>
          )}

          {/* Message de succès */}
          {status === "sent" && (
            <p
              style={{
                color: "#22c55e",
                fontSize: "0.85rem",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              ✓ Ton message a bien été envoyé !
            </p>
          )}
        </div>
      </div>

      {/* CSS responsive */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          section#contact {
            padding: 4rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
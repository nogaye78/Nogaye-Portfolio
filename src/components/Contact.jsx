import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Contact({ dark }) {
  const { ref: ref1, visible: v1 } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [btnHovered, setBtnHovered] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const bg = dark ? "#141414" : "#F5F5F5";
  const text = dark ? "#F5F5F5" : "#111111";
  const sub = dark ? "rgba(245,245,245,0.5)" : "#888888";
  const inputBg = dark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const inputBorder = dark ? "#222" : "#ddd";

  const inputStyle = { width: "100%", background: inputBg, border: `1px solid ${inputBorder}`, borderRadius: 12, padding: "1.1rem 1.4rem", color: text, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300, outline: "none", transition: "border-color 0.3s, background 0.3s", boxSizing: "border-box" };

  return (
    <section id="contact" style={{ padding: "6rem 5rem", background: bg, color: text, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "-4rem", right: "-2rem", fontFamily: "'Playfair Display', serif", fontSize: "18rem", fontWeight: 900, opacity: 0.03, color: "#FF2D6B", pointerEvents: "none", lineHeight: 1 }}>Bonjour.</div>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>
        <div ref={ref1} style={{ opacity: v1 ? 1 : 0, transform: v1 ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#FF2D6B", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ display: "inline-block", width: 30, height: 1, background: "#FF2D6B" }} />Travaillons ensemble
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: text, lineHeight: 1.15, marginBottom: "1.2rem" }}>
            Contactez-<em style={{ fontStyle: "italic", color: "#FF2D6B" }}>moi</em>
          </h2>
          <p style={{ color: sub, fontWeight: 300, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Vous avez un projet ? Une idée ? Je suis là pour donner vie à votre vision digitale.
          </p>
          {[{ icon: "✉", text: "nogayedev02@email.com" }, { icon: "◉", text: "Dakar, Sénégal" }, { icon: "↗", text: "github.com/nogaye78" }].map(({ icon, text: t }) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", border: `1px solid ${dark ? "#333" : "#ddd"}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#FF2D6B" }}>{icon}</div>
              <span style={{ fontSize: "0.9rem", color: sub }}>{t}</span>
            </div>
          ))}
        </div>

        <div ref={ref2} style={{ display: "flex", flexDirection: "column", gap: "1.2rem", opacity: v2 ? 1 : 0, transform: v2 ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s" }}>
          <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Votre nom" style={inputStyle}
            onFocus={e => { e.target.style.borderColor = "#FF2D6B"; e.target.style.background = "rgba(255,45,107,0.05)"; }}
            onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Votre email" style={inputStyle}
            onFocus={e => { e.target.style.borderColor = "#FF2D6B"; e.target.style.background = "rgba(255,45,107,0.05)"; }}
            onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message..." style={{ ...inputStyle, height: 140, resize: "none" }}
            onFocus={e => { e.target.style.borderColor = "#FF2D6B"; e.target.style.background = "rgba(255,45,107,0.05)"; }}
            onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />
          <button onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", background: btnHovered ? "#FF5C8A" : "#FF2D6B", color: "white", padding: "1.1rem 2.5rem", borderRadius: 100, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transform: btnHovered ? "translateY(-2px)" : "translateY(0)", boxShadow: "0 8px 30px rgba(255,45,107,0.35)", transition: "all 0.3s" }}>
            Envoyer le message
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22,2 15,22 11,13 2,9" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
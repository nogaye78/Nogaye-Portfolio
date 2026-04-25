import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone } from "lucide-react";

const EMAILJS_SERVICE_ID  = "service_zx6cuae";
const EMAILJS_TEMPLATE_ID = "template_65d6jun";
const EMAILJS_PUBLIC_KEY  = "O_bfxTNfxiiqx-14C";

const LinkedInIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
  </svg>
);

function Toast({ message, type, visible }) {
  const isSuccess = type === "success";
  return (
    <div style={{
      position: "fixed", top: "2rem", right: "2rem", zIndex: 9999,
      display: "flex", alignItems: "center", gap: "0.8rem",
      background: isSuccess ? "#0f2718" : "#2a0a0f",
      border: "1px solid " + (isSuccess ? "#22c55e" : "#E85D4A"),
      color: isSuccess ? "#22c55e" : "#E85D4A",
      padding: "1rem 1.5rem", borderRadius: 14,
      fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500,
      boxShadow: "0 8px 32px " + (isSuccess ? "rgba(34,197,94,0.2)" : "rgba(232,93,74,0.2)"),
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.97)",
      transition: "opacity 0.4s ease, transform 0.4s ease",
      pointerEvents: "none", minWidth: 280,
    }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: isSuccess ? "rgba(34,197,94,0.15)" : "rgba(232,93,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1rem" }}>
        {isSuccess ? "✓" : "✕"}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600, fontSize: "0.88rem" }}>{isSuccess ? "Message envoyé !" : "Erreur d'envoi"}</p>
        <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.75, marginTop: 2 }}>{message}</p>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, height: 3, borderRadius: "0 0 14px 14px", background: isSuccess ? "#22c55e" : "#E85D4A", animation: visible ? "toastProgress 3s linear forwards" : "none", opacity: 0.6 }} />
    </div>
  );
}

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

export default function Contact({ dark }) {
  const { ref: ref1, visible: v1 } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();

  const [form, setForm]             = useState({ name: "", email: "", message: "" });
  const [btnHovered, setBtnHovered] = useState(false);
  const [status, setStatus]         = useState("idle");
  const [toast, setToast]           = useState(null);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type });
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
    setTimeout(() => setToast(null), 3400);
  };

  const bg          = dark ? "#161616" : "#EFEFEF";
  const text        = dark ? "#F9F9F9" : "#111111";
  const sub         = dark ? "rgba(255,255,255,0.4)" : "#888888";
  const inputBg     = dark ? "rgba(255,255,255,0.03)" : "#FFFFFF";
  const inputBorder = dark ? "#222" : "#E0E0E0";
  const iconBorder  = dark ? "#222" : "#E0E0E0";

  const inputStyle = {
    width: "100%",
    background: inputBg,
    border: "1px solid " + inputBorder,
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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast("Merci de remplir tous les champs.", "error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, reply_to: form.email },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      showToast("Ton message a bien été reçu, je te réponds bientôt !", "success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      showToast("Une erreur est survenue. Réessaie dans quelques instants.", "error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const btnLabel = status === "sending" ? "Envoi en cours…" : status === "sent" ? "Message envoyé ✓" : "Envoyer le message";
  const btnBg    = status === "sent" ? "#22c55e" : btnHovered ? "#D4432F" : "#E85D4A";

  const contactItems = [
    { icon: "◉", label: "Dakar, Sénégal", href: null },
    { icon: "✉", label: "nogayedev02@email.com", href: "mailto:nogayedev02@email.com" },
    { icon: <Phone size={16} color="#E85D4A" />, label: "+221 77 103 38 51", href: null },
    { icon: "↗", label: "github.com/nogaye78", href: "https://github.com/nogaye78" },
    { icon: <LinkedInIcon size={16} color="#E85D4A" />, label: "Nogaye Ndao", href: "https://www.linkedin.com/feed/" },
  ];

  return (
    <section id="contact" style={{ padding: "6rem 5rem", background: bg, color: text, position: "relative", overflow: "hidden" }}>

      {toast && <Toast message={toast.message} type={toast.type} visible={toastVisible} />}

      <div style={{ position: "absolute", bottom: "-4rem", right: "-2rem", fontFamily: "'Playfair Display', serif", fontSize: "18rem", fontWeight: 900, opacity: 0.03, color: "#E85D4A", pointerEvents: "none", lineHeight: 1 }}>
        Bonjour.
      </div>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>

        {/* Colonne gauche */}
        <div ref={ref1} style={{ opacity: v1 ? 1 : 0, transform: v1 ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#E85D4A", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ display: "inline-block", width: 30, height: 1, background: "#E85D4A" }} />
            Travaillons ensemble
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: text, lineHeight: 1.15, marginBottom: "1.2rem" }}>
            Contactez-<em style={{ fontStyle: "italic", color: "#E85D4A" }}>moi</em>
          </h2>

          <p style={{ color: sub, fontWeight: 300, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Vous avez un projet ? Une idée ? Je suis là pour donner vie à votre vision digitale.
          </p>

          {contactItems.map(({ icon, label, href }) => {
            const inner = (
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem", textDecoration: "none" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid " + iconBorder, display: "flex", alignItems: "center", justifyContent: "center", color: "#E85D4A", flexShrink: 0 }}>
                  {icon}
                </div>
                <span style={{ fontSize: "0.9rem", color: sub }}>{label}</span>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        {/* Colonne droite — formulaire */}
        <div ref={ref2} style={{ display: "flex", flexDirection: "column", gap: "1.2rem", opacity: v2 ? 1 : 0, transform: v2 ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s" }}>
          <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Votre nom" style={inputStyle}
            onFocus={e => { e.target.style.borderColor = "#E85D4A"; e.target.style.background = "rgba(232,93,74,0.04)"; }}
            onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />

          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Votre email" style={inputStyle}
            onFocus={e => { e.target.style.borderColor = "#E85D4A"; e.target.style.background = "rgba(232,93,74,0.04)"; }}
            onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />

          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message..." style={{ ...inputStyle, height: 140, resize: "none" }}
            onFocus={e => { e.target.style.borderColor = "#E85D4A"; e.target.style.background = "rgba(232,93,74,0.04)"; }}
            onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />

          <button onClick={handleSubmit} disabled={status === "sending" || status === "sent"}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", background: btnBg, color: "white", padding: "1.1rem 2.5rem", borderRadius: 8, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: status === "sending" || status === "sent" ? "not-allowed" : "pointer", transform: btnHovered && status === "idle" ? "translateY(-2px)" : "translateY(0)", boxShadow: "0 4px 20px rgba(232,93,74,0.3)", transition: "all 0.3s", opacity: status === "sending" ? 0.7 : 1 }}>
            {btnLabel}
            {status === "idle" && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          section#contact { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}










// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Phone } from "lucide-react";

// const EMAILJS_SERVICE_ID  = "service_zx6cuae";
// const EMAILJS_TEMPLATE_ID = "template_65d6jun";
// const EMAILJS_PUBLIC_KEY  = "O_bfxTNfxiiqx-14C";

// const LinkedInIcon = ({ size = 16, color = "currentColor" }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
//     <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
//   </svg>
// );

// function Toast({ message, type, visible }) {
//   const isSuccess = type === "success";
//   return (
//     <div style={{ position: "fixed", top: "2rem", right: "2rem", zIndex: 9999, display: "flex", alignItems: "center", gap: "0.8rem", background: isSuccess ? "#0f2718" : "#1a1428", border: "1px solid " + (isSuccess ? "#22c55e" : "#A78BFA"), color: isSuccess ? "#22c55e" : "#A78BFA", padding: "1rem 1.5rem", borderRadius: 14, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500, opacity: visible ? 1 : 0, transform: visible ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.97)", transition: "opacity 0.4s ease, transform 0.4s ease", pointerEvents: "none", minWidth: 280 }}>
//       <div style={{ width: 32, height: 32, borderRadius: "50%", background: isSuccess ? "rgba(34,197,94,0.15)" : "rgba(167,139,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
//         {isSuccess ? "✓" : "✕"}
//       </div>
//       <div>
//         <p style={{ margin: 0, fontWeight: 600, fontSize: "0.88rem" }}>{isSuccess ? "Message envoyé !" : "Erreur d'envoi"}</p>
//         <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.75, marginTop: 2 }}>{message}</p>
//       </div>
//       <div style={{ position: "absolute", bottom: 0, left: 0, height: 3, borderRadius: "0 0 14px 14px", background: isSuccess ? "#22c55e" : "#A78BFA", animation: visible ? "toastProgress 3s linear forwards" : "none", opacity: 0.6 }} />
//     </div>
//   );
// }

// function useReveal() {
//   const [visible, setVisible] = useState(false);
//   const ref = (node) => {
//     if (!node) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.15 }
//     );
//     observer.observe(node);
//   };
//   return { ref, visible };
// }

// export default function Contact({ dark }) {
//   const { ref: ref1, visible: v1 } = useReveal();
//   const { ref: ref2, visible: v2 } = useReveal();

//   const [form, setForm]             = useState({ name: "", email: "", message: "" });
//   const [btnHovered, setBtnHovered] = useState(false);
//   const [status, setStatus]         = useState("idle");
//   const [toast, setToast]           = useState(null);
//   const [toastVisible, setToastVisible] = useState(false);

//   const showToast = (message, type) => {
//     setToast({ message, type });
//     setToastVisible(true);
//     setTimeout(() => setToastVisible(false), 3000);
//     setTimeout(() => setToast(null), 3400);
//   };

//   const bg          = dark ? "#1A1A1A" : "#E8E8F0";
//   const text        = dark ? "#F0F0F0" : "#111111";
//   const sub         = dark ? "rgba(240,240,240,0.4)" : "#888888";
//   const inputBg     = dark ? "rgba(255,255,255,0.03)" : "#FFFFFF";
//   const inputBorder = dark ? "#2a2a2a" : "#D0CCF0";
//   const iconBorder  = dark ? "#2a2a2a" : "#D0CCF0";

//   const inputStyle = {
//     width: "100%", background: inputBg,
//     border: "1px solid " + inputBorder,
//     borderRadius: 12, padding: "1.1rem 1.4rem",
//     color: text, fontFamily: "'DM Sans', sans-serif",
//     fontSize: "0.9rem", fontWeight: 300, outline: "none",
//     transition: "border-color 0.3s, background 0.3s", boxSizing: "border-box",
//   };

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async () => {
//     if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
//       showToast("Merci de remplir tous les champs.", "error"); return;
//     }
//     setStatus("sending");
//     try {
//       await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
//         { from_name: form.name, from_email: form.email, message: form.message, reply_to: form.email },
//         EMAILJS_PUBLIC_KEY
//       );
//       setStatus("sent");
//       setForm({ name: "", email: "", message: "" });
//       showToast("Ton message a bien été reçu, je te réponds bientôt !", "success");
//       setTimeout(() => setStatus("idle"), 4000);
//     } catch (err) {
//       setStatus("error");
//       showToast("Une erreur est survenue. Réessaie dans quelques instants.", "error");
//       setTimeout(() => setStatus("idle"), 4000);
//     }
//   };

//   const btnLabel = status === "sending" ? "Envoi en cours…" : status === "sent" ? "Message envoyé ✓" : "Envoyer le message";
//   const btnBg    = status === "sent" ? "#22c55e" : btnHovered ? "#9172F8" : "#A78BFA";

//   const contactItems = [
//     { icon: "◉", label: "Dakar, Sénégal", href: null },
//     { icon: "✉", label: "nogayedev02@email.com", href: "mailto:nogayedev02@email.com" },
//     { icon: <Phone size={16} color="#A78BFA" />, label: "+221 77 103 38 51", href: null },
//     { icon: "↗", label: "github.com/nogaye78", href: "https://github.com/nogaye78" },
//     { icon: <LinkedInIcon size={16} color="#A78BFA" />, label: "Nogaye Ndao", href: "https://www.linkedin.com/feed/" },
//   ];

//   return (
//     <section id="contact" style={{ padding: "6rem 5rem", background: bg, color: text, position: "relative", overflow: "hidden" }}>
//       {toast && <Toast message={toast.message} type={toast.type} visible={toastVisible} />}

//       <div style={{ position: "absolute", bottom: "-4rem", right: "-2rem", fontFamily: "'Playfair Display', serif", fontSize: "18rem", fontWeight: 900, opacity: 0.03, color: "#A78BFA", pointerEvents: "none", lineHeight: 1 }}>Bonjour.</div>

//       <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>

//         <div ref={ref1} style={{ opacity: v1 ? 1 : 0, transform: v1 ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
//           <div style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#A78BFA", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
//             <span style={{ display: "inline-block", width: 30, height: 1, background: "#A78BFA" }} />
//             Travaillons ensemble
//           </div>
//           <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: text, lineHeight: 1.15, marginBottom: "1.2rem" }}>
//             Contactez-<em style={{ fontStyle: "italic", color: "#A78BFA" }}>moi</em>
//           </h2>
//           <p style={{ color: sub, fontWeight: 300, lineHeight: 1.8, marginBottom: "2.5rem" }}>
//             Vous avez un projet ? Une idée ? Je suis là pour donner vie à votre vision digitale.
//           </p>

//           {contactItems.map(({ icon, label, href }) => {
//             const inner = (
//               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
//                 <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid " + iconBorder, display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA", flexShrink: 0 }}>
//                   {icon}
//                 </div>
//                 <span style={{ fontSize: "0.9rem", color: sub }}>{label}</span>
//               </div>
//             );
//             return href ? (
//               <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
//                 {inner}
//               </a>
//             ) : <div key={label}>{inner}</div>;
//           })}
//         </div>

//         <div ref={ref2} style={{ display: "flex", flexDirection: "column", gap: "1.2rem", opacity: v2 ? 1 : 0, transform: v2 ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s" }}>
//           <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Votre nom" style={inputStyle}
//             onFocus={e => { e.target.style.borderColor = "#A78BFA"; e.target.style.background = "rgba(167,139,250,0.05)"; }}
//             onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />
//           <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Votre email" style={inputStyle}
//             onFocus={e => { e.target.style.borderColor = "#A78BFA"; e.target.style.background = "rgba(167,139,250,0.05)"; }}
//             onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />
//           <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message..." style={{ ...inputStyle, height: 140, resize: "none" }}
//             onFocus={e => { e.target.style.borderColor = "#A78BFA"; e.target.style.background = "rgba(167,139,250,0.05)"; }}
//             onBlur={e => { e.target.style.borderColor = inputBorder; e.target.style.background = inputBg; }} />

//           <button onClick={handleSubmit} disabled={status === "sending" || status === "sent"}
//             onMouseEnter={() => setBtnHovered(true)}
//             onMouseLeave={() => setBtnHovered(false)}
//             style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", background: btnBg, color: "#0F0F0F", padding: "1.1rem 2.5rem", borderRadius: 8, border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", cursor: status === "sending" || status === "sent" ? "not-allowed" : "pointer", transform: btnHovered && status === "idle" ? "translateY(-2px)" : "translateY(0)", boxShadow: "0 4px 24px rgba(167,139,250,0.35)", transition: "all 0.3s", opacity: status === "sending" ? 0.7 : 1 }}>
//             {btnLabel}
//             {status === "idle" && (
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 768px) {
//           .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
//           section#contact { padding: 4rem 1.5rem !important; }
//         }
//       `}</style>
//     </section>
//   );
// }
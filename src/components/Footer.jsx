export default function Footer({ dark }) {
  return (
    <footer style={{
      background: dark ? "#0D0D0D" : "#EFEFEF",
      color: dark ? "#444" : "#AAA",
      padding: "2rem 5rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
      borderTop: "1px solid " + (dark ? "#1A1A1A" : "#E0E0E0"),
    }}>
      <span>© 2026 <strong style={{ color: dark ? "#F9F9F9" : "#111" }}>Nogaye Ndao</strong></span>
      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
        Fait avec <span style={{ color: "#E85D4A" }}>♥</span> au Sénégal
      </span>
    </footer>
  );
}








export default function Footer({ dark }) {
  return (
    <footer style={{ background: dark ? "#080808" : "#eeeeee", color: dark ? "rgba(245,245,245,0.3)" : "#999999", padding: "2rem 5rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", borderTop: `1px solid ${dark ? "#1a1a1a" : "#dddddd"}` }}>
      <span>© 2026 <strong style={{ color: "#FF2D6B" }}>Nogaye Ndao</strong></span>
      <span>Fait avec ♥ au Sénégal</span>
    </footer>
  );
}
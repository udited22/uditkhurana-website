import Layout from "../components/Layout.jsx";
import { C } from "../constants.js";

export default function NotFoundPage() {
  const navigate = (href) => {
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout>
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 40px", textAlign: "center" }}>
        <div>
          <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "80px", fontWeight: 400, color: C.accentDim, lineHeight: 1, marginBottom: "24px" }}>404</p>
          <h1 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "28px", fontWeight: 400, color: C.textHigh, marginBottom: "14px" }}>Page not found.</h1>
          <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14px", fontWeight: 400, color: C.textMid, marginBottom: "36px" }}>This door doesn't exist — yet.</p>
          <button onClick={() => navigate("/")}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: C.accent, color: C.onAccent, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "4px" }}>
            Back Home →
          </button>
        </div>
      </div>
    </Layout>
  );
}

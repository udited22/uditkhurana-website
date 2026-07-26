import Layout from "../components/Layout.jsx";
import { C, SOCIAL } from "../constants.js";

const PARAGRAPHS = [
  "How often do you believe that intelligence in life or around you is at play? I believe it's playing miracles around us all the time.",
  "How many times were you saved from a road accident by a fraction of a second? How often does it happen that on your worst day, you just received a message with the exact lines you needed to hear? How often does a simple gesture by a stranger change your perspective on life?",
  "Life is the most intelligent thing, and by life, I don't just mean the life within us or in living organisms around us. Intelligence in life delves much deeper than just the surroundings we see around us. Every particle of existence — molecules, atoms, birds, and even the simplest of microorganisms around us — forms the very substance of an intelligent engine which is running this world. And do you know what the greatest miracle is? This intelligent life is manifesting us throughout our journey of life.",
  "How does this intelligence play around you and for you? Simple observations! The food that your body rejected, a turned-down relationship that led you to a better one, a failed career that led you to a more successful career, a simple diversion on the road that saved you from an accident. Simple observations hint at how intelligently you are being directed — or I should rather say redirected — to a more fulfilling path.",
  "The intelligence of life is always at play, and as Steve Jobs said — \"You cannot connect the dots looking forward, you can only connect them looking backwards. So you have to trust that the dots will somehow connect in the future.\"",
  "No one can tell what the future holds. But I believe — or rather, I have started to believe — that if you trust the intelligence around you, the intelligence of nature and life itself will always guide you home.",
];

export default function EssayLifeIsIntelligentPage() {
  const navigate = (href) => {
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/writing">
      <style>{`.sp{padding:80px 80px;} @media(max-width:768px){.sp{padding:64px 24px!important;}}`}</style>

      <div style={{ background: C.bgSection, padding: "80px 80px 56px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <a href="/writing" onClick={e => { e.preventDefault(); navigate("/writing"); }}
            style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.textLow, display: "inline-block", marginBottom: "22px" }}>
            ← Back to Writing
          </a>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "14px" }}>Essay · Philosophy</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Life is <em style={{ fontStyle: "italic", color: C.gold }}>Intelligent.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 500, color: C.textLow, letterSpacing: "0.04em" }}>
            Udit Khurana · Published Sep 9, 2019
          </p>
        </div>
      </div>

      <div className="sp" style={{ padding: "72px 80px 100px", background: C.bg }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <blockquote style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", fontStyle: "italic", color: C.textHigh, lineHeight: 1.6, marginBottom: "40px", borderLeft: `3px solid ${C.border}`, paddingLeft: "24px" }}>
            "I believe life is an intelligent thing: that things aren't random."
            <span style={{ display: "block", marginTop: "10px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontStyle: "normal", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textLow }}>— Steve Jobs</span>
          </blockquote>

          {PARAGRAPHS.map((p, i) => (
            <p key={i} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: C.textMid, marginBottom: "22px" }}>{p}</p>
          ))}

          <div style={{ marginTop: "48px", paddingTop: "28px", borderTop: `1px solid ${C.borderSoft}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textLow }}>Originally published on LinkedIn, 2019.</p>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold }}>Read on LinkedIn →</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

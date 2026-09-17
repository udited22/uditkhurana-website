import Layout from "../components/Layout.jsx";
import { C, INTERSECTIONS, CRED, JOURNEY, SOCIAL, PROJECTS, PHOTO } from "../constants.js";
import { PER_DIEM_LATEST, PER_DIEM_RECENT } from "../content/per-diem.js";
import { PHOTOS } from "../photos.js";
import Reveal from "../components/Reveal.jsx";

const LI = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

// A 3-photo curatorial pick for the compact homepage teaser — the full
// 9-photo gallery (including the four with the old-handle watermark, kept
// per Udit's direction — see UditUncovered.jsx) lives on /uncovered.
const UNCOVERED_TEASER_TITLES = ["Nubra at Golden Hour", "A Life Fully Lived", "Monastery in the Mirror"];

function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function HomePage() {
  const navigate = (href) => {
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const current = JOURNEY[0];
  const uncoveredPhotos = UNCOVERED_TEASER_TITLES
    .map(t => PHOTOS.find(p => p.title === t))
    .filter(Boolean);

  return (
    <Layout activePath="/">
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:none;}}
        .cred-row{display:flex;justify-content:space-between;flex-wrap:wrap;}
        .sp{padding:88px 80px;}
        .work-row{display:grid;grid-template-columns:200px 1fr;gap:48px;align-items:center;}
        .pd-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:44px;align-items:start;}
        .pd-recent-list{display:flex;flex-direction:column;gap:0;}
        .selwork-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
        .adv-uncov-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        .uncov-photos{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        @media(max-width:900px){
          .work-row{grid-template-columns:1fr!important;}
          .pd-grid{grid-template-columns:1fr!important;}
          .selwork-grid{grid-template-columns:1fr 1fr!important;}
          .adv-uncov-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:768px){
          .hero-ctas{flex-direction:column!important;align-items:flex-start!important;}
          .sp{padding:64px 24px!important;}
          .selwork-grid{grid-template-columns:1fr!important;}
          .uncov-photos{grid-template-columns:1fr 1fr!important;}
        }
      `}</style>

      {/* ── 1. HERO — typography-led, no banner image, no carousel ── */}
      <div style={{ background: C.bg }}>
        <div className="sp" style={{ padding: "168px 80px 72px", maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ maxWidth: "780px" }}>
            <div style={{ animation: "fadeUp .6s ease .05s both" }}>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,54px)", fontWeight: 400, lineHeight: 1.12, color: C.textHigh, letterSpacing: "-0.01em", marginBottom: "22px" }}>
                I like building <em style={{ fontStyle: "italic", color: C.accent }}>at intersections.</em>
              </h1>
            </div>

            <div style={{ animation: "fadeUp .6s ease .12s both", marginBottom: "26px" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em", color: C.accentDim, lineHeight: 2.1 }}>
                {INTERSECTIONS.join("   ·   ")}
              </p>
            </div>

            <div style={{ animation: "fadeUp .6s ease .18s both" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: C.textMid, maxWidth: "560px", marginBottom: "36px" }}>
                I build financial products and the systems underneath them, write about the connections I find through Per Diem, and document a rather eclectic life through Udit Uncovered.
              </p>
            </div>

            <div className="hero-ctas" style={{ display: "flex", gap: "12px", animation: "fadeUp .6s ease .24s both" }}>
              <button onClick={() => navigate("/work")}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 26px", background: C.accent, color: C.onAccent, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "4px" }}>
                Explore My Work
              </button>
              <button onClick={() => navigate("/per-diem")}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 26px", background: "transparent", color: C.textHigh, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid ${C.borderSoft}`, borderRadius: "4px" }}>
                Read Per Diem
              </button>
              <button onClick={() => navigate("/uncovered")}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 26px", background: "transparent", color: C.rust, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", cursor: "pointer", border: "none" }}>
                Udit Uncovered ↗
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. WORK / PROFESSIONAL DEPTH ────────────────────────── */}
      <div style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div className="sp">
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <Reveal>
              <div className="work-row" style={{ marginBottom: "40px" }}>
                <div style={{ width: "100%", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden", border: `1px solid ${C.border}`, backgroundImage: `url(${PHOTO.product})`, backgroundSize: "cover", backgroundPosition: "center top" }} />
                <div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "12px" }}>Work</p>
                  <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.25, marginBottom: "14px" }}>
                    {current.role} at {current.company}, after a decade moving across <em style={{ fontStyle: "italic", color: C.accent }}>multiple layers of financial infrastructure.</em>
                  </h2>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.75, maxWidth: "56ch", marginBottom: "18px" }}>
                    The category has changed — enterprise banking, independent markets practice, regulated retail investing, now crypto. The recurring interest has been the systems underneath it.
                  </p>
                  <a href="/work" onClick={e => { e.preventDefault(); navigate("/work"); }} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent }}>Explore My Work →</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="cred-row" style={{ borderTop: `1px solid ${C.borderSoft}`, paddingTop: "24px" }}>
                {CRED.map((c, i) => (
                  <div key={i} style={{ padding: "0 20px 0 0" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontWeight: 500, color: C.accent }}>{c.val}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.textLow, letterSpacing: "0.06em", marginTop: "2px" }}>{c.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── 3. PER DIEM ──────────────────────────────────────────── */}
      <div className="sp" style={{ background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent }}>Per Diem</p>
            </div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.75, maxWidth: "60ch", marginBottom: "36px" }}>
              An ongoing writing experiment on markets, technology, products, and the systems connecting them — mostly an excuse to follow interesting rabbit holes.
            </p>
          </Reveal>

          <div className="pd-grid">
            <Reveal>
              <a href={PER_DIEM_LATEST.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
                  {PER_DIEM_LATEST.coverImage && (
                    <div style={{ width: "100%", aspectRatio: "16/9", backgroundImage: `url(${PER_DIEM_LATEST.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  )}
                  <div style={{ padding: "30px 32px 34px" }}>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.accent, marginBottom: "14px" }}>Latest Issue · {fmtDate(PER_DIEM_LATEST.publishedAt)}</p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,2.6vw,28px)", fontWeight: 500, color: C.textHigh, lineHeight: 1.28, marginBottom: "14px" }}>{PER_DIEM_LATEST.title}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.75, marginBottom: "20px" }}>{PER_DIEM_LATEST.excerpt}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent }}>Read on LinkedIn →</p>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="pd-recent-list">
                {PER_DIEM_RECENT.map((issue, i) => (
                  <a key={issue.id} href={issue.url} target="_blank" rel="noreferrer"
                    style={{ display: "block", padding: "16px 0", borderBottom: i < PER_DIEM_RECENT.length - 1 ? `1px solid ${C.borderSoft}` : "none" }}>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.textLow, letterSpacing: "0.06em", marginBottom: "6px" }}>{fmtDate(issue.publishedAt)}</p>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontWeight: 500, color: C.textHigh, lineHeight: 1.35 }}>{issue.title}</p>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginTop: "26px" }}>
              <a href="/per-diem" onClick={e => { e.preventDefault(); navigate("/per-diem"); }} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.textHigh }}>Explore All Per Diem →</a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.textLow }}><LI /> Read on LinkedIn ↗</a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── 4. SELECTED WORK ─────────────────────────────────────── */}
      <div className="sp" style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "26px" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent }}>Selected Work</p>
              <a href="/projects" onClick={e => { e.preventDefault(); navigate("/projects"); }} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>See all →</a>
            </div>
          </Reveal>
          <div className="selwork-grid">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <a href={p.url} target="_blank" rel="noreferrer" style={{ display: "block", height: "100%" }}>
                  <div style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "6px", padding: "22px", height: "100%" }}>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.accent, background: C.accentFaint, padding: "3px 9px", borderRadius: "3px" }}>{p.tag}</span>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontWeight: 500, color: C.textHigh, lineHeight: 1.28, margin: "14px 0 8px" }}>{p.name}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, lineHeight: 1.65, color: C.textMid }}>{p.summary}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. ADVISORY + 6. UDIT UNCOVERED ─────────────────────── */}
      <div className="sp" style={{ background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="adv-uncov-grid">
            <Reveal>
              <div onClick={() => navigate("/advisory")} style={{ cursor: "pointer", height: "100%" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "14px" }}>Advisory</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "22px", fontWeight: 400, color: C.textHigh, lineHeight: 1.3, marginBottom: "12px" }}>Selective advisory, where accumulated judgement applies.</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, marginBottom: "16px" }}>A small number of high-context conversations for founders and product leaders in fintech, crypto, and regulated products.</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent }}>Start a Conversation →</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div style={{ height: "100%" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.rust, marginBottom: "14px" }}>Udit Uncovered</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "22px", fontWeight: 400, color: C.textHigh, lineHeight: 1.3, marginBottom: "14px" }}>Living the eclectic life.</h3>
                <div className="uncov-photos" style={{ marginBottom: "16px" }}>
                  {uncoveredPhotos.map((ph, i) => (
                    <div key={i} onClick={() => navigate("/uncovered")} style={{ cursor: "pointer", aspectRatio: "1/1", borderRadius: "5px", overflow: "hidden", border: `1px solid ${C.borderSoft}` }}>
                      {ph.src && <img src={ph.src} alt={ph.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
                    </div>
                  ))}
                </div>
                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.rust, marginRight: "20px" }}>Follow @udituncovered ↗</a>
                <a href="/uncovered" onClick={e => { e.preventDefault(); navigate("/uncovered"); }} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.textLow }}>See more →</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── 7. ABOUT BRIDGE ──────────────────────────────────────── */}
      <div className="sp" style={{ padding: "56px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, textAlign: "center" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontStyle: "italic", color: C.textMid, lineHeight: 1.6 }}>
              Different chapters, one operating philosophy.{" "}
              <a href="/about" onClick={e => { e.preventDefault(); navigate("/about"); }} style={{ color: C.accent, fontStyle: "normal", fontWeight: 500 }}>
                Read the full story →
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}

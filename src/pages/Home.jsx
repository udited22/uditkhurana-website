import { useState } from "react";
import Layout, { PerDiemWordmark, LinkedInIcon, InstagramIcon, MailIcon } from "../components/Layout.jsx";
import { C, PHOTO, LAYOUT, SOCIAL, CONTACT_EMAIL, OPERATING_LOOP, PROOF_STRIP } from "../constants.js";
import { PER_DIEM_LATEST, PER_DIEM_RECENT } from "../content/per-diem.js";
import { PHOTOS } from "../photos.js";
import IntersectionEngine from "../components/IntersectionEngine.jsx";
import SystemsUnderneath from "../components/SystemsUnderneath.jsx";
import ConvergeWords from "../components/ConvergeWords.jsx";
import DoHardThings from "../components/DoHardThings.jsx";
import Reveal from "../components/Reveal.jsx";

// "Food" omitted — no real food photo exists in the repo, and a placeholder
// gradient isn't acceptable in this signature visual section. "Travel" and
// "Experiments" previously pointed at watermarked photos — this full-bleed
// section needs clean photography regardless of what the gallery on
// /uncovered keeps.
const UNCOVERED_SCENES = [
  { label: "Travel", photo: PHOTOS.find(p => p.title === "Monastery in the Mirror")?.src },
  { label: "Endurance", photo: PHOTO.fitness },
  { label: "Stories", photo: PHOTOS.find(p => p.title === "A Life Fully Lived")?.src },
  { label: "Experiments", photo: PHOTOS.find(p => p.title === "At the Top, Looking Further")?.src },
];

const WORK_PROOF = "10+ years across financial systems · 4–5 major broker integrations · 40+ AMC ecosystem · regulated 0→1 builds";

function navigate(href) {
  if (href.startsWith("http")) { window.open(href, "_blank"); return; }
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function SocialRow() {
  const items = [
    { Icon: LinkedInIcon, label: "LinkedIn", href: SOCIAL.linkedin, external: true },
    { Icon: InstagramIcon, label: "Instagram", href: SOCIAL.instagram, external: true },
    { Icon: MailIcon, label: "Email", href: `mailto:${CONTACT_EMAIL}` },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "26px" }}>
      <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: C.textHigh }}>Udit Khurana</span>
      <div style={{ display: "flex", gap: "6px" }}>
        {items.map(({ Icon, label, href, external }) => (
          <a key={label} href={href} title={label} aria-label={label}
            target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px",
              borderRadius: "50%", color: C.textLow, transition: "color .15s ease, background .15s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.background = C.accentFaint; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.textLow; e.currentTarget.style.background = "transparent"; }}
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

function PerDiemCard({ issue }) {
  return (
    <a href={issue.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "16px 0", borderTop: `1px solid ${C.borderSoft}` }}>
      <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "10.5px", color: C.textLow, marginBottom: "6px" }}>
        {new Date(issue.publishedAt + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
      </p>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", fontWeight: 600, color: C.textHigh, lineHeight: 1.35 }}>{issue.title}</p>
    </a>
  );
}

export default function HomePage() {
  const [uncoveredIdx, setUncoveredIdx] = useState(0);
  const scene = UNCOVERED_SCENES[uncoveredIdx];

  return (
    <Layout activePath="/">
      <style>{`
        .sp{padding:${LAYOUT.padDesktop} 56px;}
        @media(max-width:768px){.sp{padding:${LAYOUT.padMobile} 24px!important;}.uncov-scene-pad{padding:0 24px 40px!important;}}
        .hero-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:48px;align-items:start;}
        .hero-portrait-frame{width:100%;aspect-ratio:1122/1402;background:${C.bgSection};border:1px solid ${C.borderSoft};border-radius:6px;padding:14px;box-sizing:border-box;}
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;gap:36px!important;}
          .hero-portrait-frame{max-width:360px;margin:0 auto;}
        }
        .work-grid{display:grid;grid-template-columns:38fr 62fr;gap:48px;align-items:center;}
        @media(max-width:900px){.work-grid{grid-template-columns:1fr!important;}}
        .pd-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:44px;align-items:start;}
        @media(max-width:820px){.pd-grid{grid-template-columns:1fr!important;}}
        .loop-row{display:flex;align-items:center;flex-wrap:wrap;gap:8px 4px;}
        .loop-row .sep{color:${C.textLow};}
      `}</style>

      {/* ── HERO — identity + proposition + portrait ────────────── */}
      <section style={{ background: C.bg, paddingTop: "36px" }} className="sp">
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto", width: "100%" }}>
          <div className="hero-grid">
            <div>
              <SocialRow />
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: "18px" }}>
                Product · Markets · Systems
              </p>
              <h1 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(32px,4.4vw,56px)", fontWeight: 600, lineHeight: 1.1, color: C.textHigh, letterSpacing: "-0.01em", marginBottom: "22px" }}>
                I build at the <em style={{ fontStyle: "italic", fontWeight: 600, color: C.accent }}>intersections</em> of markets, technology, and regulated finance.
              </h1>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "16px", fontWeight: 400, color: C.textMid, lineHeight: 1.6, maxWidth: "48ch", marginBottom: "36px" }}>
                Outside work, that curiosity spills into investing, writing, endurance, travel, and the occasional hard thing.
              </p>
              <button
                onClick={() => document.getElementById("intersections")?.scrollIntoView({ behavior: "smooth" })}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textLow }}
              >
                See how I connect the dots ↓
              </button>
            </div>

            <div>
              <div className="hero-portrait-frame">
                <img
                  src={PHOTO.heroPortrait}
                  alt="Portrait of Udit Khurana (AI-generated)"
                  width={1122}
                  height={1402}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", color: C.textLow, textAlign: "center", marginTop: "10px" }}>
                AI-generated portrait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERSECTIONS ────────────────────────────────────────── */}
      <section id="intersections" style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "14px" }}>
              Where I Connect The Dots
            </p>
            <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(24px,3.2vw,36px)", fontWeight: 600, color: C.textHigh, marginBottom: "32px", maxWidth: "26ch" }}>
              A handful of pairings I keep coming back to.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <IntersectionEngine />
          </Reveal>
        </div>
      </section>

      {/* ── DO HARD THINGS ───────────────────────────────────────── */}
      <section id="do-hard-things" style={{ background: C.bg }} className="sp">
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "14px" }}>
              Do Hard Things
            </p>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", fontWeight: 400, color: C.textMid, maxWidth: "62ch", marginBottom: "28px" }}>
              Some things are worth doing precisely because they're difficult — endurance, adventure and discomfort have shaped how I think about consistency and growth.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <DoHardThings />
          </Reveal>
        </div>
      </section>

      {/* ── WORK / SYSTEMS ───────────────────────────────────────── */}
      <section style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <div className="work-grid">
            <Reveal>
              <div>
                <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 600, color: C.textHigh, lineHeight: 1.2, marginBottom: "16px", maxWidth: "16ch" }}>
                  The interesting product problem is usually three layers underneath the screen.
                </h2>
                <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: C.textLow, lineHeight: 1.7, marginBottom: "28px" }}>
                  {WORK_PROOF}
                </p>
                <a href="/work" onClick={e => { e.preventDefault(); navigate("/work"); }} style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent }}>
                  Explore Work →
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <SystemsUnderneath />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PER DIEM ─────────────────────────────────────────────── */}
      <section style={{ background: C.bg }} className="sp">
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
              <PerDiemWordmark size="lg" />
              <div style={{ display: "flex", gap: "20px" }}>
                <a href="/per-diem" onClick={e => { e.preventDefault(); navigate("/per-diem"); }} style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>View all →</a>
              </div>
            </div>
          </Reveal>
          <div className="pd-grid">
            <Reveal delay={0.05}>
              <a href={PER_DIEM_LATEST.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                {PER_DIEM_LATEST.coverImage && (
                  <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "6px", overflow: "hidden", marginBottom: "20px", backgroundImage: `url(${PER_DIEM_LATEST.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                )}
                {PER_DIEM_LATEST.connectionA && (
                  <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: "12px" }}>
                    {PER_DIEM_LATEST.connectionA} <span style={{ opacity: 0.5 }}>↔</span> {PER_DIEM_LATEST.connectionB}
                  </p>
                )}
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(20px,2.6vw,28px)", fontWeight: 600, color: C.textHigh, lineHeight: 1.3, marginBottom: "14px" }}>
                  {PER_DIEM_LATEST.thesis || PER_DIEM_LATEST.title}
                </p>
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textLow }}>
                  Read the argument →
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                {PER_DIEM_RECENT.slice(0, 2).map(issue => <PerDiemCard key={issue.id} issue={issue} />)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── UDIT UNCOVERED ───────────────────────────────────────── */}
      <section style={{ position: "relative", height: "75vh", minHeight: "480px", overflow: "hidden", background: "#111" }}>
        {scene.photo ? (
          <img key={scene.photo} src={scene.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity .5s ease" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${C.rustFaint}, #1a1a1a)` }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 56px 48px" }} className="uncov-scene-pad">
          <div style={{ maxWidth: "720px" }}>
            <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(26px,4.5vw,46px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, marginBottom: "14px" }}>
              Things I wanted to experience for myself.
            </h2>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)", marginBottom: "22px" }}>
              A running record of curiosity outside work.
            </p>

            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginBottom: "22px" }}>
              {UNCOVERED_SCENES.map((s, i) => (
                <button key={s.label} onClick={() => setUncoveredIdx(i)}
                  style={{
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: i === uncoveredIdx ? "#fff" : "rgba(255,255,255,0.5)",
                    borderBottom: i === uncoveredIdx ? "1.5px solid #fff" : "1.5px solid transparent",
                    paddingBottom: "4px", transition: "color .25s ease, border-color .25s ease",
                  }}>
                  {s.label}
                </button>
              ))}
            </div>

            <a href="/uncovered" onClick={e => { e.preventDefault(); navigate("/uncovered"); }}
              style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
              Enter Udit Uncovered →
            </a>
          </div>
        </div>
      </section>

      {/* ── OPERATING SYSTEM (compact — replaces the old /about page) ── */}
      <section style={{ background: C.bg }} className="sp">
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <ConvergeWords />
          <Reveal>
            <div className="loop-row" style={{ justifyContent: "center", marginTop: "8px", marginBottom: "18px" }}>
              {OPERATING_LOOP.map((s, i) => (
                <span key={s.key} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: C.textHigh }}>{s.label}</span>
                  {i < OPERATING_LOOP.length - 1 && <span className="sep">→</span>}
                </span>
              ))}
            </div>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14px", fontWeight: 400, color: C.textMid, maxWidth: "56ch", margin: "0 auto 20px", lineHeight: 1.6 }}>
              Different arenas. The same instinct — follow the question, understand the system, test it, do the difficult part, reflect, document.
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: C.textLow }}>
              {PROOF_STRIP.join("  ·  ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ADVISORY CTA ─────────────────────────────────────────── */}
      <section style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "17px", fontWeight: 500, color: C.textMid }}>
          Occasionally, I help founders and teams untangle difficult financial-product problems.{" "}
          <a href="/advisory" onClick={e => { e.preventDefault(); navigate("/advisory"); }} style={{ color: C.accent, fontWeight: 600 }}>
            Advisory →
          </a>
        </p>
      </section>
    </Layout>
  );
}

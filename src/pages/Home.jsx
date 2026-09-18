import { useRef, useState } from "react";
import Layout from "../components/Layout.jsx";
import { C, PHOTO } from "../constants.js";
import { PER_DIEM_LATEST } from "../content/per-diem.js";
import { PHOTOS } from "../photos.js";
import IntersectionEngine from "../components/IntersectionEngine.jsx";
import SystemsUnderneath from "../components/SystemsUnderneath.jsx";
import ConvergeWords from "../components/ConvergeWords.jsx";
import DoHardThings from "../components/DoHardThings.jsx";
import Reveal from "../components/Reveal.jsx";

// "Food" omitted for now — no real food photo exists in the repo, and a
// placeholder gradient isn't acceptable in this signature visual section
// (per review). Broader Udit Uncovered positioning still mentions food.
// "Travel" and "Experiments" previously pointed at watermarked photos
// ("Nubra at Golden Hour", "The Still Frame") — this full-bleed section
// needs clean photography regardless of what the gallery on /uncovered
// keeps.
const UNCOVERED_SCENES = [
  { label: "Travel", photo: PHOTOS.find(p => p.title === "Monastery in the Mirror")?.src },
  { label: "Endurance", photo: PHOTO.fitness },
  { label: "Stories", photo: PHOTOS.find(p => p.title === "A Life Fully Lived")?.src },
  { label: "Experiments", photo: PHOTOS.find(p => p.title === "At the Top, Looking Further")?.src },
];

function navigate(href) {
  if (href.startsWith("http")) { window.open(href, "_blank"); return; }
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function HomePage() {
  const scene2Ref = useRef(null);
  const [uncoveredIdx, setUncoveredIdx] = useState(0);
  const scene = UNCOVERED_SCENES[uncoveredIdx];

  return (
    <Layout activePath="/">
      <style>{`
        .sp{padding:100px 80px;}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.uncov-scene-pad{padding:0 24px 40px!important;}}
        .hero-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:56px;align-items:start;}
        .hero-portrait-frame{width:100%;aspect-ratio:1122/1402;background:${C.bgSection};border:1px solid ${C.borderSoft};border-radius:6px;padding:14px;box-sizing:border-box;}
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;gap:40px!important;}
          .hero-portrait-frame{max-width:380px;margin:0 auto;}
        }
      `}</style>

      {/* ── SCENE 1 — IDENTITY ──────────────────────────────────── */}
      <section style={{ minHeight: "94vh", display: "flex", flexDirection: "column", justifyContent: "center", background: C.bg }} className="sp">
        <div style={{ maxWidth: "1120px", margin: "0 auto", width: "100%" }}>
          <div className="hero-grid">
            {/* Copy column */}
            <div>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: "18px" }}>
                Product · Markets · Systems
              </p>
              <h1 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(32px,4.6vw,58px)", fontWeight: 400, lineHeight: 1.15, color: C.textHigh, letterSpacing: "-0.01em", marginBottom: "22px" }}>
                I build at the <em style={{ fontStyle: "italic", color: C.accent }}>intersections</em> of markets, technology, and regulated finance.
              </h1>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", fontWeight: 400, color: C.textMid, lineHeight: 1.65, maxWidth: "46ch", marginBottom: "40px" }}>
                Outside work, that curiosity spills into investing, writing, endurance, travel, and the occasional hard thing.
              </p>
              <button
                onClick={() => scene2Ref.current?.scrollIntoView({ behavior: "smooth" })}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textLow }}
              >
                Explore ↓
              </button>
            </div>

            {/* Portrait column */}
            <div>
              <div className="hero-portrait-frame">
                <img
                  src={PHOTO.heroPortrait}
                  alt="Portrait of Udit Khurana (AI-generated)"
                  width={1122}
                  height={1402}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", color: C.textLow, textAlign: "center", marginTop: "10px", letterSpacing: "0.02em" }}>
                AI-generated portrait.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "72px" }}>
            <IntersectionEngine />
          </div>
        </div>
      </section>

      {/* ── SCENE 2 — WHAT I BUILD ──────────────────────────────── */}
      <section ref={scene2Ref} style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.2, marginBottom: "48px", maxWidth: "18ch" }}>
              The interesting product problem is often three layers underneath the screen.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <SystemsUnderneath />
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginTop: "32px" }}>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12.5px", fontWeight: 500, color: C.textLow }}>10+ years moving through these layers.</p>
              <a href="/work" onClick={e => { e.preventDefault(); navigate("/work"); }} style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent }}>Explore Work →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SCENE 3 — PER DIEM (thesis-first) ───────────────────── */}
      <section style={{ background: C.bg }} className="sp">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Reveal>
            <a href={PER_DIEM_LATEST.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(26px,4.5vw,44px)", fontStyle: "italic", color: C.textHigh, lineHeight: 1.25, marginBottom: "28px" }}>
                {PER_DIEM_LATEST.thesis || PER_DIEM_LATEST.title}
              </p>
              {PER_DIEM_LATEST.connectionA && (
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, marginBottom: "24px" }}>
                  {PER_DIEM_LATEST.connectionA} <span style={{ opacity: 0.5 }}>↔</span> {PER_DIEM_LATEST.connectionB}
                </p>
              )}
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textLow }}>
                Per Diem · Read the argument →
              </p>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── SCENE 3.5 — DO HARD THINGS ───────────────────────────── */}
      <section style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "18px" }}>
              Do Hard Things
            </p>
            <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(26px,4vw,42px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.25, marginBottom: "14px", maxWidth: "22ch" }}>
              Some things are worth doing precisely because they're difficult.
            </h2>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, maxWidth: "56ch", marginBottom: "40px" }}>
              Endurance, adventure and discomfort have shaped how I think about consistency, resilience and growth.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <DoHardThings />
          </Reveal>
        </div>
      </section>

      {/* ── SCENE 4 — UDIT UNCOVERED (full-width photographic) ──── */}
      <section style={{ position: "relative", height: "88vh", minHeight: "560px", overflow: "hidden", background: "#111" }}>
        {scene.photo ? (
          <img key={scene.photo} src={scene.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity .5s ease" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${C.rustFaint}, #1a1a1a)` }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 80px 60px" }} className="uncov-scene-pad">
          <div style={{ maxWidth: "720px" }}>
            <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(28px,5vw,54px)", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: "16px" }}>
              Things I wanted to experience for myself.
            </h2>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)", marginBottom: "24px" }}>
              A running record of curiosity outside work.
            </p>

            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginBottom: "24px" }}>
              {UNCOVERED_SCENES.map((s, i) => (
                <button key={s.label} onClick={() => setUncoveredIdx(i)}
                  style={{
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                    color: i === uncoveredIdx ? "#fff" : "rgba(255,255,255,0.5)",
                    borderBottom: i === uncoveredIdx ? "1.5px solid #fff" : "1.5px solid transparent",
                    paddingBottom: "4px", transition: "color .25s ease, border-color .25s ease",
                  }}>
                  {s.label}
                </button>
              ))}
            </div>

            <a href="/uncovered" onClick={e => { e.preventDefault(); navigate("/uncovered"); }}
              style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff" }}>
              Enter Udit Uncovered →
            </a>
          </div>
        </div>
      </section>

      {/* ── SCENE 5 — THE CONNECTION ─────────────────────────────── */}
      <section style={{ background: C.bg }} className="sp">
        <a href="/about" onClick={e => { e.preventDefault(); navigate("/about"); }} style={{ display: "block", cursor: "pointer" }}>
          <ConvergeWords />
          <p style={{ textAlign: "center", marginTop: "-8px", fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent }}>
            About the operating system →
          </p>
        </a>
      </section>

      {/* ── SCENE 6 — QUIET CLOSE ────────────────────────────────── */}
      <section style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, padding: "56px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "18px", color: C.textMid }}>
          Occasionally, I help founders and teams untangle difficult financial-product problems.{" "}
          <a href="/advisory" onClick={e => { e.preventDefault(); navigate("/advisory"); }} style={{ color: C.accent, fontWeight: 500 }}>
            Advisory →
          </a>
        </p>
      </section>
    </Layout>
  );
}

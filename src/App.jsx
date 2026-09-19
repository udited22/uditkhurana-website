import { useState, useEffect } from "react";
import HomePage        from "./pages/Home.jsx";
import WorkPage        from "./pages/Work.jsx";
import ProjectsPage    from "./pages/Projects.jsx";
import EssayLifeIsIntelligentPage from "./pages/EssayLifeIsIntelligent.jsx";
import UditUncoveredPage from "./pages/UditUncovered.jsx";
import AdvisoryPage    from "./pages/Advisory.jsx";
import PerDiemPage     from "./pages/PerDiem.jsx";
import NotFoundPage    from "./pages/NotFound.jsx";

// Font loading lives in index.html now (a real <link>, discovered by the
// browser immediately on HTML parse) rather than a CSS @import here, which
// would only be discovered after this stylesheet itself loads and parses.
const GLOBAL_STYLES = `
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto;}*{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important;}}
  body{background:#FAF7F1;font-family:'IBM Plex Sans',-apple-system,sans-serif;}
  ::selection{background:rgba(14,107,116,0.16);}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-track{background:#FAF7F1;}
  ::-webkit-scrollbar-thumb{background:#0E6B74;border-radius:3px;}
  a{color:inherit;text-decoration:none;}
  button{font-family:'IBM Plex Sans',sans-serif;}
  :focus-visible{outline:2px solid #0E6B74;outline-offset:2px;}
`;

const ROUTES = {
  "/":            HomePage,
  "/work":        WorkPage,
  "/projects":    ProjectsPage,
  "/writing/life-is-intelligent": EssayLifeIsIntelligentPage,
  "/uncovered":   UditUncoveredPage,
  "/advisory":    AdvisoryPage,
  "/per-diem":    PerDiemPage,
};

// Per-route title/description/canonical/OG/Twitter tags — the site is a
// hand-rolled SPA with no server-rendered head, so this is the one place
// that needs to stay in sync when a route's positioning changes.
//
// PRECISE LIMITATION: this only helps clients that execute JavaScript
// before reading <head> — real browsers, and crawlers that render JS
// (Googlebot does). It does NOT help the large class of social-preview
// unfurlers that fetch raw HTML without executing JS (Slack, iMessage,
// WhatsApp, and most of Twitter/X's and LinkedIn's own link-preview
// fetchers) — those will always see index.html's static homepage OG tags
// regardless of which route was shared. Solving that properly needs
// prerendering or SSR, which is a larger architecture change outside this
// pass. Falls back to the index.html defaults (home) when a path has no
// entry below.
const SEO_DEFAULTS = { canonical: "https://uditkhurana.in" };
const SEO = {
  "/":            { title: "Udit Khurana — Product, Markets, Systems & Per Diem", desc: "Building financial products and the systems underneath them. Writer of Per Diem. Selective advisory. Living the eclectic life through Udit Uncovered." },
  "/work":        { title: "Work — Udit Khurana", desc: "Product leadership across financial services, capital markets, and crypto — the systems underneath how people invest, spend, and move money." },
  "/per-diem":    { title: "Per Diem — Udit Khurana", desc: "An ongoing writing experiment on markets, technology, products, and the systems connecting them." },
  "/advisory":    { title: "Advisory — Udit Khurana", desc: "Selective advisory for founders and product leaders building in fintech, crypto, and regulated financial products." },
  "/uncovered":   { title: "Udit Uncovered — Udit Khurana", desc: "Travel, endurance, adventure, and the eclectic life outside of work. The curated doorway to @udituncovered." },
  "/projects":    { title: "Selected Work — Udit Khurana", desc: "Independent builds outside the day job — mostly crypto-exchange infrastructure and AI agents." },
};

function getPath() {
  return window.location.pathname || "/";
}

export default function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = SEO[path];
    if (!meta) return;

    document.title = meta.title;
    const setMeta = (selector, attr, value) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute(attr, value);
    };
    const canonicalUrl = SEO_DEFAULTS.canonical + (path === "/" ? "" : path);

    setMeta('meta[name="description"]', "content", meta.desc);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.desc);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.desc);
  }, [path]);

  const Page = ROUTES[path] || NotFoundPage;

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <Page />
    </>
  );
}

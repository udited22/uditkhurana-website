import { useState, useEffect } from "react";
import HomePage        from "./pages/Home.jsx";
import AboutPage       from "./pages/About.jsx";
import WorkPage        from "./pages/Work.jsx";
import ProjectsPage    from "./pages/Projects.jsx";
import EssayLifeIsIntelligentPage from "./pages/EssayLifeIsIntelligent.jsx";
import UditUncoveredPage from "./pages/UditUncovered.jsx";
import AdvisoryPage    from "./pages/Advisory.jsx";
import PerDiemPage     from "./pages/PerDiem.jsx";
import NotFoundPage    from "./pages/NotFound.jsx";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto;}*{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important;}}
  body{background:#FAF7F1;}
  ::selection{background:rgba(14,107,116,0.16);}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-track{background:#FAF7F1;}
  ::-webkit-scrollbar-thumb{background:#0E6B74;border-radius:3px;}
  a{color:inherit;text-decoration:none;}
  button{font-family:'DM Sans',sans-serif;}
  :focus-visible{outline:2px solid #0E6B74;outline-offset:2px;}
`;

const ROUTES = {
  "/":            HomePage,
  "/about":       AboutPage,
  "/work":        WorkPage,
  "/projects":    ProjectsPage,
  "/writing/life-is-intelligent": EssayLifeIsIntelligentPage,
  "/uncovered":   UditUncoveredPage,
  "/advisory":    AdvisoryPage,
  "/per-diem":    PerDiemPage,
};

// Per-route <title>/description — the site is a hand-rolled SPA with no
// server-rendered head, so this is the one place that needs to stay in
// sync when a route's positioning changes. Falls back to the index.html
// defaults (home) when a path has no entry.
const SEO = {
  "/":            { title: "Udit Khurana — Product, Markets, Systems & Per Diem", desc: "Building financial products and the systems underneath them. Writer of Per Diem. Selective advisory. Living the eclectic life through Udit Uncovered." },
  "/work":        { title: "Work — Udit Khurana", desc: "Product leadership across financial services, capital markets, and crypto — the systems underneath how people invest, spend, and move money." },
  "/per-diem":    { title: "Per Diem — Udit Khurana", desc: "An ongoing writing experiment on markets, technology, products, and the systems connecting them." },
  "/advisory":    { title: "Advisory — Udit Khurana", desc: "Selective advisory for founders and product leaders building in fintech, crypto, and regulated financial products." },
  "/uncovered":   { title: "Udit Uncovered — Udit Khurana", desc: "Travel, endurance, adventure, and the eclectic life outside of work. The curated doorway to @udituncovered." },
  "/about":       { title: "About — Udit Khurana", desc: "How building at intersections, seeing the systems underneath, and doing difficult things all add up to one operating philosophy." },
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
    if (meta) {
      document.title = meta.title;
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", meta.desc);
    }
  }, [path]);

  const Page = ROUTES[path] || NotFoundPage;

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <Page />
    </>
  );
}

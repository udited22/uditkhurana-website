import { useState, useEffect } from "react";
import HomePage        from "./pages/Home.jsx";
import AboutPage       from "./pages/About.jsx";
import WorkPage        from "./pages/Work.jsx";
import EssayLifeIsIntelligentPage from "./pages/EssayLifeIsIntelligent.jsx";
import AdventurePage   from "./pages/Adventure.jsx";
import FitnessPage     from "./pages/Fitness.jsx";
import AdvisoryPage    from "./pages/Advisory.jsx";
import PerDiemPage     from "./pages/PerDiem.jsx";
import NotFoundPage    from "./pages/NotFound.jsx";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{background:#0B0B0C;}
  ::selection{background:rgba(201,162,75,0.2);}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-track{background:#0B0B0C;}
  ::-webkit-scrollbar-thumb{background:#C9A24B;border-radius:3px;}
  a{color:inherit;text-decoration:none;}
  button{font-family:'DM Sans',sans-serif;}
`;

const ROUTES = {
  "/":            HomePage,
  "/about":       AboutPage,
  "/work":        WorkPage,
  "/writing/life-is-intelligent": EssayLifeIsIntelligentPage,
  "/adventure":   AdventurePage,
  "/fitness":     FitnessPage,
  "/advisory":    AdvisoryPage,
  "/per-diem":    PerDiemPage,
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
  }, [path]);

  const Page = ROUTES[path] || NotFoundPage;

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <Page />
    </>
  );
}

import { useState, useEffect } from "react";
import HomePage        from "./pages/Home.jsx";
import AboutPage       from "./pages/About.jsx";
import WritingPage     from "./pages/Writing.jsx";
import PhotographyPage from "./pages/Photography.jsx";
import AdvisoryPage    from "./pages/Advisory.jsx";
import PerDiemPage     from "./pages/PerDiem.jsx";
import DisciplinePage  from "./pages/Discipline.jsx";
import NotFoundPage    from "./pages/NotFound.jsx";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{background:#07111C;}
  ::selection{background:rgba(28,143,166,0.2);}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-track{background:#07111C;}
  ::-webkit-scrollbar-thumb{background:#1C8FA6;border-radius:3px;}
  a{color:inherit;text-decoration:none;}
  button{font-family:'DM Sans',sans-serif;}
`;

const ROUTES = {
  "/":            HomePage,
  "/about":       AboutPage,
  "/writing":     WritingPage,
  "/photography": PhotographyPage,
  "/advisory":    AdvisoryPage,
  "/per-diem":    PerDiemPage,
  "/discipline":  DisciplinePage,
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

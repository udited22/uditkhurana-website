// ─── PALETTE ────────────────────────────────────────────────────
// Warm off-white base, near-black type, one restrained deep-peacock accent.
// V3: Udit Uncovered no longer leans on its own rust UI color for most of
// its surface — photography carries the color there now. `rust` is kept,
// used sparingly (a label, a hairline), not as a competing site identity.
export const C = {
  bg:         "#FAF7F1",
  bgCard:     "#FFFFFF",
  bgSection:  "#F2ECDF",
  bgLight:    "#EAE2CF",
  textHigh:   "#18181A",
  textMid:    "#4A473F",
  textLow:    "#726B5C",
  accent:     "#0E6B74",
  accentDim:  "rgba(14,107,116,0.55)",
  accentFaint:"rgba(14,107,116,0.10)",
  onAccent:   "#FAF7F1",
  border:     "rgba(14,107,116,0.22)",
  borderSoft: "rgba(24,25,26,0.10)",
  rust:       "#A85736",
  rustFaint:  "rgba(168,87,54,0.10)",
  rustBorder: "rgba(168,87,54,0.35)",
};

// ─── PHOTOS ───────────────────────────────────────────────────────
export const PHOTO = {
  heroLandscape: "/photos/hero-adventure-landscape.jpg", // Nubra Valley, Ladakh — golden hour
  product:       "/photos/headshot-professional.jpg",     // professional headshot
  adventure:     "/photos/adventure-diving.jpg",           // PADI advanced dive, wreck
  fitness:       "/photos/fitness-ironman.jpg",            // Ironman 70.3 Goa 2024, finisher
};

// ─── CONTACT ────────────────────────────────────────────────────
export const CONTACT_EMAIL = "writetouditkhurana@gmail.com";

// ─── SOCIAL ─────────────────────────────────────────────────────
export const SOCIAL = {
  linkedin: "https://linkedin.com/in/uditkhurana",
  instagram: "https://www.instagram.com/udituncovered/",
  github: "https://github.com/udited22?tab=repositories",
};

// ─── PER DIEM NEWSLETTER ──────────────────────────────────────────
// LinkedIn's own "follow this newsletter" action, provided directly by Udit —
// do not regenerate or guess this URL.
export const PER_DIEM_LINKEDIN_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7502097177293492225";

export function linkedInEmbedSrc(url) {
  const match = url.match(/share-(\d+)/);
  if (!match) return null;
  return `https://www.linkedin.com/embed/feed/update/urn:li:share:${match[1]}`;
}

// ─── NAV LINKS ────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Work",            href: "/work"      },
  { label: "Per Diem",        href: "/per-diem"  },
  { label: "Advisory",        href: "/advisory"  },
  { label: "Udit Uncovered",  href: "/uncovered" },
  { label: "About",           href: "/about"     },
];

// ─── INTERSECTIONS ────────────────────────────────────────────────
// The hero's signature interaction. Each pair drives an adjacent evidence
// panel on hover (desktop) / swipe (mobile) — see IntersectionEngine.jsx.
export const INTERSECTIONS = [
  { a: "Markets", b: "Technology", evidence: "Trading systems and market infrastructure — where execution speed becomes a product decision." },
  { a: "Product", b: "Infrastructure", evidence: "The customer screen is one layer. Underneath: APIs, flows, and rails most users never see." },
  { a: "Regulation", b: "Experience", evidence: "Onboarding journeys shaped as much by regulatory architecture as by design." },
  { a: "Business Models", b: "Behaviour", evidence: "Per Diem — an ongoing writing experiment on why these two are never really separate." },
  { a: "Traditional Finance", b: "New Rails", evidence: "Global assets, crypto, and the GIFT City evolution of how capital crosses borders." },
];

// ─── SYSTEMS UNDERNEATH ───────────────────────────────────────────
// Used on Home (Scene 2) and Work — the three-layer visual. See
// SystemsUnderneath.jsx.
export const LAYERS = [
  { key: "experience", label: "Experience", items: ["Onboarding", "Trading", "Portfolio", "Discovery"] },
  { key: "machinery",  label: "Product machinery", items: ["Order flow", "Money movement", "Market data", "Reconciliation", "Identity"] },
  { key: "systems",    label: "System underneath", items: ["Market structure", "Regulation", "Infrastructure", "Risk", "Operations"] },
];

// ─── OPERATING LOOP ───────────────────────────────────────────────
// The About page's spine: a six-state loop the visitor scrolls through.
export const OPERATING_LOOP = [
  { key: "curiosity",  label: "Curiosity",  text: "I tend to follow questions further than necessary." },
  { key: "systems",    label: "Systems",    text: "Eventually I want to know what is actually underneath the thing." },
  { key: "experiment", label: "Experiment", text: "Understanding gets more interesting once something is tested." },
  { key: "do",         label: "Do",         text: "Some ideas are only useful after they survive discomfort." },
  { key: "reflect",    label: "Reflect",    text: "Experience without reflection is mostly just activity." },
  { key: "document",   label: "Document",   text: "Writing forces the connections to become explicit." },
];

// ─── ABOUT PROOF STRIP ────────────────────────────────────────────
// Plain typography, no cards, no icons — see About.jsx.
export const PROOF_STRIP = [
  "10+ years in financial systems",
  "Ironman 70.3",
  "PADI Advanced Open Water",
  "Per Diem",
  "Bengaluru",
];

// ─── CAREER: PROBLEM-SPACE TIMELINE ───────────────────────────────
// The intellectual journey — used on Work. Companies are metadata (see
// JOURNEY / CAREER_MATRIX below), not the primary axis here.
export const TIMELINE = [
  { year: "2014", label: "Enterprise financial systems" },
  { year: "2016", label: "Independent markets practice" },
  { year: "2018", label: "Bank lending & workflow infrastructure" },
  { year: "2020", label: "Core banking product systems" },
  { year: "2021", label: "Retail investing infrastructure" },
  { year: "2025", label: "Crypto, market infrastructure & global assets" },
  { year: "Now",  label: "Regulated global investing infrastructure, via GIFT City" },
];

// ─── CAREER: SYSTEMS MATRIX ───────────────────────────────────────
// Company × layer accumulation grid. `filled` aligns positionally with
// `layers`. smallcase and CoinDCX rows are given directly in the brief.
// The three earlier rows are grounded directly in each chapter's own
// documented scope in JOURNEY below, dot by dot — not a general
// extrapolation:
//   Infosys (SAP FICO for corporate finance ops): Transactions, Operations.
//   Newgen (BPM-based commercial lending, "regulated banking
//     infrastructure"): Transactions, Regulation, Operations.
//   Finacle (owned the loan origination product line — an internal
//     origination tool for loan officers, not a direct retail-customer
//     surface, so Experience is deliberately left unmarked): Transactions,
//     Regulation, Operations.
// CoinDCX's Distribution is true, not false — the current chapter's own
// scope includes Launch/GTM, and the earlier-internal-scope note below
// names retail growth/distribution directly; marking it false would
// contradict the chapter's own text.
export const CAREER_MATRIX = {
  layers: ["Experience", "Distribution", "Transactions", "Money Movement", "Market Infrastructure", "Regulation", "Operations / Risk"],
  rows: [
    { company: "Infosys",   period: "2014–2016",    filled: [false, false, true,  false, false, false, true] },
    { company: "Newgen",    period: "2018–2020",    filled: [false, false, true,  false, false, true,  true] },
    { company: "Finacle",   period: "2020–2021",    filled: [false, false, true,  false, false, true,  true] },
    { company: "smallcase", period: "2021–2025",    filled: [true,  true,  true,  true,  true,  true,  true] },
    { company: "CoinDCX",   period: "2025–Present", filled: [true,  true,  true,  true,  true,  true,  true] },
  ],
};

// ─── THE JOURNEY ───────────────────────────────────────────────────
// Newest to oldest. The two most recent chapters carry real substance
// (current mandate + scope for CoinDCX, proof points for smallcase);
// earlier chapters are one sentence each until deliberately expanded.
// No projected/unlaunched-scope numbers, no derivatives or Bahrain-volume
// projections — Bahrain is a delivered proof point, not the current
// chapter's centerpiece.
export const JOURNEY = [
  {
    years: "Dec 2025–Present", company: "CoinDCX", role: "Principal Product Manager", active: true,
    headline: "Building regulated global investing infrastructure through GIFT City.",
    scope: [
      "Global Assets / US investing", "Product proposition", "Regulated onboarding",
      "Brokerage infrastructure", "Money movement / LRS", "Trading systems",
      "Market data", "Portfolio infrastructure", "Compliance architecture",
      "Operating model", "Launch / GTM",
    ],
    earlier: [
      { label: "Bahrain", detail: "Delivered international market entry — the first expansion beyond India's regulatory perimeter." },
      { label: "Core Exchange", detail: "Earlier internal scope: core exchange infrastructure and order flow." },
      { label: "Retail Growth", detail: "Earlier internal scope: retail activation and distribution." },
    ],
  },
  {
    years: "Sep 2021–Dec 2025", company: "smallcase & Tickertape", role: "Senior Product Manager", active: false,
    headline: "Scaling investing infrastructure across brokers, AMCs, and asset classes.",
    proof: [
      "7 PMs led",
      "40+ AMCs through the EOP ecosystem",
      "₹250Cr+ mutual-fund transactions",
      "₹10,000–15,000Cr equity flows",
      "Major broker integrations — Zerodha, Groww, ICICI Direct, Dhan, and others",
      "US investing / GIFT City work",
    ],
  },
  { years: "2020–2021", company: "EdgeVerve (Finacle)",       role: "Associate Product Manager", active: false, sentence: "Enterprise lending product systems." },
  { years: "2018–2020", company: "Newgen Software",            role: "Banking COE Consultant",     active: false, sentence: "Commercial lending and banking transformation." },
  { years: "2016–2017", company: "Akshada Investment Solutions", role: "Proprietor",                active: false, sentence: "A practitioner chapter: markets before product." },
  { years: "2014–2016", company: "Infosys",                     role: "Systems Engineer",           active: false, sentence: "Enterprise financial systems foundation." },
];

// ─── ADVISORY: PROBLEM TYPES ──────────────────────────────────────
// Exactly three, per V3 — click reveals 2–3 lines. Not a service menu.
export const ADVISORY_PROBLEMS = [
  {
    title: "Financial product strategy",
    detail: "Positioning, sequencing, and roadmap decisions for teams building fintech and financial products.",
  },
  {
    title: "Market, brokerage & wealth infrastructure",
    detail: "Brokerage, investing platforms, and the market infrastructure underneath them.",
  },
  {
    title: "Regulated zero-to-one systems",
    detail: "Standing up new, regulated financial infrastructure from scratch — where regulation is a first-class design constraint, not an afterthought.",
  },
];

// ─── SIDE PROJECTS (public GitHub builds) ────────────────────────
export const PROJECTS = [
  {
    name: "Aegis",
    tag: "Exchange Intelligence",
    stack: "TypeScript · Full-Stack",
    summary: "A role-gated, real-time intelligence platform for crypto exchange health — liquidity, revenue, and competitive positioning in one view.",
    url: "https://github.com/udited22/aegis",
  },
  {
    name: "Sentinel",
    tag: "Market Infrastructure",
    stack: "Python",
    summary: "Real-time order book health monitoring across crypto exchanges, with composite scoring, alerting, and a live dashboard.",
    url: "https://github.com/udited22/sentinel",
  },
  {
    name: "Rapid Ring",
    tag: "AI Agents",
    stack: "Python",
    summary: "An autonomous AI agent that runs crypto exchange trade-ops SOPs end-to-end, with risk-tiered human approval built in, not bolted on.",
    url: "https://github.com/udited22/rapid-ring",
  },
  {
    name: "Algo Trading Platform",
    tag: "Quant & Trading",
    stack: "FastAPI · Next.js",
    summary: "A full-stack algo trading platform for crypto — strategy code moves from backtest to paper trading to live execution without changing logic at any step.",
    url: "https://github.com/udited22/algo-trading-platform",
  },
  {
    name: "Niyam",
    tag: "RegTech & AI",
    stack: "Python · RAG",
    summary: "A RAG-powered regulatory co-pilot for Indian fintech — ask plain-English questions on SEBI, AMFI, and IFSCA rules, or audit a PRD before it reaches compliance review.",
    url: "https://github.com/udited22/niyam",
  },
  {
    name: "Exposure Dashboard",
    tag: "Risk & Crypto",
    stack: "Early Build",
    summary: "A planned dashboard for tracking custody and concentration risk across wallets and venues on a crypto platform. Design in progress.",
    url: "https://github.com/udited22/exposure-dashboard",
  },
  {
    name: "Morpheus Rapid Ring",
    tag: "Experimental",
    stack: "Early Build",
    summary: "A reserved build slot for a related trade-ops experiment, distinct from Rapid Ring. Early-stage.",
    url: "https://github.com/udited22/morpheus-rapid-ring",
  },
];

export const RESEARCH_PORTFOLIO_URL = "https://app.notion.com/p/theeclecticlife/Side-Projects-Product-Portfolio-1438f1766bce8074af71e29411b1afbd?source=copy_link";

// ─── PERSONAL ESSAYS ──────────────────────────────────────────────
export const ESSAYS = [
  { title: "Life is Intelligent", tag: "Philosophy", url: "/writing/life-is-intelligent", min: "3 min" },
];

// ─── PALETTE ────────────────────────────────────────────────────
// Neutral warm-charcoal editorial base (not blue-tinted) so it can host
// three very different photo-led pillars without any one of them fighting
// a pre-tinted background. A single warm "signature" gold ties the whole
// site together — echoing the golden-hour mountain light and the Ironman
// medal — while each pillar (Product, Adventure, Fitness) carries its own
// accent drawn from its own photo, applied locally on its own page/card.
export const C = {
  bg:         "#0B0B0C",
  bgCard:     "#151517",
  bgSection:  "#111113",
  bgLight:    "#1D1D20",
  textHigh:   "#F3F1ED",
  textMid:    "#ABA8A1",
  textLow:    "#6E6B65",
  gold:       "#C9A24B",
  goldDim:    "rgba(201,162,75,0.55)",
  goldFaint:  "rgba(201,162,75,0.12)",
  border:     "rgba(201,162,75,0.16)",
  borderSoft: "rgba(243,241,237,0.08)",
};

// ─── PILLAR ACCENTS ─────────────────────────────────────────────
// Drawn from each pillar's own photo: steel-navy from the suit, ocean
// teal from the dive, terracotta from the beach/medal.
export const PILLAR_ACCENTS = {
  product:   { accent: "#5B85BE", soft: "rgba(91,133,190,0.13)", border: "rgba(91,133,190,0.4)" },
  adventure: { accent: "#2CA3AD", soft: "rgba(44,163,173,0.13)", border: "rgba(44,163,173,0.4)" },
  fitness:   { accent: "#D0724F", soft: "rgba(208,114,79,0.13)", border: "rgba(208,114,79,0.4)" },
};

// ─── PHOTOS (drop the real files here) ───────────────────────────
// Place these four images at the exact paths below (public/ is served
// as-is by Vite) and every reference on the site lights up automatically.
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
  instagram: "https://instagram.com/livingtheeclecticlife",
  github: "https://github.com/udited22?tab=repositories",
};

// ─── PER DIEM NEWSLETTER ──────────────────────────────────────────
// LinkedIn's own "follow this newsletter" action, provided directly by Udit — the
// entityUrn identifies the Per Diem Newsletter object on LinkedIn. Do not regenerate
// or guess this URL; if it ever needs to change, get the fresh one from LinkedIn's
// own share/embed panel for the newsletter.
export const PER_DIEM_LINKEDIN_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7502097177293492225";

// ─── LINKEDIN EMBED HELPER ──────────────────────────────────────
// LinkedIn doesn't offer a public API to pull a personal profile's
// activity feed, but it does support embedding a specific known post
// via a public iframe keyed on the post's numeric share id — present in
// linkedin.com/posts/...-share-<id>-... URLs. No API key needed.
// Only the "share-" URL pattern reliably resolves to a valid embed —
// "activity-" and "ugcPost-" ids point at feed/document objects that
// render LinkedIn's own "Page not found" inside the iframe, so those
// fall back to a plain outbound link instead of a broken-looking embed.
export function linkedInEmbedSrc(url) {
  const match = url.match(/share-(\d+)/);
  if (!match) return null;
  return `https://www.linkedin.com/embed/feed/update/urn:li:share:${match[1]}`;
}

// ─── NAV LINKS ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",             href: "/about"     },
  { label: "Product & Fintech", href: "/work"      },
  { label: "Projects",          href: "/projects"  },
  { label: "Adventure",         href: "/adventure" },
  { label: "Fitness",           href: "/fitness"   },
  { label: "Advisory",          href: "/advisory"  },
];

// ─── THE THREE PILLARS (homepage entry, source of truth for the IA) ──
export const PILLARS = [
  {
    key: "product",
    title: "Product & Fintech",
    tagline: "Building the infrastructure India invests through.",
    desc: "10+ years across TradFi, fintech, and crypto — Principal PM at CoinDCX. Essays, advisory, and field notes.",
    credLine: "Principal PM · CoinDCX",
    href: "/work",
    photo: PHOTO.product,
    ...PILLAR_ACCENTS.product,
  },
  {
    key: "adventure",
    title: "Adventure",
    tagline: "PADI Advanced Open Water Diver. Always chasing the next horizon.",
    desc: "Dives, treks, and long road trips — the eclectic life, in motion.",
    credLine: "PADI Advanced Diver",
    href: "/adventure",
    photo: PHOTO.adventure,
    ...PILLAR_ACCENTS.adventure,
  },
  {
    key: "fitness",
    title: "Fitness",
    tagline: "Ironman 70.3 Finisher, Goa 2024.",
    desc: "Swim, bike, run — training as an operating system, not a hobby.",
    credLine: "Ironman 70.3 Finisher",
    href: "/fitness",
    photo: PHOTO.fitness,
    ...PILLAR_ACCENTS.fitness,
  },
];

// ─── FEATURED (homepage strip, non-LinkedIn — max 2) ────────────
export const FEATURED = [
  {
    type: "PHOTO STORY",
    title: "Nubra at Golden Hour",
    desc: "A roadside puddle, fading sunlight, and perfect timing in Ladakh.",
    href: "/adventure",
    cta: "View Gallery",
    external: false,
  },
  {
    type: "ADVISORY",
    title: "Work With Me",
    desc: "A small number of high-context conversations for fintech founders and product leaders.",
    href: "/advisory",
    cta: "See How I Can Help",
    external: false,
  },
];

// ─── WRITINGS ────────────────────────────────────────────────────
// Real LinkedIn posts, manually curated (LinkedIn has no public API for
// pulling a personal profile's activity — see .claude/skills/integration-tech-plan).
// The first three are embedded live via linkedInEmbedSrc().
export const WRITINGS = [
  { platform: "LinkedIn", tag: "FINTECH",    title: "What Decades of Indian Broking Data Actually Tells You",  summary: "A deep-dive into India's broking landscape — market structure, players, growth drivers, and what it means for product builders.", url: "https://www.linkedin.com/posts/uditkhurana_indian-broking-industry-research-report-ugcPost-7396808985280073730-5r36", min: "12 min" },
  { platform: "LinkedIn", tag: "PRODUCT",    title: "Markets Move Faster Than Your Backlog",                  summary: "Why fintech product teams need a different operating rhythm — and how to build a backlog that can actually keep up with market velocity.", url: "https://www.linkedin.com/posts/uditkhurana_markets-move-faster-than-your-backlog-it-share-7392407198410350592-Bjeh", min: "5 min" },
  { platform: "LinkedIn", tag: "FINTECH",    title: "Don't Let Compliance Write Your UX",                     summary: "The hard-learned lesson most fintech teams discover too late — how to design for regulation without ruining the product experience.", url: "https://www.linkedin.com/posts/uditkhurana_most-teams-discover-this-the-hard-way-you-activity-7371399542723944448-WSP-", min: "4 min" },
  { platform: "LinkedIn", tag: "SYSTEMS",    title: "Data Is Never Perfect",                                   summary: "Waiting for clean data means waiting forever. A framework for making confident decisions with imperfect information.", url: "https://www.linkedin.com/posts/uditkhurana_fintech-productthinking-systemdesign-share-7356236354931904514-_3qf", min: "5 min" },
  { platform: "LinkedIn", tag: "CAREER",     title: "Where Does Product Sense Come From?",                    summary: "Product intuition is not a trait — it's a practice. Notes on how experienced PMs develop judgment.", url: "https://www.linkedin.com/posts/uditkhurana_where-does-product-sense-come-from-at-some-share-7290690643297812480-PSlF", min: "6 min" },
  { platform: "Essay",    tag: "PHILOSOPHY", title: "Life is Intelligent",                                    summary: "On trusting that the dots — the near-misses, the closed doors, the strangers' small gestures — connect looking backwards, even when the future gives no guarantees.", url: "/writing/life-is-intelligent", min: "3 min" },
];

// ─── SIDE PROJECTS (public GitHub builds) ────────────────────────
// Kept in sync with github.com/udited22 — one-line status tags on the
// two early-stage scaffolds (Exposure Dashboard, Morpheus Rapid Ring)
// are honest about where they are, not padded to look further along.
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

// ─── ADVISORY AREAS ─────────────────────────────────────────────
// General areas of help — not a fixed engagement menu.
export const ADVISORY_AREAS = [
  { icon: "compass",         title: "Product Strategy & Roadmap",    desc: "Cutting through noise to define what matters — sequencing, prioritization, and roadmaps for early-stage teams and product leaders." },
  { icon: "wallet",          title: "Fintech, Crypto & Wealth",      desc: "General domain guidance across equity investing infrastructure, crypto exchanges, and wealth products." },
  { icon: "trending-up",     title: "Growth & Activation",           desc: "How products grow, retain, and build durable habits over time." },
  { icon: "clock",           title: "PM Cadence & Execution",        desc: "Operating rituals and rhythms that make execution consistent across chaos." },
  { icon: "cpu",             title: "AI-Enabled PM Workflows",       desc: "Using AI to think faster, write better, and ship more — without losing judgment." },
  { icon: "graduation-cap",  title: "Career & Leadership Mentoring", desc: "General guidance for PMs and product leaders navigating their next move." },
];

// ─── CRED STRIP ──────────────────────────────────────────────────
export const CRED = [
  { val: "10+",       sub: "Years in Product & Fintech"  },
  { val: "Ironman",   sub: "70.3 Finisher · Goa 2024"    },
  { val: "PADI",      sub: "Advanced Open Water Diver"   },
  { val: "CoinDCX",   sub: "Principal PM · Current"      },
  { val: "Bengaluru", sub: "Building in public"          },
];

// ─── JOURNEY ─────────────────────────────────────────────────────
// The real span, per résumé — newest to oldest. Framed by scope and domain,
// not delivered-impact metrics: each stop is here to show breadth (asset
// classes, regulatory regimes, and how much was owned), not a highlight reel.
export const JOURNEY = [
  {
    years: "2025–Present", company: "CoinDCX", role: "Principal Product Manager",
    sub: "India's leading crypto exchange. Now owning multiple product charters spanning core exchange infrastructure, retail growth, and international market expansion into the GCC.",
    active: true,
  },
  {
    years: "2021–2025", company: "smallcase & Tickertape", role: "Senior Product Manager",
    sub: "Four years building regulated investing infrastructure — mutual funds, US equities, and broker integrations — leading a team of product managers across concurrent product lines.",
    active: false,
  },
  {
    years: "2020–2021", company: "EdgeVerve (Finacle)", role: "Associate Product Manager",
    sub: "First product role — owned the loan origination product line for retail and commercial lending on Infosys' enterprise banking platform.",
    active: false,
  },
  {
    years: "2018–2020", company: "Newgen Software", role: "Banking COE Consultant",
    sub: "Consulted global banks on BPM-based commercial lending, including large-scale loan digitisation — the first deep immersion in regulated banking infrastructure.",
    active: false,
  },
  {
    years: "2016–2017", company: "Akshada Investment Solutions", role: "Proprietor",
    sub: "Independently managed portfolios across equities, F&O, real estate, and insurance — a market practitioner's chapter before becoming a product builder.",
    active: false,
  },
  {
    years: "2014–2016", company: "Infosys", role: "Systems Engineer",
    sub: "Enterprise financial systems — implementing SAP FICO for large corporate finance operations. The technical grounding everything since has built on.",
    active: false,
  },
];

// ─── COMPANIES ────────────────────────────────────────────────────
export const COMPANIES = [
  { name: "CoinDCX",           era: "2025–Present" },
  { name: "smallcase & Tickertape", era: "2021–2025" },
  { name: "EdgeVerve · Finacle", era: "2020–2021" },
  { name: "Newgen Software",   era: "2018–2020" },
  { name: "Infosys",           era: "2014–2016" },
];

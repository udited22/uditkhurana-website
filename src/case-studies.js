// ─── ADVISORY CASE STUDIES ───────────────────────────────────────
// Block schema rendered by src/components/CaseStudy.jsx:
//   { t: "h3", text }                          — major step heading
//   { t: "h4", text }                          — sub-heading
//   { t: "p", text }                           — paragraph
//   { t: "ul", items: [] }                     — bullet list
//   { t: "quote", text }                       — pull-quote emphasis
//   { t: "flow", items: [] }                   — vertical stage-by-stage flow
//   { t: "proscons", label, pros: [], cons: [], rec }
//   { t: "reco", label, lead, items?: [], rec }
export const CASE_STUDIES = [
  {
    tag: "FINTECH STRATEGY",
    title: "Advising an EdTech Startup Pivoting into FinTech",
    blocks: [
      { t: "h4", text: "Context" },
      { t: "p", text: "A Series A EdTech company had built a user base of young professionals preparing for finance and accounting certifications. While engagement remained healthy, monetisation had plateaued." },
      { t: "p", text: "The founders believed they had enough trust with users to evolve into a financial wellness platform. The initial roadmap included:" },
      { t: "ul", items: ["Fixed Deposits", "Mutual Funds", "Digital Gold", "Financial Education", "Goal Planning"] },
      { t: "p", text: "I was brought in as an external product strategy advisor before the first launch." },

      { t: "h3", text: "Step 1 — Validate whether the pivot itself made sense" },
      { t: "p", text: "Instead of evaluating products individually, I started with a broader question:" },
      { t: "quote", text: "Should this company even become a fintech?" },
      { t: "p", text: "We evaluated:" },
      { t: "ul", items: ["Existing user trust", "Regulatory implications", "CAC vs. fintech peers", "Willingness to move money through the platform", "Frequency of financial interactions", "LTV expansion opportunity"] },
      { t: "p", text: "The biggest insight:" },
      { t: "quote", text: "Users trusted the platform for learning, not yet for wealth management." },
      { t: "p", text: "That meant trust had to be progressively earned." },

      { t: "h3", text: "Step 2 — Reframing the Product Strategy" },
      { t: "p", text: "The founders originally wanted to launch four investment products simultaneously. I advised against a horizontal launch — instead, we structured the platform as a financial maturity journey." },
      { t: "flow", items: ["Financial literacy", "Personal finance tools", "Savings", "Investments", "Long-term wealth"] },
      { t: "p", text: "The products became outcomes rather than standalone offerings." },

      { t: "h3", text: "Step 3 — Product Mix Evaluation" },
      { t: "p", text: "We evaluated every product across:" },
      { t: "ul", items: ["User demand", "Complexity", "Compliance burden", "Margins", "Operational overhead", "Support requirements", "Trust requirements", "Activation friction"] },
      { t: "proscons", label: "Fixed Deposits", pros: ["Simple", "Trusted", "Predictable"], cons: ["Thin economics", "Weak engagement"], rec: "Use FD as an onboarding trust product rather than a revenue product." },
      { t: "reco", label: "Mutual Funds", lead: "Highest long-term strategic value.", items: ["Recurring SIP behaviour", "Portfolio stickiness", "Cross-sell opportunities", "Higher LTV"], rec: "Make MFs the platform's core investment engine." },
      { t: "reco", label: "Digital Gold", lead: "Useful only for specific personas.", rec: "Treat as an engagement product rather than a primary investment offering." },
      { t: "reco", label: "Financial Education", lead: "Education shouldn't exist as separate content — instead, embed learning into investing journeys.", items: ["Explain risk while selecting funds", "Explain inflation while creating goals", "Explain diversification inside portfolio screens"], rec: "Education becomes product UX." },

      { t: "h3", text: "Step 4 — PMF Validation Framework" },
      { t: "p", text: "Rather than measuring downloads, we defined PMF signals." },
      { t: "h4", text: "Leading metrics" },
      { t: "ul", items: ["KYC completion", "First investment conversion", "First SIP setup", "Second investment", "90-day retention", "Referral rate"] },
      { t: "p", text: "The recommendation was to delay scale until these metrics stabilized." },

      { t: "h3", text: "Step 5 — Regulatory & Compliance Review" },
      { t: "p", text: "We mapped every proposed feature against applicable regulations. Questions included:" },
      { t: "ul", items: ["Which activities required regulated partners?", "Where would disclosures appear?", "How should suitability be handled?", "How should investment recommendations be framed?", "What constituted advice versus education?", "What data needed explicit consent?"] },
      { t: "p", text: "This avoided redesigning core flows later." },

      { t: "h3", text: "Step 6 — Revenue Architecture" },
      { t: "p", text: "Instead of optimizing for transaction commissions alone, we modelled:" },
      { t: "ul", items: ["Distribution income", "Subscription", "Premium financial planning", "Insurance cross-sell", "Lending opportunities", "Partner revenue"] },
      { t: "p", text: "The recommendation was to prioritize recurring revenue over one-time commissions." },

      { t: "h3", text: "Step 7 — Operating Model" },
      { t: "p", text: "We also reviewed:" },
      { t: "ul", items: ["Customer support design", "Reconciliation workflows", "Partner SLAs", "Failure handling", "Onboarding operations", "Analytics instrumentation", "Product governance"] },

      { t: "outcome", lead: "The key recommendation was simple:", quote: "Don't build an investment marketplace.", body: "Build a financial progress platform where investing naturally becomes the next step in a user's journey." },
    ],
  },
  {
    tag: "WEALTHTECH · AI",
    title: "Advising a Startup Building a US Stocks Platform with an AI Wealth Layer",
    blocks: [
      { t: "h4", text: "Context" },
      { t: "p", text: "A fintech startup wanted to launch a US investing platform for Indian users. The founders envisioned:" },
      { t: "ul", items: ["US stocks", "ETFs", "AI-powered wealth advisory", "Portfolio recommendations", "Thematic investing"] },
      { t: "p", text: "The challenge wasn't building another broker interface. It was creating a differentiated wealth platform." },

      { t: "h3", text: "Step 1 — Market Positioning" },
      { t: "p", text: "We evaluated competitors across onboarding, investing experience, education, pricing, portfolio construction, trust, and differentiation. The conclusion:" },
      { t: "quote", text: "Most products competed on execution. Almost none competed on decision-making." },
      { t: "p", text: "That became the strategic positioning." },

      { t: "h3", text: "Step 2 — Customer Journey Redesign" },
      { t: "p", text: "Instead of: KYC → Fund → Search → Buy — we proposed:" },
      { t: "flow", items: ["Goals", "Risk understanding", "Portfolio recommendation", "US allocation", "Execution", "Continuous advisory"] },
      { t: "p", text: "Investing became advice-led rather than order-led." },

      { t: "h3", text: "Step 3 — AI Wealth Layer" },
      { t: "p", text: "Instead of a chatbot, we proposed an investment intelligence layer. Capabilities included:" },
      { t: "ul", items: ["Portfolio explanation", "Diversification analysis", "Concentration warnings", "Earnings summaries", "Macro-event impact", "Tax-aware insights", "Goal progress"] },
      { t: "p", text: "The AI explained decisions rather than replacing them." },

      { t: "h3", text: "Step 4 — Broker & Infrastructure Evaluation" },
      { t: "p", text: "We created an evaluation framework covering:" },
      { t: "ul", items: ["Custody model", "Account structure", "Fractional investing", "Settlement", "Pricing", "Operational resilience", "API maturity", "Reporting", "Reconciliation", "Scalability"] },
      { t: "p", text: "The objective was to optimize for long-term operating efficiency rather than headline pricing." },

      { t: "h3", text: "Step 5 — Compliance by Design" },
      { t: "p", text: "We reviewed:" },
      { t: "ul", items: ["Onboarding journeys", "Customer disclosures", "Investment suitability", "Risk acknowledgements", "Tax reporting", "Data consent", "Audit requirements", "Advisor vs. execution boundaries"] },
      { t: "p", text: "Compliance was incorporated into the product architecture from the outset." },

      { t: "h3", text: "Step 6 — Product Metrics" },
      { t: "p", text: "Rather than optimizing for trading activity alone, we proposed measuring:" },
      { t: "ul", items: ["Funded accounts", "First investment", "Recurring investments", "Portfolio diversification", "Assets under management", "Retention", "Advisory engagement", "Customer lifetime value"] },
      { t: "p", text: "This shifted the business toward long-term wealth creation." },

      { t: "h3", text: "Step 7 — Monetization" },
      { t: "p", text: "We modelled multiple revenue streams:" },
      { t: "ul", items: ["Brokerage", "FX spreads", "Advisory subscription", "Premium portfolio services", "Tax reporting", "Family accounts", "Institutional partnerships"] },
      { t: "p", text: "The recommendation was to reduce dependence on transaction revenue and increase recurring income." },

      { t: "outcome", lead: "The core recommendation was:", quote: "Don't build another US stocks app.", body: "Build a wealth operating system where investing is one capability inside a broader financial guidance experience." },
    ],
  },
];

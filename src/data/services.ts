export interface Service {
  slug: string
  title: string
  summary: string
  /** Starting price; each project gets a written quote after a discovery call. */
  from: string
  includes: string[]
}

export const services: Service[] = [
  {
    slug: "web-platforms",
    title: "Business web platforms",
    summary:
      "Corporate websites, client portals and the internal systems behind them: admin dashboards, bookings, payments and generated documents, built to be fast, secure and easy to run.",
    from: "KES 45,000",
    includes: ["Corporate websites", "Client portals and dashboards", "Admin and operational systems", "Payments: M-Pesa, Paystack and card"],
  },
  {
    slug: "automation",
    title: "Process automation and integrations",
    summary:
      "Replace repetitive manual work with reliable workflows: enrolment and approvals, invoices and certificates generated automatically, and your tools connected so data is entered once.",
    from: "KES 80,000",
    includes: ["Workflow automation", "System integrations", "Automated documents and email", "Reporting dashboards"],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO and performance",
    summary:
      "Make your site easy for search engines and quick for people: crawlability and indexing fixes, structured data, Core Web Vitals, caching and the analytics to see what changed.",
    from: "KES 20,000 / month",
    includes: ["Technical SEO audits", "Speed and Core Web Vitals", "Structured data and sitemaps", "Search Console and analytics setup"],
  },
  {
    slug: "applied-ai",
    title: "Applied AI",
    summary:
      "Practical AI inside the systems you already use: assistants that answer from your own documents, document processing and classification, and analytics that flag what needs attention.",
    from: "KES 100,000",
    includes: ["AI readiness and use cases", "Assistants on your own content", "Document processing", "Detection and analytics"],
  },
]

export const process = [
  { step: "Discovery", time: "1–2 weeks", text: "We map the problem, the people involved and what success looks like, then agree scope, timeline and a written quote." },
  { step: "Design and architecture", time: "2–3 weeks", text: "Screens, data model and architecture, reviewed with you before any build starts, with security designed in from the first schema." },
  { step: "Build and test", time: "4–12 weeks", text: "Short cycles with working previews you can click through, automated tests, and every release checked before it reaches your users." },
  { step: "Launch and support", time: "1–2 weeks", text: "Deployment, training and documentation, then maintenance and improvements on a plan agreed with you." },
]

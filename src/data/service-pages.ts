export interface ServicePageFaq {
  q: string
  a: string
}

export interface ServicePage {
  slug: string
  intro: string
  whoFor: string[]
  commonBuilds: string[]
  deliverables: string[]
  approach: string[]
  considerations: string[]
  relatedWork: string[]
  faqs: ServicePageFaq[]
}

/**
 * Detail-page content for each service in `services.ts`.
 * Keep examples tied to real work in `work.ts`; do not promise outcomes we cannot support.
 */
export const servicePages: ServicePage[] = [
  {
    slug: "websites-landing-pages",
    intro:
      "A website should be clear, fast and easy to update. For portfolios, landing pages and small business sites, the goal is usually to look credible, load quickly and turn visitors into enquiries without paying for platform complexity you do not need.",
    whoFor: [
      "Individuals and freelancers who need a portfolio or CV site",
      "Small businesses that need a brochure site, landing page or contact form",
      "Campaigns, events and product launches that need one focused page",
      "Teams that want a fast first web presence before investing in a platform",
    ],
    commonBuilds: [
      "Portfolio and personal websites",
      "Business brochure sites",
      "Landing pages for campaigns or services",
      "Contact and enquiry forms",
      "Basic on-page SEO and analytics setup",
      "Fast, mobile-friendly builds with editable content where needed",
    ],
    deliverables: [
      "Information architecture and page copy structure",
      "Responsive design and build",
      "Contact or enquiry form connected to email",
      "Basic SEO setup: titles, meta descriptions, sitemap and analytics",
      "Deployment documentation and handover",
    ],
    approach: [
      "We keep the scope honest: a brochure site should not be sold as a platform, and a platform should not be hidden inside a brochure price.",
      "The design prioritises clarity and speed. Visitors should understand what you do and how to contact you within seconds.",
      "Where content will change often, we set up simple editing or a lightweight CMS instead of making every update a code change.",
    ],
    considerations: [
      "This tier is for sites that mainly present information and capture enquiries.",
      "If you need bookings, payments, portals, dashboards, documents or role-based admin, you need a business web platform instead.",
      "Domain, hosting and email accounts should be owned by you.",
      "Content and images should be ready or supplied during the project to keep the timeline tight.",
    ],
    relatedWork: [],
    faqs: [
      {
        q: "What is included in a KES 10,000 website?",
        a: "The starting price covers a focused brochure, portfolio or landing page with responsive design, contact or enquiry capture, basic SEO setup and deployment. Larger sites, ecommerce, portals or custom functionality are quoted separately.",
      },
      {
        q: "Is a landing page the same as a website?",
        a: "A landing page is usually one focused page for a campaign or offer. A website can have multiple pages such as services, about, work and contact.",
      },
      {
        q: "When do I need a business web platform instead?",
        a: "Choose a business web platform when the site must handle bookings, payments, client portals, dashboards, documents or role-based administration.",
      },
      {
        q: "Can you add payments or bookings later?",
        a: "Yes. Many sites start simple and grow into a platform. The architecture should leave room to add those features without rebuilding from scratch.",
      },
      {
        q: "How long does a simple website take?",
        a: "A focused brochure, portfolio or landing page can often be delivered quickly once content and assets are ready. The exact timeline is confirmed in the written quote.",
      },
    ],
  },
  {
    slug: "web-platforms",
    intro:
      "A business web platform is more than a website. It is the public front door plus the admin, portal, payment and document flows your team uses every day. We design these systems to be operable after launch, not just impressive in a demo.",
    whoFor: [
      "Training providers and course businesses that need enrolment, booking, invoicing and certificates in one place",
      "Professional services firms that need client portals, applications or internal dashboards",
      "Publishers and membership organisations that sell access to content or services online",
      "Growing SMEs replacing spreadsheets, email threads and manual follow-up with one system",
    ],
    commonBuilds: [
      "Corporate websites with an admin back office",
      "Client portals and customer dashboards",
      "Course, booking and enrolment platforms",
      "Learning management systems with paid access",
      "Admin and operational dashboards",
      "Payment-enabled storefronts and service platforms",
    ],
    deliverables: [
      "Information architecture and user flows reviewed before build",
      "Responsive public interface and role-based admin areas",
      "Payment integrations such as M-Pesa, Paystack and cards",
      "Automated document generation for invoices, certificates and enrolment paperwork",
      "Automated tests around booking, payment and access-critical paths",
      "Deployment documentation, admin training and a support plan",
    ],
    approach: [
      "We start with the operational workflow, not the homepage. If a platform cannot explain how an application becomes a payment, an invoice and a certificate, it is not finished.",
      "The public experience is designed for conversion and clarity, while the admin side is designed for the person who has to run the business every day.",
      "Security is treated as part of the data model: role-based access, server-side permission checks, signed payment callbacks and audit trails where they matter.",
    ],
    considerations: [
      "You will need to provide content, branding assets and any existing data before migration or launch.",
      "Payment integrations depend on provider accounts, settlement rules and the currencies you need to support.",
      "A phased launch is often safer than trying to replace every workflow at once.",
      "Hosting, domain, email and third-party accounts should be owned by you so the business keeps control.",
    ],
    relatedWork: ["euroafrique", "chania-finance", "afriasia", "chania-publishers"],
    faqs: [
      {
        q: "What is the difference between a website and a platform?",
        a: "A website mainly presents information. A platform also handles transactions and operations: applications, bookings, payments, documents, portals and admin workflows. Simple websites and landing pages are priced separately from KES 10,000.",
      },
      {
        q: "Can you integrate M-Pesa and card payments?",
        a: "Yes. Our live platforms use M-Pesa, Paystack and card payments, with provider callbacks used to confirm payment before access or enrolment is granted.",
      },
      {
        q: "What is the starting price for a business web platform?",
        a: "Business web platforms start from KES 45,000 when they include portals, dashboards, bookings, payments, documents or admin workflows. A simple brochure site, portfolio or landing page starts from KES 10,000 under Websites and landing pages.",
      },
      {
        q: "Can you improve an existing system instead of rebuilding it?",
        a: "Yes. We can start with a review of the code, hosting, data and workflows, then propose fixes in order of risk so the system keeps working while it improves.",
      },
      {
        q: "What do you need before giving a quote?",
        a: "A short description of what the system must do, who uses it, whether payments or documents are involved, and any deadline. A discovery call is usually enough to scope a written quote.",
      },
    ],
  },
  {
    slug: "custom-business-systems",
    intro:
      "Off-the-shelf software is built for average workflows. Custom business systems are for the parts that are specific to you: stock, sales, approvals, POS, multi-location operations and reporting that matches how your team actually works.",
    whoFor: [
      "Retailers, wholesalers and distributors that need POS, stock and sales reporting in one place",
      "Service businesses that need CRM, job tracking, quotes or client follow-up",
      "Organisations with approval, purchasing, inventory or fulfilment workflows that do not fit generic tools",
      "Teams that have outgrown spreadsheets and need one system of record",
    ],
    commonBuilds: [
      "Point-of-sale and sales systems",
      "Inventory, stock and purchasing management",
      "ERP-style order, supplier and fulfilment workflows",
      "CRM and client management",
      "Role-based admin dashboards and operational reports",
      "Integrations with payments, email, documents and existing tools",
    ],
    deliverables: [
      "Workflow map and data model for the operations you need to run",
      "Role-based interfaces for owners, managers, sales and warehouse staff",
      "POS, inventory or CRM modules built around your real process",
      "Reporting dashboards for sales, stock, margins and operations",
      "Payment and document integrations where the workflow needs them",
      "Automated tests, deployment documentation and staff training",
    ],
    approach: [
      "We start with the operational bottleneck, not the software category. A POS that cannot handle your stock rules is just an expensive till.",
      "The data model matters more than the screens. Stock, money, customers and approvals need to be consistent before the interface is polished.",
      "We design for the person running the counter or warehouse, not only the owner viewing reports. Daily tasks should be fast and hard to get wrong.",
    ],
    considerations: [
      "Existing data from spreadsheets or another system may need cleaning before migration.",
      "POS projects may involve hardware such as receipt printers, barcode scanners, tablets or cash drawers.",
      "Offline requirements, multi-location stock and role permissions should be decided early.",
      "It is usually safer to launch one module well than to replace every workflow at once.",
    ],
    relatedWork: ["chania-finance", "afriasia", "euroafrique"],
    faqs: [
      {
        q: "What is the difference between ERP software and a custom business system?",
        a: "ERP software is a broad suite built for common processes. A custom system is designed around your specific workflows, roles, stock rules, reports and integrations, often with less unused complexity.",
      },
      {
        q: "Can you build POS and inventory management together?",
        a: "Yes. We can build a POS and stock system where sales, payments, stock movements and reports share the same records, so the till and the warehouse view stay aligned.",
      },
      {
        q: "Can it integrate M-Pesa and card payments?",
        a: "Yes, where the workflow needs it. Payment confirmation should still be provider-verified and recorded idempotently so sales and stock are not updated twice.",
      },
      {
        q: "Can we start with one module instead of a full ERP?",
        a: "Yes. Many projects start with POS, inventory, CRM or reporting and expand later once the core workflow is stable.",
      },
      {
        q: "How is custom business systems priced?",
        a: "Pricing starts from KES 150,000 for a focused system. Larger ERP-style builds are quoted after discovery based on modules, integrations, data migration and rollout.",
      },
    ],
  },
  {
    slug: "automation",
    intro:
      "Automation is not about replacing people with robots. It is about removing repetitive handoffs so staff spend time on judgement, service and growth. We identify the workflow, connect the tools and make the automation reliable enough to trust.",
    whoFor: [
      "Teams that re-enter the same information into multiple systems",
      "Businesses manually generating invoices, certificates, receipts or approval emails",
      "Organisations that lose time chasing status updates across email and spreadsheets",
      "Teams that need reporting without exporting data every week",
    ],
    commonBuilds: [
      "Enrolment and approval workflows",
      "Invoice, receipt and certificate generation",
      "Email and notification automation",
      "Integrations between forms, payments, CRMs and internal tools",
      "Reporting dashboards fed by live operational data",
      "Scheduled jobs for reminders, reconciliation and cleanup",
    ],
    deliverables: [
      "A workflow map showing the current process and the automated target state",
      "Integration plan with the systems, data and credentials involved",
      "Automated workflows with error handling, retries and logging",
      "Dashboards or reports for the metrics the business actually uses",
      "Documentation for staff and a plan for monitoring failures",
    ],
    approach: [
      "We pick the highest-friction workflow first. A narrow automation that removes a daily bottleneck is more valuable than a broad demo that nobody trusts yet.",
      "Every automation needs a failure path. We design for retries, notifications and human review where a mistake would be expensive.",
      "Automation is measured by time saved, errors removed and staff confidence, not by the number of tools connected.",
    ],
    considerations: [
      "Some workflows need cleanup before they can be automated; we will say so rather than automate chaos.",
      "Integrations depend on API access, export formats and the quality of data in each system.",
      "Sensitive actions such as payments, enrolment approval or certificate issuance should keep human or rule-based checks where appropriate.",
      "You should expect a short discovery phase to confirm the workflow, ownership and success measure.",
    ],
    relatedWork: ["euroafrique", "chania-finance", "afriasia"],
    faqs: [
      {
        q: "What kind of work is worth automating?",
        a: "Repetitive, rule-based work with clear inputs and outputs: data entry, document generation, status updates, reminders, approvals and reporting.",
      },
      {
        q: "How do you handle failures in an automation?",
        a: "Automations are designed with retries, logs and notifications. Critical steps can require review or confirmation before they are marked complete.",
      },
      {
        q: "Do we need a custom platform for automation?",
        a: "Not always. Some automations can connect existing tools. A platform makes sense when the workflow is central to the business and needs its own data model, portals or reporting.",
      },
      {
        q: "How is automation priced?",
        a: "Pricing starts from KES 80,000 for a focused workflow. Larger integrations or platform-backed automation are quoted after discovery.",
      },
    ],
  },
  {
    slug: "technical-seo",
    intro:
      "Technical SEO is the plumbing that lets search engines and people reach the right pages quickly. We fix crawlability, indexing, structured data, performance and measurement so the site can actually compete.",
    whoFor: [
      "Businesses launching or redesigning a website",
      "Sites that get traffic but have visibility, speed or indexing problems",
      "Platforms with large catalogues, portals or generated pages that need clean technical foundations",
      "Teams that want Search Console and analytics set up properly from day one",
    ],
    commonBuilds: [
      "Technical SEO audits with prioritised findings",
      "Crawlability, indexing, canonical and redirect fixes",
      "Structured data and schema markup",
      "XML sitemaps and robots configuration",
      "Core Web Vitals and caching improvements",
      "Search Console, analytics and reporting setup",
    ],
    deliverables: [
      "Audit report with issues ordered by impact and effort",
      "Implemented fixes for indexing, metadata, schema and performance",
      "Sitemap, robots and canonical rules configured for the site structure",
      "Analytics and Search Console setup with clear baseline metrics",
      "Ongoing monitoring or a retainer for technical maintenance",
    ],
    approach: [
      "We start with crawl and index health, then move to on-page fundamentals and performance. A site cannot rank pages that search engines cannot find, render or trust.",
      "Technical SEO is paired with measurement. Search Console and analytics are set up so changes can be observed rather than guessed.",
      "We focus on durable fixes: correct markup, fast delivery, clean URLs and stable information architecture.",
    ],
    considerations: [
      "Technical SEO improves access and measurement; it does not replace useful content or authority.",
      "Some fixes require access to hosting, CMS, DNS or the codebase.",
      "Results depend on competition, content quality and how long search engines take to recrawl.",
      "A retainer makes sense for larger sites, migrations or ongoing development; a one-off audit may be enough for a stable site.",
    ],
    relatedWork: ["euroafrique", "chania-publishers"],
    faqs: [
      {
        q: "Is technical SEO the same as content SEO?",
        a: "No. Technical SEO makes pages discoverable, fast and measurable. Content SEO is about the usefulness and relevance of what the page says.",
      },
      {
        q: "How long does technical SEO take to show results?",
        a: "Technical fixes can improve crawlability and performance quickly, but search visibility still depends on recrawling, competition and content quality.",
      },
      {
        q: "Do you write content as part of SEO?",
        a: "Our technical SEO service focuses on the infrastructure and measurement. Content strategy can be scoped separately if needed.",
      },
      {
        q: "What access do you need for an audit?",
        a: "Ideally the live URL, Search Console if it exists, CMS or repository access for fixes, and analytics access if available.",
      },
    ],
  },
  {
    slug: "applied-ai",
    intro:
      "Applied AI is most useful when it is attached to a real workflow: answering questions from your own documents, processing paperwork or flagging anomalies that deserve attention. We start with the use case, not the model.",
    whoFor: [
      "Teams with document-heavy processes that need extraction, classification or search",
      "Organisations that answer the same questions from internal policies, reports or knowledge bases",
      "Businesses that want anomaly detection or alerting without building a full data science team",
      "Teams evaluating AI but needing a practical first project rather than a demo",
    ],
    commonBuilds: [
      "AI readiness assessments and use-case shortlists",
      "Assistants that answer from approved internal content",
      "Document processing, classification and extraction",
      "Anomaly detection and alerting for operational data",
      "AI features inside existing portals, dashboards or workflows",
    ],
    deliverables: [
      "Use-case shortlist with expected value, data needs and risks",
      "Prototype or integration tied to a specific workflow",
      "Evaluation notes covering accuracy, failure modes and human review points",
      "Documentation for prompts, data sources, access controls and operating cost",
      "A recommendation on what should stay rule-based or human-reviewed",
    ],
    approach: [
      "We begin by asking where AI removes work or improves a decision. If a simple rule, form or dashboard would do the job better, we say so.",
      "Every AI feature needs an evaluation path: what correct looks like, where it fails and when a human should step in.",
      "AI is integrated into the system your team already uses, with clear boundaries around data access and action-taking.",
    ],
    considerations: [
      "Data privacy and access control matter more than model choice. We scope what data can be used and who can see outputs.",
      "AI outputs should be evaluated before they drive payments, approvals or customer-facing decisions.",
      "Costs depend on volume, model choice and whether the feature runs on-demand or in batch.",
      "Not every problem needs AI; some are better solved with better forms, rules or reporting.",
    ],
    relatedWork: ["utdrs"],
    faqs: [
      {
        q: "What AI projects are practical for a small business?",
        a: "Document processing, internal knowledge assistants, classification, summarisation and anomaly alerts are practical when they are tied to a clear workflow.",
      },
      {
        q: "Will our data be sent to a third-party AI provider?",
        a: "That depends on the chosen approach. We discuss data residency, provider terms and whether a model API, local model or hybrid approach fits the risk.",
      },
      {
        q: "How do you evaluate whether the AI is good enough?",
        a: "We define success measures before build: accuracy on representative examples, failure modes, latency, cost and the points where human review is required.",
      },
      {
        q: "When should we not use AI?",
        a: "When the task is deterministic, low-volume, high-risk without review, or when a simpler workflow would solve the problem more reliably.",
      },
    ],
  },
]

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}

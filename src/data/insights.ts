import { site } from "@/lib/site"

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }

export interface Insight {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  tags: string[]
  relatedServices: string[]
  relatedWork: string[]
  blocks: InsightBlock[]
}

/**
 * Practical guides written from work Muhscience has actually delivered.
 * Keep advice operational and honest; avoid guarantees about rankings, revenue or provider terms.
 */
export const insights: Insight[] = [
  {
    slug: "choosing-mpesa-paystack-and-card-payments",
    title: "How to choose between M-Pesa, Paystack and card payments for a Kenyan platform",
    description:
      "A practical way to choose payment rails for a Kenyan business platform: who is paying, what must be proven, and where M-Pesa, Paystack and cards fit.",
    publishedAt: "2026-11-23",
    readingTime: "7 min read",
    tags: ["Payments", "Platforms", "Kenya"],
    relatedServices: ["web-platforms", "automation"],
    relatedWork: ["euroafrique", "afriasia", "chania-finance"],
    blocks: [
      {
        type: "p",
        text: `Choosing a payment provider is not just picking the logo your customers recognise. For a platform, the decision affects checkout conversion, settlement, reconciliation, refunds, chargebacks and the amount of manual work your team does afterwards. The right answer depends on who is paying, what currency they pay in and how much operational control you need.`,
      },
      { type: "h2", text: "Start with who is paying" },
      {
        type: "ul",
        items: [
          "Individual customers in Kenya often expect M-Pesa or a card checkout that works on mobile.",
          "Corporate clients may need invoices, bank transfer or card payment depending on their procurement process.",
          "International customers usually need card payments and a provider that can settle the currency you need.",
          "High-value B2B transactions may need payment terms, deposits or invoice workflows rather than instant checkout only.",
        ],
      },
      { type: "h2", text: "What the integration must prove" },
      {
        type: "p",
        text: "A checkout button is the easy part. The platform must be able to prove that money moved before it grants access, marks an enrolment paid or issues a receipt.",
      },
      {
        type: "ul",
        items: [
          "Payment status must come from a verified provider callback or server-side check, not only a browser redirect.",
          "Repeated callbacks and retries must not create duplicate payments or duplicate enrolments.",
          "Every transaction needs a reference that staff can reconcile against provider reports.",
          "Refunds, failed payments and pending states need clear handling in the admin flow.",
          "Test mode should be exercised before launch, including the failure paths.",
        ],
      },
      { type: "h2", text: "Where M-Pesa, Paystack and cards fit" },
      {
        type: "p",
        text: "M-Pesa is often the natural choice for Kenyan customers paying by mobile money. Paystack can be useful when you need card payments and multi-currency support, but coverage, settlement and fees should be confirmed for your specific use case before committing. Cards are still important for international customers, corporate cards and subscriptions.",
      },
      {
        type: "callout",
        title: "Rule of thumb",
        text: "Offer the payment methods your customers already use, but design the platform so payment confirmation is provider-verified and reconcilable. Do not let the checkout UX decide the architecture.",
      },
      { type: "h2", text: "Questions to ask before choosing" },
      {
        type: "ol",
        items: [
          "Who pays: individuals, corporates, students, members or international customers?",
          "Which currencies and settlement accounts do you need?",
          "Does the provider support signed callbacks or webhooks for your payment types?",
          "How will refunds, chargebacks and failed payments appear in your admin system?",
          "What reporting will finance need for reconciliation?",
          "What happens if a customer pays but never returns to the browser?",
        ],
      },
      { type: "h2", text: "How we approach it on client platforms" },
      {
        type: "p",
        text: `In the platforms we build, payment is treated as part of the operating system rather than a checkout plugin. For example, EuroAfrique uses M-Pesa and card payments with signed callback confirmation, while AfriAsia uses Paystack for USD and KES with idempotent payment recording. The lesson is the same across providers: the platform should know what was paid, who paid it and what should happen next.`,
      },
      {
        type: "p",
        text: `If you are planning a booking, enrolment or membership platform, start by mapping the payment lifecycle before choosing the provider. That is also where ${site.name} usually begins on a discovery call.`,
      },
    ],
  },
  {
    slug: "what-a-training-platform-needs",
    title: "What a training or course platform needs before you build it",
    description:
      "The public and operational requirements for a course, booking or enrolment platform, from discovery and applications to payments, invoices and certificates.",
    publishedAt: "2026-11-23",
    readingTime: "8 min read",
    tags: ["Platforms", "Training", "Operations"],
    relatedServices: ["web-platforms", "automation"],
    relatedWork: ["chania-finance", "afriasia", "euroafrique", "chania-publishers"],
    blocks: [
      {
        type: "p",
        text: "A training platform fails when it treats the website and the back office as separate products. The public site helps someone discover and apply; the operations side turns that application into a session, payment, invoice, certificate and support record.",
      },
      { type: "h2", text: "The public side must answer a few questions fast" },
      {
        type: "ul",
        items: [
          "What courses or programmes exist, and who are they for?",
          "When and where are the next sessions?",
          "What does it cost, and what is included?",
          "Can an individual apply, or does a company book for a team?",
          "What happens after payment: confirmation, invoice, receipt or certificate?",
        ],
      },
      { type: "h2", text: "The operations side must run the business" },
      {
        type: "ul",
        items: [
          "Programmes, sessions, venues, trainers and capacity",
          "Applications, approvals, cancellations and waitlists",
          "Fees, invoices, payment status and reconciliation",
          "Certificates, enrolment letters and other documents",
          "Role-based access for admins, finance, trainers and support staff",
        ],
      },
      { type: "h2", text: "Payments and documents are part of the product" },
      {
        type: "p",
        text: "If payment is involved, the platform should confirm it through the provider rather than trusting the browser. If documents are involved, they should be generated from the same records staff use operationally. That is how applications become invoices and certificates without copy-paste work.",
      },
      { type: "h2", text: "Security and access need to be designed in" },
      {
        type: "ul",
        items: [
          "Public applicants should never see other applicants' data.",
          "Admins, finance and trainers should have different permissions.",
          "Administrator accounts should support multi-factor authentication.",
          "Sensitive actions should be auditable, especially payments, refunds and certificate issuance.",
        ],
      },
      { type: "h2", text: "When to build custom instead of using generic software" },
      {
        type: "p",
        text: "A generic course plugin may be enough for simple sales pages. A custom platform makes sense when enrolment, booking, invoicing, certificates and role-based operations are tightly connected, or when your workflow does not fit the assumptions of off-the-shelf software.",
      },
      {
        type: "callout",
        title: "Before you ask for a quote",
        text: "Write down the lifecycle: discovery, application, approval, payment, delivery, document and follow-up. If you can describe that path clearly, the platform design becomes much easier.",
      },
      { type: "h2", text: "What this looks like in production" },
      {
        type: "p",
        text: "Chania Finance Consultancy combines course search, calendar booking by venue, organisation invoicing and admin/trainer portals. AfriAsia adds Paystack payments in USD and KES, queued invoices and certificates, and MFA for administrators. EuroAfrique connects programme applications, M-Pesa and card payments, and generated enrolment documents. Chania Publishers' LMS adds verified-payment access and guarded video delivery. The pattern is consistent: public conversion and operational control in one system.",
      },
    ],
  },
  {
    slug: "technical-seo-checklist-for-small-business-websites",
    title: "A practical technical SEO checklist for small business websites",
    description:
      "The technical SEO checks that matter most for small business sites: crawling, indexing, metadata, structured data, performance, measurement and common mistakes.",
    publishedAt: "2026-11-23",
    readingTime: "6 min read",
    tags: ["SEO", "Performance", "Websites"],
    relatedServices: ["technical-seo"],
    relatedWork: ["euroafrique", "chania-publishers"],
    blocks: [
      {
        type: "p",
        text: "Technical SEO is not a trick or a one-time trick. It is the set of checks that make sure search engines can find the right pages, understand what they are and load them quickly enough for users to stay.",
      },
      { type: "h2", text: "Crawl and index health" },
      {
        type: "ul",
        items: [
          "robots.txt should allow the pages you want indexed and block only what should stay private.",
          "XML sitemaps should list canonical, indexable URLs and stay current as pages change.",
          "Canonical tags should point to the preferred version of duplicate or parameterised URLs.",
          "Redirects should be permanent where appropriate and should not chain unnecessarily.",
          "Search Console should be checked for coverage errors, blocked resources and manual actions.",
        ],
      },
      { type: "h2", text: "On-page fundamentals" },
      {
        type: "ul",
        items: [
          "Each important page needs a unique title and meta description that matches the searcher's intent.",
          "Headings should describe the page structure; one clear H1 per page is enough.",
          "Internal links should help users and crawlers reach important pages without orphaning them.",
          "Images need useful alt text, compressed files and correct dimensions to avoid layout shift.",
          "Structured data should match the visible page and use the right schema type.",
        ],
      },
      { type: "h2", text: "Performance and Core Web Vitals" },
      {
        type: "p",
        text: "Speed is a user experience issue before it is an SEO issue. Large images, render-blocking scripts, slow hosting and unoptimised fonts can all make a good page feel broken on mobile.",
      },
      {
        type: "ul",
        items: [
          "Measure Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift on real pages.",
          "Use modern image formats, responsive sizes and lazy loading where appropriate.",
          "Cache static assets and use a CDN for global or high-traffic sites.",
          "Load fonts with display swap and avoid unnecessary JavaScript on simple pages.",
        ],
      },
      { type: "h2", text: "Measurement" },
      {
        type: "ul",
        items: [
          "Google Search Console shows indexing, queries, clicks and page experience signals.",
          "Analytics should separate organic landing pages from other channels so SEO work can be measured.",
          "Conversion events should be tracked for forms, bookings, purchases or enquiries.",
        ],
      },
      { type: "h2", text: "Common mistakes" },
      {
        type: "ul",
        items: [
          "Blocking CSS or JavaScript that crawlers need to render the page.",
          "Publishing thin pages that repeat the same template with little unique value.",
          "Letting staging or parameter URLs get indexed.",
          "Changing URLs without redirects and losing existing links.",
          "Treating SEO as finished after launch instead of maintaining it as the site changes.",
        ],
      },
      { type: "h2", text: "A practical first pass" },
      {
        type: "ol",
        items: [
          "Verify Search Console and submit a clean sitemap.",
          "Check indexing for the pages that matter most.",
          "Fix titles, meta descriptions, headings and internal links on key pages.",
          "Add the right structured data for the business or service.",
          "Compress images, review caching and test mobile performance.",
          "Set up analytics events and review the baseline monthly.",
        ],
      },
      {
        type: "p",
        text: `This is the foundation ${site.name} uses when supporting technical SEO for client platforms. If your site has grown messy, the goal is not to add more tricks; it is to make the important pages easy to find, fast to load and clear to measure.`,
      },
    ],
  },
  {
    slug: "when-manual-work-should-become-automation",
    title: "When manual work should become automation",
    description:
      "How to spot workflows that are ready for automation, what to automate first and what an automation needs to be trustworthy enough for daily use.",
    publishedAt: "2026-11-23",
    readingTime: "6 min read",
    tags: ["Automation", "Operations", "AI"],
    relatedServices: ["automation", "web-platforms"],
    relatedWork: ["euroafrique", "chania-finance", "afriasia"],
    blocks: [
      {
        type: "p",
        text: "Automation is attractive because it sounds like a way to make the business faster. In practice, it works best when it removes a specific kind of work: repetitive, rule-based and repeated often enough that the time saved matters.",
      },
      { type: "h2", text: "Signs a workflow is ready" },
      {
        type: "ul",
        items: [
          "Staff re-enter the same information into more than one system.",
          "Invoices, receipts, certificates or confirmation emails are generated manually every week.",
          "Status updates depend on someone checking email, spreadsheets or another portal.",
          "Approvals follow a predictable path but still require chasing.",
          "Reporting requires exporting data and cleaning it before anyone can use it.",
        ],
      },
      { type: "h2", text: "What to automate first" },
      {
        type: "p",
        text: "Start narrow. The first automation should have a clear trigger, a clear output and a measurable time saving. A daily invoice run, an enrolment confirmation email or a certificate generation job is a better first project than a vague goal to automate the whole business.",
      },
      { type: "h2", text: "What automation needs to be trustworthy" },
      {
        type: "ul",
        items: [
          "Idempotency: repeated triggers must not create duplicate records or duplicate emails.",
          "Retries and logging: failures should be visible and recoverable.",
          "Notifications: the right person should know when something needs attention.",
          "Human review: high-risk steps such as refunds, approvals or certificate issuance may need confirmation.",
          "Rollback or correction paths: mistakes should be fixable without rewriting history.",
        ],
      },
      { type: "h2", text: "When not to automate" },
      {
        type: "p",
        text: "Do not automate a process that is still being invented, depends on constant exceptions, or is so rare that the automation costs more to maintain than the manual work. Sometimes the first job is to simplify the workflow, not to encode it.",
      },
      { type: "h2", text: "How we scope automation work" },
      {
        type: "p",
        text: "We map the current workflow, identify the data and systems involved, then propose the smallest automation that removes the most friction. If the workflow is part of a larger platform, we design it into the platform from the start rather than bolting on a fragile script later.",
      },
      {
        type: "callout",
        title: "A useful test",
        text: "If you can describe the trigger, the rules, the output and the failure path, the workflow is probably ready to automate. If you cannot, it probably needs discovery first.",
      },
      { type: "h2", text: "Automation inside the platforms we build" },
      {
        type: "p",
        text: "On EuroAfrique, payment confirmation and enrolment documents are automated from the same system of record. On Chania Finance, invoices and bookings are generated from operational data. On AfriAsia, invoices and certificates are queued so document generation does not block the user. The pattern is the same: automation is most valuable when it is connected to the system that owns the truth.",
      },
    ],
  },
]

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug)
}

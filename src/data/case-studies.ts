export interface CaseStudySection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface CaseStudyDecision {
  title: string
  text: string
}

export interface CaseStudyDetail {
  slug: string
  summary: string
  challenge: string[]
  approach: string[]
  architecture: string[]
  decisions: CaseStudyDecision[]
  outcomes: string[]
}

/**
 * On-site case study depth for each project in `work.ts`.
 * Keep claims tied to what is live or documented; do not add metrics that cannot be checked.
 */
export const caseStudies: Record<string, CaseStudyDetail> = {
  euroafrique: {
    slug: "euroafrique",
    summary:
      "A production training platform that connects programme discovery, individual and corporate applications, M-Pesa and card payments, and the enrolment documents each applicant needs.",
    challenge: [
      "EuroAfrique Corporate Skills needed more than a brochure site. The business runs training programmes for individuals and companies, and every enrolment touches several moving parts: the right programme, the right applicant or corporate contact, payment, confirmation and paperwork.",
      "The risk was not only technical. If applications, payments and documents lived in different tools, staff would keep reconciling spreadsheets and email threads, applicants would wait for manual follow-up, and payment edge cases would be hard to audit.",
    ],
    approach: [
      "The build started from the enrolment lifecycle rather than from a page list. We mapped how a visitor finds a programme, applies as an individual or through an organisation, pays, and receives the documents that prove enrolment.",
      "The result is a Laravel platform with a public catalogue and application flow, payment handling for M-Pesa and cards, automatic document generation, and an operations side for staff. Redis and Cloudflare caching keep public pages fast while the transactional paths stay authoritative.",
    ],
    architecture: [
      "Public programme catalogue with individual and corporate application paths",
      "Payment integrations confirmed by signed provider callbacks before enrolment is marked paid",
      "Generated enrolment documents instead of manually assembled paperwork",
      "Redis-backed caching for repeatable public reads",
      "Cloudflare in front of the application for delivery and edge caching",
      "Deploy pipeline gated on automated tests and dependency/security audits",
    ],
    decisions: [
      {
        title: "Signed callbacks are the source of truth",
        text: "A payment is not treated as complete because a browser redirect says so. The platform waits for the provider's signed callback, verifies it and records the result in a way that can be reconciled later.",
      },
      {
        title: "Generate documents from the system of record",
        text: "Enrolment paperwork is produced from the same application and payment records staff use operationally, reducing copy-paste errors and making reprints consistent.",
      },
      {
        title: "Cache the public edge, keep transactions strict",
        text: "Public programme pages can be cached aggressively, while applications, payments and admin actions stay on checked server paths with tests around the important transitions.",
      },
    ],
    outcomes: [
      "The platform is live in production at euroafriquecorporateskills.com.",
      "Applicants and corporate clients can move from programme discovery to application and payment in one system.",
      "Enrolment documents are generated automatically rather than assembled manually.",
      "Payment confirmation is anchored to signed callbacks, making repeat or forged callbacks safer to handle.",
    ],
  },
  "chania-finance": {
    slug: "chania-finance",
    summary:
      "A finance-training platform with course discovery, calendar booking by venue, organisation invoicing, and admin and trainer portals for a large programme catalogue.",
    challenge: [
      "Chania Finance Consultancy needed clients to find the right course quickly, see sessions across a large catalogue and book training for a team without waiting for a manual quote for every request.",
      "Behind the public site, staff needed a different view: sessions, venues, fees, invoices, trainers and enrolment operations all had to stay aligned.",
    ],
    approach: [
      "The platform separates the public booking experience from the operational back office. Public users search and book; staff manage the calendar, invoicing and trainer allocation; trainers get the view they need without admin access to everything.",
      "Laravel and Livewire keep the interface interactive without forcing a separate front-end application, while MySQL holds the catalogue, bookings and billing records. DomPDF produces the invoices and documents the business sends to clients.",
    ],
    architecture: [
      "Course search and filtering for a large training catalogue",
      "Calendar-based booking by venue and session",
      "Organisation invoicing for team bookings",
      "Admin portal for programmes, sessions, fees and operations",
      "Trainer portal with role-appropriate access",
      "140+ automated tests covering the paths that matter",
    ],
    decisions: [
      {
        title: "Booking is calendar-first, not form-first",
        text: "Clients should see when a course runs and where before they commit. The booking flow is organised around sessions and venues so teams can choose a date that works.",
      },
      {
        title: "Invoices come from the booking record",
        text: "Organisation invoices are generated from the same session and attendee data used for booking, reducing mismatches between what was sold and what was billed.",
      },
      {
        title: "Tests are part of the release gate",
        text: "With bookings, fees and invoices involved, the project keeps automated tests around the important transitions and does not treat them as optional cleanup.",
      },
    ],
    outcomes: [
      "The platform is live at chaniafinanceconsultancy.com.",
      "Clients can search courses, see upcoming sessions and book team training.",
      "Staff have admin tooling for sessions, fees, invoices and trainers.",
      "The codebase carries 140+ automated tests as a guardrail for future changes.",
    ],
  },
  afriasia: {
    slug: "afriasia",
    summary:
      "An executive-training platform with public course discovery and applications, Paystack payments in USD and KES, and an operations portal for programmes, schedules, venues, invoices and certificates.",
    challenge: [
      "AfriAsia Career Development Center needed a public front door for course discovery and applications, plus a serious operations layer behind it: programmes, schedules, venues, payments, invoices and certificates.",
      "Payment needed to work across currencies and client types, and the back office needed protection because it handles enrolment records, billing and certificates.",
    ],
    approach: [
      "The platform pairs a Laravel and Livewire application with Paystack for USD and KES payments. Public applicants can discover and apply; the operations portal gives staff the tools to run programmes and produce the paperwork enrolments require.",
      "Payment recording is designed to be idempotent, so repeated callbacks or retries do not create duplicate financial records. Invoices and certificates are queued so document generation does not block the request path.",
    ],
    architecture: [
      "Public course discovery and application flow",
      "Paystack payments in USD and KES",
      "Idempotent payment recording to protect against repeated callbacks",
      "Operations portal for programmes, schedules and venues",
      "Queued invoice and certificate generation",
      "Multi-factor authentication for administrators",
      "Redis for caching and queue support",
    ],
    decisions: [
      {
        title: "Payments are recorded idempotently",
        text: "Payment events can arrive more than once because of retries or provider behaviour. Recording them idempotently keeps enrolment and billing state consistent.",
      },
      {
        title: "Documents are queued, not generated inline",
        text: "Invoices and certificates are produced by background jobs so applicants and staff are not left waiting on PDF generation during peak activity.",
      },
      {
        title: "Admin access gets MFA",
        text: "The operations portal controls enrolments, invoices and certificates, so administrator accounts are protected with multi-factor authentication rather than treated like ordinary user accounts.",
      },
    ],
    outcomes: [
      "The platform is live at afriasiacareercenter.com.",
      "Public users can discover programmes and submit applications.",
      "Staff can operate schedules, venues, payments, invoices and certificates from one portal.",
      "Payment handling is designed around repeated callbacks and multi-currency checkout.",
    ],
  },
  "chania-publishers": {
    slug: "chania-publishers",
    summary:
      "A learning management system for Chania Publishers that sells courses, grants access only after payment is verified, and streams video through an access-checked endpoint.",
    challenge: [
      "Chania Publishers needed to sell and deliver courses online without giving away paid content. The core requirement was simple to state and hard to get right: access should be granted only after payment is verified.",
      "The platform also needed an admin back office so the publisher can manage courses, learners and access without developer involvement for every change.",
    ],
    approach: [
      "The LMS separates catalogue, purchase, entitlement and delivery. A learner can browse and buy a course, but access to protected content depends on the platform's payment and entitlement records rather than a public link.",
      "Video is not exposed as a static public file. It is streamed through an endpoint that checks whether the current user is entitled to the course before bytes are served.",
    ],
    architecture: [
      "Course catalogue and purchase flow",
      "Payment verification before entitlement is granted",
      "Entitlement records that control course access",
      "Access-checked video streaming endpoint",
      "Admin back office for courses, learners and content",
      "PHP, MySQL, JavaScript and Linux hosting",
    ],
    decisions: [
      {
        title: "Entitlement is checked server-side",
        text: "Access decisions are made by the server against payment and enrolment records. Hiding a link in the interface is not treated as protection.",
      },
      {
        title: "Video is streamed through a guarded endpoint",
        text: "Protected video is served through a route that verifies entitlement before streaming, which is stronger than publishing course files on a public URL.",
      },
      {
        title: "The back office is part of the product",
        text: "The publisher can manage courses and learners without asking for a code change each time, which keeps the system useful after launch.",
      },
    ],
    outcomes: [
      "The LMS is live at chaniapublishers.com.",
      "Paid course access is tied to verified payment rather than a public download.",
      "Video content is served through an access-checked path.",
      "Administrators have a back office for day-to-day course operations.",
    ],
  },
  utdrs: {
    slug: "utdrs",
    summary:
      "A threat detection and response system that helps small teams without a security operations centre see, understand and triage security events.",
    challenge: [
      "Small teams often have security signals but no security operations centre to watch them. UTDRS was built to make threat visibility useful for teams that cannot staff a 24/7 SOC.",
      "The hard part is not only detecting events; it is helping an analyst understand why an alert fired and what deserves attention first.",
    ],
    approach: [
      "The system processes events through ATT&CK-mapped rules and anomaly or machine-learning detectors, then presents the results in a React dashboard where analysts can triage alerts.",
      "The design goal is explainability. Detections should be traceable to the behaviour or rule that produced them, so a small team can make a judgement instead of staring at unexplained noise.",
    ],
    architecture: [
      "Python and FastAPI services for ingestion, detection and API access",
      "ATT&CK-mapped detection rules",
      "Anomaly and ML detectors for behaviour that rules miss",
      "MongoDB for event and alert storage",
      "React dashboard for analyst triage",
      "Live deployment for evaluation and demonstration",
    ],
    decisions: [
      {
        title: "Explainability over black-box scoring",
        text: "Alerts are mapped to known techniques and detector reasoning so analysts can see why something was flagged rather than trusting an opaque score.",
      },
      {
        title: "Rules and detectors complement each other",
        text: "ATT&CK-mapped rules catch known behaviours, while anomaly and ML detectors surface unusual patterns that a fixed rule set would miss.",
      },
      {
        title: "Analysts need a triage surface",
        text: "Detection is only useful if a person can review, prioritise and act on alerts, so the dashboard is treated as part of the product rather than an afterthought.",
      },
    ],
    outcomes: [
      "UTDRS is live and reachable for evaluation.",
      "The project was recognised in the Mozilla Responsible Computing Challenge, reaching the Top 5.",
      "The system combines rule-based and anomaly/ML detection instead of relying on a single signal.",
      "Analysts can review alerts in a dedicated dashboard built for triage.",
    ],
  },
  muhos: {
    slug: "muhos",
    summary:
      "MuhOS is an open-source desktop shell for Hyprland on Fedora, packaged as RPMs with a redesigned QML interface and performance changes validated by benchmarks.",
    challenge: [
      "Hyprland users on Fedora needed a desktop shell that felt polished, installed cleanly as packages and could prove it was not wasting resources.",
      "A desktop shell lives close to the hardware and user session, so rough edges are felt immediately: startup cost, idle CPU, packaging gaps and inconsistent UI all matter.",
    ],
    approach: [
      "MuhOS is built as proper Fedora packages rather than a script that drops files into a live session. The interface was redesigned in QML, and changes were checked in a VM against benchmarks instead of being accepted on feel alone.",
      "The work is open source, so the repository is part of the proof: packaging, session integration and interface code can be inspected directly.",
    ],
    architecture: [
      "QML and Qt 6 interface for the shell",
      "Fedora RPM packaging for clean installation",
      "GDM session integration",
      "systemd user session components",
      "VM-based benchmarking for performance claims",
      "Open-source repository for inspection and contribution",
    ],
    decisions: [
      {
        title: "Package first, script second",
        text: "Installation should be repeatable and clean. RPM packaging gives Fedora users a supported path instead of a collection of manual steps.",
      },
      {
        title: "Benchmark every visible change",
        text: "Desktop performance claims need evidence. Changes are measured in a VM so regressions are caught before they reach users.",
      },
      {
        title: "Open source as proof",
        text: "For a desktop shell, the code is part of the portfolio. Publishing it lets users inspect the packaging, session work and interface decisions.",
      },
    ],
    outcomes: [
      "MuhOS is available as an open-source project on GitHub.",
      "The shell installs as Fedora RPM packages with a GDM session.",
      "Interface work was redesigned in QML for a more polished desktop experience.",
      "Benchmarking in a VM showed idle shell CPU cut by about 9× for the measured path.",
    ],
  },
}

export function getCaseStudy(slug: string) {
  return caseStudies[slug]
}

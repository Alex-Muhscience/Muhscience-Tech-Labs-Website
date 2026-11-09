const PORTFOLIO = "https://portfolio-alex-m-kamau.vercel.app/work"

export interface WorkItem {
  slug: string
  title: string
  client: string
  status: "live" | "building" | "open-source"
  statusLabel: string
  /** What the client needed, in one sentence. */
  need: string
  /** What was delivered, in one or two sentences. Only facts that can be checked. */
  delivered: string
  services: string[]
  stack: string[]
  image?: { src: string; address: string; alt: string }
  live?: string
  caseStudy: string
}

/** Real work only. Each item links to its full case study on Alex's portfolio. */
export const work: WorkItem[] = [
  {
    slug: "euroafrique",
    title: "Corporate training platform",
    client: "EuroAfrique Corporate Skills",
    status: "live",
    statusLabel: "In production",
    need: "One system to publish programmes, take individual and corporate applications, collect payment and produce the paperwork each enrolment needs.",
    delivered: "A Laravel platform with M-Pesa and card payments confirmed by signed callbacks, enrolment documents generated automatically, Redis and Cloudflare caching, and deploys gated on tests and audits.",
    services: ["Web platform", "Automation", "Technical SEO"],
    stack: ["Laravel", "MySQL", "Redis", "M-Pesa", "Cloudflare"],
    image: { src: "/work/euroafrique.webp", address: "euroafriquecorporateskills.com", alt: "EuroAfrique Corporate Skills homepage" },
    live: "https://www.euroafriquecorporateskills.com",
    caseStudy: `${PORTFOLIO}/euroafrique`,
  },
  {
    slug: "chania-finance",
    title: "Finance-training and booking platform",
    client: "Chania Finance Consultancy",
    status: "live",
    statusLabel: "In production",
    need: "Clients needed to find the right course, see dates a year ahead and book a team in minutes; staff needed sessions, fees, invoices and trainers in one place.",
    delivered: "Course search built for a large catalogue, calendar booking by venue, organisation invoicing, and admin and trainer portals, with 140+ automated tests.",
    services: ["Web platform", "Automation"],
    stack: ["Laravel", "Livewire", "MySQL", "DomPDF"],
    image: { src: "/work/chania-finance.webp", address: "chaniafinanceconsultancy.com", alt: "Chania Finance Consultancy homepage with course search and next sessions" },
    live: "https://chaniafinanceconsultancy.com",
    caseStudy: `${PORTFOLIO}/chania-finance-consultancy`,
  },
  {
    slug: "afriasia",
    title: "Executive-training and booking platform",
    client: "AfriAsia Career Development Center",
    status: "live",
    statusLabel: "In production",
    need: "Public course discovery and applications, plus an operations portal for programmes, schedules, venues, payments, invoices and certificates.",
    delivered: "A Laravel and Livewire platform with Paystack in USD and KES, idempotent payment recording, queued invoices and certificates, and MFA for administrators.",
    services: ["Web platform", "Automation"],
    stack: ["Laravel", "Livewire", "MySQL", "Redis", "Paystack"],
    image: { src: "/work/afriasia.webp", address: "afriasiacareercenter.com", alt: "AfriAsia Career Development Center homepage" },
    live: "https://afriasiacareercenter.com",
    caseStudy: `${PORTFOLIO}/afriasia-career-development-center`,
  },
  {
    slug: "chania-publishers",
    title: "Learning management system",
    client: "Chania Publishers",
    status: "live",
    statusLabel: "In production",
    need: "Sell and deliver courses online, with paid access granted only once payment is verified and video that can't simply be shared.",
    delivered: "An LMS with verified-payment access, video streamed through an access-checked endpoint, and an admin back office.",
    services: ["Web platform", "Technical SEO"],
    stack: ["PHP", "MySQL", "JavaScript", "Linux"],
    image: { src: "/work/chania-publishers.webp", address: "chaniapublishers.com", alt: "Chania Publishers homepage" },
    live: "https://chaniapublishers.com",
    caseStudy: `${PORTFOLIO}/chania-publishers-lms`,
  },
  {
    slug: "utdrs",
    title: "Threat detection and response",
    client: "UTDRS · Mozilla Responsible Computing Challenge, Top 5",
    status: "live",
    statusLabel: "Live",
    need: "Help small teams without a security operations centre see and triage threats, with explainable detections.",
    delivered: "Events run through ATT&CK-mapped rules and anomaly and ML detectors, and analysts triage alerts in a React dashboard.",
    services: ["Applied AI", "Security"],
    stack: ["Python", "FastAPI", "React", "MongoDB"],
    image: { src: "/work/utdrs.webp", address: "utdrs-capstone-project.vercel.app", alt: "UTDRS sign-in page" },
    live: "https://utdrs-capstone-project.vercel.app",
    caseStudy: `${PORTFOLIO}/unified-threat-detection-response`,
  },
  {
    slug: "muhos",
    title: "Desktop shell for Linux",
    client: "MuhOS · open source",
    status: "open-source",
    statusLabel: "Open source",
    need: "A polished desktop for Hyprland on Fedora that installs cleanly as packages and proves its performance.",
    delivered: "RPM packages with a GDM session, a redesigned interface in QML, and every change benchmarked in a VM: idle shell CPU cut about 9×.",
    services: ["Software engineering"],
    stack: ["QML", "Qt 6", "Fedora RPM", "systemd"],
    image: { src: "/work/muhos.webp", address: "MuhOS on Fedora", alt: "The MuhOS desktop on Fedora" },
    live: "https://github.com/Alex-Muhscience/MuhOS",
    caseStudy: `${PORTFOLIO}/muhos`,
  },
]

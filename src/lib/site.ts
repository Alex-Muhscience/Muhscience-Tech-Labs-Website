/** Company details used across the site. Only addresses that actually work are listed here. */
export const site = {
  name: "Muhscience Tech Labs",
  tagline: "Business systems, automation and technical SEO",
  description:
    "Muhscience Tech Labs designs, builds and runs custom business systems for growing organisations in Kenya and beyond: web platforms, process automation, technical SEO and applied AI.",
  /** The canonical address. Fixed here so sitemaps and links never pick up a per-deployment URL. */
  url: "https://muhscience-tech-labs-website.vercel.app",
  founder: "Alex Murimi Kamau",
  founded: 2025,
  email: "cybermuhscienceilabs@gmail.com",
  phone: "+254 746 254 055",
  whatsapp: "https://wa.me/254746254055",
  location: "Nairobi, Kenya",
  timezone: "EAT (UTC+3)",
  links: {
    portfolio: "https://portfolio-alex-m-kamau.vercel.app",
    github: "https://github.com/Alex-Muhscience",
    linkedin: "https://www.linkedin.com/in/alex-m-kamau-20015b340",
  },
} as const

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
] as const

export function absoluteUrl(path = "/") {
  return `${site.url}${path}`
}

/** A WhatsApp link with a message already written, so the first message carries context. */
export function whatsappLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`
}

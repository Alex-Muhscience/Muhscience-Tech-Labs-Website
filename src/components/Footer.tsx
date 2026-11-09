import Link from "next/link"
import { services } from "@/data/services"
import { navigation, site } from "@/lib/site"
import { Wordmark } from "./Header"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-about">
            <Wordmark />
            <p>Custom business systems, automation and technical SEO, built and run by {site.founder} from {site.location}.</p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}><Link href={`/services#${service.slug}`}>{service.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              {navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.name}</Link></li>)}
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2>Get in touch</h2>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a></li>
              <li><a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <p>© {year} {site.name}. {site.location}.</p>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/security">Security</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

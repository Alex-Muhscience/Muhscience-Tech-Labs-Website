import type { Metadata } from "next"
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { site, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}: email, WhatsApp or the contact form. Based in ${site.location}.`,
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
    { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: whatsappLink(`Hello ${site.name}, I'd like to talk about a project.`), external: true },
  ]

  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Contact</p>
          <h1>Tell us what you need.</h1>
          <p className="lead">Describe the project in a few lines. We&apos;ll set up a short discovery call, then send a written quote with scope and timeline.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-grid">
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <ul className="channels">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <Icon size={22} aria-hidden="true" />
                    <strong>{label}</strong>
                    <span>{value}</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <dl className="facts" style={{ borderTop: 0, paddingTop: 0 }}>
              <div><dt><MapPin size={16} aria-hidden="true" style={{ verticalAlign: "-3px" }} /> Location</dt><dd>{site.location}</dd></div>
              <div><dt><Clock size={16} aria-hidden="true" style={{ verticalAlign: "-3px" }} /> Time zone</dt><dd>{site.timezone}</dd></div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

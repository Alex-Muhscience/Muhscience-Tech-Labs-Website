import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { site, whatsappLink } from "@/lib/site"

export function CtaBand({ title = "Have a system that needs building, or fixing?" }: { title?: string }) {
  return (
    <section className="band cta" aria-labelledby="cta-title">
      <div className="shell cta-inner">
        <div>
          <p className="kicker">Start a project</p>
          <h2 id="cta-title" style={{ marginTop: "0.75rem" }}>{title}</h2>
          <p className="lead" style={{ marginTop: "0.75rem" }}>Tell us what you need. After a short discovery call you get a written quote with scope and timeline.</p>
        </div>
        <div className="actions">
          <Link href="/contact" className="button button-accent">Start a project <ArrowRight size={16} aria-hidden="true" /></Link>
          <a href={whatsappLink(`Hello ${site.name}, I'd like to talk about a project.`)} className="button" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

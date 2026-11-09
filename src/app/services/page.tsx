import type { Metadata } from "next"
import { Check } from "lucide-react"
import { CtaBand } from "@/components/CtaBand"
import { SectionHead } from "@/components/SectionHead"
import { process, services } from "@/data/services"

export const metadata: Metadata = {
  title: "Services and pricing",
  description: "Business web platforms, process automation, technical SEO and applied AI, with starting prices in KES and a written quote for every project.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Services</p>
          <h1>Systems that take work off your team&apos;s hands.</h1>
          <p className="lead">Four services that often work together: a platform, the automation behind it, the search visibility in front of it and, where it helps, AI inside it.</p>
        </div>
      </section>

      <section className="section" aria-label="Services">
        <div className="shell grid-2">
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="card reveal" style={{ scrollMarginTop: "6rem" }}>
              <h2 style={{ fontSize: "1.5rem" }}>{service.title}</h2>
              <p>{service.summary}</p>
              <ul className="checklist">
                {service.includes.map((item) => (
                  <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>
                ))}
              </ul>
              <p className="price">From <strong>{service.from}</strong></p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-sunken" aria-labelledby="pricing-title">
        <div className="shell">
          <SectionHead
            id="pricing-title"
            kicker="How pricing works"
            title="A written quote before any work starts."
            note="Starting prices cover a focused first version. After a discovery call you get a written quote with the scope and timeline, so you know the cost before any work starts."
          />
          <ol className="steps">
            {process.map((item) => (
              <li key={item.step} className="reveal">
                <h3>{item.step}</h3>
                <span className="time">{item.time}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" />
    </>
  )
}

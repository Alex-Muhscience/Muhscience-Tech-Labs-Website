import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { CtaBand } from "@/components/CtaBand"
import { SectionHead } from "@/components/SectionHead"
import { WorkCard } from "@/components/WorkCard"
import { getServicePage } from "@/data/service-pages"
import { services } from "@/data/services"
import { work, type WorkItem } from "@/data/work"
import { site } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((entry) => entry.slug === slug)
  const detail = getServicePage(slug)
  if (!service || !detail) return {}

  return {
    title: service.title,
    description: `${service.summary} Starting price: ${service.from}.`,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} — ${site.name}`,
      description: service.summary,
      type: "article",
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((entry) => entry.slug === slug)
  const detail = getServicePage(slug)
  if (!service || !detail) notFound()

  const relatedWork = detail.relatedWork
    .map((workSlug) => work.find((item) => item.slug === workSlug))
    .filter((item): item is WorkItem => item !== undefined)

  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Service</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.summary}</p>
          <p style={{ marginTop: "1rem" }}>From <strong>{service.from}</strong></p>
        </div>
      </section>

      <section className="section">
        <div className="shell detail">
          <div className="detail-main">
            <SectionHead id="who-title" kicker="Who it is for" title="When this service fits." />
            <ul className="checklist detail-list">
              {detail.whoFor.map((entry) => (
                <li key={entry}><Check size={16} aria-hidden="true" /> {entry}</li>
              ))}
            </ul>

            <SectionHead id="builds-title" kicker="Common builds" title="What we often deliver." />
            <ul className="checklist detail-list">
              {detail.commonBuilds.map((entry) => (
                <li key={entry}><Check size={16} aria-hidden="true" /> {entry}</li>
              ))}
            </ul>

            <SectionHead id="deliverables-title" kicker="What you get" title="Deliverables you can use." />
            <ul className="checklist detail-list">
              {detail.deliverables.map((entry) => (
                <li key={entry}><Check size={16} aria-hidden="true" /> {entry}</li>
              ))}
            </ul>

            <SectionHead id="approach-title" kicker="Our approach" title="How the work is run." />
            <div className="prose">
              {detail.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <SectionHead id="considerations-title" kicker="Before we start" title="Things to consider." />
            <ul className="checklist detail-list">
              {detail.considerations.map((entry) => (
                <li key={entry}><Check size={16} aria-hidden="true" /> {entry}</li>
              ))}
            </ul>

            {detail.faqs.length > 0 && (
              <>
                <SectionHead id="faq-title" kicker="Questions" title="Common questions about this service." />
                <div className="faq">
                  {detail.faqs.map((item, index) => (
                    <details key={item.q} open={index === 0}>
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="detail-aside">
            <div className="card detail-facts-card">
              <h2>Service details</h2>
              <dl className="detail-facts">
                <div><dt>Starting price</dt><dd>{service.from}</dd></div>
                <div><dt>Delivery</dt><dd>Discovery, design, build, launch and support</dd></div>
                <div><dt>Quote</dt><dd>Written quote after discovery</dd></div>
              </dl>
              <h3 style={{ marginTop: "1rem", fontSize: "1rem" }}>Included in scope discussions</h3>
              <ul className="checklist">
                {service.includes.map((entry) => (
                  <li key={entry}><Check size={16} aria-hidden="true" /> {entry}</li>
                ))}
              </ul>
              <div className="detail-links">
                <Link href="/services" className="text-link">All services <ArrowRight size={15} aria-hidden="true" /></Link>
                <Link href="/process" className="text-link">How we work <ArrowUpRight size={15} aria-hidden="true" /></Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedWork.length > 0 && (
        <section className="section section-sunken">
          <div className="shell">
            <SectionHead id="related-work-title" kicker="Related work" title="Projects that show this service in production." />
            <div className="grid-3">
              {relatedWork.map((item) => <WorkCard key={item.slug} item={item} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Ready to scope this service?" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.summary,
            provider: { "@type": "Organization", name: site.name, url: site.url },
            areaServed: "KE",
          }),
        }}
      />
    </>
  )
}

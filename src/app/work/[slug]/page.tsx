import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { CtaBand } from "@/components/CtaBand"
import { SectionHead } from "@/components/SectionHead"
import { WorkCard } from "@/components/WorkCard"
import { getCaseStudy } from "@/data/case-studies"
import { work } from "@/data/work"
import { site } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = work.find((entry) => entry.slug === slug)
  const detail = getCaseStudy(slug)
  if (!item || !detail) return {}

  return {
    title: `${item.title} case study`,
    description: detail.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${item.title} — ${site.name}`,
      description: detail.summary,
      type: "article",
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = work.find((entry) => entry.slug === slug)
  const detail = getCaseStudy(slug)
  if (!item || !detail) notFound()

  const related = work.filter((entry) => entry.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Case study</p>
          <h1>{item.title}</h1>
          <p className="lead">{detail.summary}</p>
          <p style={{ marginTop: "1rem" }}>
            {item.client} · {item.statusLabel}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell detail">
          <div className="detail-main">
            {item.image && (
              <figure className="detail-media">
                <div className="browser">
                  <div className="browser-bar"><i /><i /><i /><span>{item.image.address}</span></div>
                  <Image src={item.image.src} alt={item.image.alt} width={1280} height={720} sizes="(min-width: 64rem) 46rem, 92vw" />
                </div>
              </figure>
            )}

            <SectionHead id="challenge-title" kicker="The challenge" title="What the client needed." />
            <div className="prose">
              {detail.challenge.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <SectionHead id="approach-title" kicker="The approach" title="How we approached it." />
            <div className="prose">
              {detail.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <SectionHead id="architecture-title" kicker="Under the hood" title="How the system is put together." />
            <ul className="checklist detail-list">
              {detail.architecture.map((entry) => (
                <li key={entry}><Check size={16} aria-hidden="true" /> {entry}</li>
              ))}
            </ul>

            <SectionHead id="decisions-title" kicker="Engineering decisions" title="Choices that shaped the build." />
            <div className="grid-3">
              {detail.decisions.map((decision) => (
                <article key={decision.title} className="card reveal">
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </article>
              ))}
            </div>

            <SectionHead id="outcomes-title" kicker="In production" title="What is live now." />
            <ul className="checklist detail-list">
              {detail.outcomes.map((entry) => (
                <li key={entry}><Check size={16} aria-hidden="true" /> {entry}</li>
              ))}
            </ul>
          </div>

          <aside className="detail-aside">
            <div className="card detail-facts-card">
              <h2>Project facts</h2>
              <dl className="detail-facts">
                <div><dt>Client</dt><dd>{item.client}</dd></div>
                <div><dt>Status</dt><dd>{item.statusLabel}</dd></div>
                <div><dt>Services</dt><dd>{item.services.join(", ")}</dd></div>
                <div><dt>Stack</dt><dd>{item.stack.join(", ")}</dd></div>
              </dl>
              <div className="detail-links">
                {item.live && (
                  <a href={item.live} className="text-link" target="_blank" rel="noopener noreferrer">
                    {item.status === "open-source" ? "Repository" : "Live site"} <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
                <a href={item.caseStudy} className="text-link" target="_blank" rel="noopener noreferrer">
                  Extended portfolio story <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <Link href="/work" className="text-link">All work <ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-sunken">
        <div className="shell">
          <SectionHead id="more-work-title" kicker="More work" title="Other platforms we have built and run." />
          <div className="grid-3">
            {related.map((entry) => <WorkCard key={entry.slug} item={entry} />)}
          </div>
        </div>
      </section>

      <CtaBand title="Want a system like this for your business?" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${item.title} case study`,
            description: detail.summary,
            author: { "@type": "Person", name: site.founder, url: site.links.portfolio },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
          }),
        }}
      />
    </>
  )
}

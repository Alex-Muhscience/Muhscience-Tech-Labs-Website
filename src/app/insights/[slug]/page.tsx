import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Lightbulb } from "lucide-react"
import { getInsight, insights } from "@/data/insights"
import { services } from "@/data/services"
import { work } from "@/data/work"
import { site } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const insight = getInsight(slug)
  if (!insight) return {}

  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: `${insight.title} — ${site.name}`,
      description: insight.description,
      type: "article",
      publishedTime: insight.publishedAt,
      authors: [site.founder],
    },
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Nairobi" }).format(new Date(value))
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = getInsight(slug)
  if (!insight) notFound()

  const relatedServices = insight.relatedServices
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service) => service !== undefined)
  const relatedWork = insight.relatedWork
    .map((workSlug) => work.find((item) => item.slug === workSlug))
    .filter((item) => item !== undefined)

  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Insight</p>
          <h1>{insight.title}</h1>
          <p className="lead">{insight.description}</p>
          <p style={{ marginTop: "1rem" }}>
            {formatDate(insight.publishedAt)} · {insight.readingTime} · {site.founder}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell detail">
          <article className="detail-main prose article-body">
            {insight.blocks.map((block, index) => {
              const key = `${block.type}-${index}`
              switch (block.type) {
                case "h2":
                  return <h2 key={key}>{block.text}</h2>
                case "ul":
                  return (
                    <ul key={key}>
                      {block.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )
                case "ol":
                  return (
                    <ol key={key}>
                      {block.items.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  )
                case "callout":
                  return (
                    <aside key={key} className="insight-callout">
                      <Lightbulb size={20} aria-hidden="true" />
                      <div>
                        <strong>{block.title}</strong>
                        <p>{block.text}</p>
                      </div>
                    </aside>
                  )
                default:
                  return <p key={key}>{block.text}</p>
              }
            })}
          </article>

          <aside className="detail-aside">
            <div className="card detail-card">
              <h2>About the author</h2>
              <p><strong>{site.founder}</strong><br />Founder and lead engineer at {site.name}.</p>
              <div className="detail-links">
                <a href={site.links.portfolio} className="text-link" target="_blank" rel="noopener noreferrer">
                  Portfolio and case studies <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            {relatedServices.length > 0 && (
              <div className="card detail-card">
                <h2>Related services</h2>
                <div className="detail-links">
                  {relatedServices.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="text-link">
                      {service.title} <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedWork.length > 0 && (
              <div className="card detail-card">
                <h2>Related work</h2>
                <div className="detail-links">
                  {relatedWork.map((item) => (
                    <Link key={item.slug} href={`/work/${item.slug}`} className="text-link">
                      {item.title} <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: insight.title,
            description: insight.description,
            datePublished: insight.publishedAt,
            dateModified: insight.publishedAt,
            author: { "@type": "Person", name: site.founder, url: site.links.portfolio },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
            mainEntityOfPage: `${site.url}/insights/${slug}`,
          }),
        }}
      />
    </>
  )
}

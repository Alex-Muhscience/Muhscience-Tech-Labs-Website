import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { insights } from "@/data/insights"

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical guides from Muhscience Tech Labs on payments, training platforms, technical SEO and automation.",
  alternates: { canonical: "/insights" },
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Nairobi" }).format(new Date(value))
}

export default function InsightsPage() {
  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Insights</p>
          <h1>Practical guides from the work we deliver.</h1>
          <p className="lead">Payments, platforms, technical SEO and automation, written for teams deciding what to build or fix next.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell grid-2">
          {insights.map((insight) => (
            <article key={insight.slug} className="card reveal">
              <p className="kicker">{insight.tags[0]}</p>
              <h2 style={{ fontSize: "1.35rem" }}>{insight.title}</h2>
              <p>{insight.description}</p>
              <ul className="tags" aria-label="Tags">
                {insight.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <p className="insight-meta">{formatDate(insight.publishedAt)} · {insight.readingTime}</p>
              <p>
                <Link href={`/insights/${insight.slug}`} className="text-link">
                  Read article <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

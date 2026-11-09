import type { Metadata } from "next"
import { CtaBand } from "@/components/CtaBand"
import { faq } from "@/data/faq"

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: "Pricing, timelines, payments, support and how projects with Muhscience Tech Labs work.",
  alternates: { canonical: "/faq" },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">FAQ</p>
          <h1>Questions clients usually ask first.</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell faq">
          {faq.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand title="Still have a question?" />
    </>
  )
}

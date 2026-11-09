import type { Metadata } from "next"
import { CtaBand } from "@/components/CtaBand"
import { WorkCard } from "@/components/WorkCard"
import { work } from "@/data/work"

export const metadata: Metadata = {
  title: "Work",
  description: "Platforms built and run for EuroAfrique Corporate Skills, Chania Finance Consultancy, AfriAsia Career Development Center and Chania Publishers, plus security and open-source work.",
  alternates: { canonical: "/work" },
}

export default function WorkPage() {
  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Work</p>
          <h1>Real platforms, running in production.</h1>
          <p className="lead">What each client needed and what was delivered. The full engineering story, including architecture and decisions, is in each case study.</p>
        </div>
      </section>
      <section className="section section-sunken" aria-label="Projects">
        <div className="shell grid-2">
          {work.map((item) => <WorkCard key={item.slug} item={item} detailed />)}
        </div>
      </section>
      <CtaBand title="Want something like this for your business?" />
    </>
  )
}

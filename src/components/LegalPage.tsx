import type { ReactNode } from "react"

export function LegalPage({ kicker, title, updated, children }: { kicker: string; title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          <p className="lead">Last updated {updated}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell prose">{children}</div>
      </section>
    </>
  )
}

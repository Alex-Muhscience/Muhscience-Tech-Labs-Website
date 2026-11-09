import Link from "next/link"

export default function NotFound() {
  return (
    <section className="band page-hero" style={{ minHeight: "60vh" }}>
      <div className="shell">
        <p className="kicker">404</p>
        <h1>This page doesn&apos;t exist.</h1>
        <p className="lead">It may have moved when the site was reorganised.</p>
        <div className="actions" style={{ marginTop: "2rem" }}>
          <Link href="/" className="button button-accent">Home</Link>
          <Link href="/contact" className="button">Contact</Link>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bot, Check, Gauge, LayoutDashboard, ShieldCheck, Workflow, Wrench, UserRound, Handshake } from "lucide-react"
import { CtaBand } from "@/components/CtaBand"
import { SectionHead } from "@/components/SectionHead"
import { WorkCard } from "@/components/WorkCard"
import { process, services } from "@/data/services"
import { work } from "@/data/work"
import { site } from "@/lib/site"

const serviceIcons = { "web-platforms": LayoutDashboard, automation: Workflow, "technical-seo": Gauge, "applied-ai": Bot } as const

const promises = [
  { icon: UserRound, title: "One accountable owner", text: "You deal with the person who designs, builds and runs your system, from the first call to production support." },
  { icon: Handshake, title: "Trusted partners when needed", text: "For larger projects we bring in trusted specialists, and the founder stays your single point of contact and technical owner." },
  { icon: ShieldCheck, title: "Security designed in", text: "Role-based access, multi-factor login for administrators, signed payment callbacks and audit trails, from the first schema." },
  { icon: Wrench, title: "Built to be run", text: "Automated tests, gated deployments, backups and monitoring ship with the feature, not after something breaks." },
]

export default function HomePage() {
  const live = work.filter((item) => item.status === "live").slice(0, 4)

  return (
    <>
      <section className="band hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div>
            <p className="kicker">{site.tagline}</p>
            <h1 id="hero-title">
              Business systems that{" "}
              <span className="mark">
                run
                <svg viewBox="0 0 120 16" preserveAspectRatio="none" aria-hidden="true"><path d="M3 11 C 28 4, 62 3, 117 8" /></svg>
              </span>{" "}
              your operations, not the other way round.
            </h1>
            <p className="lead">
              We design, build and run custom web platforms, automation and technical SEO for growing organisations,
              from the first conversation to the production server.
            </p>
            <div className="actions">
              <Link href="/contact" className="button button-accent">Start a project <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link href="/work" className="button">See the work</Link>
            </div>
            <ul className="hero-points">
              <li><Check size={16} aria-hidden="true" /> Four client platforms live in production</li>
              <li><Check size={16} aria-hidden="true" /> M-Pesa, Paystack and card payments built in</li>
              <li><Check size={16} aria-hidden="true" /> Based in Nairobi, working with clients remotely</li>
            </ul>
          </div>
          <figure className="founder">
            <div className="founder-photo">
              <Image src="/images/profile.jpg" alt={`${site.founder}, founder of ${site.name}`} width={800} height={1000} sizes="22rem" priority />
            </div>
            <figcaption>
              <p><strong>{site.founder}</strong><span>Founder and lead engineer</span></p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="shell">
          <SectionHead
            id="services-title"
            kicker="What we do"
            title="Four services, one goal: systems that save you time."
            note="Every project starts with a discovery call and a written quote. Prices below are starting points."
          />
          <div className="grid-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons]
              return (
                <Link key={service.slug} href={`/services#${service.slug}`} className="card card-link reveal">
                  <span className="card-icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <p className="price">From <strong>{service.from}</strong></p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-sunken" aria-labelledby="work-title">
        <div className="shell">
          <SectionHead
            id="work-title"
            kicker="Selected work"
            title="Platforms we built that businesses run on every day."
            note="Real clients, live sites. Each one has a full case study."
          />
          <div className="grid-2">
            {live.map((item) => <WorkCard key={item.slug} item={item} />)}
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/work" className="text-link">All work <ArrowRight size={16} aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="shell">
          <SectionHead id="process-title" kicker="How we work" title="A clear path from first call to launch." />
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

      <section className="section section-warm" aria-labelledby="why-title">
        <div className="shell">
          <SectionHead id="why-title" kicker="Why work with us" title="Small studio, production standards." />
          <ul className="promises">
            {promises.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal">
                <Icon size={26} aria-hidden="true" />
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

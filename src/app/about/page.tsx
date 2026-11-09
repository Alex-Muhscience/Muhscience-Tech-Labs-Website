import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CtaBand } from "@/components/CtaBand"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a founder-led engineering studio in Nairobi, run by ${site.founder}, building and running business systems with trusted partners.`,
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">About</p>
          <h1>A founder-led studio that builds and runs what it ships.</h1>
          <p className="lead">{site.name} was founded in {site.founded} in {site.location}. Your project is led by the person who designs it, builds it and keeps it running.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="founder-title">
        <div className="shell about-grid">
          <figure className="about-photo reveal">
            <Image src="/images/profile.jpg" alt={`Portrait of ${site.founder}`} width={800} height={1000} sizes="(min-width: 56rem) 20rem, 92vw" />
          </figure>
          <div className="prose">
            <p className="kicker">Founder</p>
            <h2 id="founder-title" style={{ marginTop: 0 }}>{site.founder}</h2>
            <p>
              I&apos;m a full-stack engineer and the sole technical owner of the platforms behind four training and
              publishing businesses: EuroAfrique Corporate Skills, Chania Publishers, AfriAsia Career Development Center
              and Chania Finance Consultancy. On each one the whole path is mine: understanding what the business needs,
              designing the data model, building the interface and the API, integrating payments, deploying it and fixing
              it when something breaks.
            </p>
            <p>
              That shapes how {site.name} works. I would rather ship a smaller system you can operate than a larger one
              you can only demonstrate. I came to web development through security and networking, so access control,
              multi-factor login and infrastructure are part of every build, not extras.
            </p>
            <p>
              For larger projects I work with trusted specialists, for example in design, content or mobile, and remain
              your single point of contact and the technical owner of the result.
            </p>
            <dl className="facts">
              <div><dt>Education</dt><dd>BSc Computer Science, Second Class Honours (Upper), Kisii University, 2021–2025</dd></div>
              <div><dt>Recognition</dt><dd>Top 5, Mozilla Responsible Computing Challenge (UTDRS)</dd></div>
              <div><dt>Open source</dt><dd>Maintainer of MuhOS, a desktop shell for Hyprland on Fedora</dd></div>
              <div><dt>Based in</dt><dd>{site.location}, {site.timezone}</dd></div>
            </dl>
            <p>
              <a href={site.links.portfolio} className="text-link" target="_blank" rel="noopener noreferrer">
                Full portfolio and case studies <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              {"   "}
              <Link href="/work" className="text-link" style={{ marginLeft: "1.25rem" }}>Selected work</Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

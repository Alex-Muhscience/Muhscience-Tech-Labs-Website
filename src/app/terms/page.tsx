import type { Metadata } from "next"
import { LegalPage } from "@/components/LegalPage"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } }

export default function TermsPage() {
  return (
    <LegalPage kicker="Terms" title="Terms of use for this website" updated="9 November 2026">
      <p>These terms cover your use of the {site.name} website. Client projects are governed by the written quote or agreement for that project.</p>
      <h2>Information on this site</h2>
      <p>We keep the information here accurate and current. Prices shown are starting points; the price of a project is the one in its written quote.</p>
      <h2>Links to other sites</h2>
      <p>Case studies and project links lead to client websites and to {site.founder}&apos;s portfolio. We are not responsible for the content of sites we do not run.</p>
      <h2>Intellectual property</h2>
      <p>The text and design of this website belong to {site.name}. Screenshots of client platforms are shown as examples of our work; the platforms belong to their owners.</p>
      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  )
}

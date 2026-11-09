import type { Metadata } from "next"
import { LegalPage } from "@/components/LegalPage"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy" } }

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Privacy" title="How this website handles your information" updated="9 November 2026">
      <p>This notice covers the {site.name} website. It is written to be read, not to hide anything.</p>
      <h2>What we collect</h2>
      <ul>
        <li><strong>Contact form:</strong> your name, email address, organisation (if you give it), the service you are interested in and your message. These are sent to us by email so we can reply.</li>
        <li><strong>Email and WhatsApp:</strong> if you contact us directly, we receive whatever you send.</li>
        <li><strong>Analytics:</strong> the site uses Vercel Web Analytics and Speed Insights, which count page views and measure performance without cookies and without identifying you.</li>
      </ul>
      <h2>How we use it</h2>
      <p>Only to reply to you and, if we work together, to run the project. We do not sell or share your information for marketing, and we do not add you to mailing lists.</p>
      <h2>How long we keep it</h2>
      <p>Enquiries are kept in our email for as long as they are useful to the conversation or the project, and deleted on request.</p>
      <h2>Your rights</h2>
      <p>Under Kenya&apos;s Data Protection Act, 2019 you can ask what we hold about you, ask us to correct or delete it, or object to how it is used. Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  )
}

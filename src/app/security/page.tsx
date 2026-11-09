import type { Metadata } from "next"
import { LegalPage } from "@/components/LegalPage"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Security",
  description: "How Muhscience Tech Labs builds security into the systems it delivers, and how to report a vulnerability.",
  alternates: { canonical: "/security" },
}

export default function SecurityPage() {
  return (
    <LegalPage kicker="Security" title="How we build securely, and how to report a problem" updated="9 November 2026">
      <h2>In the systems we build</h2>
      <ul>
        <li>Role-based access control, with permissions checked on the server for every action.</li>
        <li>Multi-factor login for administrators, and sessions that can be ended remotely.</li>
        <li>Payments confirmed only by the provider&apos;s signed callback, and recorded so a repeated callback can&apos;t charge twice.</li>
        <li>Rate limiting on logins and forms, security headers, and HTTPS everywhere.</li>
        <li>Audit trails for sensitive changes, backups that are tested by restoring them, and dependency audits before each release.</li>
      </ul>
      <h2>Reporting a vulnerability</h2>
      <p>
        If you find a security problem in this website or in a system we built, please email{" "}
        <a href={`mailto:${site.email}?subject=Security%20report`}>{site.email}</a> with the details and how to reproduce
        it. Please give us reasonable time to fix it before disclosing it publicly. We will acknowledge your report and
        keep you informed.
      </p>
    </LegalPage>
  )
}

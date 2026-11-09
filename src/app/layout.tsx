import type { Metadata, Viewport } from "next"
import { Hanken_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { absoluteUrl, site } from "@/lib/site"
import "./globals.css"

const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Business systems, automation and technical SEO`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder, url: site.links.portfolio }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Business systems, automation and technical SEO`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: { google: "M1ruyE4wie7Ei_x3caoezOYlvtHt4QJj56iDbvIWWPE" },
}

export const viewport: Viewport = {
  themeColor: "#005da6",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": absoluteUrl("/#business"),
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: site.founder, url: site.links.portfolio },
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  areaServed: "KE",
  sameAs: [site.links.linkedin, site.links.github],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

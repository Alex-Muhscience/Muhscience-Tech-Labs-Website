import type { NextConfig } from "next"

// Pages that were removed or merged. Permanent redirects keep old links and search results working.
const moved: [string, string][] = [
  ["/solutions", "/services"],
  ["/projects", "/work"],
  ["/case-studies", "/work"],
  ["/webinars", "/"],
  ["/blog", "/"],
  ["/blog/:path*", "/"],
  ["/insights", "/"],
  ["/techinsights", "/"],
  ["/careers", "/about"],
  ["/auth/:path*", "/"],
  ["/admin/:path*", "/"],
  ["/sitemap-test", "/"],
  ["/sitemap-index.xml", "/sitemap.xml"],
  ["/sitemap-insights.xml", "/sitemap.xml"],
  ["/sitemap-case-studies.xml", "/sitemap.xml"],
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return moved.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ]
  },
}

export default nextConfig

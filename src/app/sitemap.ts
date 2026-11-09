import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["/", 1], ["/services", 0.9], ["/work", 0.9], ["/about", 0.8], ["/contact", 0.8], ["/faq", 0.6],
    ["/security", 0.4], ["/privacy", 0.3], ["/terms", 0.3],
  ]
  return pages.map(([path, priority]) => ({ url: absoluteUrl(path), changeFrequency: "monthly", priority }))
}

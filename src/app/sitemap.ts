import type { MetadataRoute } from "next"
import { insights } from "@/data/insights"
import { services } from "@/data/services"
import { work } from "@/data/work"
import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["/", 1],
    ["/services", 0.9],
    ["/work", 0.9],
    ["/process", 0.8],
    ["/insights", 0.8],
    ["/about", 0.8],
    ["/contact", 0.8],
    ["/faq", 0.6],
    ["/security", 0.4],
    ["/privacy", 0.3],
    ["/terms", 0.3],
    ...services.map((service): [string, number] => [`/services/${service.slug}`, 0.9]),
    ...work.map((item): [string, number] => [`/work/${item.slug}`, 0.8]),
    ...insights.map((insight): [string, number] => [`/insights/${insight.slug}`, 0.7]),
  ]
  return pages.map(([path, priority]) => ({ url: absoluteUrl(path), changeFrequency: "monthly", priority }))
}

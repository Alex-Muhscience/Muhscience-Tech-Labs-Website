import { ImageResponse } from "next/og"
import { site } from "@/lib/site"

export const alt = `${site.name} — business systems, automation and technical SEO`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #005da6, #003f73)", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 700 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 16, background: "#fff", color: "#005da6", fontSize: 40 }}>M</div>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, maxWidth: 980 }}>Business systems that run your operations.</div>
          <div style={{ display: "flex", width: 220, height: 8, borderRadius: 4, background: "#d7263d" }} />
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#d2e2f2" }}>Web platforms · Automation · Technical SEO · Applied AI · {site.location}</div>
      </div>
    ),
    size,
  )
}

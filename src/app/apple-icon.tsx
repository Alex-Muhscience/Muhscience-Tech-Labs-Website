import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", background: "linear-gradient(135deg, #005da6, #003f73)", color: "#fff", fontSize: 110, fontWeight: 700 }}>
        M
        <div style={{ position: "absolute", right: 26, bottom: 26, width: 22, height: 22, borderRadius: 11, background: "#d7263d" }} />
      </div>
    ),
    size,
  )
}

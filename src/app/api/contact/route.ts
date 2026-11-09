import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"
import { services } from "@/data/services"
import { site } from "@/lib/site"

/*
 * Delivers contact-form enquiries by email over SMTP. Configure on Vercel:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS  (e.g. Gmail with an app password)
 *   CONTACT_TO  (optional; defaults to the site's email address)
 * Without SMTP settings the route answers 503 and the form offers email and WhatsApp instead,
 * so an enquiry is never silently lost.
 */

// Missing fields arrive as "", so people get the friendly message rather than a type error.
const text = (schema: z.ZodString) => z.preprocess((value) => (typeof value === "string" ? value : ""), schema)

const schema = z.object({
  name: text(z.string().trim().min(2, "Please enter your name.").max(80, "Please shorten your name.")),
  email: text(z.string().trim().email("Please enter a valid email address.").max(120)),
  company: text(z.string().trim().max(120)),
  service: text(z.string()).refine((value) => value === "" || services.some((service) => service.slug === value), "Please choose a service from the list."),
  message: text(z.string().trim().min(10, "Please tell us a little more (at least 10 characters).").max(4000, "Please keep the message under 4,000 characters.")),
  // Honeypot: people never see this field, bots fill it in.
  website: text(z.string()),
})

// Best-effort limit per server instance: five messages per address per ten minutes.
const recent = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < 10 * 60_000)
  hits.push(now)
  recent.set(ip, hits)
  return hits.length > 5
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!)

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 })
  }

  let data: z.infer<typeof schema>
  try {
    data = schema.parse(await request.json())
  } catch (error) {
    const message = error instanceof z.ZodError ? error.issues[0]?.message : "Invalid request."
    return NextResponse.json({ error: message ?? "Invalid request." }, { status: 400 })
  }

  // A filled honeypot: pretend it worked so the bot moves on.
  if (data.website) return NextResponse.json({ ok: true })

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 })
  }

  const service = services.find((item) => item.slug === data.service)?.title ?? "Not specified"
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const lines = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "Not given"],
    ["Service", service],
  ]

  try {
    await transporter.sendMail({
      from: `"${site.name} website" <${SMTP_USER}>`,
      to: CONTACT_TO || site.email,
      replyTo: { name: data.name, address: data.email },
      subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      text: `${lines.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\n${data.message}`,
      html: `<table>${lines.map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    })
  } catch (error) {
    console.error("Contact form email failed", error)
    return NextResponse.json({ error: "unavailable" }, { status: 503 })
  }

  return NextResponse.json({ ok: true })
}

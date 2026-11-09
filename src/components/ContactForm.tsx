"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/services"
import { site, whatsappLink } from "@/lib/site"

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string } | { kind: "fallback"; mailto: string; whatsapp: string }

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" })

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    setState({ kind: "sending" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        form.reset()
        setState({ kind: "sent" })
        return
      }
      const body = (await response.json().catch(() => ({}))) as { error?: string }
      if (response.status === 503) throw new Error("unavailable")
      setState({ kind: "error", message: body.error ?? "Something went wrong. Please try again." })
    } catch {
      // The message could not be delivered: hand it over to email or WhatsApp instead, already written.
      const subject = `Project enquiry from ${data.name || "the website"}`
      const text = `${data.message}\n\n${data.name}${data.company ? `, ${data.company}` : ""}\n${data.email}`
      setState({
        kind: "fallback",
        mailto: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`,
        whatsapp: whatsappLink(text),
      })
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required minLength={2} maxLength={80} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Organisation <span className="field-hint">(optional)</span></label>
          <input id="company" name="company" maxLength={120} autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Not sure yet</option>
            {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about the project</label>
        <textarea id="message" name="message" required minLength={10} maxLength={4000} placeholder="What should the system do, who uses it, and is there a deadline?" />
      </div>
      <div className="trap" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite">
        {state.kind === "sent" && <p className="notice notice-ok">Thank you. Your message has been sent, and we&apos;ll reply by email.</p>}
        {state.kind === "error" && <p className="notice notice-error">{state.message}</p>}
        {state.kind === "fallback" && (
          <p className="notice notice-error">
            The form couldn&apos;t send your message just now. Your text is ready to go by{" "}
            <a href={state.mailto}>email</a> or <a href={state.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
          </p>
        )}
      </div>

      <button type="submit" className="button button-primary" disabled={state.kind === "sending"}>
        {state.kind === "sending" ? "Sending…" : <>Send message <ArrowRight size={16} aria-hidden="true" /></>}
      </button>
    </form>
  )
}

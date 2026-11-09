import { MessageCircle } from "lucide-react"
import { site, whatsappLink } from "@/lib/site"

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, I'd like to talk about a project.`)}
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  )
}

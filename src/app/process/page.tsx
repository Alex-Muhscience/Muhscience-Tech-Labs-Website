import type { Metadata } from "next"
import { FileCheck, Eye, ShieldCheck, LifeBuoy } from "lucide-react"
import { CtaBand } from "@/components/CtaBand"
import { SectionHead } from "@/components/SectionHead"
import { process } from "@/data/services"

export const metadata: Metadata = {
  title: "How we work",
  description: "The four stages of a Muhscience Tech Labs project: discovery, design, build and launch, with the deliverables and questions at each step.",
  alternates: { canonical: "/process" },
}

const expectations = [
  { icon: Eye, title: "Working previews", text: "You review real interfaces and flows before the full build, not a static mockup at the end." },
  { icon: FileCheck, title: "Written scope", text: "Every project starts with a written quote, timeline and success criteria so expectations are clear." },
  { icon: ShieldCheck, title: "Security by default", text: "Access control, payment verification, backups and audit trails are designed into the system." },
  { icon: LifeBuoy, title: "Support after launch", text: "Deployment is followed by training, documentation and a maintenance plan agreed with you." },
]

export default function ProcessPage() {
  return (
    <>
      <section className="band page-hero">
        <div className="shell">
          <p className="kicker">Process</p>
          <h1>A clear path from first call to launch.</h1>
          <p className="lead">Every project follows four stages. Each one ends with something you can review before the next begins, so there are no surprises at handover.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            id="stages-title"
            kicker="The four stages"
            title="What happens, what you get and what we ask."
            note="Timelines vary with scope, but the sequence stays the same: understand, design, build, launch."
          />
          <ol className="steps process-steps">
            {process.map((item) => (
              <li key={item.step} className="reveal">
                <h3>{item.step}</h3>
                <span className="time">{item.time}</span>
                <p>{item.text}</p>
                <p className="process-label">What you get</p>
                <ul className="checklist">
                  {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                </ul>
                <p className="process-questions"><strong>We ask:</strong> {item.questions.join(" ")}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-sunken" aria-labelledby="expectations-title">
        <div className="shell">
          <SectionHead id="expectations-title" kicker="What to expect" title="A working relationship, not a handoff." />
          <div className="grid-4">
            {expectations.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card reveal">
                <span className="card-icon"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to start with discovery?" />
    </>
  )
}

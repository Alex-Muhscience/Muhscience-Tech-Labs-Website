import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { WorkItem } from "@/data/work"

/** One real project: the product in a browser frame, what the client needed and what was delivered. */
export function WorkCard({ item, detailed = false }: { item: WorkItem; detailed?: boolean }) {
  return (
    <article className="card work-card reveal" aria-labelledby={`work-${item.slug}`}>
      {item.image && (
        <div className="work-visual" aria-hidden="true">
          <div className="browser">
            <div className="browser-bar"><i /><i /><i /><span>{item.image.address}</span></div>
            <Image src={item.image.src} alt="" width={1280} height={720} sizes="(min-width: 64rem) 34rem, 92vw" />
          </div>
        </div>
      )}
      <div className="work-body">
        <p className="work-client">{item.client}</p>
        <h3 id={`work-${item.slug}`}>{item.title}</h3>
        <span className="status" data-status={item.status}>{item.statusLabel}</span>
        {detailed ? (
          <dl className="work-detail">
            <dt>The need</dt>
            <dd>{item.need}</dd>
            <dt>What was delivered</dt>
            <dd>{item.delivered}</dd>
          </dl>
        ) : (
          <p>{item.delivered}</p>
        )}
        <ul className="tags" aria-label="Technology">
          {item.stack.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        <p className="work-links">
          {item.live && (
            <a href={item.live} className="text-link" target="_blank" rel="noopener noreferrer">
              {item.status === "open-source" ? "Repository" : "Live site"} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          <a href={item.caseStudy} className="text-link" target="_blank" rel="noopener noreferrer">
            Full case study <ArrowRight size={15} aria-hidden="true" />
          </a>
        </p>
      </div>
    </article>
  )
}

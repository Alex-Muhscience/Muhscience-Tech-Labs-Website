export function SectionHead({ kicker, title, note, id }: { kicker: string; title: string; note?: string; id?: string }) {
  return (
    <div className="section-head reveal">
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  )
}

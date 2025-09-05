export default function ProjectCard({ p }) {
  return (
    <article className="card">
      {p.thumb && <img src={p.thumb} alt={p.title} />}
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <ul className="stack">
        {p.stack.map(s => <li key={s}>{s}</li>)}
      </ul>
      <div className="links">
        {p.demo && <a href={p.demo} target="_blank">Live</a>}
        {p.code && <a href={p.code} target="_blank">Code</a>}
      </div>
    </article>
  )
}
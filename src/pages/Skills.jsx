export default function Skills() {
  const skills = {
    Languages: ["JavaScript", "Python", "R", "SQL"],
    Frontend: ["React (learning)", "HTML", "CSS"],
    Backend: ["Node.js", "Express"],
    Tools: ["Git/GitHub", "Linux", "VS Code"]
  }
  return (
    <section>
      <h2>Skills</h2>
      {Object.entries(skills).map(([k, v]) => (
        <div key={k}>
          <h3>{k}</h3>
          <p>{v.join(" • ")}</p>
        </div>
      ))}
    </section>
  )
}
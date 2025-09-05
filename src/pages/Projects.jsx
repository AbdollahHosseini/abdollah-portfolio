import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}
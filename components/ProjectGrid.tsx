import { ProjectCard, type Project } from '@/components/ProjectCard' // ← defaultじゃなく名前付き

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  )
}

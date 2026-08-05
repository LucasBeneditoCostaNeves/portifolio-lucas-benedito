'use client'

import { useState } from 'react'
import type { PortfolioProject } from '@/types'
import { ProjectCard, ProjectCardEmpty } from '@/components/ui/ProjectCard'
import { ProjectModal } from '@/components/ui/ProjectModal'

const GRID_SIZE = 3

interface ProjectsInteractiveProps {
  projects: PortfolioProject[]
}

export function ProjectsInteractive({ projects }: ProjectsInteractiveProps) {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)
  const emptySlots = Math.max(0, GRID_SIZE - projects.length)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setActiveProject(project)}
          />
        ))}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <ProjectCardEmpty key={`empty-${i}`} />
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}

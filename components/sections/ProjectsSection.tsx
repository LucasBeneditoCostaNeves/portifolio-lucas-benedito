import { PROJECTS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeInUp } from '@/components/motion/FadeInUp'
import { ProjectsInteractive } from '@/components/ui/ProjectsInteractive'

export function ProjectsSection() {
  return (
    <section id="projetos" className="border-b border-line" style={{ padding: '84px 0' }}>
      <div className="max-w-[1040px] mx-auto px-8">
        <FadeInUp>
          <SectionHeader num="06" title="Projetos pessoais" />
        </FadeInUp>
        <FadeInUp delay={0.05}>
          <p style={{ maxWidth: '620px', color: 'var(--ink-soft)', fontSize: '15.5px', marginTop: '-28px', marginBottom: '44px' }}>
            Clique em um projeto para ver os detalhes, stacks utilizadas e links.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <ProjectsInteractive projects={PROJECTS} />
        </FadeInUp>
      </div>
    </section>
  )
}

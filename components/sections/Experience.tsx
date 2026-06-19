import { TIMELINE } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { FadeInUp } from '@/components/motion/FadeInUp'

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-line" style={{ padding: '84px 0' }}>
      <div className="max-w-[1040px] mx-auto px-8">
        <SectionHeader num="03" title="Experiência profissional" />

        <div className="relative pl-8">
          {/* vertical line */}
          <div
            className="absolute w-px bg-line"
            style={{ left: 5, top: 6, bottom: 6 }}
          />

          {TIMELINE.map((entry, i) => (
            <FadeInUp key={entry.company} delay={i * 0.1}>
              <TimelineItem entry={entry} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}

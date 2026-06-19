import type { TimelineEntry } from '@/types'
import { ProjectBlock } from './ProjectBlock'

interface TimelineItemProps {
  entry: TimelineEntry
}

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <div className="relative pb-14 last:pb-0">
      {/* dot */}
      <span
        className="absolute rounded-full bg-bg border-2 border-accent"
        style={{ left: -32, top: 4, width: 11, height: 11 }}
      />

      {/* header */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-[6px]">
        <h3 className="font-heading font-semibold text-[19px]">
          {entry.company}{' '}
          <span className="text-accent">· {entry.role}</span>
        </h3>
        <span className="font-mono text-[12.5px] text-muted whitespace-nowrap">
          {entry.period}
        </span>
      </div>

      {/* bullets */}
      <ul className="m-0 p-0 list-none flex flex-col gap-[10px] mt-[14px]">
        {entry.bullets.map((bullet, i) => (
          <li
            key={i}
            className="relative pl-5 text-ink-soft text-[14.5px] leading-[1.65]"
          >
            <span className="absolute left-0 text-accent text-[12px] top-[2px]">▸</span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* projects */}
      {entry.projects.map((project) => (
        <ProjectBlock key={project.title} title={project.title} items={project.items} />
      ))}
    </div>
  )
}

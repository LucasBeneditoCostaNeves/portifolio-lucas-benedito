import type { EduEntry } from '@/types'

interface EduCardProps {
  entry: EduEntry
}

export function EduCard({ entry }: EduCardProps) {
  return (
    <div className="border border-line bg-bg-raised p-6 rounded-[var(--radius)]">
      <span className="block font-mono text-[12px] text-accent mb-[10px]">
        {entry.period}
      </span>
      <h4 className="font-heading font-semibold text-[16.5px] m-0 mb-1">
        {entry.institution}
      </h4>
      <p className="m-0 text-muted text-[13.5px]">{entry.course}</p>
    </div>
  )
}

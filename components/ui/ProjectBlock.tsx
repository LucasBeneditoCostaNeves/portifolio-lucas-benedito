import type { ProjectItem } from '@/types'

interface ProjectBlockProps {
  title: string
  items: ProjectItem[]
}

function renderItem(item: ProjectItem) {
  if (!item.highlight) return <>{item.text}</>
  const parts = item.text.split(item.highlight)
  return (
    <>
      {parts[0]}
      <strong className="font-semibold text-ink">{item.highlight}</strong>
      {parts.slice(1).join(item.highlight)}
    </>
  )
}

export function ProjectBlock({ title, items }: ProjectBlockProps) {
  return (
    <div
      className="mt-[22px] bg-bg-raised border border-line rounded-[0_var(--radius)_var(--radius)_0] px-[22px] py-[20px]"
      style={{ borderLeft: '3px solid var(--accent)' }}
    >
      <p className="font-mono text-[12.5px] text-accent uppercase tracking-[0.05em] m-0 mb-[6px]">
        Projeto de destaque
      </p>
      <h4 className="font-heading font-semibold text-[16px] m-0 mb-3">{title}</h4>
      <ul className="m-0 p-0 list-none flex flex-col gap-[9px]">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative pl-[18px] text-ink-soft text-[14px] leading-[1.6]"
          >
            <span className="absolute left-0 text-muted">→</span>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

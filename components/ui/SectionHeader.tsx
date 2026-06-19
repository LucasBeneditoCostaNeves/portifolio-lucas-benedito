interface SectionHeaderProps {
  num: string
  title: string
  light?: boolean
}

export function SectionHeader({ num, title, light }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="font-mono text-[14px] text-accent">{num}</span>
      <h2
        className="font-heading font-semibold tracking-[-0.02em]"
        style={{ fontSize: 'var(--text-section-title)' }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-px"
        style={{ background: light ? '#33363F' : 'var(--line)' }}
      />
    </div>
  )
}

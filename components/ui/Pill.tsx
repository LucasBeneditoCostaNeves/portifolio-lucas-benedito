interface PillProps {
  children: string
}

export function Pill({ children }: PillProps) {
  return (
    <span className="font-mono text-[12.5px] px-[11px] py-[6px] border border-line rounded-[var(--radius)] text-ink-soft bg-bg transition-all duration-150 hover:border-accent hover:text-accent-deep hover:bg-accent-soft cursor-default">
      {children}
    </span>
  )
}

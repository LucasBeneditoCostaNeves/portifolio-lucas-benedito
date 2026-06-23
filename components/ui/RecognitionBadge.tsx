interface RecognitionBadgeProps {
  children: string
}

export function RecognitionBadge({ children }: RecognitionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-[6px] font-mono text-[12.5px] px-[11px] py-[6px] border border-line rounded-[var(--radius)] text-ink-soft bg-bg">
      <span className="text-accent">●</span>
      {children}
    </span>
  )
}

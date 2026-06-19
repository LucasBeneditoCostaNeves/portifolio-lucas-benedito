import type { ReactNode } from 'react'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  href: string
  children: ReactNode
  target?: '_blank'
  rel?: string
}

export function Button({ variant, href, children, target, rel }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-mono text-[13.5px] px-[22px] py-[13px] rounded-[var(--radius)] transition-all duration-200'

  const styles = {
    primary:
      `${base} bg-ink text-bg border border-ink hover:bg-accent-deep hover:border-accent-deep`,
    ghost:
      `${base} border border-line text-ink hover:border-ink`,
  }

  return (
    <a href={href} className={styles[variant]} target={target} rel={rel}>
      {children}
    </a>
  )
}

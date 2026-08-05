'use client'

import { useEffect } from 'react'
import type { PortfolioProject } from '@/types'

interface ProjectModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

const STATUS_LABEL: Record<string, string> = {
  live: 'Produção',
  wip: 'Em andamento',
}

function renderHighlightText(text: string, boldParts: string[]) {
  if (boldParts.length === 0) return text

  let remaining = text
  const parts: React.ReactNode[] = []
  let key = 0

  for (const bold of boldParts) {
    const idx = remaining.indexOf(bold)
    if (idx === -1) continue
    if (idx > 0) parts.push(remaining.slice(0, idx))
    parts.push(<strong key={key++}>{bold}</strong>)
    remaining = remaining.slice(idx + bold.length)
  }

  if (remaining) parts.push(remaining)
  return parts
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const isOpen = project !== null

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'rgba(22,24,29,0.6)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'opacity 0.25s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-raised)',
          border: '1px solid var(--line)',
          borderRadius: '6px',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '88vh',
          overflowY: 'auto',
          position: 'relative',
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.98)',
          transition: 'transform 0.28s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: '0 32px 64px -24px rgba(20,30,28,0.35)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            border: '1px solid var(--line)',
            background: 'var(--bg-raised)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-soft)',
          }}
          aria-label="Fechar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {project && (
          <>
            {/* Image area */}
            <div
              style={{
                width: '100%',
                height: '260px',
                background: 'linear-gradient(135deg, var(--accent-soft) 0%, var(--bg) 100%)',
                borderRadius: '6px 6px 0 0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                color: 'var(--muted)',
              }}
            >
              {project.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.imageUrl} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)', margin: 0, opacity: 0.7 }}>
                    Screenshot em breve
                  </p>
                </>
              )}
            </div>

            {/* Body */}
            <div style={{ padding: '28px 32px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>
                    {project.company} · {project.year}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
                    {project.name}
                  </h2>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '3px 9px',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    marginTop: '2px',
                    ...(project.status === 'live'
                      ? { background: '#DDFCE8', color: '#1A7A3F', border: '1px solid #B8EDD0' }
                      : { background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A' }),
                  }}
                >
                  {STATUS_LABEL[project.status]}
                </span>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.75, margin: '0 0 24px' }}>
                {project.fullDesc}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      background: 'var(--bg)',
                      border: '1px solid var(--line)',
                      padding: '14px 16px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>{h.icon}</span>
                    <div>{renderHighlightText(h.text, h.boldParts)}</div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                  Stack utilizada
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11.5px',
                        padding: '4px 9px',
                        border: '1px solid var(--line)',
                        borderRadius: '2px',
                        color: 'var(--ink-soft)',
                        background: 'var(--bg)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      padding: '10px 18px',
                      borderRadius: '2px',
                      border: '1px solid var(--line)',
                      color: 'var(--ink)',
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      padding: '10px 18px',
                      borderRadius: '2px',
                      background: 'var(--ink)',
                      color: 'var(--bg)',
                      border: '1px solid var(--ink)',
                      textDecoration: 'none',
                    }}
                  >
                    Ver demo →
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import type { PortfolioProject } from '@/types'

const STATUS_LABEL: Record<string, string> = {
  live: 'Produção',
  wip: 'Em andamento',
}

interface ProjectCardProps {
  project: PortfolioProject
  onOpen: () => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--line)'}`,
        background: 'var(--bg-raised)',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px -12px rgba(15,110,91,0.18)' : 'none',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Image area */}
      <div style={{ position: 'relative', height: '180px', background: 'var(--bg)', overflow: 'hidden' }}>
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.imageUrl} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              color: 'var(--muted)',
              background: 'linear-gradient(135deg, var(--accent-soft) 0%, var(--bg) 100%)',
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
            </svg>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)', textAlign: 'center', padding: '0 12px' }}>
              {project.name}
            </span>
          </div>
        )}
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15,110,91,0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.4)',
              padding: '10px 20px',
              borderRadius: '2px',
            }}
          >
            Ver detalhes →
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 22px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
            {project.name}
          </h3>
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
        <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: '0 0 14px', lineHeight: 1.6 }}>
          {project.shortDesc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.stack.slice(0, 5).map((s) => (
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
    </article>
  )
}

export function ProjectCardEmpty() {
  return (
    <article
      style={{
        border: '1px solid var(--line)',
        background: 'var(--bg-raised)',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          color: 'var(--muted)',
          background: 'var(--bg)',
          opacity: 0.5,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>Em breve</span>
      </div>
      <div style={{ padding: '20px 22px 22px' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 600, margin: '0 0 8px', color: 'var(--muted)' }}>
          Próximo projeto
        </h3>
        <p style={{ fontSize: '13.5px', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
          Novo projeto em desenvolvimento. Em breve aqui.
        </p>
      </div>
    </article>
  )
}

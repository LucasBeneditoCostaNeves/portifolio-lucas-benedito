'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const ROLE_ITEMS = [
  'Desenvolvedor Full Stack',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'NestJS',
]

const LINE1 = 'Lucas Benedito'
const LINE2A = 'Costa '
const LINE2B = 'Neves'
const TOTAL = LINE1.length + LINE2A.length + LINE2B.length

export function Hero() {
  const [count, setCount] = useState(0)
  const done = count >= TOTAL

  useEffect(() => {
    if (done) return
    const delay = count === 0 ? 300 : 75
    const t = setTimeout(() => setCount((c) => c + 1), delay)
    return () => clearTimeout(t)
  }, [count, done])

  const line1 = LINE1.slice(0, Math.min(count, LINE1.length))
  const showLine2 = count > LINE1.length
  const line2a = LINE2A.slice(0, Math.min(count - LINE1.length, LINE2A.length))
  const showAccent = count > LINE1.length + LINE2A.length
  const line2b = LINE2B.slice(0, count - LINE1.length - LINE2A.length)

  const cursor = !done ? (
    <span
      className="inline-block ml-[2px] align-text-bottom"
      style={{
        width: '3px',
        height: '0.82em',
        background: 'var(--accent)',
        animation: 'cursor-blink 0.7s step-end infinite',
      }}
    />
  ) : null

  return (
    <header
      className="relative border-b border-line"
      style={{ padding: '72px 0 0', overflow: 'visible' }}
    >
      {/* background layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* decorative grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 70% 70% at 70% 30%, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 70% at 70% 30%, black 0%, transparent 70%)',
          }}
        />
        {/* watermark */}
        <div
          className="absolute font-heading font-bold text-ink pointer-events-none select-none hidden md:block"
          style={{
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(120px, 18vw, 260px)',
            opacity: 0.04,
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
            zIndex: 0,
          }}
        >
          Full Stack
        </div>
      </div>

      <div className="max-w-[1040px] mx-auto px-8 relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-end gap-6">
          {/* text column */}
          <div style={{ paddingBottom: '54px' }}>
            {/* eyebrow */}
            <div
              className="inline-flex items-center gap-2 font-mono text-[13px] text-accent border px-3 py-[6px] mb-7"
              style={{
                background: 'var(--accent-soft)',
                borderColor: '#CFE6DE',
                borderRadius: '100px',
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full bg-accent"
                style={{ boxShadow: '0 0 0 3px var(--accent-soft)' }}
              />
              disponível para novas oportunidades
            </div>

            {/* name */}
            <h1
              className="font-heading font-bold text-ink leading-[0.98] tracking-[-0.035em] m-0"
              style={{ fontSize: 'var(--text-name)' }}
            >
              <span className="whitespace-nowrap">{line1}{!showLine2 && cursor}</span>
              {showLine2 && (
                <>
                  <br />
                  {line2a}
                  {showAccent ? (
                    <em className="not-italic text-accent">
                      {line2b}
                      {cursor}
                    </em>
                  ) : (
                    cursor
                  )}
                </>
              )}
            </h1>

            {/* role line */}
            <div
              className="flex flex-wrap font-mono text-ink-soft mt-[22px]"
              style={{ fontSize: 'var(--text-role-line)' }}
            >
              {ROLE_ITEMS.map((item, i) => (
                <span key={item} className="flex items-center">
                  {item}
                  {i < ROLE_ITEMS.length - 1 && (
                    <span className="mx-[10px] text-line">/</span>
                  )}
                </span>
              ))}
            </div>

            {/* summary */}
            <p className="max-w-[520px] mt-[26px] text-[15.5px] text-ink-soft leading-[1.7]">
              Construo aplicações web de ponta a ponta — do front-end ao design de
              arquitetura de back-end. Já liderei projetos críticos de forma independente,
              sempre com foco em código limpo, desacoplamento de serviços e resultado
              mensurável para o negócio.
            </p>

            {/* actions */}
            <div className="flex flex-wrap gap-[14px] mt-8">
              <Button variant="primary" href="#experiencia">
                Ver experiência →
              </Button>
              <Button variant="ghost" href="mailto:lucasbene03@gmail.com">
                Enviar e-mail
              </Button>
            </div>

            {/* meta */}
            <div className="flex flex-wrap gap-7 mt-10 font-mono text-[12px] text-muted">
              <span>📍 São Paulo, SP</span>
              <span>📱 (11) 97677-9251</span>
              <span>✉️ lucasbene03@gmail.com</span>
            </div>
          </div>

          {/* photo column */}
          <div className="relative flex justify-center items-end order-first md:order-last" style={{ overflow: 'visible' }}>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 72%)',
                zIndex: 1,
              }}
            />
            <img
              src="/lucas.png"
              alt="Lucas Benedito"
              style={{
                width: '100%',
                maxWidth: '420px',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom',
                position: 'relative',
                zIndex: 2,
                filter: 'drop-shadow(0 30px 40px rgba(20,30,28,0.12))',
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

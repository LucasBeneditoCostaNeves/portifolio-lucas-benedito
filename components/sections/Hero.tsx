import { Button } from '@/components/ui/Button'

const ROLE_ITEMS = [
  'Desenvolvedor Full Stack',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'NestJS',
]

export function Hero() {
  return (
    <header
      className="relative overflow-hidden border-b border-line"
      style={{ padding: '96px 0 88px' }}
    >
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

      <div className="max-w-[1040px] mx-auto px-8 relative">
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
            Lucas Benedito
            <br />
            Costa <em className="not-italic text-accent">Neves</em>
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
          <p className="max-w-[620px] mt-[30px] text-[16.5px] text-ink-soft leading-[1.7]">
            Construo aplicações web de ponta a ponta — do front-end ao design de
            arquitetura de back-end. Já liderei projetos críticos de forma independente,
            sempre com foco em código limpo, desacoplamento de serviços e resultado
            mensurável para o negócio.
          </p>

          {/* actions */}
          <div className="flex flex-wrap gap-[14px] mt-9">
            <Button variant="primary" href="#experiencia">
              Ver experiência →
            </Button>
            <Button variant="ghost" href="mailto:lucasbene03@gmail.com">
              Enviar e-mail
            </Button>
          </div>

          {/* meta */}
          <div className="flex flex-wrap gap-9 mt-14 font-mono text-[12.5px] text-muted">
            <span>📍 São Paulo, SP</span>
            <span>📱 (11) 97677-9251</span>
            <span>✉️ lucasbene03@gmail.com</span>
          </div>
      </div>
    </header>
  )
}

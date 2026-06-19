import type { Cert } from '@/types'

interface CertRowProps {
  cert: Cert
}

export function CertRow({ cert }: CertRowProps) {
  return (
    <div className="mt-5 flex items-center justify-between border border-line bg-bg-raised px-[22px] py-[18px] rounded-[var(--radius)]">
      <div className="flex items-center gap-[14px]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-accent flex-shrink-0"
          style={{ background: 'var(--accent-soft)' }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 15a4 4 0 100-8 4 4 0 000 8z" />
            <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
          </svg>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-[14.5px] m-0 mb-[2px]">
            {cert.title}
          </h4>
          <p className="m-0 font-mono text-[12.5px] text-muted">{cert.date}</p>
        </div>
      </div>
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[12.5px] text-accent border border-line px-[14px] py-2 rounded-[var(--radius)] whitespace-nowrap transition-all duration-200 hover:border-accent hover:bg-accent-soft"
      >
        Ver certificado →
      </a>
    </div>
  )
}

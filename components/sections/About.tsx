import { ABOUT_PARAGRAPHS, PRINCIPLES, STACK } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StackTerminal } from '@/components/ui/StackTerminal'
import type { TextSegment } from '@/types'

function renderParagraph(segments: TextSegment[]) {
  return segments.map((seg, i) =>
    seg.bold ? (
      <strong key={i} className="font-semibold text-ink">
        {seg.text}
      </strong>
    ) : (
      <span key={i}>{seg.text}</span>
    )
  )
}

export function About() {
  return (
    <section id="sobre" className="border-b border-line" style={{ padding: '84px 0' }}>
      <div className="max-w-[1040px] mx-auto px-8">
        <SectionHeader num="01" title="Resumo profissional" />

        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] items-start">
          {/* text column */}
          <div>
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <p key={i} className="text-ink-soft text-[16px] leading-[1.8] m-0 mb-[18px]">
                {renderParagraph(para)}
              </p>
            ))}

            {/* principles */}
            <div className="border-t border-line">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.num}
                  className="grid gap-[14px] py-[18px] border-b border-line"
                  style={{ gridTemplateColumns: '30px 1fr' }}
                >
                  <span className="font-mono text-accent text-[13px] pt-[1px]">{p.num}</span>
                  <div>
                    <h4 className="font-heading font-semibold text-[14.5px] m-0 mb-1">
                      {p.title}
                    </h4>
                    <p className="text-[13.5px] text-muted m-0 leading-[1.55]">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* terminal */}
          <StackTerminal stack={STACK} />
        </div>
      </div>
    </section>
  )
}

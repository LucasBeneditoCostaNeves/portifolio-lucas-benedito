import { CONTACT_LINKS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactLink } from '@/components/ui/ContactLink'

export function Contact() {
  return (
    <section
      id="contato"
      className="text-bg"
      style={{ background: 'var(--ink)', padding: '84px 0' }}
    >
      <div className="max-w-[1040px] mx-auto px-8">
        <SectionHeader num="05" title="Contato" light />

        <div className="grid gap-16 items-end md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3
              className="font-heading font-bold leading-[1.12] tracking-[-0.025em]"
              style={{ fontSize: 'var(--text-contact-headline)' }}
            >
              Vamos conversar sobre{' '}
              <span style={{ color: '#5CC9A8' }}>seu próximo projeto</span>.
            </h3>
            <p className="mt-[18px] text-[#A7AAB3] text-[15.5px] max-w-[440px] leading-[1.7]">
              Aberto a novas oportunidades como desenvolvedor full stack. Resposta rápida
              por e-mail ou WhatsApp.
            </p>
          </div>

          <div>
            {CONTACT_LINKS.map((item) => (
              <ContactLink key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

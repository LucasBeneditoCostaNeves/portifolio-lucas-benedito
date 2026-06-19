import { EDUCATION, CERTS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EduCard } from '@/components/ui/EduCard'
import { CertRow } from '@/components/ui/CertRow'

export function Education() {
  return (
    <section id="formacao" className="border-b border-line" style={{ padding: '84px 0' }}>
      <div className="max-w-[1040px] mx-auto px-8">
        <SectionHeader num="04" title="Formação acadêmica" />

        <div className="grid gap-5 md:grid-cols-2">
          {EDUCATION.map((entry) => (
            <EduCard key={entry.institution} entry={entry} />
          ))}
        </div>

        {CERTS.map((cert) => (
          <CertRow key={cert.title} cert={cert} />
        ))}
      </div>
    </section>
  )
}

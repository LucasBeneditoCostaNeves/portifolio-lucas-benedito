import { SKILL_CATEGORIES } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Pill } from '@/components/ui/Pill'
import { StaggerList, StaggerItem } from '@/components/motion/StaggerList'

export function Skills() {
  return (
    <section id="skills" className="border-b border-line" style={{ padding: '84px 0' }}>
      <div className="max-w-[1040px] mx-auto px-8">
        <SectionHeader num="02" title="Habilidades técnicas" />

        <StaggerList
          className="grid list-none m-0 p-0 md:grid-cols-2"
          style={{ gap: '1px', background: 'var(--line)', border: '1px solid var(--line)' }}
        >
          {SKILL_CATEGORIES.map((cat, i) => (
            <StaggerItem key={cat.label} index={i} className="bg-bg-raised px-7 py-[26px]">
              <div className="flex items-center justify-between mb-[14px]">
                <h4 className="font-mono text-[13px] text-muted uppercase tracking-[0.06em]">
                  {cat.label}
                </h4>
                <span
                  className="font-mono text-[11px] text-accent px-2 py-[2px]"
                  style={{ background: 'var(--accent-soft)', borderRadius: '100px' }}
                >
                  {String(cat.skills.length).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}

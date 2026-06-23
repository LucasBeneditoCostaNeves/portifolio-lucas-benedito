import { RECOGNITIONS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FeaturedRecognitionCard } from '@/components/ui/FeaturedRecognitionCard'
import { RecognitionCard } from '@/components/ui/RecognitionCard'
import { FadeInUp } from '@/components/motion/FadeInUp'

export function Recognitions() {
  const featured = RECOGNITIONS.find((r) => r.featured)
  const grid = RECOGNITIONS.filter((r) => !r.featured)

  return (
    <section id="reconhecimentos" className="border-b border-line" style={{ padding: '84px 0' }}>
      <div className="max-w-[1040px] mx-auto px-8">
        <SectionHeader num="05" title="Reconhecimentos" />

        {featured && (
          <FadeInUp>
            <FeaturedRecognitionCard item={featured} />
          </FadeInUp>
        )}

        {grid.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            {grid.map((item, i) => (
              <FadeInUp key={item.id} delay={i * 0.08}>
                <RecognitionCard item={item} />
              </FadeInUp>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

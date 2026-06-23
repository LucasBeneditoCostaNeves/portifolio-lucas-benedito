import Image from 'next/image'
import type { Recognition } from '@/types'
import { RecognitionBadge } from './RecognitionBadge'

interface FeaturedRecognitionCardProps {
  item: Recognition
}

export function FeaturedRecognitionCard({ item }: FeaturedRecognitionCardProps) {
  return (
    <div className="flex bg-bg-raised border border-line rounded-[var(--radius)] overflow-hidden">
      <div className="relative w-[38%] shrink-0 bg-line" style={{ minHeight: '320px' }}>
        <Image src={item.image} alt={item.title} fill className="object-cover object-center" />
      </div>
      <div className="flex flex-col justify-center gap-5 p-8">
        {item.badge && <RecognitionBadge>{item.badge}</RecognitionBadge>}
        <h3
          className="font-heading font-semibold text-ink m-0 leading-[1.25]"
          style={{ fontSize: '22px' }}
        >
          {item.title}
        </h3>
        {item.description && (
          <p className="text-ink-soft text-[14px] leading-[1.6] m-0">{item.description}</p>
        )}
        <p className="font-mono text-[13px] text-accent m-0">
          — {item.company} · {item.year}
        </p>
      </div>
    </div>
  )
}

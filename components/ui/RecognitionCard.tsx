import Image from 'next/image'
import type { Recognition } from '@/types'

interface RecognitionCardProps {
  item: Recognition
}

export function RecognitionCard({ item }: RecognitionCardProps) {
  const meta = [item.company, item.year].join(' · ')
  const stars = item.stars ? '★'.repeat(item.stars) : null

  return (
    <div className="bg-bg-raised border border-line rounded-[var(--radius)] overflow-hidden">
      <div className="relative aspect-square w-full bg-line">
        <Image src={item.image} alt={item.title} fill style={{ objectFit: item.objectFit ?? 'cover', objectPosition: item.objectPosition ?? 'center' }} />
      </div>
      <div className="p-4">
        <p className="font-mono text-[12px] text-accent m-0 leading-none">
          {meta}
          {stars && <span className="ml-2">{stars}</span>}
        </p>
        <h3 className="font-heading font-semibold text-[15px] text-ink mt-[6px] leading-[1.3] m-0">
          {item.title}
        </h3>
      </div>
    </div>
  )
}

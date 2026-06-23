import Image from 'next/image'
import type { Recognition } from '@/types'

interface RecognitionCardProps {
  item: Recognition
}

function CardContent({ item }: { item: Recognition }) {
  const meta = [item.company, item.year].join(' · ')
  const stars = item.stars ? '★'.repeat(item.stars) : null

  return (
    <>
      <div className="relative aspect-square w-full bg-line">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`transition-transform duration-300${item.url ? ' group-hover:scale-105' : ''}`}
          style={{ objectFit: item.objectFit ?? 'cover', objectPosition: item.objectPosition ?? 'center' }}
        />
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
    </>
  )
}

const cardClass = 'bg-bg-raised border border-line rounded-[var(--radius)] overflow-hidden'

export function RecognitionCard({ item }: RecognitionCardProps) {
  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className={`group block no-underline text-inherit ${cardClass}`}>
        <CardContent item={item} />
      </a>
    )
  }

  return (
    <div className={cardClass}>
      <CardContent item={item} />
    </div>
  )
}

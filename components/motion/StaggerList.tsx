'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'

interface StaggerListProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  index?: number
}

export function StaggerList({ children, className, style }: StaggerListProps) {
  const ref = useRef<HTMLUListElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <ul
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      data-visible={visible}
    >
      {children}
    </ul>
  )
}

export function StaggerItem({ children, className, index = 0 }: StaggerItemProps) {
  return (
    <li
      className={className}
      style={{
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {children}
    </li>
  )
}

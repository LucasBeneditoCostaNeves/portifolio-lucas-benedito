'use client'

import { useState } from 'react'
import type { NavLink } from '@/types'

interface NavMobileMenuProps {
  links: NavLink[]
}

export function NavMobileMenu({ links }: NavMobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* burger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col gap-[5px] p-2 text-ink"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      >
        <span
          className="block w-5 h-[2px] bg-ink transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : undefined }}
        />
        <span
          className="block w-5 h-[2px] bg-ink transition-opacity duration-200"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-5 h-[2px] bg-ink transition-transform duration-200"
          style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : undefined }}
        />
      </button>

      {/* drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg border-b border-line z-50 shadow-lg">
          <nav className="max-w-[1040px] mx-auto px-8 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[14px] text-ink-soft py-3 border-b border-line last:border-0 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="font-mono text-[13px] border border-ink text-ink px-4 py-2 mt-2 rounded-[var(--radius)] text-center transition-all duration-200 hover:bg-ink hover:text-bg"
            >
              contato →
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}

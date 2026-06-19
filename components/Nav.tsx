import { NAV_LINKS } from '@/lib/data'
import { NavMobileMenu } from './NavMobileMenu'

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-line relative"
      style={{
        background: 'rgba(250,250,247,0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-[1040px] mx-auto px-8 flex items-center justify-between h-16">
        {/* logo */}
        <div className="font-heading font-bold text-[17px] tracking-[-0.02em]">
          LBC<span className="text-accent">N</span>
          <span className="text-ink">.dev</span>
        </div>

        {/* desktop links */}
        <ul className="hidden md:flex gap-7 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[13px] text-ink-soft relative py-1 transition-colors duration-200 hover:text-accent group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-accent mr-1">
                  ·{' '}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-block font-mono text-[13px] border border-ink px-4 py-2 rounded-[var(--radius)] transition-all duration-200 hover:bg-ink hover:text-bg"
        >
          contato →
        </a>

        {/* mobile */}
        <NavMobileMenu links={NAV_LINKS} />
      </div>
    </nav>
  )
}

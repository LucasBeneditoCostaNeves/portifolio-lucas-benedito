import type { ContactItem } from '@/types'

interface ContactLinkProps {
  item: ContactItem
}

export function ContactLink({ item }: ContactLinkProps) {
  const isExternal = item.href.startsWith('http')
  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-center justify-between py-[18px] border-b font-mono text-[14px] text-[#E8E9EC] transition-all duration-200 hover:pl-2 first:border-t"
      style={{ borderColor: '#2C2F38' }}
    >
      <span className="transition-colors duration-200 group-hover:text-[#5CC9A8]">
        {item.label}
      </span>
      <span style={{ color: '#5CC9A8' }}>→</span>
    </a>
  )
}

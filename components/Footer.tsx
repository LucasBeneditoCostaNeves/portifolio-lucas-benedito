export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', padding: '28px 0' }}>
      <div
        className="max-w-[1040px] mx-auto px-8 flex flex-wrap items-center justify-between gap-[10px] font-mono text-[12px] border-t pt-6"
        style={{ color: '#6E7280', borderColor: '#2C2F38' }}
      >
        <span>© 2026 Lucas Benedito Costa Neves</span>
        <span>São Paulo, SP — Brasil</span>
      </div>
    </footer>
  )
}

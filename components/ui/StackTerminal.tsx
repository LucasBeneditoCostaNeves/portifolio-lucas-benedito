interface StackTerminalProps {
  stack: Record<string, string[]>
}

export function StackTerminal({ stack }: StackTerminalProps) {
  const punc = (s: string) => <span style={{ color: '#5C6270' }}>{s}</span>
  const prop = (s: string) => <span style={{ color: '#E0B23B' }}>"{s}"</span>
  const str = (s: string) => <span style={{ color: '#9CD6B8' }}>"{s}"</span>

  const entries = Object.entries(stack)

  return (
    <div
      className="rounded-[6px] overflow-hidden"
      style={{
        background: '#13151A',
        color: '#E8E9EC',
        boxShadow: '0 24px 48px -24px rgba(20,30,28,0.35)',
      }}
    >
      {/* title bar */}
      <div
        className="flex items-center gap-[7px] px-4 py-[13px] border-b"
        style={{ background: '#1B1E25', borderColor: '#2A2D35' }}
      >
        <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#E0564E' }} />
        <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#E0B23B' }} />
        <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#3FB97C' }} />
        <span className="font-mono text-[12px] ml-[10px]" style={{ color: '#7A7E89' }}>
          stack.json
        </span>
      </div>

      {/* body */}
      <div className="font-mono text-[13px] leading-[1.95] px-[22px] py-[22px] pb-[26px]">
        <div>{punc('{')}</div>
        {entries.map(([key, values], i) => {
          const isLast = i === entries.length - 1
          const isArray = Array.isArray(values)
          return (
            <div key={key} className="ml-4">
              {prop(key)}{punc(': ')}
              {isArray && values.length === 1 && key === 'methodology' ? (
                <>{str(values[0])}{!isLast && punc(',')}</>
              ) : isArray ? (
                <>
                  {punc('[')}
                  {values.map((v, j) => (
                    <span key={v}>{str(v)}{j < values.length - 1 && punc(', ')}</span>
                  ))}
                  {punc(']')}{!isLast && punc(',')}
                </>
              ) : (
                <>{str(String(values))}{!isLast && punc(',')}</>
              )}
            </div>
          )
        })}
        <div>{punc('}')}</div>
      </div>
    </div>
  )
}

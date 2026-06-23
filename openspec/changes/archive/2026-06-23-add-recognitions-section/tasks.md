## 1. Dados e Tipos

- [x] 1.1 Verificar que `Recognition` está exportado em `types/index.ts` (interface já adicionada; confirmar que inclui todos os campos do PRD)
- [x] 1.2 Restaurar `lib/data.ts` se deletado do working tree: `git checkout HEAD -- lib/data.ts`
- [x] 1.3 Adicionar import de `Recognition` ao bloco de imports de `lib/data.ts`
- [x] 1.4 Adicionar constante `RECOGNITIONS: Recognition[]` em `lib/data.ts` com as 5 entradas do PRD (1 featured + 4 secundários)
- [x] 1.5 Adicionar `{ label: 'reconhecimentos', href: '#reconhecimentos' }` ao array `NAV_LINKS` em `lib/data.ts` (entre `formação` e o fim do array)

## 2. Imagens

- [x] 2.1 Criar diretório `public/reconhecimentos/`
- [x] 2.2 Adicionar placeholders (SVG transparente ou imagem temporária) para cada caminho referenciado em `RECOGNITIONS`: `premio-destaques-2024.jpg`, `reconhecimento-mes.jpg`, `reconhecimento-equipe.jpg`, `destaques-grupo.jpg`, `momento-premiacao.jpg`

## 3. Componentes de UI

- [x] 3.1 Verificar `components/ui/RecognitionBadge.tsx` — pill com `●` em `text-accent` e label; confirmar que usa tokens do design system
- [x] 3.2 Verificar `components/ui/RecognitionCard.tsx` — imagem aspect-square com `bg-line` fallback, metadado `font-mono text-[12px] text-accent`, stars opcionais, título `font-heading font-semibold text-[15px] text-ink`
- [x] 3.3 Verificar `components/ui/FeaturedRecognitionCard.tsx` — split 60/40, imagem com `bg-line` fallback, badge opcional, título, descrição opcional, atribuição `font-mono text-accent`

## 4. Seção

- [x] 4.1 Verificar `components/sections/Recognitions.tsx` — importa `RECOGNITIONS`, separa featured do grid, renderiza `SectionHeader num="05"`, `FeaturedRecognitionCard` com `FadeInUp`, grade `grid-cols-2 sm:grid-cols-4 gap-6 mt-6` com `FadeInUp delay` escalonado
- [x] 4.2 Registrar `<Recognitions />` em `app/page.tsx` após `<Education />` e antes de `<Contact />`
- [x] 4.3 Adicionar import `import { Recognitions } from '@/components/sections/Recognitions'` em `app/page.tsx`

## 5. Verificação

- [x] 5.1 Executar `tsc --noEmit` — zero erros de tipo
- [x] 5.2 Executar `next build` — build sem erros (checar especialmente erros de `next/image` por imagens ausentes)
- [x] 5.3 Verificar visualmente no browser: card featured renderizado, grade com 4 colunas em desktop e 2 em mobile, animações FadeInUp funcionando, link `reconhecimentos` visível no nav

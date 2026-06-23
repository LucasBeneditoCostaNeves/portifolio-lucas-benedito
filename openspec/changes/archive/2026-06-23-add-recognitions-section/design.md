## Context

O portfólio usa Next.js 15 App Router com Server Components por padrão. Todas as seções existentes (Hero, Sobre, Skills, Experiência, Formação) são Server Components puros — sem `'use client'` — que consomem dados de `lib/data.ts`. O design system usa variáveis CSS (`--accent`, `--ink`, `--ink-soft`, `--bg-raised`, `--line`, `--radius`) e fontes configuradas via `next/font` (Space Grotesk como `font-heading`, JetBrains Mono como `font-mono`).

Estado atual do repositório ao propor esta mudança:
- Componentes de UI (`FeaturedRecognitionCard`, `RecognitionCard`, `RecognitionBadge`, `Recognitions`) já existem como arquivos não rastreados/commitados.
- Interface `Recognition` já adicionada em `types/index.ts`.
- `lib/data.ts` commitado sem `RECOGNITIONS` e sem link de navegação `reconhecimentos`.
- `app/page.tsx` não registra `<Recognitions />`.

## Goals / Non-Goals

**Goals:**
- Adicionar constante `RECOGNITIONS` e link de navegação em `lib/data.ts`
- Registrar `<Recognitions />` em `app/page.tsx` na posição correta
- Garantir que os componentes existentes estejam alinhados ao PRD (layout, tokens, animações)
- Definir placeholder `bg-line` enquanto imagens não carregam (evita flash branco/preto)

**Non-Goals:**
- Lightbox / modal de imagem ampliada
- Filtro por empresa ou ano
- Paginação ou lazy loading de cards
- CMS ou painel de edição de reconhecimentos

## Decisions

### Decisão 1: Server Component puro para a seção

A seção `Recognitions` e todos os seus sub-componentes são Server Components. Não há interação que exija `'use client'` — sem hover state gerenciado no JS, sem modal. Isso mantém consistência com todas as outras seções e evita hidratação desnecessária.

**Alternativa considerada**: Client Component com useState para hover. **Rejeitado** porque o efeito de hover do badge é puramente CSS e não requer estado React.

### Decisão 2: Dados em lib/data.ts (array estático)

`RECOGNITIONS` é uma constante TypeScript em `lib/data.ts`, igual a `TIMELINE`, `EDUCATION` etc. Nenhuma busca assíncrona — dados são estáticos e mudam raramente.

**Alternativa considerada**: Frontmatter MDX ou CMS headless. **Rejeitado** por over-engineering para um portfólio pessoal com 5 entradas.

### Decisão 3: next/image com fill + contêiner posicionado

Cada imagem usa `<Image fill className="object-cover" />` dentro de um `div` com `position: relative` e tamanho definido. Isso garante otimização automática (WebP, lazy loading, preload) sem que o componente precise definir `width`/`height` fixos.

O fallback visual é `bg-line` no contêiner pai — a cor de linha do design system preenche o espaço enquanto a imagem não carrega, evitando flash de cor preta.

### Decisão 4: Layout grid responsivo via Tailwind

Grade: `grid-cols-2 sm:grid-cols-4` — 2 colunas em mobile, 4 em sm+. Sem breakpoint `xs` custom; abaixo de 380px os 2 cards já são razoavelmente pequenos. Essa decisão simplifica o CSS sem perda de usabilidade perceptível.

### Decisão 5: Animação com FadeInUp existente

Reutiliza o wrapper `FadeInUp` do projeto com prop `delay` para escalonamento nos cards do grid. Não introduz nova primitiva de animação.

## Risks / Trade-offs

- **Imagens ausentes** → `next/image` lança erro em build se `src` apontar para arquivo inexistente em `public/`. Mitigação: usar URLs externas ou placeholder SVG até que as imagens reais sejam fornecidas. A constante `RECOGNITIONS` usa caminhos `/reconhecimentos/*.jpg` — é necessário que o diretório exista com as imagens ou que o `next.config` configure `unoptimized: true` para desenvolvimento.
- **lib/data.ts deletado no working tree** → o arquivo precisa ser restaurado (`git checkout HEAD -- lib/data.ts`) antes de adicionar `RECOGNITIONS`. Risco de perder mudanças intermediárias se houver edições não commitadas. Mitigação: verificar `git stash` antes de restaurar.
- **Posição no nav** → o PRD coloca `reconhecimentos` entre `formação` e `contato`. O CTA de contato no nav é um elemento separado — a ordem no `NAV_LINKS` array deve refletir isso sem remover o CTA.

## Migration Plan

1. Restaurar `lib/data.ts` se deletado: `git checkout HEAD -- lib/data.ts`
2. Adicionar `RECOGNITIONS` e import `Recognition` em `lib/data.ts`
3. Adicionar `{ label: 'reconhecimentos', href: '#reconhecimentos' }` ao `NAV_LINKS`
4. Criar `public/reconhecimentos/` com placeholders (ou imagens reais)
5. Registrar `<Recognitions />` em `app/page.tsx` após `<Education />`
6. Verificar build com `next build` — checar erros de imagem e de tipo

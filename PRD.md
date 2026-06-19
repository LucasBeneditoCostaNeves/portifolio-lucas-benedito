# PRD — Portfolio Lucas Benedito (Next.js)

## Visão geral

Converter o HTML estático do portfolio em uma aplicação Next.js 16 com App Router, React 19, TypeScript, Tailwind CSS v4 e Framer Motion. O objetivo é manter o visual exato do HTML de referência enquanto adota a arquitetura idiomática do framework.

---

## Stack confirmada

| Pacote | Versão |
|---|---|
| next | 16.2.9 |
| react | 19.2.4 |
| typescript | ^5 |
| tailwindcss | ^4 (via `@tailwindcss/postcss`) |
| framer-motion | ^12 |

---

## Estrutura de arquivos alvo

```
app/
  layout.tsx          ← Root layout: fontes, metadata, <html lang="pt-BR">
  page.tsx            ← Monta todas as seções (Server Component)
  globals.css         ← CSS variables + @theme Tailwind v4

components/
  Nav.tsx             ← Logo + links desktop (Server Component)
  NavMobileMenu.tsx   ← Burger + drawer mobile (Client Component)
  Footer.tsx          ← Copyright (Server Component)

  sections/
    Hero.tsx          ← Seção header com grid de fundo
    About.tsx         ← Texto + princípios + StackTerminal
    Skills.tsx        ← Grid de células com pills
    Experience.tsx    ← Timeline com projetos de destaque
    Education.tsx     ← Cards de formação + CertRow
    Contact.tsx       ← Fundo escuro com links de contato

  ui/
    SectionHeader.tsx ← Bloco reutilizável: número + título + linha
    StackTerminal.tsx ← Card dark com JSON sintaxe colorida
    Pill.tsx          ← Tag de skill individual
    Button.tsx        ← Variantes btn-primary e btn-ghost
    ProjectBlock.tsx  ← Bloco de projeto de destaque (borda esquerda accent)
    TimelineItem.tsx  ← Entrada individual da timeline
    EduCard.tsx       ← Card de formação acadêmica
    CertRow.tsx       ← Linha de certificado com link externo
    ContactLink.tsx   ← Link de contato individual com seta

lib/
  data.ts             ← Todo o conteúdo do portfolio, fortemente tipado

types/
  index.ts            ← Interfaces TypeScript
```

---

## Modelo de dados (`types/index.ts` + `lib/data.ts`)

### Interfaces

```ts
// types/index.ts

export interface Principle {
  num: string
  title: string
  description: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface Project {
  title: string
  items: { text: string; highlight?: string }[]
}

export interface TimelineEntry {
  company: string
  role: string
  period: string
  bullets: string[]
  projects: Project[]
}

export interface EduEntry {
  period: string
  institution: string
  course: string
}

export interface Cert {
  title: string
  date: string
  url: string
}

export interface ContactItem {
  label: string
  href: string
}
```

### Dados (`lib/data.ts`)

Arquivo único que exporta constantes para cada seção. Nenhum dado deve ficar hardcoded nos componentes.

```ts
export const PRINCIPLES: Principle[] = [...]
export const STACK: Record<string, string[]> = { frontend: [...], backend: [...], ... }
export const SKILL_CATEGORIES: SkillCategory[] = [...]
export const TIMELINE: TimelineEntry[] = [...]
export const EDUCATION: EduEntry[] = [...]
export const CERTS: Cert[] = [...]
export const CONTACT_LINKS: ContactItem[] = [...]
```

---

## CSS e design tokens

### globals.css

Usar CSS variables na `:root` exatamente como no HTML de referência. Expor ao Tailwind via `@theme inline`:

```css
@import "tailwindcss";

:root {
  --bg: #FAFAF7;
  --bg-raised: #FFFFFF;
  --ink: #16181D;
  --ink-soft: #4B4E57;
  --muted: #80838C;
  --line: #E5E3DC;
  --accent: #0F6E5B;
  --accent-soft: #E3F0EC;
  --accent-deep: #0A4F41;
  --warn: #B5562B;
  --radius: 2px;

  /* fontes injetadas pelo next/font */
  --font-sans: /* Space Grotesk + Inter */;
  --font-mono: /* JetBrains Mono */;
}

@theme inline {
  --color-bg: var(--bg);
  --color-bg-raised: var(--bg-raised);
  --color-ink: var(--ink);
  --color-ink-soft: var(--ink-soft);
  --color-muted: var(--muted);
  --color-line: var(--line);
  --color-accent: var(--accent);
  --color-accent-soft: var(--accent-soft);
  --color-accent-deep: var(--accent-deep);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
}
```

### Fontes (app/layout.tsx)

Usar `next/font/google` com a opção `variable` para expor como CSS custom property:

```ts
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
})
```

Aplicar as três variáveis no `<html>` e referenciar em `globals.css`:

```css
--font-sans: var(--font-inter), var(--font-space-grotesk), sans-serif;
--font-mono: var(--font-jetbrains-mono), monospace;
```

---

## Componentes — detalhamento

### `app/layout.tsx` (Server Component)
- Injetar as três fontes como variáveis CSS
- Exportar `metadata` com título, descrição, og:image e lang `pt-BR`
- `<html lang="pt-BR">` com as classes das variáveis de fonte
- Importar `globals.css`

### `app/page.tsx` (Server Component)
- Importar e renderizar em ordem: `<Nav>`, `<Hero>`, `<About>`, `<Skills>`, `<Experience>`, `<Education>`, `<Contact>`, `<Footer>`
- Sem lógica, sem estado — apenas composição

### `components/Nav.tsx` (Server Component)
- Logo `LBCN.dev` com spans coloridos
- Links desktop via `<ul>` com `<li>/<a>`
- CTA "contato →"
- Renderiza `<NavMobileMenu>` passando os links como prop serializable
- Posicionamento: `sticky top-0 z-50` com backdrop blur

### `components/NavMobileMenu.tsx` (Client Component — `'use client'`)
- Ícone burger visível somente em mobile (`< 860px`)
- `useState` para abrir/fechar o drawer
- Fechar ao clicar em um link (`onClick` nos itens)

### `components/sections/Hero.tsx` (Server Component)
- Grid de fundo via `<div>` absoluto com background-image em linha (CSS variables)
- Eyebrow badge, nome `h1`, role-line, summary, botões, meta
- Usar `<Button>` para as CTAs

### `components/sections/About.tsx` (Server Component)
- Layout em grid 2 colunas (1 coluna em mobile)
- Texto + `<Principle>` items vindo de `PRINCIPLES` em `lib/data.ts`
- `<StackTerminal>` com dados de `STACK`

### `components/ui/StackTerminal.tsx` (Server Component)
- Recebe `stack: Record<string, string[]>` como prop
- Renderiza o card dark com syntax highlighting manual via `<span>` com classes de cor
- Barra superior com os três dots coloridos

### `components/sections/Skills.tsx` (Server Component)
- Grid 2 colunas com `map` sobre `SKILL_CATEGORIES`
- Cada célula usa `<SectionHeader>` simplificado + `<Pill>` components

### `components/ui/Pill.tsx` (Server Component)
- `children: string` + hover accent via Tailwind

### `components/sections/Experience.tsx` (Server Component)
- Container com `timeline` (borda vertical esquerda via pseudo-elemento ou `<div>` absoluto)
- Mapeia `TIMELINE` → `<TimelineItem>`

### `components/ui/TimelineItem.tsx` (Server Component)
- Ponto circular no eixo vertical
- Cabeçalho com empresa + role + período
- Lista de bullets
- Mapeia `projects` → `<ProjectBlock>`

### `components/ui/ProjectBlock.tsx` (Server Component)
- Borda esquerda accent (`border-l-3 border-accent`)
- Badge "Projeto de destaque", título, lista de items com highlights em bold

### `components/sections/Education.tsx` (Server Component)
- Grid 2 colunas (`EduEntry[]`) → `<EduCard>`
- Abaixo: mapa sobre `CERTS` → `<CertRow>`

### `components/ui/EduCard.tsx` / `CertRow.tsx` (Server Components)
- Props vêm diretamente dos tipos definidos

### `components/sections/Contact.tsx` (Server Component)
- Background `--ink`, textos invertidos
- Layout 2 colunas: headline + `<ContactLink>` list

### `components/ui/ContactLink.tsx` (Server Component)
- `href`, `label`, seta animada no hover via Tailwind `transition`

### `components/ui/SectionHeader.tsx` (Server Component)
- Props: `num: string`, `title: string`
- Renderiza o padrão `01 / Título ———` reutilizável em todas as seções

### `components/ui/Button.tsx` (Server Component)
- Props: `variant: 'primary' | 'ghost'`, `href: string`, `children`
- Renderiza `<a>` com classes Tailwind condicionais

### `components/Footer.tsx` (Server Component)
- Background `--ink`, copyright + cidade

---

## Animações com Framer Motion

- **Regra**: nenhum Server Component deve importar `framer-motion` diretamente
- Criar wrappers Client Components somente onde há animação de scroll:

```
components/
  motion/
    FadeInUp.tsx   ← 'use client' — wrapper genérico com whileInView
    StaggerList.tsx ← 'use client' — anima filhos em sequência
```

- Seções candidatas a animação: Hero (entrada), cards de Skills, Timeline items
- Usar `viewport={{ once: true }}` para evitar reanimar ao fazer scroll

---

## SEO e acessibilidade

- `<html lang="pt-BR">`
- Metadata em `app/layout.tsx`:
  ```ts
  export const metadata: Metadata = {
    title: 'Lucas Benedito Costa Neves — Desenvolvedor Full Stack',
    description: 'Portfolio de Lucas Benedito, desenvolvedor Full Stack...',
  }
  ```
- HTML semântico: `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`
- Links externos com `target="_blank" rel="noopener noreferrer"`
- Contraste de cor conforme design original (ratio adequado: accent sobre bg)

---

## Server vs. Client — regra de ouro

| Componente | Tipo | Motivo |
|---|---|---|
| `page.tsx`, seções, ui/ | **Server** | Apenas JSX estático, sem interatividade |
| `NavMobileMenu` | **Client** | `useState` para abrir/fechar drawer |
| `motion/FadeInUp` | **Client** | Framer Motion usa browser APIs |
| `motion/StaggerList` | **Client** | Framer Motion usa browser APIs |

A diretiva `'use client'` é colocada **apenas** nos arquivos acima — nunca nos componentes pai.

---

## Ordem de implementação sugerida

1. `types/index.ts` — definir todas as interfaces
2. `lib/data.ts` — extrair todo o conteúdo do HTML de referência
3. `app/globals.css` — tokens CSS + `@theme`
4. `app/layout.tsx` — fontes + metadata
5. `components/ui/*` — componentes atômicos (Pill, Button, SectionHeader, etc.)
6. `components/sections/*` — seções em ordem do layout
7. `components/Nav.tsx` + `NavMobileMenu.tsx`
8. `components/Footer.tsx`
9. `app/page.tsx` — composição final
10. `components/motion/*` — animações por último, como enhancement

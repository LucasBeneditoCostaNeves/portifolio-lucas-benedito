## Context

O portfólio já possui seções implementadas (Hero, About, Skills, Experience, Education, Recognitions) seguindo um padrão consistente: dados em `lib/data.ts`, tipos em `types/index.ts`, componentes de seção em `components/sections/`, animações via wrappers `FadeInUp`/`StaggerList` de Framer Motion. A seção de projetos deve seguir o mesmo padrão arquitetural.

O design de referência (`projetos-section.html`) define visualmente: grid de 3 colunas com cards clicáveis, modal com backdrop blur, highlights de impacto e badges de status. A implementação React precisa adaptar esse design para o sistema de tokens e componentes existentes.

## Goals / Non-Goals

**Goals:**
- Adicionar tipo `PortfolioProject` em `types/index.ts` e constante `PROJECTS` em `lib/data.ts`
- Criar `ProjectsSection.tsx` como Server Component com grid responsivo
- Criar `ProjectCard.tsx` como Client Component (hover state) ou Server Component simples
- Criar `ProjectModal.tsx` como Client Component com estado aberto/fechado, trap de foco e fechar por ESC/backdrop
- Usar tokens CSS existentes (`--accent`, `--line`, `--ink`, `--bg-raised`, etc.) sem introduzir novas variáveis
- Animar entrada da seção e dos cards com `FadeInUp` e delay escalonado (consistente com demais seções)
- Suporte responsivo: 3 colunas → 1 coluna em mobile

**Non-Goals:**
- Upload ou gestão de screenshots (placeholder SVG é suficiente por ora)
- Filtro/busca por tecnologia
- Paginação de projetos
- Link de "demo ao vivo" (apenas GitHub, opcionalmente)

## Decisions

### 1. Estado do modal em componente dedicado Client

O modal requer `useState` e listeners de teclado — não pode ser Server Component. A decisão é isolar toda lógica de estado em `ProjectModal.tsx` (`'use client'`), mantendo `ProjectsSection.tsx` como Server Component que passa dados como props.

**Alternativa considerada**: elevar o estado ao nível da página. Rejeitada — aumentaria o bundle client desnecessariamente.

### 2. Tipo `PortfolioProject` (não `Project`)

`types/index.ts` já usa `Project` como sub-tipo de `TimelineEntry` (projetos de experiência profissional). Para evitar colisão de nomes, o tipo da seção de portfólio será `PortfolioProject`.

### 3. Dados estruturados para highlights e stack

Cada `PortfolioProject` terá:
```ts
type PortfolioProject = {
  id: string
  name: string
  company: string
  year: string
  shortDesc: string
  fullDesc: string
  status: 'live' | 'wip'
  stack: string[]
  highlights: { icon: string; html: string }[]  // icon é emoji, html é texto com <strong>
  githubUrl?: string
  demoUrl?: string
}
```
Os highlights usam `dangerouslySetInnerHTML` com conteúdo estático e controlado — sem input do usuário, sem risco de XSS.

### 4. Card placeholder via SVG inline

Sem imagem real disponível agora, o card exibe SVG + nome do projeto como placeholder. Quando `imageUrl` for adicionado ao tipo, o componente pode trocar para `<Image>`. A estrutura já prevê o campo opcional `imageUrl?: string`.

### 5. Animação: FadeInUp com delay escalonado nos cards

Consistente com a seção de Recognitions — `FadeInUp delay={index * 0.1}` por card. O modal não anima via Framer Motion; usa CSS transition (transform + opacity) para não depender de biblioteca no path interativo.

## Risks / Trade-offs

- **`dangerouslySetInnerHTML` nos highlights** → Mitigação: conteúdo hardcoded em `lib/data.ts`, sem interpolação de input externo.
- **Placeholder sem imagem** → Aceitável para MVP; campo `imageUrl` opcional permite adição futura sem breaking change.
- **Modal sem biblioteca de acessibilidade (Radix/Headless UI)** → Implementação manual de fechar por ESC e backdrop click. Focus trap não implementado nesta iteração — risco baixo para portfólio pessoal.

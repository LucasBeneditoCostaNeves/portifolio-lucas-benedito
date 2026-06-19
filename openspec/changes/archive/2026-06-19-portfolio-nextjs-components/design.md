## Context

O projeto parte de um Next.js 16.2.9 recém-inicializado (App Router, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion 12 já instalados). Existe um HTML de referência com o layout visual completo e um PRD (`PRD.md`) detalhando a decomposição em componentes. Não há banco de dados, autenticação, nem API routes — é um site estático de portfolio.

## Goals / Non-Goals

**Goals:**
- Implementar o portfolio pixel-perfect em relação ao HTML de referência
- Manter todo o conteúdo em `lib/data.ts` (nenhum texto hardcoded em componentes)
- Maximizar Server Components; usar `'use client'` apenas onde estritamente necessário
- Fontes via `next/font/google` (zero requests externos para fontes em runtime)
- Design tokens como CSS variables expostos ao Tailwind v4 via `@theme inline`
- Menu mobile funcional com drawer animado
- Animações de entrada via Framer Motion isoladas em wrappers Client Components
- TypeScript estrito em todos os arquivos

**Non-Goals:**
- Dark mode
- Internacionalização (i18n)
- Formulário de contato com backend
- CMS ou edição dinâmica de conteúdo
- Testes automatizados (não está no escopo desta mudança)
- Deploy e CI/CD

## Decisions

### 1. Tailwind v4 com CSS variables no `:root` (sem arquivo `tailwind.config.js`)

**Decisão:** Definir os design tokens como CSS custom properties na `:root` e expô-los ao Tailwind via `@theme inline` em `globals.css`.

**Rationale:** Tailwind v4 elimina o `tailwind.config.js` em favor do `@theme` no CSS. Usar CSS variables na `:root` permite que o HTML de referência seja migrado sem reescrever nomes de tokens — basta mapear `--accent` → `--color-accent` etc. O `@theme inline` instrui o Tailwind a usar as variáveis CSS diretamente (sem gerar valores resolvidos), mantendo suporte a overrides em runtime.

**Alternativa descartada:** Hardcodar as cores direto no `@theme` sem CSS variables — perde a flexibilidade de override via CSS cascade.

---

### 2. Três fontes via `next/font/google` com a opção `variable`

**Decisão:** `Space_Grotesk` (headings), `Inter` (corpo), `JetBrains_Mono` (mono) — cada uma com `variable: '--font-*'` e aplicadas no `<html>` como classes. As variáveis são referenciadas em `globals.css` para montar `--font-sans` e `--font-mono`.

**Rationale:** `next/font` faz self-hosting automático, eliminando requests a `fonts.googleapis.com` em runtime (privacidade + performance). O padrão `variable` mantém compatibilidade com Tailwind v4 que espera CSS custom properties para `--font-*`.

**Alternativa descartada:** Manter o `<link>` do Google Fonts do HTML original — dependência de rede externa em cada visita.

---

### 3. Separação Nav (Server) + NavMobileMenu (Client)

**Decisão:** `Nav.tsx` é Server Component e renderiza o layout estático. Extrai apenas o burger/drawer para `NavMobileMenu.tsx` (Client Component com `useState`).

**Rationale:** Minimiza o bundle JS do cliente — o HTML da nav é gerado no servidor. O único estado necessário (aberto/fechado do drawer) fica no Client Component mais estreito possível.

**Alternativa descartada:** Nav inteiro como Client Component — desnecessário; links e logo são puramente estáticos.

---

### 4. Animações Framer Motion em wrappers Client Components dedicados

**Decisão:** Criar `components/motion/FadeInUp.tsx` e `StaggerList.tsx` como Client Components genéricos. As seções (Server Components) os importam como wrappers de seus filhos.

**Rationale:** Framer Motion precisa de browser APIs. Isolar em wrappers finos evita marcar seções inteiras como Client. O padrão `children` do React permite passar Server Component nodes como props para Client Components sem que eles precisem ser re-renderizados no cliente.

**Alternativa descartada:** Usar `IntersectionObserver` manual com CSS — mais complexo de manter que `whileInView` do Framer Motion, que já está instalado.

---

### 5. Camada de dados em `lib/data.ts` com tipos em `types/index.ts`

**Decisão:** Arquivo único de dados por seção do portfolio, exportando constantes tipadas. Nenhum texto literario nos componentes.

**Rationale:** Facilita atualizações de conteúdo sem tocar em JSX. Um único lugar para alterar cargo, empresa, projetos etc. Tipos explícitos garantem que o compilador detecte campos faltando.

**Alternativa descartada:** MDX ou CMS — overkill para um portfolio estático sem editor não-técnico.

---

### 6. Estrutura de pastas: `components/ui/`, `components/sections/`, `components/motion/`

**Decisão:** Separar componentes atômicos (`ui/`), composições de página (`sections/`) e wrappers de animação (`motion/`) em subpastas dentro de `components/`.

**Rationale:** Segue a estratégia "store project files outside of `app`" documentada no Next.js 16 — `app/` fica somente para routing. A separação por responsabilidade (ui vs sections vs motion) facilita localizar componentes e entender dependências.

---

### 7. Pseudo-elemento vs `<div>` absoluto para a linha vertical da timeline

**Decisão:** Usar uma `<div>` absoluta explícita para a linha vertical, e uma `<span>` absoluta para o ponto circular de cada item.

**Rationale:** Pseudo-elementos (`::before`) não são expressáveis como classes Tailwind puras sem `@apply` ou CSS arbitrário. `<div>` explícito é mais legível e permite controle preciso via Tailwind (`absolute left-[5px] top-6 bottom-6 w-px bg-line`).

## Risks / Trade-offs

- **Tailwind v4 ainda é recente** → A API `@theme inline` pode ter comportamentos inesperados com alguns utilitários. Mitigação: testar cada token no browser durante o desenvolvimento.

- **JetBrains Mono não é variável** → Precisamos listar pesos explícitos (`['400', '500', '600']`) no `next/font`. Se um peso não listado for usado, o browser fará fallback silencioso. Mitigação: padronizar os pesos usados no HTML de referência antes de iniciar.

- **Framer Motion 12 + React 19** → Versões novas de ambos podem ter incompatibilidades. O pacote já está instalado e aparentemente funcional; se houver erros de hidratação, isolar componentes em `'use client'` mais cedo na árvore resolve.

- **CSS `clamp()` para tipografia fluida** → O HTML de referência usa `clamp()` em vários `font-size`. Tailwind v4 suporta valores arbitrários (`text-[clamp(...)]`), mas pode ser verboso. Mitigação: definir os clamp values como CSS variables customizadas (ex.: `--text-name: clamp(40px, 6.4vw, 76px)`) e usar `text-[var(--text-name)]`.

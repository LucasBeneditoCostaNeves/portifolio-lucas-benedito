## 1. Fundação: tipos, dados e tokens

- [x] 1.1 Criar `types/index.ts` com interfaces `Principle`, `SkillCategory`, `Project`, `TimelineEntry`, `EduEntry`, `Cert`, `ContactItem`
- [x] 1.2 Criar `lib/data.ts` com constantes `PRINCIPLES`, `STACK`, `SKILL_CATEGORIES`, `TIMELINE`, `EDUCATION`, `CERTS`, `CONTACT_LINKS` populadas com o conteúdo do HTML de referência
- [x] 1.3 Atualizar `app/globals.css` com CSS variables no `:root` (tokens de cor, `--radius`, `--font-sans`, `--font-mono`) e bloco `@theme inline` mapeando para o Tailwind v4
- [x] 1.4 Atualizar `app/layout.tsx` com `Space_Grotesk`, `Inter` e `JetBrains_Mono` via `next/font/google` com opção `variable`, aplicar as classes no `<html>`, atualizar `metadata` com título e descrição do portfolio e definir `lang="pt-BR"`

## 2. Componentes UI atômicos

- [x] 2.1 Criar `components/ui/Button.tsx` com props `variant: 'primary' | 'ghost'`, `href: string`, `children` — renderiza `<a>` com classes Tailwind condicionais e ícone de seta
- [x] 2.2 Criar `components/ui/SectionHeader.tsx` com props `num: string`, `title: string` — renderiza o padrão `01 / Título ———` com `<span class="sec-rule">`
- [x] 2.3 Criar `components/ui/Pill.tsx` com `children: string` — renderiza `<span>` com borda `--line` e hover accent
- [x] 2.4 Criar `components/ui/StackTerminal.tsx` com prop `stack: Record<string, string[]>` — card fundo `#13151A`, barra com dots coloridos, body com spans de syntax highlighting manual
- [x] 2.5 Criar `components/ui/ProjectBlock.tsx` com props `title: string`, `items: Project['items']` — borda esquerda accent, badge "Projeto de destaque", lista de items com highlight em `<strong>`
- [x] 2.6 Criar `components/ui/TimelineItem.tsx` com prop `entry: TimelineEntry` — ponto circular, cabeçalho empresa/role/período, lista de bullets, mapa de ProjectBlock
- [x] 2.7 Criar `components/ui/EduCard.tsx` com prop `entry: EduEntry` — período em mono accent, instituição em bold, curso em muted
- [x] 2.8 Criar `components/ui/CertRow.tsx` com prop `cert: Cert` — ícone de medalha, título, data e link "Ver certificado →" com `target="_blank" rel="noopener noreferrer"`
- [x] 2.9 Criar `components/ui/ContactLink.tsx` com prop `item: ContactItem` — linha com borda inferior, seta em `#5CC9A8`, hover com `padding-left: 8px` e mudança de cor

## 3. Wrappers de animação (Framer Motion)

- [x] 3.1 Criar `components/motion/FadeInUp.tsx` com `'use client'`, usando `motion.div` com `initial/whileInView`, props `duration` e `delay`, `viewport={{ once: true }}`
- [x] 3.2 Criar `components/motion/StaggerList.tsx` com `'use client'`, usando `motion.ul` + `motion.li` com variants `staggerChildren: 0.08` e `viewport={{ once: true }}`

## 4. Seções da página

- [x] 4.1 Criar `components/sections/Hero.tsx` — div de grid de fundo absoluto, eyebrow badge, `<h1>` com clamp e "Neves" em accent, role-line com pipes, resumo, dois `<Button>`, meta de contato; envolver conteúdo em `FadeInUp`
- [x] 4.2 Criar `components/sections/About.tsx` — grid 2 colunas, texto com parágrafos de `lib/data.ts`, lista de `PRINCIPLES`, `<StackTerminal stack={STACK} />`
- [x] 4.3 Criar `components/sections/Skills.tsx` — grid 2×1px com fundo `--line`, mapa de `SKILL_CATEGORIES` para células com `<Pill>` e badge contador; envolver células em `StaggerList`
- [x] 4.4 Criar `components/sections/Experience.tsx` — container com linha vertical absoluta, mapa de `TIMELINE` para `<TimelineItem>`; envolver items em `FadeInUp` com delay crescente
- [x] 4.5 Criar `components/sections/Education.tsx` — grid de `<EduCard>` + loop de `<CertRow>`
- [x] 4.6 Criar `components/sections/Contact.tsx` — seção fundo `--ink`, grid 2 colunas, headline com span em `#5CC9A8`, loop de `<ContactLink>` a partir de `CONTACT_LINKS`

## 5. Navegação e rodapé

- [x] 5.1 Criar `components/NavMobileMenu.tsx` com `'use client'` — ícone burger, `useState` para abrir/fechar drawer com links, fechar ao clicar em link
- [x] 5.2 Criar `components/Nav.tsx` como Server Component — logo com spans coloridos, `<ul>` de links desktop em mono, CTA "contato →", renderiza `<NavMobileMenu>`
- [x] 5.3 Criar `components/Footer.tsx` — fundo `--ink`, copyright e cidade em JetBrains Mono `#6E7280`

## 6. Composição final e validação

- [x] 6.1 Atualizar `app/page.tsx` importando e compondo em ordem: `<Nav>`, `<main>` com todas as seções (`<Hero>`, `<About>`, `<Skills>`, `<Experience>`, `<Education>`, `<Contact>`), `<Footer>`
- [x] 6.2 Verificar visual no browser em desktop (1280px): comparar com HTML de referência seção por seção
- [x] 6.3 Verificar visual no browser em mobile (375px): nav com drawer, grid colapsado, tipografia fluida
- [x] 6.4 Confirmar que `next build` conclui sem erros de TypeScript ou de boundary Server/Client
- [x] 6.5 Confirmar que nenhum request é feito para `fonts.googleapis.com` (verificar DevTools > Network em produção)

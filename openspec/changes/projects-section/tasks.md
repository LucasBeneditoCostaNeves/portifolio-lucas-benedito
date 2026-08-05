## 1. Data Layer

- [x] 1.1 Adicionar interface `PortfolioProject` em `types/index.ts` com todos os campos definidos na spec
- [x] 1.2 Adicionar importação de `PortfolioProject` em `lib/data.ts`
- [x] 1.3 Criar constante `PROJECTS: PortfolioProject[]` em `lib/data.ts` com os dados do projeto "Plataforma de Outsourcing" (id, name, company, year, shortDesc, fullDesc, status, stack, highlights, githubUrl)
- [x] 1.4 Adicionar dados do projeto "Rastreabilidade de Mercadorias" ao array `PROJECTS`
- [x] 1.5 Verificar que `tsc --noEmit` passa sem erros após as adições

## 2. Componente Modal

- [x] 2.1 Criar `components/ui/ProjectModal.tsx` como Client Component (`'use client'`)
- [x] 2.2 Implementar estado `open: boolean` e `activeProject: PortfolioProject | null` via `useState`
- [x] 2.3 Implementar abertura ao clicar no card (função `openModal` passada como prop ou via context)
- [x] 2.4 Implementar fechamento por clique no backdrop e por tecla Escape (`useEffect` com `addEventListener`)
- [x] 2.5 Implementar bloqueio de scroll do body (`document.body.style.overflow`) ao abrir/fechar
- [x] 2.6 Renderizar área de imagem: `<img>` se `imageUrl` definido, placeholder SVG caso contrário
- [x] 2.7 Renderizar header do modal: categoria (`company · year`), título, badge de status
- [x] 2.8 Renderizar descrição completa (`fullDesc`)
- [x] 2.9 Renderizar lista de highlights com ícone emoji e texto (partes em negrito via `<strong>`)
- [x] 2.10 Renderizar lista de stack com tag estilo `.ps`
- [x] 2.11 Renderizar botão GitHub (quando `githubUrl` definido) e botão demo (quando `demoUrl` definido)
- [x] 2.12 Aplicar CSS transition no backdrop e no painel do modal (opacity + transform)

## 3. Componente Card

- [x] 3.1 Criar `components/ui/ProjectCard.tsx` recebendo `project: PortfolioProject` e `onOpen: () => void` como props
- [x] 3.2 Renderizar área de imagem com placeholder SVG + nome do projeto
- [x] 3.3 Renderizar overlay "Ver detalhes →" com transição de opacidade no hover (via classe CSS ou Tailwind group-hover)
- [x] 3.4 Renderizar body do card: nome, badge de status, `shortDesc`, lista de stack (primeiros 5 itens)
- [x] 3.5 Disparar `onOpen` ao clicar no card (não aplicar ao card placeholder)

## 4. Seção Principal

- [x] 4.1 Criar `components/sections/ProjectsSection.tsx` como Server Component
- [x] 4.2 Importar `PROJECTS` de `lib/data.ts`
- [x] 4.3 Renderizar cabeçalho de seção: número `04`, título "Projetos pessoais", linha separadora
- [x] 4.4 Renderizar parágrafo introdutório abaixo do cabeçalho
- [x] 4.5 Renderizar grid de cards com `ProjectCard` para cada projeto em `PROJECTS`, envolvido em `FadeInUp` com `delay={index * 0.1}`
- [x] 4.6 Preencher posições restantes até 3 com card placeholder "Em breve" (não clicável) quando `PROJECTS.length < 3`
- [x] 4.7 Incluir `ProjectModal` no JSX, passando o mecanismo de controle de estado

## 5. Integração na Página

- [x] 5.1 Importar e adicionar `ProjectsSection` na página principal (`app/page.tsx`) após a seção de Reconhecimentos
- [x] 5.2 Adicionar link "projetos" ao array `NAV_LINKS` em `lib/data.ts` com `href: '#projetos'`
- [x] 5.3 Adicionar `id="projetos"` ao elemento raiz de `ProjectsSection`

## 6. Responsividade e Tokens

- [x] 6.1 Verificar que o grid colapsa para 1 coluna em viewport < 860px
- [x] 6.2 Confirmar que todos os valores de cor usam tokens CSS existentes (`var(--accent)`, `var(--line)`, etc.) sem introduzir novas variáveis
- [x] 6.3 Verificar padding e espaçamento do modal em mobile (< 600px)

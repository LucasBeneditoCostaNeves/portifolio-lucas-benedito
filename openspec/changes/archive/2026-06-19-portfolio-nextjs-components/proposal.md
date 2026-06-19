## Why

O portfolio existe apenas como um arquivo HTML estático. Convertê-lo para Next.js 16 com App Router é necessário para aproveitar Server Components, otimização de fontes, geração de metadata para SEO e uma base escalável para evoluções futuras.

## What Changes

- Substituição do `app/page.tsx` padrão pela composição de componentes do portfolio
- Criação da camada de dados em `lib/data.ts` e interfaces em `types/index.ts`
- Configuração dos design tokens (CSS variables) e fontes via `next/font/google` em `globals.css` e `app/layout.tsx`
- Implementação de todos os componentes UI atômicos (`Pill`, `Button`, `SectionHeader`, `StackTerminal`, `ProjectBlock`, `TimelineItem`, `EduCard`, `CertRow`, `ContactLink`)
- Implementação de todas as seções (`Hero`, `About`, `Skills`, `Experience`, `Education`, `Contact`)
- Implementação do `Nav` (Server Component) com `NavMobileMenu` (Client Component) para menu mobile
- Implementação do `Footer`
- Wrappers de animação Framer Motion isolados como Client Components (`FadeInUp`, `StaggerList`)

## Capabilities

### New Capabilities

- `design-tokens`: CSS variables e fontes Google via `next/font` mapeadas no `@theme` do Tailwind v4
- `data-layer`: Conteúdo do portfolio centralizado em `lib/data.ts` com tipos TypeScript em `types/index.ts`
- `nav`: Navegação sticky com logo, links desktop e menu mobile com drawer
- `hero-section`: Seção inicial com grid de fundo, nome, role-line, CTAs e metadados de contato
- `about-section`: Resumo profissional com princípios e card terminal com a stack
- `skills-section`: Grid de habilidades técnicas organizadas por categoria com pills
- `experience-section`: Timeline de experiência profissional com projetos de destaque
- `education-section`: Cards de formação acadêmica e linha de certificado com link externo
- `contact-section`: Seção de contato com fundo escuro e links diretos
- `motion-wrappers`: Client Components de animação (FadeInUp, StaggerList) para entrada de seções no scroll

### Modified Capabilities

## Impact

- `app/page.tsx`: reescrito completamente
- `app/layout.tsx`: fontes e metadata substituídos
- `app/globals.css`: design tokens e `@theme` adicionados
- Nenhuma API externa ou banco de dados envolvidos
- Sem breaking changes públicos — é um portfolio estático

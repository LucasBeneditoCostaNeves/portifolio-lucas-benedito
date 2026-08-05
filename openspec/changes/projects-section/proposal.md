## Why

O portfólio não possui uma seção de projetos pessoais, deixando sem visibilidade os trabalhos técnicos mais relevantes de Lucas. A seção é essencial para demonstrar profundidade técnica e capacidade de construir produtos completos.

## What Changes

- Adiciona a seção **Projetos Pessoais** (número 04) à página principal do portfólio.
- Cria grid responsivo de cards de projetos com imagem/placeholder, status badge, descrição curta e stack.
- Implementa modal de detalhes por projeto com highlights de impacto, stack completa e links.
- Alimenta os dados dos projetos via `lib/data.ts` (tipo `Project[]`).
- Os dois projetos iniciais: **Plataforma de Outsourcing** e **Rastreabilidade de Mercadorias**.

## Capabilities

### New Capabilities

- `projects-section`: Seção da página principal com grid de cards de projetos e modal de detalhes interativo.

### Modified Capabilities

- `data-layer`: Adição do tipo `Project` e array `projects` com os dados dos projetos iniciais.

## Impact

- **Arquivos novos**: `components/sections/ProjectsSection.tsx`, `components/ui/ProjectCard.tsx`, `components/ui/ProjectModal.tsx`
- **Arquivos modificados**: `lib/data.ts` (novo tipo + dados), página principal (inclusão da seção)
- **Sem breaking changes**
- **Dependências**: nenhuma nova — usa Framer Motion (já presente) e estado React para o modal

## ADDED Requirements

### Requirement: Tipo PortfolioProject em types/index.ts
O sistema SHALL exportar a interface `PortfolioProject` em `types/index.ts` com os campos:
- `id: string`
- `name: string`
- `company: string`
- `year: string`
- `shortDesc: string`
- `fullDesc: string`
- `status: 'live' | 'wip'`
- `stack: string[]`
- `highlights: { icon: string; text: string; boldParts: string[] }[]`
- `githubUrl?: string`
- `demoUrl?: string`
- `imageUrl?: string`

#### Scenario: Compilação sem erros de tipo
- **WHEN** `lib/data.ts` exportar `PROJECTS: PortfolioProject[]` usando a interface
- **THEN** `tsc --noEmit` SHALL concluir sem erros de tipo

### Requirement: Constante PROJECTS em lib/data.ts
O sistema SHALL exportar a constante `PROJECTS: PortfolioProject[]` em `lib/data.ts` com os dois projetos iniciais: "Plataforma de Outsourcing" e "Rastreabilidade de Mercadorias".

#### Scenario: Dois projetos iniciais presentes
- **WHEN** `PROJECTS` for importado
- **THEN** `PROJECTS.length` SHALL ser igual a `2`

#### Scenario: Projeto de Outsourcing com status live
- **WHEN** `PROJECTS` for importado
- **THEN** o projeto com `id === 'outsourcing'` SHALL ter `status === 'live'`

#### Scenario: Projeto de Rastreabilidade com status live
- **WHEN** `PROJECTS` for importado
- **THEN** o projeto com `id === 'rastreabilidade'` SHALL ter `status === 'live'`

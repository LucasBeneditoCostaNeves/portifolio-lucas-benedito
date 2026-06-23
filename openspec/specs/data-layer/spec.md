## Purpose

Defines the requirements for the centralised data layer (`lib/data.ts` and `types/index.ts`) that provides typed content to all portfolio sections.

## Requirements

### Requirement: Interfaces TypeScript em types/index.ts
O sistema SHALL exportar interfaces TypeScript para todas as entidades de dados do portfolio em `types/index.ts`: `Principle`, `SkillCategory`, `Project` (com `items: { text: string; highlight?: string }[]`), `TimelineEntry`, `EduEntry`, `Cert`, `ContactItem`.

#### Scenario: Compilação sem erros de tipo
- **WHEN** `lib/data.ts` exportar constantes tipadas com essas interfaces
- **THEN** `tsc --noEmit` SHALL concluir sem erros

### Requirement: Conteúdo centralizado em lib/data.ts
O sistema SHALL exportar constantes nomeadas para cada seção do portfolio em `lib/data.ts`: `PRINCIPLES`, `STACK`, `SKILL_CATEGORIES`, `TIMELINE`, `EDUCATION`, `CERTS`, `CONTACT_LINKS`.

#### Scenario: Nenhum texto hardcoded nos componentes
- **WHEN** qualquer componente de seção for inspecionado
- **THEN** strings de conteúdo (nomes, descrições, datas) SHALL vir exclusivamente de importações de `lib/data.ts`

### Requirement: Dados de STACK como Record tipado
O sistema SHALL exportar `STACK` como `Record<string, string[]>` com as chaves: `frontend`, `backend`, `database`, `devops`, `practices`, `methodology`.

#### Scenario: Acesso tipado a uma chave
- **WHEN** `StackTerminal` acessar `STACK.frontend`
- **THEN** TypeScript SHALL inferir o tipo como `string[]` sem `as` casting

### Requirement: TimelineEntry com projetos aninhados
O sistema SHALL modelar `TimelineEntry` com campo `projects: Project[]`, onde cada `Project` contém `title: string` e `items: { text: string; highlight?: string }[]`.

#### Scenario: Renderização de highlights em negrito
- **WHEN** um item de projeto tiver `highlight` definido
- **THEN** o componente SHALL renderizá-lo dentro de um `<strong>`

### Requirement: Interface Recognition em types/index.ts
O sistema SHALL exportar a interface `Recognition` em `types/index.ts` com os campos: `id: string`, `title: string`, `description?: string`, `company: string`, `year: string`, `badge?: string`, `stars?: number` (1–5), `image: string`, `featured?: boolean`.

#### Scenario: Compilação sem erros de tipo com Recognition
- **WHEN** `lib/data.ts` exportar `RECOGNITIONS: Recognition[]` usando a interface
- **THEN** `tsc --noEmit` SHALL concluir sem erros de tipo

### Requirement: Constante RECOGNITIONS em lib/data.ts
O sistema SHALL exportar a constante `RECOGNITIONS: Recognition[]` em `lib/data.ts` com os dados iniciais de reconhecimentos profissionais, incluindo exatamente um item com `featured: true`.

#### Scenario: Exatamente um item featured
- **WHEN** `RECOGNITIONS` for importado
- **THEN** `RECOGNITIONS.filter(r => r.featured)` SHALL retornar exatamente 1 item

#### Scenario: Itens secundários presentes
- **WHEN** `RECOGNITIONS` for importado
- **THEN** `RECOGNITIONS.filter(r => !r.featured)` SHALL retornar ao menos 1 item

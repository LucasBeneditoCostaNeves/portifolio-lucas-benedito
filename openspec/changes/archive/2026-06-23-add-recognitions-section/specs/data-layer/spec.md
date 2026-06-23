## ADDED Requirements

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

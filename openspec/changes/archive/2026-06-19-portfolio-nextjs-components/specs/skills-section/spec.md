## ADDED Requirements

### Requirement: Grid de células 2x3
O sistema SHALL renderizar as habilidades em grid com `grid-template-columns: repeat(2, 1fr)`, separadores de 1px usando `--line` como background do grid container (gap 1px), colapsando para 1 coluna em mobile.

#### Scenario: Grid de 2 colunas em desktop
- **WHEN** a viewport tiver mais de 860px
- **THEN** as 6 categorias SHALL aparecer em 2 colunas × 3 linhas

#### Scenario: Coluna única em mobile
- **WHEN** a viewport tiver ≤ 860px
- **THEN** as células SHALL empilhar verticalmente

### Requirement: Cabeçalho de célula com contador
O sistema SHALL renderizar cada categoria com label em JetBrains Mono uppercase muted e um badge com a contagem de habilidades em accent-soft.

#### Scenario: Badge com contagem correta
- **WHEN** uma categoria tiver 5 habilidades
- **THEN** o badge SHALL exibir "05"

### Requirement: Pills de habilidade com hover accent
O sistema SHALL renderizar cada habilidade como `<span class="pill">` em JetBrains Mono, com borda `--line`, background `--bg` e, no hover, borda `--accent`, cor `--accent-deep`, background `--accent-soft`.

#### Scenario: Pill com estado de hover
- **WHEN** o cursor passar sobre uma pill
- **THEN** borda, cor e fundo SHALL mudar para os valores accent com transição de 150ms

### Requirement: Dados de categorias vindos de SKILL_CATEGORIES
O sistema SHALL mapear `SKILL_CATEGORIES` de `lib/data.ts` para renderizar as células, sem textos hardcoded.

#### Scenario: Atualização de skill refletida automaticamente
- **WHEN** uma skill for adicionada a uma categoria em `lib/data.ts`
- **THEN** a pill SHALL aparecer na célula correspondente e o contador SHALL ser atualizado

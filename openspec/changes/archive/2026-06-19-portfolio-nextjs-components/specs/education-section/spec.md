## ADDED Requirements

### Requirement: Grid de cards de formação
O sistema SHALL renderizar as entradas de `EDUCATION` em grid `grid-template-columns: 1fr 1fr`, gap 20px, colapsando para 1 coluna em mobile.

#### Scenario: Cards lado a lado em desktop
- **WHEN** houver 2 entradas de formação e a viewport for > 860px
- **THEN** os cards SHALL aparecer em 2 colunas

### Requirement: EduCard com período, instituição e curso
O sistema SHALL renderizar cada `EduEntry` com o período em JetBrains Mono accent como `<span>`, o nome da instituição em `font-weight: 600` 16.5px e o curso em `--muted` 13.5px.

#### Scenario: Card de formação renderizado
- **WHEN** a seção de formação for renderizada
- **THEN** cada card SHALL exibir período, instituição e curso nessa ordem

### Requirement: Linha de certificado com link externo
O sistema SHALL renderizar cada `Cert` de `CERTS` como uma linha horizontal com ícone de medalha em `--accent-soft`, título em `font-weight: 600`, data em JetBrains Mono `--muted`, e link "Ver certificado →" com borda `--line` que no hover aplica borda accent e fundo accent-soft.

#### Scenario: Link do certificado abre em nova aba
- **WHEN** o usuário clicar em "Ver certificado →"
- **THEN** o link SHALL abrir em nova aba com `target="_blank" rel="noopener noreferrer"`

#### Scenario: Hover no link do certificado
- **WHEN** o cursor passar sobre o link
- **THEN** borda e fundo SHALL mudar para accent com transição

### Requirement: Dados vindos de EDUCATION e CERTS
O sistema SHALL mapear `EDUCATION` e `CERTS` de `lib/data.ts` sem conteúdo hardcoded.

#### Scenario: Atualização de formação refletida
- **WHEN** uma entrada for alterada em `EDUCATION`
- **THEN** o card SHALL exibir os dados atualizados sem alterar o componente

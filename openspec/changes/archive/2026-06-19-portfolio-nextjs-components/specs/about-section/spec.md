## ADDED Requirements

### Requirement: Layout em grid de duas colunas
O sistema SHALL renderizar a seção About em grid com `grid-template-columns: 1.1fr 0.9fr`, gap 64px, colapsando para 1 coluna em viewports ≤ 860px com gap 40px.

#### Scenario: Grid de duas colunas em desktop
- **WHEN** a viewport tiver largura maior que 860px
- **THEN** texto e terminal SHALL aparecer lado a lado

#### Scenario: Coluna única em mobile
- **WHEN** a viewport tiver largura menor ou igual a 860px
- **THEN** texto SHALL aparecer acima do terminal

### Requirement: Texto de resumo profissional
O sistema SHALL renderizar três parágrafos de texto vindo de `lib/data.ts`, cor `--ink-soft`, font-size 16px, line-height 1.8, com termos-chave em `<strong>` cor `--ink`.

#### Scenario: Texto com termos em negrito
- **WHEN** a seção About for renderizada
- **THEN** termos como "Full Stack" e "SOLID" SHALL aparecer em negrito na cor ink

### Requirement: Lista de princípios
O sistema SHALL renderizar até 3 princípios a partir de `PRINCIPLES` em `lib/data.ts`, cada um com número em mono accent, título em `font-weight: 600` e descrição em `--muted`, separados por bordas horizontais `--line`.

#### Scenario: Princípios renderizados
- **WHEN** a seção About for renderizada
- **THEN** os 3 princípios SHALL aparecer em lista vertical com borda separadora entre eles

### Requirement: Card terminal com stack
O sistema SHALL renderizar o `StackTerminal` como card com fundo `#13151A`, barra de título cinza escura com três dots coloridos (vermelho, amarelo, verde) e label "stack.json".

#### Scenario: Card terminal visível
- **WHEN** a seção About for renderizada
- **THEN** o card SHALL exibir fundo escuro com a barra de título e os dots coloridos

### Requirement: Syntax highlighting manual no terminal
O sistema SHALL renderizar o conteúdo do terminal com classes de cor específicas: chaves em `#7FB7C9`, valores string em `#9CD6B8`, pontuação em `#5C6270`, comentários em `#5C6270` itálico, propriedades em `#E0B23B`.

#### Scenario: Cores corretas no terminal
- **WHEN** o terminal for renderizado
- **THEN** as chaves, strings e pontuação SHALL ter as cores definidas

### Requirement: Dados do terminal vindos de STACK
O sistema SHALL popular o `StackTerminal` com dados de `STACK` de `lib/data.ts`, não com texto hardcoded.

#### Scenario: Terminal reflete os dados
- **WHEN** `STACK.frontend` for alterado em `lib/data.ts`
- **THEN** o terminal SHALL exibir os novos valores sem alterar o componente

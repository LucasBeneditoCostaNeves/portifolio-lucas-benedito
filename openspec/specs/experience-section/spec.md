## Purpose

Defines the requirements for the Experience section of the portfolio, which renders a vertical timeline of professional history with nested project highlights.

## Requirements

### Requirement: Container de timeline com linha vertical
O sistema SHALL renderizar um container com `padding-left: 32px` e uma `<div>` absoluta posicionada em `left: 5px`, largura 1px, fundo `--line`, representando o eixo da timeline.

#### Scenario: Linha vertical visível
- **WHEN** a seção de experiência for renderizada
- **THEN** uma linha vertical thin SHALL conectar os itens da timeline

### Requirement: Ponto circular em cada item
O sistema SHALL renderizar um `<span>` absoluto (`left: -32px`, `width: 11px`, `height: 11px`, `border-radius: 50%`) com fundo `--bg` e borda 2px `--accent` para cada entrada da timeline.

#### Scenario: Ponto sobre a linha
- **WHEN** a timeline for renderizada
- **THEN** cada entrada SHALL ter um ponto circular verde sobre a linha vertical

### Requirement: Cabeçalho do item com empresa, role e período
O sistema SHALL renderizar o nome da empresa em Space Grotesk weight 600 com o role em `--accent`, e o período em JetBrains Mono `--muted` alinhado à direita em desktop, abaixo em mobile.

#### Scenario: Cabeçalho em desktop
- **WHEN** a viewport tiver mais de 860px
- **THEN** empresa/role e período SHALL ficar na mesma linha, justificados entre si

#### Scenario: Cabeçalho em mobile
- **WHEN** a viewport tiver ≤ 860px
- **THEN** período SHALL aparecer abaixo do nome da empresa

### Requirement: Lista de bullets de responsabilidades
O sistema SHALL renderizar os bullets de cada entrada como `<li>` com `::before` (ou `<span>`) exibindo `▸` em `--accent`, e o texto em `--ink-soft`, font-size 14.5px, line-height 1.65.

#### Scenario: Bullets renderizados
- **WHEN** um TimelineEntry tiver 2 bullets
- **THEN** ambos SHALL aparecer com o marcador accent à esquerda

### Requirement: Bloco de projeto de destaque
O sistema SHALL renderizar cada projeto como `ProjectBlock` com borda esquerda 3px `--accent`, padding interno, badge "Projeto de destaque" em JetBrains Mono uppercase accent, título em Space Grotesk e lista de items com `→` como marcador.

#### Scenario: Projeto com highlight
- **WHEN** um item tiver `highlight` definido
- **THEN** o texto do highlight SHALL ser renderizado em `<strong>` cor `--ink`

#### Scenario: Múltiplos projetos por entrada
- **WHEN** uma TimelineEntry tiver 2 projetos
- **THEN** ambos os ProjectBlocks SHALL aparecer sequencialmente abaixo dos bullets

### Requirement: Dados vindos de TIMELINE
O sistema SHALL mapear `TIMELINE` de `lib/data.ts`, sem conteúdo hardcoded nos componentes.

#### Scenario: Adição de nova experiência
- **WHEN** uma entrada for adicionada a `TIMELINE` em `lib/data.ts`
- **THEN** um novo TimelineItem SHALL aparecer automaticamente na seção

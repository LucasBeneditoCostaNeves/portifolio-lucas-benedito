## ADDED Requirements

### Requirement: Seção com fundo escuro invertido
O sistema SHALL renderizar a seção de contato com `background: var(--ink)` e `color: var(--bg)`, sem borda inferior (a última section da página).

#### Scenario: Contraste visual da seção
- **WHEN** a página rolar até a seção de contato
- **THEN** ela SHALL se destacar com fundo escuro contrastando com o restante da página

### Requirement: Layout em grid de duas colunas
O sistema SHALL renderizar a seção em `grid-template-columns: 1.2fr 1fr`, gap 64px, colapsando para 1 coluna em mobile com gap 36px.

#### Scenario: Headline e links lado a lado em desktop
- **WHEN** a viewport for > 860px
- **THEN** a headline SHALL aparecer à esquerda e os links de contato à direita

### Requirement: Headline com span colorido
O sistema SHALL renderizar a headline "Vamos conversar sobre seu próximo projeto." em Space Grotesk, tamanho fluido via `clamp(30px, 4vw, 42px)`, com "seu próximo projeto" em `#5CC9A8`.

#### Scenario: Headline com destaque verde
- **WHEN** a seção for renderizada
- **THEN** a frase destacada SHALL aparecer na cor `#5CC9A8`

### Requirement: Links de contato com hover de deslocamento
O sistema SHALL renderizar cada `ContactItem` de `CONTACT_LINKS` como linha com `border-bottom: 1px solid #2C2F38`, seta `→` em `#5CC9A8`, e hover que desloca o texto 8px à direita e muda a cor para `#5CC9A8`.

#### Scenario: Hover no link de contato
- **WHEN** o cursor passar sobre um ContactLink
- **THEN** `padding-left` SHALL transitar de 0 para 8px e a cor SHALL mudar para `#5CC9A8`

#### Scenario: Link de e-mail abre cliente
- **WHEN** o usuário clicar no link de e-mail
- **THEN** SHALL abrir `mailto:lucasbene03@gmail.com`

#### Scenario: Links externos abrem em nova aba
- **WHEN** o usuário clicar em LinkedIn ou GitHub
- **THEN** SHALL abrir em nova aba com `target="_blank" rel="noopener noreferrer"`

### Requirement: Dados vindos de CONTACT_LINKS
O sistema SHALL mapear `CONTACT_LINKS` de `lib/data.ts` para renderizar os ContactLinks.

#### Scenario: Contato atualizado sem alterar componente
- **WHEN** um ContactItem for alterado em `lib/data.ts`
- **THEN** o link SHALL exibir os dados atualizados

## Purpose

Defines the requirements for the Hero section of the portfolio, which is the first visible block on the page and establishes the personal brand.

## Requirements

### Requirement: Grid de fundo decorativo
O sistema SHALL renderizar um `<div>` absoluto cobrindo o hero com background-image de linhas verticais e horizontais usando `--line` como cor, com `background-size: 64px 64px` e máscara radial que faz o grid desvanecer nas bordas esquerdas/inferiores.

#### Scenario: Grid visível no hero
- **WHEN** a página for carregada
- **THEN** um padrão de grid sutil SHALL ser visível ao fundo da seção hero

### Requirement: Badge eyebrow de disponibilidade
O sistema SHALL renderizar um badge com texto "disponível para novas oportunidades" em JetBrains Mono, fundo `--accent-soft`, borda `#CFE6DE` e border-radius 100px, com um ponto verde pulsante à esquerda.

#### Scenario: Badge renderizado
- **WHEN** a página for carregada
- **THEN** o badge SHALL aparecer acima do nome com o ponto e o texto corretos

### Requirement: Nome fluido em h1
O sistema SHALL renderizar o nome "Lucas Benedito Costa Neves" em `<h1>` com Space Grotesk, peso 700, tamanho fluido via `clamp(40px, 6.4vw, 76px)`, `letter-spacing: -0.035em` e `line-height: 0.98`. "Neves" SHALL ter a cor `--accent`.

#### Scenario: Nome em destaque
- **WHEN** a página for carregada
- **THEN** "Neves" SHALL aparecer na cor accent distinguindo-se do restante do nome

### Requirement: Role-line em mono
O sistema SHALL renderizar a linha de papel profissional como uma sequência de `<span>` com as tecnologias separadas por `/` (pipe colorido `--line`) em JetBrains Mono.

#### Scenario: Pipes separadores visíveis
- **WHEN** a seção hero for renderizada
- **THEN** cada tecnologia SHALL ser separada por um `/` na cor `--line`

### Requirement: Resumo da hero
O sistema SHALL renderizar um parágrafo de resumo (`hero-summary`) com max-width 620px, cor `--ink-soft` e line-height 1.7.

#### Scenario: Resumo legível
- **WHEN** a página for carregada
- **THEN** o parágrafo SHALL ter no máximo 620px de largura e cor suavizada

### Requirement: Botões de ação primário e ghost
O sistema SHALL renderizar dois botões: "Ver experiência →" como `btn-primary` (fundo `--ink`, texto `--bg`) e "Enviar e-mail" como `btn-ghost` (borda `--line`, hover borda `--ink`), ambos em JetBrains Mono.

#### Scenario: Botão primário leva à seção de experiência
- **WHEN** o usuário clicar em "Ver experiência →"
- **THEN** a página SHALL scrollar para `#experiencia`

#### Scenario: Botão de e-mail abre cliente de e-mail
- **WHEN** o usuário clicar em "Enviar e-mail"
- **THEN** SHALL abrir o cliente de e-mail com `mailto:lucasbene03@gmail.com`

### Requirement: Meta de contato no rodapé do hero
O sistema SHALL renderizar localização, telefone e e-mail em JetBrains Mono, cor `--muted`, com ícones emojis à esquerda de cada item.

#### Scenario: Meta visível
- **WHEN** a hero for renderizada
- **THEN** São Paulo SP, o número e o e-mail SHALL ser exibidos horizontalmente (em coluna em mobile)

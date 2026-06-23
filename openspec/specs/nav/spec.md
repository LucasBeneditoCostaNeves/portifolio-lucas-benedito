## Purpose

Defines the requirements for the portfolio navigation bar, including sticky positioning, logo branding, desktop links, mobile drawer, and Server/Client Component split.

## Requirements

### Requirement: Navegação sticky com backdrop blur
O sistema SHALL renderizar um elemento `<nav>` sticky no topo (`position: sticky; top: 0; z-index: 50`) com `backdrop-filter: blur(10px)` e borda inferior usando `--line`.

#### Scenario: Nav visível durante scroll
- **WHEN** o usuário rolar a página abaixo de 200px
- **THEN** a nav SHALL permanecer fixada no topo da viewport

### Requirement: Logo LBCN.dev com spans coloridos
O sistema SHALL renderizar o logo como texto `LBCN` com a letra `N` na cor `--accent` e o `.dev` na cor `--ink`, usando a fonte Space Grotesk.

#### Scenario: Logo renderizado corretamente
- **WHEN** a página for carregada
- **THEN** o logo SHALL exibir `LBCN` com `N` em verde accent e `.dev` em ink

### Requirement: Links desktop em fonte mono
O sistema SHALL renderizar os links `sobre`, `skills`, `experiência`, `formação`, `reconhecimentos` como lista `<ul>/<li>/<a>` em JetBrains Mono, com hover que adiciona `· ` em accent na frente do texto.

#### Scenario: Links visíveis em desktop
- **WHEN** a viewport tiver largura maior que 860px
- **THEN** os links SHALL ser visíveis

#### Scenario: Links ocultos em mobile
- **WHEN** a viewport tiver largura menor ou igual a 860px
- **THEN** os links desktop SHALL ser ocultados via CSS

#### Scenario: Link reconhecimentos presente
- **WHEN** a página for carregada
- **THEN** o link `reconhecimentos` SHALL estar presente no nav apontando para `#reconhecimentos`

### Requirement: CTA de contato
O sistema SHALL renderizar um link `contato →` como elemento destacado com borda `--ink`, que ao hover inverte para fundo `--ink` e texto `--bg`.

#### Scenario: CTA leva à seção de contato
- **WHEN** o usuário clicar no CTA
- **THEN** a página SHALL scrollar suavemente até a seção `#contato`

### Requirement: Menu mobile com drawer
O sistema SHALL renderizar um ícone burger visível apenas em mobile que, ao ser clicado, abre um drawer com os links de navegação.

#### Scenario: Abertura do drawer
- **WHEN** o usuário clicar no ícone burger em viewport ≤ 860px
- **THEN** o drawer SHALL se tornar visível com os links de navegação

#### Scenario: Fechamento ao clicar em link
- **WHEN** o usuário clicar em um link dentro do drawer
- **THEN** o drawer SHALL fechar e a página SHALL scrollar para a seção correspondente

### Requirement: Nav como Server Component com NavMobileMenu como Client
O sistema SHALL implementar `Nav.tsx` como Server Component puro, delegando apenas a lógica de estado do drawer para `NavMobileMenu.tsx` com diretiva `'use client'`.

#### Scenario: Ausência de JS desnecessário no bundle
- **WHEN** o bundle da página for analisado
- **THEN** apenas `NavMobileMenu` SHALL estar no client bundle — o restante da nav não

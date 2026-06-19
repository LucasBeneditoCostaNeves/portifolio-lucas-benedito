## Purpose

Defines the requirements for the design token system, including CSS custom properties, Tailwind v4 theme integration, and font loading strategy.

## Requirements

### Requirement: CSS variables definidas na raiz
O sistema SHALL definir todos os design tokens como CSS custom properties na `:root` em `app/globals.css`, com os valores exatos: `--bg:#FAFAF7`, `--bg-raised:#FFFFFF`, `--ink:#16181D`, `--ink-soft:#4B4E57`, `--muted:#80838C`, `--line:#E5E3DC`, `--accent:#0F6E5B`, `--accent-soft:#E3F0EC`, `--accent-deep:#0A4F41`, `--warn:#B5562B`, `--radius:2px`.

#### Scenario: Tokens disponíveis globalmente
- **WHEN** qualquer componente referenciar `var(--accent)` via classe Tailwind ou CSS inline
- **THEN** o valor `#0F6E5B` SHALL ser aplicado sem importação adicional

### Requirement: Tailwind v4 @theme inline
O sistema SHALL expor os tokens de cor e fonte ao Tailwind via bloco `@theme inline` em `globals.css`, mapeando cada CSS variable para a nomenclatura Tailwind (ex.: `--color-accent: var(--accent)`).

#### Scenario: Classe Tailwind gerada a partir do token
- **WHEN** um componente usar a classe `bg-accent`
- **THEN** o background SHALL aplicar `var(--accent)` como cor de fundo

### Requirement: Fontes via next/font/google com CSS variables
O sistema SHALL carregar `Space_Grotesk`, `Inter` e `JetBrains_Mono` via `next/font/google` em `app/layout.tsx`, cada uma com a opção `variable` definida (`--font-space-grotesk`, `--font-inter`, `--font-jetbrains-mono`).

#### Scenario: Fontes carregadas sem request externo em runtime
- **WHEN** a página for carregada em produção
- **THEN** nenhum request SHALL ser feito para `fonts.googleapis.com`

#### Scenario: Variáveis CSS de fonte disponíveis
- **WHEN** `globals.css` referenciar `var(--font-inter)`
- **THEN** a família Inter SHALL ser aplicada ao elemento correspondente

### Requirement: Fonte sans e mono compostas em globals.css
O sistema SHALL definir `--font-sans` como composição de Inter e Space Grotesk, e `--font-mono` como JetBrains Mono, nas CSS variables da `:root`.

#### Scenario: Stack de fonte sans
- **WHEN** `font-family: var(--font-sans)` for aplicado
- **THEN** o browser SHALL usar Inter como primária, Space Grotesk como fallback de mesma família, seguido de `sans-serif`

### Requirement: Tipografia fluida via CSS variables
O sistema SHALL definir CSS variables para tamanhos de texto fluidos usando `clamp()` onde o HTML de referência usa esse padrão (ex.: `--text-name: clamp(40px, 6.4vw, 76px)`).

#### Scenario: Tamanho do h1 fluido
- **WHEN** a viewport for redimensionada entre 360px e 1200px
- **THEN** o `h1.name` SHALL ter tamanho de fonte interpolado entre 40px e 76px

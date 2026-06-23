## Purpose

Defines the requirements for the Recognitions section of the portfolio, including the featured recognition card, the secondary cards grid, responsive layout, image placeholders, and entrance animations.

## Requirements

### Requirement: Seção reconhecimentos com card de destaque e grade
O sistema SHALL renderizar uma `<section id="reconhecimentos">` contendo um `SectionHeader` com num `05` e título `Reconhecimentos`, seguido de um `FeaturedRecognitionCard` para o item com `featured: true` e uma grade de `RecognitionCard` para os demais itens de `RECOGNITIONS`.

#### Scenario: Seção renderizada na página principal
- **WHEN** a página principal for carregada
- **THEN** a seção `#reconhecimentos` SHALL estar presente no DOM após a seção `#formacao` e antes da seção `#contato`

#### Scenario: Card de destaque exibido
- **WHEN** existir exatamente um item em `RECOGNITIONS` com `featured: true`
- **THEN** o `FeaturedRecognitionCard` SHALL ser renderizado com a imagem do item à esquerda (60% da largura) e o conteúdo à direita (40%)

#### Scenario: Grade de cards secundários exibida
- **WHEN** existirem itens em `RECOGNITIONS` sem `featured: true`
- **THEN** SHALL ser renderizada uma grade com os cards secundários

### Requirement: Layout responsivo da grade
O sistema SHALL renderizar a grade de cards secundários com 4 colunas em viewports `sm` (≥ 640px) e 2 colunas em viewports menores.

#### Scenario: 4 colunas em desktop
- **WHEN** a viewport tiver largura ≥ 640px
- **THEN** a grade SHALL exibir 4 colunas de igual largura com gap de 24px

#### Scenario: 2 colunas em mobile
- **WHEN** a viewport tiver largura < 640px
- **THEN** a grade SHALL exibir 2 colunas de igual largura

### Requirement: FeaturedRecognitionCard com badge, título, descrição e atribuição
O sistema SHALL renderizar o card de destaque com: badge pill (`RecognitionBadge`) se `item.badge` estiver definido; título em `font-heading` ~22px `text-ink`; descrição em `text-ink-soft` 14px se `item.description` estiver definido; linha de atribuição `— Empresa · Ano` em `font-mono` 13px `text-accent`.

#### Scenario: Badge exibido quando definido
- **WHEN** o item featured tiver `badge` definido
- **THEN** o `RecognitionBadge` SHALL ser renderizado acima do título com dot `●` em `text-accent`

#### Scenario: Badge omitido quando ausente
- **WHEN** o item featured não tiver `badge`
- **THEN** o espaço do badge SHALL não ser renderizado

#### Scenario: Descrição exibida quando definida
- **WHEN** o item featured tiver `description` definido
- **THEN** o texto de descrição SHALL ser renderizado abaixo do título

### Requirement: RecognitionCard com imagem quadrada, metadado e título
O sistema SHALL renderizar cada card secundário com: imagem em aspect-square `object-cover` com fallback `bg-line`; linha de metadado `Empresa · Ano` em `font-mono` 12px `text-accent`, com stars `★` concatenadas quando `item.stars` estiver definido; título em `font-heading font-semibold` 15px `text-ink`.

#### Scenario: Stars exibidos quando definidos
- **WHEN** um card tiver `stars: 5`
- **THEN** o metadado SHALL exibir `★★★★★` após `Empresa · Ano`

#### Scenario: Stars omitidos quando ausentes
- **WHEN** um card não tiver `stars`
- **THEN** nenhum caractere de estrela SHALL aparecer no metadado

### Requirement: Placeholder bg-line enquanto imagens carregam
O sistema SHALL exibir um fundo `bg-line` no contêiner das imagens (featured e grid) enquanto a imagem não foi carregada, evitando flash de cor preta.

#### Scenario: Fallback visual no card featured
- **WHEN** a imagem do card featured ainda não tiver sido carregada
- **THEN** o contêiner SHALL exibir a cor `var(--line)` como fundo

#### Scenario: Fallback visual nos cards do grid
- **WHEN** a imagem de um card secundário ainda não tiver sido carregada
- **THEN** o contêiner de aspect-square SHALL exibir a cor `var(--line)` como fundo

### Requirement: Animações FadeInUp na seção
O sistema SHALL aplicar o wrapper `FadeInUp` no `FeaturedRecognitionCard` e em cada `RecognitionCard` do grid, com `delay` crescente nos cards do grid para efeito de escalonamento.

#### Scenario: Animação no card featured
- **WHEN** a seção entrar na viewport
- **THEN** o `FeaturedRecognitionCard` SHALL animar com `FadeInUp`

#### Scenario: Animação escalonada nos cards do grid
- **WHEN** os cards do grid entrarem na viewport
- **THEN** cada card SHALL ter um delay incrementado em relação ao anterior (ex: 0ms, 80ms, 160ms, 240ms)

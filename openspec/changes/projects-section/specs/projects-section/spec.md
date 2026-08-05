## ADDED Requirements

### Requirement: Grid de cards de projetos
O sistema SHALL renderizar a seção "Projetos Pessoais" com número de seção `04`, título e grid de cards alimentados por `PROJECTS` de `lib/data.ts`.

#### Scenario: Grid com 3 colunas em desktop
- **WHEN** a viewport for >= 860px
- **THEN** o grid SHALL exibir 3 colunas de cards de igual largura

#### Scenario: Grid com 1 coluna em mobile
- **WHEN** a viewport for < 860px
- **THEN** o grid SHALL colapsar para 1 coluna

#### Scenario: Card vazio "Em breve" quando projects.length < 3
- **WHEN** `PROJECTS` tiver menos de 3 itens
- **THEN** o grid SHALL preencher as posições restantes com um card placeholder não clicável exibindo "Em breve"

### Requirement: Card de projeto com hover e overlay
O sistema SHALL renderizar cada projeto como um card com área de imagem/placeholder, badge de status, descrição curta, lista de stack e overlay "Ver detalhes →" ao hover.

#### Scenario: Overlay visível no hover
- **WHEN** o usuário fizer hover sobre um card de projeto
- **THEN** um overlay verde SHALL aparecer sobre a área de imagem com o texto "Ver detalhes →"

#### Scenario: Badge de status correto
- **WHEN** `project.status === 'live'`
- **THEN** o badge SHALL exibir "Produção" com estilo verde

#### Scenario: Badge WIP
- **WHEN** `project.status === 'wip'`
- **THEN** o badge SHALL exibir "Em andamento" com estilo âmbar

### Requirement: Modal de detalhes do projeto
O sistema SHALL exibir um modal ao clicar em um card, com área de imagem, categoria/empresa/ano, título, descrição completa, lista de highlights e stack completa.

#### Scenario: Abertura do modal ao clicar no card
- **WHEN** o usuário clicar em um card de projeto
- **THEN** um modal SHALL abrir com backdrop blur exibindo os detalhes do projeto clicado

#### Scenario: Fechar modal com ESC
- **WHEN** o modal estiver aberto e o usuário pressionar a tecla Escape
- **THEN** o modal SHALL fechar

#### Scenario: Fechar modal clicando no backdrop
- **WHEN** o modal estiver aberto e o usuário clicar fora do painel do modal
- **THEN** o modal SHALL fechar

#### Scenario: Scroll bloqueado com modal aberto
- **WHEN** o modal estiver aberto
- **THEN** `document.body` SHALL ter `overflow: hidden` para impedir scroll de fundo

### Requirement: Highlights de impacto no modal
O sistema SHALL exibir uma lista de highlights de impacto no modal, cada um com ícone emoji e texto contendo partes em negrito.

#### Scenario: Negrito nos highlights
- **WHEN** o texto do highlight contiver marcação de negrito
- **THEN** a palavra ou frase marcada SHALL ser renderizada dentro de um `<strong>`

### Requirement: Links do projeto no modal
O sistema SHALL exibir botões de ação no modal para GitHub e, opcionalmente, demo, usando as URLs do projeto.

#### Scenario: Botão GitHub presente quando githubUrl definido
- **WHEN** `project.githubUrl` estiver definido
- **THEN** o modal SHALL exibir um botão "GitHub" abrindo a URL em nova aba

#### Scenario: Botão demo presente quando demoUrl definido
- **WHEN** `project.demoUrl` estiver definido
- **THEN** o modal SHALL exibir um botão "Ver demo →" com estilo primário

### Requirement: Animação de entrada da seção
O sistema SHALL animar a entrada do título da seção e dos cards com FadeInUp, com delay escalonado por card.

#### Scenario: Cards animam em sequência
- **WHEN** a seção de projetos entrar na viewport
- **THEN** cada card SHALL animar com `delay = index * 0.1` via `FadeInUp`

#### Scenario: Animação ocorre apenas uma vez
- **WHEN** o usuário rolar de volta para cima após a seção já ter sido animada
- **THEN** os cards SHALL permanecer visíveis sem repetir a animação de entrada

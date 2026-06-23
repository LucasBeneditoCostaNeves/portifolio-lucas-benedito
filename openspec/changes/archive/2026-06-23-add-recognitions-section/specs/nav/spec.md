## MODIFIED Requirements

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

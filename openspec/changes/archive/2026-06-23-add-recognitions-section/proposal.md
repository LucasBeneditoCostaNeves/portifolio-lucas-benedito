## Why

O portfólio exibe cinco seções sequenciais (Hero → Sobre → Skills → Experiência → Formação) mas não possui ainda a seção de Reconhecimentos (`05`), deixando prêmios e destaques profissionais invisíveis ao recrutador. Adicionar essa seção reforça a credibilidade do perfil com evidências visuais concretas.

## What Changes

- Novo tipo `Recognition` em `types/index.ts` com campos `id`, `title`, `description?`, `company`, `year`, `badge?`, `stars?`, `image`, `featured?`
- Nova constante `RECOGNITIONS: Recognition[]` em `lib/data.ts` com 5 entradas iniciais (1 featured + 4 no grid)
- Novo link `{ label: 'reconhecimentos', href: '#reconhecimentos' }` adicionado ao `NAV_LINKS` em `lib/data.ts`
- Quatro novos componentes:
  - `components/ui/RecognitionBadge.tsx` — pill com dot colorido
  - `components/ui/RecognitionCard.tsx` — card secundário (imagem + metadado + título)
  - `components/ui/FeaturedRecognitionCard.tsx` — card hero split horizontal
  - `components/sections/Recognitions.tsx` — orquestra a seção completa
- Registro de `<Recognitions />` em `app/page.tsx` entre `<Education />` e `<Contact />`
- Diretório `public/reconhecimentos/` para imagens da seção

## Capabilities

### New Capabilities

- `recognitions-section`: Seção `#reconhecimentos` com card de destaque (featured) e grade de 4 cards secundários, exibindo prêmios e reconhecimentos profissionais com animações `FadeInUp` / `StaggerList`

### Modified Capabilities

- `data-layer`: Adicionar interface `Recognition` a `types/index.ts` e constante `RECOGNITIONS` a `lib/data.ts` — novos campos expandem o catálogo de entidades e constantes do data layer
- `nav`: Adicionar link `reconhecimentos` ao conjunto de links de navegação desktop e mobile drawer

## Impact

- `types/index.ts` — novo export `Recognition`
- `lib/data.ts` — nova constante `RECOGNITIONS`, novo item em `NAV_LINKS`
- `app/page.tsx` — novo `<Recognitions />` entre Education e Contact
- 4 novos arquivos de componente em `components/ui/` e `components/sections/`
- `public/reconhecimentos/` — imagens estáticas (placeholders até imagens reais serem fornecidas)
- Nenhuma dependência externa nova; usa `next/image` e primitivas existentes do design system

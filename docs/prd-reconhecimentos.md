# PRD — Seção Reconhecimentos

## Contexto

O portfólio atualmente expõe cinco seções sequenciais: Hero, Sobre, Skills, Experiência e Formação. A seção **Reconhecimentos** é a próxima na numeração (`05`) e tem como objetivo apresentar prêmios e destaque profissional recebidos, reforçando a credibilidade do perfil de forma visual e concisa.

O modelo visual é fornecido via screenshot e deve ser replicado fielmente dentro do design system existente (variáveis CSS, fontes, border-radius, paleta).

---

## Objetivo

Adicionar a seção `#reconhecimentos` à página principal, posicionada após `#formacao` e antes de `#contato`, exibindo reconhecimentos profissionais em dois níveis visuais: um **card de destaque** (featured) e uma **grade de cards secundários**.

---

## Layout

### Estrutura geral

```
<section id="reconhecimentos">
  <SectionHeader num="05" title="Reconhecimentos" />

  <!-- Card de destaque (featured) -->
  <FeaturedRecognitionCard />

  <!-- Grade 4 colunas -->
  <RecognitionGrid />
</section>
```

### 1. Card de destaque (`FeaturedRecognitionCard`)

Split horizontal, largura total (até `max-w-[1040px]`), borda `border border-line`, `bg-bg-raised`, sem border-radius salvo o padrão `var(--radius)`.

| Coluna esquerda (60%) | Coluna direita (40%) |
|---|---|
| Imagem de capa — `object-cover`, aspect `16/9` | Badge pill com dot colorido |
| | Título (`font-heading`, ~24px, `text-ink`) |
| | Descrição (`text-ink-soft`, 14px, line-height 1.6) |
| | Linha de atribuição: `— Empresa · Ano` (`font-mono`, 13px, `text-accent`) |

**Badge pill**: estilo similar ao `Pill` existente, mas com um `●` colorido (`text-accent`) antes do label. Não usa hover interativo.

### 2. Grade de cards secundários (`RecognitionGrid`)

4 colunas de largura igual, gap `24px`, `mt-6`.  
Em mobile (< 640px): 2 colunas. Em telas < 380px: 1 coluna.

Cada card (`RecognitionCard`):
- `bg-bg-raised border border-line` sem border-radius extra além do padrão
- Imagem no topo: `aspect-square object-cover w-full`
- Metadado (`font-mono text-[12px] text-accent`): `Empresa · Ano` — opcionalmente stars (`★★★★★`)
- Título (`font-heading font-semibold text-[15px] text-ink mt-1`)
- Padding `p-4` na área de texto

---

## Modelo de dados

### Tipo TypeScript (`types/index.ts`)

```ts
export interface Recognition {
  id: string
  title: string
  description?: string       // apenas no featured
  company: string
  year: string
  badge?: string             // label do pill no featured, ex: "Destaque do Ano"
  stars?: number             // 1–5, exibido como ★
  image: string              // caminho relativo em /public ou URL externa
  featured?: boolean         // se true, renderizado como FeaturedRecognitionCard
}
```

### Dados iniciais (`lib/data.ts`)

```ts
export const RECOGNITIONS: Recognition[] = [
  {
    id: 'premio-destaques-2024',
    featured: true,
    badge: 'Destaque do Ano',
    title: 'Prêmio Destaques 2024',
    description:
      'Reconhecido entre os profissionais mais impactantes do ano em evento anual da empresa — recebendo troféu no palco entre dezenas de colegas.',
    company: 'iFollow',
    year: '2024',
    image: '/reconhecimentos/premio-destaques-2024.jpg',
  },
  {
    id: 'reconhecimento-do-mes',
    title: 'Reconhecimento do Mês',
    company: 'SIT',
    year: '2024',
    stars: 5,
    image: '/reconhecimentos/reconhecimento-mes.jpg',
  },
  {
    id: 'reconhecimento-equipe-lucao-wd',
    title: 'Reconhecimento de Equipe — Lucão WD',
    company: 'iFollow',
    year: '2024',
    image: '/reconhecimentos/reconhecimento-equipe.jpg',
  },
  {
    id: 'destaques-ano-grupo',
    title: 'Destaques do Ano — Grupo',
    company: 'iFollow',
    year: '2024',
    badge: 'Destaques 2024',
    image: '/reconhecimentos/destaques-grupo.jpg',
  },
  {
    id: 'momento-premiacao',
    title: 'Momento da Premiação',
    company: 'iFollow',
    year: '2024',
    badge: 'Destaques 2024',
    image: '/reconhecimentos/momento-premiacao.jpg',
  },
]
```

---

## Componentes a criar

| Arquivo | Responsabilidade |
|---|---|
| `components/sections/Recognitions.tsx` | Orquestra a seção; lê `RECOGNITIONS` de `lib/data.ts`; separa featured do grid |
| `components/ui/FeaturedRecognitionCard.tsx` | Card hero com imagem + conteúdo lado a lado |
| `components/ui/RecognitionCard.tsx` | Card pequeno da grade (imagem + metadado + título) |
| `components/ui/RecognitionBadge.tsx` | Pill com dot — reutilizável no featured e opcionalmente no grid |

---

## Integração

### `app/page.tsx`

Adicionar após `<Education />` e antes de `<Contact />`:

```tsx
import { Recognitions } from '@/components/sections/Recognitions'
// ...
<Recognitions />
```

### `lib/data.ts`

Adicionar `RECOGNITIONS: Recognition[]` e importar o novo tipo.

### `types/index.ts`

Adicionar a interface `Recognition`.

### Nav (`lib/data.ts` → `NAV_LINKS`)

```ts
{ label: 'reconhecimentos', href: '#reconhecimentos' },
```

---

## Comportamento de imagens

- Usar `next/image` com `fill` + `object-cover` dentro de um contêiner posicionado
- Imagens colocadas em `public/reconhecimentos/`
- Fallback visual: fundo `bg-line` enquanto carrega (evita flash preto como no screenshot atual onde as imagens não foram fornecidas)

---

## Animações

Seguir o padrão existente:
- `FadeInUp` no card featured
- `StaggerList` (ou `FadeInUp` com `delay` crescente) nos 4 cards do grid

---

## Tarefas de implementação

- [ ] Adicionar `Recognition` em `types/index.ts`
- [ ] Adicionar `RECOGNITIONS` em `lib/data.ts`
- [ ] Criar `RecognitionBadge.tsx`
- [ ] Criar `RecognitionCard.tsx`
- [ ] Criar `FeaturedRecognitionCard.tsx`
- [ ] Criar `Recognitions.tsx` (section)
- [ ] Adicionar link `reconhecimentos` ao `NAV_LINKS`
- [ ] Registrar `<Recognitions />` em `app/page.tsx`
- [ ] Colocar imagens reais em `public/reconhecimentos/`

---

## Fora do escopo

- Lightbox / modal de imagem ampliada
- Filtro por empresa ou ano
- Paginação

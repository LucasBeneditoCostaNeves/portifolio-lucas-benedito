## ADDED Requirements

### Requirement: FadeInUp como Client Component
O sistema SHALL implementar `components/motion/FadeInUp.tsx` com diretiva `'use client'`, usando `motion.div` do Framer Motion com `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}` e `viewport={{ once: true }}`.

#### Scenario: Animação disparada uma vez ao entrar na viewport
- **WHEN** um elemento envolvido em FadeInUp entrar na viewport
- **THEN** SHALL animar de `opacity:0 y:20` para `opacity:1 y:0` e não repetir ao rolar de volta

### Requirement: FadeInUp aceita duration e delay como props
O sistema SHALL aceitar props `duration?: number` (padrão 0.5) e `delay?: number` (padrão 0) para controlar o timing da animação.

#### Scenario: Atraso de animação em sequência
- **WHEN** múltiplos FadeInUp forem renderizados com `delay` crescente
- **THEN** cada elemento SHALL animar após o atraso especificado

### Requirement: StaggerList como Client Component
O sistema SHALL implementar `components/motion/StaggerList.tsx` com diretiva `'use client'`, usando `motion.ul` com `variants` de container (`staggerChildren: 0.08`) e cada `<li>` como `motion.li` com `variants` de item (fade + slide).

#### Scenario: Lista com animação em cascata
- **WHEN** a StaggerList entrar na viewport
- **THEN** cada item da lista SHALL animar sequencialmente com intervalo de 80ms entre eles

### Requirement: Wrappers não requerem 'use client' nos pais
O sistema SHALL garantir que Server Components possam importar FadeInUp e StaggerList passando children como props, sem precisar adicionar 'use client' nas seções.

#### Scenario: Seção server component usando FadeInUp
- **WHEN** `Hero.tsx` (Server Component) importar FadeInUp
- **THEN** a build SHALL compilar sem erros de "Client Component boundary"

### Requirement: viewport={{ once: true }} em todos os wrappers
O sistema SHALL configurar `viewport={{ once: true }}` em todos os wrappers de animação para evitar re-animação ao fazer scroll para cima.

#### Scenario: Sem re-animação no scroll reverso
- **WHEN** o usuário rolar de volta para cima após uma seção já ter sido animada
- **THEN** os elementos SHALL permanecer visíveis sem repetir a animação de entrada

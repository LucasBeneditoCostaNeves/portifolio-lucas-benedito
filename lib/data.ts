import type {
  TextSegment,
  Principle,
  SkillCategory,
  TimelineEntry,
  EduEntry,
  Cert,
  ContactItem,
  NavLink,
  Recognition,
} from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'sobre', href: '#sobre' },
  { label: 'skills', href: '#skills' },
  { label: 'experiência', href: '#experiencia' },
  { label: 'formação', href: '#formacao' },
  { label: 'reconhecimentos', href: '#reconhecimentos' },
]

export const ABOUT_PARAGRAPHS: TextSegment[][] = [
  [
    { text: 'Desenvolvedor ' },
    { text: 'Full Stack', bold: true },
    {
      text: ' com experiência no desenvolvimento de aplicações web complexas e de alta performance, atuando de ponta a ponta — do front-end ao design de arquitetura de back-end. Ao longo da carreira, liderou de forma independente projetos críticos.',
    },
  ],
  [
    { text: 'Sólido domínio em ' },
    {
      text: 'JavaScript, PHP, TypeScript, React.js, Next.js, NestJS e Node.js',
      bold: true,
    },
    { text: ', com experiência em desacoplamento de serviços, APIs RESTful e boas práticas como' },
    { text: ' SOLID, Clean Architecture, DDD e TDD', bold: true },
    { text: '.' },
  ],
  [
    {
      text: 'Perfil autônomo, orientado a resultados e acostumado a trabalhar com metodologia ágil (Scrum).',
    },
  ],
]

export const PRINCIPLES: Principle[] = [
  {
    num: '01',
    title: 'Ponta a ponta',
    description:
      'Do design de banco de dados à interface final, com domínio real de cada camada.',
  },
  {
    num: '02',
    title: 'Arquitetura limpa',
    description:
      'SOLID, Clean Architecture e DDD aplicados no dia a dia, não só na teoria.',
  },
  {
    num: '03',
    title: 'Resultado mensurável',
    description:
      'Projetos com ganhos concretos de eficiência e redução de erro reportados.',
  },
]

export const STACK: Record<string, string[]> = {
  frontend: ['React.js', 'Next.js', 'TS'],
  backend: ['Node.js', 'NestJS', 'PHP', 'Laravel'],
  database: ['PostgreSQL', 'MySQL'],
  devops: ['Docker', 'Git', 'RabbitMQ'],
  practices: ['SOLID', 'DDD', 'TDD'],
  methodology: ['Scrum'],
  status: ['open_to_work'],
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Front-end',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3'],
  },
  {
    label: 'Back-end',
    skills: ['Node.js', 'NestJS', 'PHP', 'Laravel', 'Python', 'Django REST'],
  },
  {
    label: 'Banco de Dados',
    skills: ['MySQL', 'PostgreSQL', 'SQL'],
  },
  {
    label: 'DevOps & Ferramentas',
    skills: ['Git', 'Docker', 'Jest', 'RabbitMQ', 'n8n'],
  },
  {
    label: 'Metodologias',
    skills: ['Scrum', 'SOLID', 'Clean Architecture', 'DDD', 'TDD'],
  },
  {
    label: 'Gestão de Projetos',
    skills: ['Jira', 'Notion', 'Trello', 'ClickUp'],
  },
]

export const TIMELINE: TimelineEntry[] = [
  {
    company: 'iFollow',
    role: 'Programador Full Stack',
    period: 'Novembro 2023 – Atual',
    bullets: [
      'Desenvolvimento de aplicações web com React.js e Next.js (front-end) e APIs RESTful com Node.js e NestJS (back-end), incluindo criação e manutenção de bancos de dados MySQL e PostgreSQL.',
      'Versionamento com Git e atuação em metodologia ágil Scrum (sprints, dailies, retrospectivas).',
    ],
    projects: [
      {
        title: 'Plataforma de Outsourcing',
        items: [
          {
            text: 'Desenvolvida do zero plataforma completa com módulos de cadastros, fornecedores, cashflow e área criativa, gerenciando o fluxo entre clientes, fornecedores e administradores.',
            highlight: 'do zero',
          },
          {
            text: 'Implementado módulo financeiro com cálculo automático de impostos e geração de notas fiscais, eliminando retrabalho contábil — +60% de eficiência e redução de erros fiscais.',
            highlight: '+60% de eficiência',
          },
        ],
      },
      {
        title: 'Plataforma de Rastreabilidade de Mercadorias',
        items: [
          {
            text: 'Integração de APIs externas de rastreamento, sincronizando localização de +2.000 dispositivos a cada 15 minutos via cron jobs e filas de mensageria com RabbitMQ e n8n.',
            highlight: '+2.000 dispositivos',
          },
          {
            text: 'Lógica de rotina desacoplada em uma API independente, aplicando Clean Architecture e Single Responsibility para aumentar resiliência e facilitar manutenção.',
          },
        ],
      },
    ],
  },
]

export const EDUCATION: EduEntry[] = [
  {
    period: 'Julho 2022 – Julho 2023',
    institution: 'Kenzie Academy Brasil',
    course: 'Desenvolvimento Web Full Stack',
  },
  {
    period: 'Em andamento',
    institution: 'Estácio',
    course: 'Análise e Desenvolvimento de Sistemas (ADS)',
  },
]

export const CERTS: Cert[] = [
  {
    title: 'Certificado Full Stack – Kenzie Academy Brasil',
    date: 'Julho 2023',
    url: 'https://drive.google.com/file/d/1G6stTKSnbBr4XeoeDSrTMk3ExBiRWiBB/view',
  },
]

export const RECOGNITIONS: Recognition[] = [
  {
    id: 'premio-destaques-2024',
    featured: true,
    badge: 'Destaque do Ano',
    title: 'Prêmio Destaques 2025',
    description:
      'Reconhecido entre os profissionais mais impactantes do ano em evento anual da empresa — recebendo troféu no palco entre dezenas de colegas.',
    company: 'SIT TRADE - Ifollow',
    image: 'https://drive.google.com/uc?export=view&id=1ZGxWgvVSMr6gV1Zp93zee-hv1DLcvOU5',
    year: '2025',
  },
  {
    id: 'reconhecimento-do-mes',
    title: 'Reconhecimento do Mês',
    company: 'SIT TRADE',
    year: '2025',
    stars: 5,
    image: 'https://drive.google.com/uc?export=view&id=1Uz3O5lKTErn3NKIFVIhmpuKWMyaJ-8XD',
  },
  {
    id: 'destaques-ano-grupo',
    title: 'Destaques do Ano — Grupo',
    company: 'SIT TRADE',
    year: '2025',
    badge: 'Destaques 2024',
    image: 'https://drive.google.com/uc?export=view&id=1V0YE-tRwWffH4_ZYmZ8Bu2G01b63Eaoz',
  },
  {
    id: 'reconhecimento-equipe-lucao-wd',
    title: 'Reconhecimento de Equipe — Lucão WD',
    company: 'iFollow',
    year: '2024',
    image: 'https://drive.google.com/uc?export=view&id=19iGr8r5lHFHaF6MnFiz6BxaHTrrDgEME',
  },
  {
    id: 'momento-premiacao',
    title: 'Momento da Premiação',
    company: 'iFollow',
    year: '2024',
    badge: 'Destaques 2024',
    image: 'https://drive.google.com/uc?export=view&id=1x2YUA7sVVoiP8jXAgCqtgPI0kogbL7pC',
    objectFit: 'contain',
  },
]

export const CONTACT_LINKS: ContactItem[] = [
  { label: 'lucasbene03@gmail.com', href: 'mailto:lucasbene03@gmail.com' },
  { label: '(11) 97677-9251', href: 'tel:+5511976779251' },
  {
    label: 'linkedin.com/in/lucas-benedito-costa-neves',
    href: 'https://www.linkedin.com/in/lucas-benedito-costa-neves-6a0102246/',
  },
  {
    label: 'github.com/LucasBeneditoCostaNeves',
    href: 'https://github.com/LucasBeneditoCostaNeves',
  },
]

import type { SiteContent } from './content';

export const pt = {
  meta: {
    title: 'Augusto S. Lima · Desenvolvedor Full Stack',
    description:
      'Portfólio de Augusto S. Lima, desenvolvedor full stack em Brasília: Java, Angular, Groovy, Kafka e PostgreSQL.',
  },
  name: 'Augusto S. Lima',
  role: 'Desenvolvedor Full Stack',
  links: {
    linkedin: 'https://www.linkedin.com/in/augusto-s-lima-8167352a6',
    github: 'https://github.com/AugustoSodre',
  },
  langSwitch: { label: 'English', target: 'en' },
  notFound: {
    title: 'Página não encontrada',
    body: 'Esse endereço não existe.',
    home: 'Voltar ao início',
  },
  nav: { projects: 'Projetos', experience: 'Experiência', about: 'Sobre', contact: 'Contato' },
  sections: {
    projects: { title: 'Projetos · Augusto S. Lima', description: 'Projetos de Augusto S. Lima.' },
    experience: { title: 'Experiência · Augusto S. Lima', description: 'Experiência profissional de Augusto S. Lima.' },
    about: { title: 'Sobre · Augusto S. Lima', description: 'Quem é Augusto S. Lima.' },
    contact: { title: 'Contato · Augusto S. Lima', description: 'Como falar com Augusto S. Lima.' },
  },
  menu: { label: 'Menu principal', back: 'Esc · voltar' },
  experience: {
    roles: [
      {
        period: 'mar/2026 → atual',
        title: 'Desenvolvedor de Software (estágio)',
        org: 'ZG Soluções',
        mode: 'Remoto',
        points: [
          'Full stack no ZG Repasse: Angular no front, Groovy + Micronaut no back, microsserviços orientados a eventos com Kafka.',
          'Regras de negócio em fluxos de aprovação, com auditoria via eventos Kafka.',
          'Integração com Userflow para onboarding dentro do produto.',
          'PostgreSQL com migrations Liquibase e deploy sem indisponibilidade.',
          'Testes com Spock (unitário, integração e API); qualidade com CodeNarc, JaCoCo e code review.',
          'IA generativa no dia a dia (Claude Code, Gemini): SDD, TDD, múltiplos agentes, especificação de tickets e revisão de código.',
          'Scrum, do refinamento do ticket ao code review.',
        ],
      },
      {
        period: 'ago/2025 → fev/2026',
        title: 'Desenvolvedor Trainee',
        org: 'AceleraZG 8.0 · ZG Soluções',
        highlight: 'Selecionado entre 2.000+ inscritos (Top 24) e contratado ao final (Top 5).',
        points: [
          'MVP de um produto hospitalar em squad ágil.',
          'Refatoração de código legado: Angular no front, Grails + Kafka + Spock no back.',
          'Microsserviços, documentação com Swagger e Git Flow.',
        ],
      },
      {
        period: 'fev/2024 → jul/2025',
        title: 'Monitor de laboratório e programação',
        org: 'UniCEUB',
        points: [
          'Inclusão digital para idosos: Office, segurança digital, fake news e introdução a LLMs.',
          'Oficina de PHP, SQL e HTML/CSS para 15 alunos, com 100% de conclusão.',
          'Introdução à linguagem C para 35 calouros.',
        ],
      },
    ],
    educationHeading: 'Formação',
    education: {
      course: 'Ciência da Computação',
      school: 'UniCEUB',
      period: 'fev/2024 → dez/2027 (previsto)',
    },
  },
  about: {
    photoAlt: 'Augusto sorrindo, de óculos',
    story: [
      'Sou desenvolvedor full stack em Brasília. Trabalho na ZG Soluções com Angular, Groovy, Micronaut, Kafka e PostgreSQL, e curso Ciência da Computação no UniCEUB.',
      'Programo desde os 12 anos, quando comecei a criar jogos na Godot.',
      '改善 (kaizen) quer dizer melhoria contínua. É a ideia por trás deste portfólio e de como eu trabalho.',
    ],
    certsHeading: 'Certificados em destaque',
    certs: [
      { name: 'AceleraZG', year: '2026' },
      { name: 'Formação em Kafka' },
      { name: 'Formação em Angular' },
      { name: 'Harvard CS50x', year: '2024' },
    ],
    certsAll: { label: 'Todos os certificados no LinkedIn', href: 'https://www.linkedin.com/in/augusto-s-lima-8167352a6/details/certifications/' },
    gamesHeading: 'Jogos',
    games: 'Antes do código de produção vieram os jogos. Os que publiquei estão no itch.io.',
    gamesLink: { label: 'Ver no itch.io', href: 'https://gutoguerreiro.itch.io' },
  },
  contact: {
    intro: 'O jeito mais rápido de falar comigo é pelo LinkedIn.',
    location: 'Brasília, DF · Brasil',
    links: [
      { label: 'LinkedIn', handle: 'augusto-s-lima', href: 'https://www.linkedin.com/in/augusto-s-lima-8167352a6' },
      { label: 'GitHub', handle: 'AugustoSodre', href: 'https://github.com/AugustoSodre' },
      { label: 'itch.io', handle: 'gutoguerreiro', href: 'https://gutoguerreiro.itch.io' },
    ],
  },
} satisfies SiteContent;

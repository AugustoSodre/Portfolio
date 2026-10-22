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
  resume: { label: 'Currículo', href: '/cv/augusto-lima-curriculo.pdf' },
  newTab: '(abre em nova aba)',
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
  projects: {
    linketinder: {
      tagline: 'Plataforma de recrutamento que conecta candidatos e empresas por competências.',
      summary:
        'Backend em Groovy com API REST e CLI sobre a mesma camada de serviço, banco PostgreSQL normalizado e uma SPA em TypeScript.',
      myPart: [
        'Projeto solo: modelagem do banco, backend e frontend.',
        'API REST e CLI em Groovy compartilhando os mesmos services.',
        'PostgreSQL com 7 tabelas e scripts SQL versionados; testes com Spock usando H2 em memória.',
        'SPA em TypeScript com validações em Chain of Responsibility.',
      ],
      limits: ['Frontend e backend ainda não estão integrados: compartilham o domínio, mas rodam separados.'],
      team: [],
    },
    automatch: {
      tagline: 'Plataforma que recomenda carros a partir de um quiz, com um modelo de deep learning de duas torres.',
      summary:
        'O usuário responde um quiz de 4 etapas no frontend Angular. O backend em Node.js envia o perfil e o catálogo para o motor de IA em PyTorch, que devolve um ranking com percentual de match.',
      myPart: [
        'Maior parte do frontend em Angular.',
        'Versão inicial do motor de recomendação two-tower em PyTorch; a versão final foi reescrita pelo Pedro Antonio.',
      ],
      limits: [],
      team: [
        { name: 'Lucas Moura', role: 'Maior parte do backend e integração com o motor de IA', href: 'https://github.com/LucMoura' },
        { name: 'Ângelo Gaio', role: 'Backend', href: 'https://github.com/awangelo' },
        { name: 'Luana Lima', role: 'Frontend', href: 'https://github.com/luanafvl' },
        { name: 'Pedro Antonio', role: 'Reescreveu o motor de IA da versão final', href: 'https://github.com/PedroAntn' },
        { name: 'Sabrina Vianna', role: 'Design e documentação', href: 'https://github.com/LittleSabs' },
        { name: 'Gustavo Fernandes', role: 'Design' },
      ],
    },
    'web-crawler': {
      tagline: 'Crawler em Groovy que coleta dados públicos da ANS sobre o padrão TISS, da saúde suplementar.',
      summary:
        'Baixa a documentação mais recente do padrão TISS, exporta para CSV o histórico de versões desde jan/2016 e baixa a tabela de erros de envio para a ANS.',
      myPart: ['Projeto solo.'],
      limits: [],
      team: [],
    },
    'gestor-eventos': {
      tagline: 'Sistema web em Django para eventos acadêmicos: inscrições, presença e certificados em PDF.',
      summary:
        'Organizadores cadastram eventos, alunos e professores se inscrevem e têm a presença registrada, e o sistema emite os certificados em PDF. O acesso é separado por perfil (admin, organizador, professor e aluno), com uma API REST e um log de auditoria das ações.',
      myPart: [
        'Desenvolvimento full stack em equipe de três, em pair programming.',
        'Ferramentas de IA integradas ao fluxo de desenvolvimento, com a equipe conduzindo e revisando as iterações em conjunto.',
        'Documentação técnica (casos de uso, diagrama entidade-relacionamento e documentação formal) e script de carga de dados de exemplo.',
      ],
      limits: [],
      team: [
        { name: 'Ângelo Gaio', role: 'Full stack', href: 'https://github.com/awangelo' },
        { name: 'Luana Lima', role: 'Full stack', href: 'https://github.com/luanafvl' },
      ],
    },
  },
  projectsUi: {
    howItWorks: 'Como funciona',
    myPart: 'Minha parte',
    stack: 'Stack',
    links: 'Repositórios',
    limits: 'Limitações',
    team: 'Equipe',
    open: 'Ver projeto',
    all: 'Todos os projetos',
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

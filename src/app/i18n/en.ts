import type { SiteContent } from './content';

export const en = {
  meta: {
    title: 'Augusto S. Lima · Full Stack Developer',
    description:
      'Portfolio of Augusto S. Lima, full stack developer in Brasília, Brazil: Java, Angular, Groovy, Kafka and PostgreSQL.',
  },
  name: 'Augusto S. Lima',
  role: 'Full Stack Developer',
  links: {
    linkedin: 'https://www.linkedin.com/in/augusto-s-lima-8167352a6',
    github: 'https://github.com/AugustoSodre',
  },
  langSwitch: { label: 'Português', target: 'pt' },
  resume: { label: 'Résumé', href: '/cv/augusto-lima-resume.pdf' },
  newTab: '(opens in a new tab)',
  notFound: {
    title: 'Page not found',
    body: 'This address does not exist.',
    home: 'Back to home',
  },
  nav: { projects: 'Projects', experience: 'Experience', about: 'About', contact: 'Contact' },
  sections: {
    projects: { title: 'Projects · Augusto S. Lima', description: 'Projects by Augusto S. Lima.' },
    experience: { title: 'Experience · Augusto S. Lima', description: 'Work experience of Augusto S. Lima.' },
    about: { title: 'About · Augusto S. Lima', description: 'Who Augusto S. Lima is.' },
    contact: { title: 'Contact · Augusto S. Lima', description: 'How to reach Augusto S. Lima.' },
  },
  menu: { label: 'Main menu', back: 'Esc · back' },
  experience: {
    roles: [
      {
        period: 'Mar 2026 → present',
        title: 'Software Developer (intern)',
        org: 'ZG Soluções',
        mode: 'Remote',
        points: [
          'Full stack on ZG Repasse: Angular on the front end, Groovy + Micronaut on the back end, event-driven microservices with Kafka.',
          'Business rules in approval workflows, audited through Kafka events.',
          'Userflow integration for in-app onboarding.',
          'PostgreSQL with Liquibase migrations and zero-downtime deploys.',
          'Testing with Spock (unit, integration and API); quality with CodeNarc, JaCoCo and code review.',
          'Generative AI in daily work (Claude Code, Gemini): SDD, TDD, multiple agents, ticket specs and code review.',
          'Scrum, from ticket refinement to code review.',
        ],
      },
      {
        period: 'Aug 2025 → Feb 2026',
        title: 'Trainee Developer',
        org: 'AceleraZG 8.0 · ZG Soluções',
        highlight: 'Selected among 2,000+ applicants (Top 24) and hired at the end (Top 5).',
        points: [
          'MVP of a hospital product in an agile squad.',
          'Legacy code refactoring: Angular on the front end, Grails + Kafka + Spock on the back end.',
          'Microservices, Swagger documentation and Git Flow.',
        ],
      },
      {
        period: 'Feb 2024 → Jul 2025',
        title: 'Lab and Programming Teaching Assistant',
        org: 'UniCEUB',
        points: [
          'Digital inclusion classes for seniors: Office, online safety, fake news and an introduction to LLMs.',
          'PHP, SQL and HTML/CSS workshop for 15 students, 100% completion.',
          'Introduction to C for 35 first-year students.',
        ],
      },
    ],
    educationHeading: 'Education',
    education: {
      course: 'B.Sc. in Computer Science',
      school: 'UniCEUB',
      period: 'Feb 2024 → Dec 2027 (expected)',
    },
  },
  about: {
    photoAlt: 'Augusto smiling, wearing glasses',
    story: [
      "I'm a full stack developer in Brasília, Brazil. I work at ZG Soluções with Angular, Groovy, Micronaut, Kafka and PostgreSQL, and I study Computer Science at UniCEUB.",
      "I've been programming since I was 12, when I started making games in Godot.",
      '改善 (kaizen) means continuous improvement. It is the idea behind this portfolio and how I work.',
    ],
    certsHeading: 'Featured certificates',
    certs: [
      { name: 'AceleraZG', year: '2026' },
      { name: 'Kafka Training' },
      { name: 'Angular Training' },
      { name: 'Harvard CS50x', year: '2024' },
    ],
    certsAll: { label: 'All certificates on LinkedIn', href: 'https://www.linkedin.com/in/augusto-s-lima-8167352a6/details/certifications/' },
    gamesHeading: 'Games',
    games: 'Before production code there were games. The ones I published are on itch.io.',
    gamesLink: { label: 'See on itch.io', href: 'https://gutoguerreiro.itch.io' },
  },
  projects: {
    linketinder: {
      tagline: 'Recruitment platform that matches candidates and companies by skills.',
      summary:
        'Groovy back end with a REST API and a CLI over the same service layer, a normalized PostgreSQL database and a TypeScript SPA.',
      myPart: [
        'Solo project: database design, back end and front end.',
        'Groovy REST API and CLI sharing the same services.',
        'PostgreSQL with 7 tables and versioned SQL scripts; Spock tests on in-memory H2.',
        'TypeScript SPA with Chain of Responsibility validation.',
      ],
      limits: ['Front end and back end are not integrated yet: they share the domain but run separately.'],
      team: [],
    },
    automatch: {
      tagline: 'Platform that recommends cars from a short quiz, using a two-tower deep learning model.',
      summary:
        'The user answers a 4-step quiz in the Angular front end. The Node.js back end sends the profile and the catalog to the PyTorch AI engine, which returns a ranking with a match percentage.',
      myPart: [
        'Most of the Angular front end.',
        'Initial version of the PyTorch two-tower recommendation engine; Pedro Antonio rewrote it for the final version.',
      ],
      limits: [],
      team: [
        { name: 'Lucas Moura', role: 'Most of the back end and the AI engine integration', href: 'https://github.com/LucMoura' },
        { name: 'Ângelo Gaio', role: 'Back end', href: 'https://github.com/awangelo' },
        { name: 'Luana Lima', role: 'Front end', href: 'https://github.com/luanafvl' },
        { name: 'Pedro Antonio', role: 'Rewrote the AI engine for the final version', href: 'https://github.com/PedroAntn' },
        { name: 'Sabrina Vianna', role: 'Design and documentation', href: 'https://github.com/LittleSabs' },
        { name: 'Gustavo Fernandes', role: 'Design and database (data collected via web scraping)', href: 'https://github.com/gustavolimaf' },
      ],
    },
    'web-crawler': {
      tagline: 'Groovy crawler that collects public data from ANS, Brazil’s health insurance regulator, about the TISS standard.',
      summary:
        'Downloads the latest TISS documentation, exports the version history since Jan 2016 to CSV and downloads the table of submission errors.',
      myPart: ['Solo project.'],
      limits: [],
      team: [],
    },
    'gestor-eventos': {
      tagline: 'Django web app for academic events: registrations, attendance and PDF certificates.',
      summary:
        'Organizers create events, students and professors register and have their attendance recorded, and the system issues PDF certificates. Access is split by role (admin, organizer, professor and student), with a REST API and an audit log of actions.',
      myPart: [
        'Full stack development in a team of three, using pair programming.',
        'AI tools built into the development workflow, with the team driving and reviewing each iteration together.',
        'Technical documentation (use cases, entity-relationship diagram and formal documentation) and a sample data seeding script.',
      ],
      limits: [],
      team: [
        { name: 'Ângelo Gaio', role: 'Full stack', href: 'https://github.com/awangelo' },
        { name: 'Luana Lima', role: 'Full stack', href: 'https://github.com/luanafvl' },
      ],
    },
  },
  projectsUi: {
    howItWorks: 'How it works',
    myPart: 'My part',
    stack: 'Stack',
    links: 'Repositories',
    limits: 'Limitations',
    team: 'Team',
    open: 'Open project',
    all: 'All projects',
  },
  contact: {
    intro: 'The fastest way to reach me is LinkedIn.',
    location: 'Brasília, DF · Brazil',
    links: [
      { label: 'LinkedIn', handle: 'augusto-s-lima', href: 'https://www.linkedin.com/in/augusto-s-lima-8167352a6' },
      { label: 'GitHub', handle: 'AugustoSodre', href: 'https://github.com/AugustoSodre' },
      { label: 'itch.io', handle: 'gutoguerreiro', href: 'https://gutoguerreiro.itch.io' },
    ],
  },
} satisfies SiteContent;

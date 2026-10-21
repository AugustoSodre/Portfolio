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
} satisfies SiteContent;

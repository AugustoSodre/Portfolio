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
} satisfies SiteContent;

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
} satisfies SiteContent;

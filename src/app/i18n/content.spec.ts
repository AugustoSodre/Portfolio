import { CONTENT } from './content';

describe('site content', () => {
  for (const [locale, content] of Object.entries(CONTENT)) {
    const text = JSON.stringify(content);

    it(`${locale}: publishes no email address`, () => {
      expect(text).not.toMatch(/[\w.+-]+@[\w-]+\.[\w.]+/);
    });

    it(`${locale}: never says "open to work"`, () => {
      expect(text).not.toMatch(/open to work|aberto a (novas )?oportunidades/i);
    });
  }
});

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

describe('résumé links', () => {
  it('point to a PDF per locale', () => {
    expect(CONTENT.pt.resume.href).toBe('/cv/augusto-lima-curriculo.pdf');
    expect(CONTENT.en.resume.href).toBe('/cv/augusto-lima-resume.pdf');
  });
});

import { PROJECTS, isProjectSlug, projectRouteParams } from './projects';

describe('projects', () => {
  it('lists projects in the agreed order', () => {
    expect(PROJECTS.map((p) => p.slug)).toEqual(['linketinder', 'automatch', 'web-crawler']);
  });

  it('prerenders every locale × project', () => {
    expect(projectRouteParams()).toHaveLength(6);
    expect(projectRouteParams()).toContainEqual({ lang: 'en', slug: 'web-crawler' });
  });

  it('rejects unknown slugs', () => {
    expect(isProjectSlug('automatch')).toBe(true);
    expect(isProjectSlug('nope')).toBe(false);
  });
});

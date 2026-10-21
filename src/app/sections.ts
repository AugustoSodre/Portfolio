export const SECTIONS = ['projects', 'experience', 'about', 'contact'] as const;
export type Section = (typeof SECTIONS)[number];

export function isSection(value: unknown): value is Section {
  return (SECTIONS as readonly unknown[]).includes(value);
}

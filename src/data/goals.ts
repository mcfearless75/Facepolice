export type Goal = {
  slug: string;
  name: string;
  strapline: string;
  description: string;
};

export const goals: Goal[] = [
  {
    slug: 'refresh',
    name: 'Refresh',
    strapline: 'Restore volume, soften lines, look like you — just rested.',
    description:
      'For lost volume, early lines and a tired-looking face. Refresh combines dermal filler to restore lost structure with regenerative polynucleotide treatment to rebuild skin quality from within.',
  },
  {
    slug: 'refine',
    name: 'Refine',
    strapline: 'Texture, tone and clarity — the finishing details.',
    description:
      'For pores, texture, dehydration and stubborn small concerns. Refine layers skin boosters, micro-needling, LED therapy and targeted fat dissolving to sharpen the details filler and toxin can’t reach.',
  },
  {
    slug: 'relax',
    name: 'Relax',
    strapline: 'Soften expression lines without losing movement.',
    description:
      'For dynamic lines caused by muscle movement — frown lines, forehead lines and crow’s feet. Delivered only after a full prescriber consultation, since this is a prescription-only medicine.',
  },
  {
    slug: 'renew',
    name: 'Renew',
    strapline: 'Long-term collagen support for lasting structural change.',
    description:
      'For those wanting a gradual, natural rebuild rather than an instant fix. Renew uses long-lasting biostimulatory injectables to stimulate your own collagen and restore facial structure over time.',
  },
];

export const goalBySlug = (slug: string) => goals.find((g) => g.slug === slug);

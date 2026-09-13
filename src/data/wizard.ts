// Goal Finder — a short, non-clinical quiz that narrows a visitor's stated
// concerns down to one of the four goal categories in `goals.ts`, then hands
// off to a consultation. It never names a specific treatment as "needed" and
// never diagnoses — it's a content filter, not clinical advice. The actual
// plan is always confirmed at consultation (see result copy in GoalWizard.astro).

export type GoalSlug = 'refresh' | 'refine' | 'relax' | 'renew';

export type WizardOption = {
  label: string;
  scores: Partial<Record<GoalSlug, number>>;
};

export type WizardQuestion = {
  id: string;
  question: string;
  options: WizardOption[];
};

export const wizardQuestions: WizardQuestion[] = [
  {
    id: 'concern',
    question: "What's bothering you most right now?",
    options: [
      { label: 'Lost volume, hollows or a generally tired look', scores: { refresh: 2 } },
      { label: 'Lines that show when I frown, smile or raise my brows', scores: { relax: 2 } },
      { label: 'Uneven texture, tone, pores or dehydration', scores: { refine: 2 } },
      { label: 'I want to slow ageing down before it shows', scores: { renew: 2 } },
    ],
  },
  {
    id: 'area',
    question: "Where's your main focus?",
    options: [
      { label: 'Cheeks, lips or under-eyes', scores: { refresh: 1 } },
      { label: 'Forehead, frown lines or crow’s feet', scores: { relax: 1 } },
      { label: 'Skin quality overall — texture and glow', scores: { refine: 1 } },
      { label: 'Long-term facial structure and collagen', scores: { renew: 1 } },
    ],
  },
  {
    id: 'downtime',
    question: 'How much downtime can you allow?',
    options: [
      { label: 'None — I need to go straight back to normal life', scores: { relax: 1, refine: 1 } },
      { label: "A little bruising or swelling doesn't bother me", scores: { refresh: 1 } },
      { label: "I don't mind a short recovery for a longer-lasting result", scores: { renew: 1 } },
    ],
  },
  {
    id: 'timeline',
    question: "What's your timeline?",
    options: [
      { label: 'I have an event or occasion coming up', scores: { refresh: 1, relax: 1 } },
      { label: 'General, ongoing improvement', scores: { refine: 1 } },
      { label: "Long-term — I'm thinking about prevention", scores: { renew: 1 } },
    ],
  },
];

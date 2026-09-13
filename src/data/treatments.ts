export type Treatment = {
  slug: string;
  name: string;
  shortName: string;
  category: 'Injectables' | 'Regenerative' | 'Skin Quality' | 'Device-led';
  goals: string[];
  isPOM: boolean;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  howItWorks: string[];
  idealFor: string[];
  expect: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  heroImage?: { src: string; alt: string };
  badges?: { src: string; alt: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: 'anti-wrinkle-treatment',
    name: 'Anti-Wrinkle Treatment',
    shortName: 'Anti-Wrinkle',
    category: 'Injectables',
    goals: ['relax'],
    isPOM: true,
    summary: 'Prescription-only muscle-relaxing injections to soften expression lines on the forehead, frown and eye area.',
    metaTitle: 'Anti-Wrinkle Treatment in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'Prescriber-led anti-wrinkle treatment in Hoylake, Wirral. Consultation-first assessment with an Advanced Nurse Practitioner before any prescription-only medicine is considered.',
    answer:
      'Anti-wrinkle treatment is a prescription-only medicine injected into targeted facial muscles to temporarily reduce the movement that causes expression lines — commonly across the forehead, between the brows (frown lines) and around the eyes (crow’s feet).',
    howItWorks: [
      'A face-to-face consultation and medical history review with Jo, an Advanced Nurse Practitioner and independent prescriber.',
      'Because this is a prescription-only medicine, it can only be prescribed after a clinical assessment establishes it is appropriate and safe for you.',
      'Small, precise injections into the relevant muscle groups using a fine needle — the appointment itself typically takes 15–20 minutes.',
      'Effects begin to appear from day 3–5 and settle fully by around two weeks, lasting approximately 3–4 months.',
    ],
    idealFor: [
      'Dynamic lines that show when you frown, raise your brows or smile',
      'Softening deep-set expression lines before they become static',
      'A natural, movement-preserving result — never a frozen look',
    ],
    expect: [
      { label: 'Appointment time', value: '30 minutes, including assessment' },
      { label: 'Downtime', value: 'None — small chance of minor bruising' },
      { label: 'Results visible', value: '3–5 days, full effect at 2 weeks' },
      { label: 'Duration', value: 'Approximately 3–4 months' },
    ],
    faqs: [
      {
        q: 'Is anti-wrinkle treatment right for everyone?',
        a: 'No — it is a prescription-only medicine, so it is only ever prescribed after a full consultation confirms it is clinically appropriate. It is not suitable during pregnancy or breastfeeding, or for certain neuromuscular conditions.',
      },
      {
        q: 'Does it hurt?',
        a: 'Most clients describe it as a series of brief scratches. A fine needle and slow technique are used throughout to keep the appointment comfortable.',
      },
    ],
    heroImage: { src: '/images/site/hero-injection.jpg', alt: 'Jo administering an injectable treatment in clinic' },
  },
  {
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    shortName: 'Dermal Fillers',
    category: 'Injectables',
    goals: ['refresh'],
    isPOM: false,
    summary: 'Hyaluronic acid fillers to restore volume, soften folds and refine facial contours — lips, cheeks, chin, jawline and tear troughs.',
    metaTitle: 'Dermal Fillers in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'Assessment-led dermal filler treatment in Hoylake, Wirral with Advanced Nurse Practitioner Jo. Lips, cheeks, jawline, chin and tear troughs, using hyaluronic acid fillers.',
    answer:
      'Dermal fillers use hyaluronic acid — a substance naturally found in skin — to add volume, restore lost structure and smooth deep lines. They are used to enhance lips, cheeks, chin and jawline, and to soften nasolabial folds, marionette lines and tear troughs.',
    howItWorks: [
      'A detailed consultation to map facial proportions, discuss your goals and agree a conservative, natural-looking plan.',
      'Treatment using cannula or fine needle technique depending on the area, chosen for safety and comfort.',
      'Most areas take 30–45 minutes; results are visible immediately, with final settling over 2 weeks as any swelling resolves.',
      'A review is always offered to check symmetry and outcome.',
    ],
    idealFor: [
      'Volume loss in cheeks or temples',
      'Lip enhancement or lip lines',
      'Nasolabial folds, marionette lines and a softened jawline',
      'Tear trough hollowing and under-eye shadows',
    ],
    expect: [
      { label: 'Appointment time', value: '45–60 minutes' },
      { label: 'Downtime', value: 'Possible swelling or bruising for 3–7 days' },
      { label: 'Results visible', value: 'Immediate, final result at 2 weeks' },
      { label: 'Duration', value: 'Typically 6–18 months, area dependent' },
    ],
    faqs: [
      {
        q: 'Will filler look obvious?',
        a: 'The aim is always a natural, refreshed result rather than an overfilled look. Jo works conservatively and reviews outcomes before adding further product.',
      },
      {
        q: 'What is dermal filler made from?',
        a: 'Hyaluronic acid — a sugar molecule that occurs naturally in skin and holds water, giving structure and hydration. It is fully dissolvable if ever needed.',
      },
    ],
    heroImage: { src: '/images/site/hero-injection.jpg', alt: 'Jo administering an injectable treatment in clinic' },
  },
  {
    slug: 'polynucleotides',
    name: 'Polynucleotides',
    shortName: 'Polynucleotides',
    category: 'Regenerative',
    goals: ['refresh', 'renew'],
    isPOM: false,
    summary: 'Regenerative injectable treatment that stimulates the skin’s own repair process to improve texture, elasticity and hydration from within.',
    metaTitle: 'Polynucleotide Treatment in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'Polynucleotide skin regeneration in Hoylake, Wirral. A cutting-edge, non-volumising treatment that stimulates collagen and repairs skin quality, delivered by an Advanced Nurse Practitioner.',
    answer:
      'Polynucleotides are purified DNA fragments, most commonly derived from salmon, injected into the skin to trigger its natural healing and regeneration pathways. Unlike dermal filler, they do not add volume — they improve the quality, elasticity and hydration of the skin itself.',
    howItWorks: [
      'A skin assessment to confirm polynucleotides are the right regenerative option for your concerns.',
      'A series of fine-needle injections across the treatment area — commonly under the eyes, cheeks, neck or décolletage.',
      'A course of 2–4 sessions, spaced 2–4 weeks apart, is typically recommended for full regenerative benefit.',
      'Results build progressively as collagen production increases over the following weeks.',
    ],
    idealFor: [
      'Under-eye quality and fine lines, without adding volume',
      'Crepey or thinning skin on the neck and décolletage',
      'Dull, dehydrated or tired-looking skin',
      'Those wanting a regenerative alternative or complement to filler',
    ],
    expect: [
      { label: 'Appointment time', value: '30–45 minutes' },
      { label: 'Downtime', value: 'Mild swelling or small bumps for 24–48 hours' },
      { label: 'Results visible', value: 'Progressive from 2–3 weeks, building over a course' },
      { label: 'Duration', value: 'Benefits typically maintained 6+ months after a course' },
    ],
    faqs: [
      {
        q: 'How is this different from a skin booster?',
        a: 'Skin boosters hydrate using hyaluronic acid. Polynucleotides work differently — they stimulate the skin’s own repair mechanisms to rebuild collagen and elasticity, which is why many clients use both as part of a wider skin quality plan.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'Most concerns respond well to a course of 2–4 sessions. This is agreed and tailored at your consultation based on your skin and goals.',
      },
    ],
    heroImage: { src: '/images/site/hero-injection.jpg', alt: 'Jo administering an injectable treatment in clinic' },
  },
  {
    slug: 'skin-boosters',
    name: 'Skin Boosters',
    shortName: 'Skin Boosters',
    category: 'Skin Quality',
    goals: ['refine'],
    isPOM: false,
    summary: 'Micro-injections of hyaluronic acid that hydrate skin from within, improving tone, elasticity and radiance.',
    metaTitle: 'Skin Boosters in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'Hydrating skin booster treatment in Hoylake, Wirral. Fine-needle or cannula delivered hyaluronic acid boosters to improve tone, hydration and radiance.',
    answer:
      'Skin boosters deliver small amounts of hyaluronic acid evenly across the skin using a fine needle or cannula. Rather than adding volume in one spot, they hydrate the skin broadly — improving tone, bounce and radiance over a course of treatments.',
    howItWorks: [
      'A skin assessment considering hydration, texture and fine lines.',
      'Multiple micro-injections spread evenly across the treatment area — commonly full face, neck or hands.',
      'A course of 2–3 sessions, 3–4 weeks apart, is usually recommended, with maintenance every few months.',
    ],
    idealFor: [
      'Dry, dehydrated or crepey skin texture',
      'Fine lines that filler alone won’t address',
      'Preventative skin quality maintenance',
    ],
    expect: [
      { label: 'Appointment time', value: '30–40 minutes' },
      { label: 'Downtime', value: 'Small bumps settle within 24–48 hours' },
      { label: 'Results visible', value: 'Building from 1–2 weeks, best after a course' },
      { label: 'Duration', value: '3–6 months, longer with a maintenance plan' },
    ],
    faqs: [
      {
        q: 'Can skin boosters be combined with other treatments?',
        a: 'Yes — skin boosters are often paired with polynucleotides or LED therapy as part of a wider skin quality plan, agreed at consultation.',
      },
    ],
    heroImage: { src: '/images/site/hero-injection.jpg', alt: 'Jo administering an injectable treatment in clinic' },
  },
  {
    slug: 'biostimulators',
    name: 'Biostimulators',
    shortName: 'Biostimulators',
    category: 'Regenerative',
    goals: ['renew'],
    isPOM: false,
    summary: 'Long-lasting collagen-stimulating injectables that gradually restore facial volume and structural quality over time.',
    metaTitle: 'Biostimulators in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'Collagen-stimulating biostimulator treatment in Hoylake, Wirral. A gradual, natural approach to restoring facial volume and structure.',
    answer:
      'Biostimulators are injectable treatments that work with the body to stimulate its own collagen production over time, gradually restoring volume, density and structural support rather than filling instantly.',
    howItWorks: [
      'A structural facial assessment to identify areas of collagen and volume loss.',
      'Treatment is injected into deeper tissue layers, followed by massage to ensure even distribution.',
      'A course of 2–3 sessions is typically spaced 4–6 weeks apart, with results building gradually over 2–3 months.',
    ],
    idealFor: [
      'Overall facial volume loss and skin thinning',
      'Those wanting a gradual, natural-looking improvement',
      'Longer-term collagen support rather than an instant fix',
    ],
    expect: [
      { label: 'Appointment time', value: '45 minutes' },
      { label: 'Downtime', value: 'Mild swelling possible for a few days' },
      { label: 'Results visible', value: 'Gradual, building over 8–12 weeks' },
      { label: 'Duration', value: 'Up to 2 years, treatment dependent' },
    ],
    faqs: [
      {
        q: 'Why choose a biostimulator over filler?',
        a: 'Biostimulators work with your own collagen for a gradual, longer-lasting improvement in facial structure, rather than an immediate volumising effect. Which is right for you is discussed at consultation.',
      },
    ],
    heroImage: { src: '/images/site/hero-injection.jpg', alt: 'Jo administering an injectable treatment in clinic' },
  },
  {
    slug: 'fat-dissolving',
    name: 'Fat Dissolving Injections',
    shortName: 'Fat Dissolving',
    category: 'Injectables',
    goals: ['refine'],
    isPOM: false,
    summary: 'Injectable treatment used to target small, stubborn pockets of fat such as under the chin.',
    metaTitle: 'Fat Dissolving Injections in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'Fat dissolving treatment in Hoylake, Wirral for stubborn localised fat, most commonly under the chin. Assessment-led approach with an Advanced Nurse Practitioner.',
    answer:
      'Fat dissolving injections use a solution that breaks down fat cell membranes in a targeted area, most commonly under the chin, which the body then naturally clears over the following weeks.',
    howItWorks: [
      'An assessment to confirm the area is suitable and that fat — rather than skin laxity — is the main concern.',
      'A series of small injections directly into the fat pocket.',
      'A course of 2–4 sessions, spaced 4–6 weeks apart, is typically needed for full results.',
    ],
    idealFor: [
      'Stubborn submental (under-chin) fullness',
      'Small, localised fat pockets resistant to diet and exercise',
    ],
    expect: [
      { label: 'Appointment time', value: '30 minutes' },
      { label: 'Downtime', value: 'Swelling and tenderness for up to a week' },
      { label: 'Results visible', value: 'Gradual over 4–6 weeks per session' },
      { label: 'Duration', value: 'Permanent fat cell reduction in the treated area' },
    ],
    faqs: [
      {
        q: 'Is it painful?',
        a: 'The area is usually numbed first. Swelling and a tight, tender sensation for several days afterwards is normal and expected.',
      },
    ],
    heroImage: { src: '/images/site/hero-injection.jpg', alt: 'Jo administering an injectable treatment in clinic' },
  },
  {
    slug: 'led-therapy',
    name: 'LED Light Therapy',
    shortName: 'LED Therapy',
    category: 'Device-led',
    goals: ['refine'],
    isPOM: false,
    summary: 'Non-invasive light therapy that calms inflammation, supports healing and improves overall skin clarity.',
    metaTitle: 'LED Light Therapy in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'LED light therapy in Hoylake, Wirral to support skin healing, reduce inflammation and improve clarity — used standalone or after injectable treatment.',
    answer:
      'LED light therapy uses specific wavelengths of light to stimulate skin cells — red light supports collagen and healing, while blue light targets acne-causing bacteria. It is entirely non-invasive with no downtime.',
    howItWorks: [
      'A short consultation to select the right light wavelength for your skin concern.',
      'Relax under the LED panel for 20 minutes while the light works at a cellular level.',
      'Often used as a course, or as an add-on the same day as injectable treatment to support healing.',
    ],
    idealFor: [
      'Post-treatment recovery support',
      'Active breakouts or inflammation',
      'General skin clarity and radiance maintenance',
    ],
    expect: [
      { label: 'Appointment time', value: '20 minutes' },
      { label: 'Downtime', value: 'None' },
      { label: 'Results visible', value: 'Cumulative over a course' },
      { label: 'Duration', value: 'Best maintained with regular sessions' },
    ],
    faqs: [
      {
        q: 'Can LED be added to another appointment?',
        a: 'Yes — it is commonly added on the same day as injectable or regenerative treatments to support the skin’s healing response.',
      },
    ],
    heroImage: { src: '/images/site/led-therapy.jpg', alt: 'Client under the Dermalux Flex MD LED panel at Maison Aurelia' },
    badges: [{ src: '/images/dermalux.png', alt: 'Dermalux — Next Generation SkinTec' }],
  },
  {
    slug: 'micro-needling',
    name: 'Micro-Needling',
    shortName: 'Micro-Needling',
    category: 'Device-led',
    goals: ['refine'],
    isPOM: false,
    summary: 'Collagen induction therapy using fine needles to improve texture, scarring, pores and fine lines.',
    metaTitle: 'Micro-Needling & SkinPen in Hoylake, Wirral | Maison Aurelia',
    metaDescription:
      'Medical-grade micro-needling in Hoylake, Wirral to improve texture, scarring and fine lines by stimulating your skin’s own collagen production.',
    answer:
      'Micro-needling uses a device with fine, sterile needles to create controlled micro-injuries in the skin, triggering the body’s natural collagen and elastin production to improve texture, scarring and fine lines over time.',
    howItWorks: [
      'A skin assessment to check suitability and identify the right depth setting for your concerns.',
      'The device is passed evenly across the treatment area, often combined with a serum suited to your skin.',
      'A course of 3–6 sessions, 4 weeks apart, is generally recommended for visible results.',
    ],
    idealFor: [
      'Acne scarring and enlarged pores',
      'Fine lines and uneven texture',
      'Overall skin rejuvenation as part of a wider plan',
    ],
    expect: [
      { label: 'Appointment time', value: '45 minutes' },
      { label: 'Downtime', value: 'Redness for 24–48 hours, similar to mild sunburn' },
      { label: 'Results visible', value: 'Progressive over a course of sessions' },
      { label: 'Duration', value: 'Long-lasting with periodic maintenance' },
    ],
    faqs: [
      {
        q: 'Is micro-needling suitable for all skin types?',
        a: 'It suits most skin types and tones, though it is assessed individually — active infections, certain skin conditions or recent isotretinoin use may mean postponing treatment.',
      },
    ],
    badges: [
      { src: '/images/logo-skinpen-ca.jpg', alt: 'SkinPen by Crown Aesthetics' },
      { src: '/images/logo-crown-aesthetics-horizontal-1000px.png', alt: 'Crown Aesthetics — Skin Science for Life' },
    ],
  },
];

export const treatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);

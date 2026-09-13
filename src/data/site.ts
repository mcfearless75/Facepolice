// NOTE: rebrand from "Face Crease Police" to "Maison Aurelia" is applied to
// the website layer only. Domain, email and social handles below are the
// clinic's existing real, working ones — changing them to invented
// "maisonaurelia.com"-style placeholders would break live links and
// canonical/OG URLs. Update these once the real-world rebrand (new domain,
// socials, insurance/registration under the new trading name) is settled —
// see maison-aurelia-brand-kit.md §8 for the open items.

export const site = {
  name: 'Maison Aurelia',
  legalName: 'JOUP Clinical Services Limited',
  tagline: 'Medically-led facial aesthetics in Hoylake, Wirral',
  description:
    'Maison Aurelia is a medically-led aesthetics clinic in Hoylake, Wirral, run by an Advanced Nurse Practitioner. Dermal fillers, skin boosters, polynucleotides, biostimulators, anti-wrinkle treatment, fat dissolving and LED therapy — assessed and delivered by a prescriber, not a beautician.',
  url: 'https://facecreasepolice.com',
  email: 'facecreasepolice@gmail.com',
  addressLocality: 'Hoylake',
  addressRegion: 'Wirral, Merseyside',
  postalCode: '',
  addressCountry: 'GB',
  areaServed: ['Hoylake', 'West Kirby', 'Moreton', 'Wirral', 'Birkenhead', 'Wallasey', 'Chester', 'Liverpool'],
  practitioner: {
    name: 'Jo',
    role: 'Advanced Nurse Practitioner & Independent Prescriber',
    credentials:
      'Masters-level trained Advanced Nurse Practitioner with a non-medical prescribing qualification, registered with the Nursing & Midwifery Council.',
  },
  social: {
    facebook: 'https://www.facebook.com/face.crease.police',
    tiktok: 'https://www.tiktok.com/@face.crease.polic',
    instagram: '',
  },
  booking: {
    email: 'mailto:facecreasepolice@gmail.com?subject=Consultation%20enquiry',
  },
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: 'Treatments', href: '/treatments/' },
  { label: 'Treatments by Goal', href: '/goals/' },
  { label: 'About Jo', href: '/about/' },
  { label: 'Results', href: '/results/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: '/contact/' },
];

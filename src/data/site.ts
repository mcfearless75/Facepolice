export const site = {
  name: 'Face Crease Police',
  legalName: 'JOUP Clinical Services Limited',
  tagline: 'Medically-led facial aesthetics in Hoylake, Wirral',
  description:
    'Face Crease Police is a medically-led aesthetics clinic in Hoylake, Wirral, run by an Advanced Nurse Practitioner. Dermal fillers, skin boosters, polynucleotides, biostimulators, anti-wrinkle treatment, fat dissolving and LED therapy — assessed and delivered by a prescriber, not a beautician.',
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

import { site } from '@/data/site';

export const medicalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  url: site.url,
  email: site.email,
  image: `${site.url}/og-image.jpg`,
  priceRange: '££',
  medicalSpecialty: 'Aesthetic Medicine',
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.addressCountry,
  },
  areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  sameAs: [site.social.facebook, site.social.tiktok].filter(Boolean),
  employee: {
    '@type': 'Person',
    name: site.practitioner.name,
    jobTitle: site.practitioner.role,
    description: site.practitioner.credentials,
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: new URL(item.path, site.url).toString(),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const medicalProcedureSchema = (opts: {
  name: string;
  description: string;
  path: string;
  isPOM: boolean;
}) => ({
  '@context': 'https://schema.org',
  '@type': opts.isPOM ? 'MedicalTherapy' : 'MedicalProcedure',
  name: opts.name,
  description: opts.description,
  url: new URL(opts.path, site.url).toString(),
  provider: { '@id': `${site.url}/#business` },
  ...(opts.isPOM ? { prescriptionStatus: 'PrescriptionOnly' } : {}),
});

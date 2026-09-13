export type ResultImage = {
  src: string;
  alt: string;
  category: string;
};

// Genuine client before/after images, carried over from the clinic's existing
// published marketing material (facecreasepolice.com). Already public with
// client consent obtained by the clinic prior to original publication.
export const resultImages: ResultImage[] = [
  { src: '/images/site/results-1.jpg', alt: 'Lip filler before and after result at Face Crease Police', category: 'Dermal Fillers' },
  { src: '/images/site/results-2.jpg', alt: 'Nasolabial fold softening before and after result', category: 'Dermal Fillers' },
  { src: '/images/site/results-3.jpg', alt: 'Skin quality and radiance before and after result', category: 'Skin Boosters' },
  { src: '/images/site/results-4.jpg', alt: 'Facial contour before and after result', category: 'Dermal Fillers' },
];

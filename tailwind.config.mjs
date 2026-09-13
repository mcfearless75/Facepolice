import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Maison Aurelia — art deco jewel tones.
        emerald: {
          950: '#082A20',
          900: '#0B3D2E',
          800: '#134A38',
        },
        ivory: {
          50: '#F8F4E9',
          100: '#EDE6D3',
          200: '#E2D6B8',
        },
        aurelia: {
          400: '#C9A227',
          500: '#D4AF37',
          600: '#9C7A1C',
        },
        jade: {
          400: '#5FA383',
          500: '#3F8567',
        },
      },
      fontFamily: {
        // Logotype only — ultra-thin geometric deco revival, wordmark use.
        logotype: ['"Poiret One"', 'cursive'],
        // Headings — roman/engraved deco elegance, real weight for H1-H3.
        display: ['"Cinzel"', 'ui-serif', 'Georgia', 'serif'],
        // Body/UI — Futura-inspired geometric sans, period-accurate.
        sans: ['"Jost"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(8, 42, 32, 0.4)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [typography],
};

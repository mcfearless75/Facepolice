import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep petrol-teal — pulled off the generic "luxury navy" default and
        // tied to the real brand mark's blue-green instead.
        ink: {
          950: '#071a1c',
          900: '#0d2b2e',
          800: '#153e42',
        },
        porcelain: {
          50: '#fbf9f6',
          100: '#f5f1ea',
          200: '#ece4d8',
        },
        // Warm copper accent — replaces the very-common pale "template gold".
        gold: {
          400: '#c9793d',
          500: '#b3632c',
          600: '#8f4d23',
        },
        // Sage/green, echoing the real logo's wing gradient — used sparingly.
        rose: {
          400: '#5fa383',
          500: '#3f8567',
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'ui-serif', 'Didot', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(7, 26, 28, 0.35)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [typography],
};

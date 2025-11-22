// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    // This tells Tailwind where to look for your class names
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          // Brand Colors
          'primary': '#7C3AED', // deep-amethyst
          'primary-dark': '#5B21B6',
          'primary-light': '#BC9AF5', // amethyst-soft
          'primary-bg': '#F2EBFE', // amethyst-bg
          
          // Secondary Colors
          'secondary': '#14B8A6', // brand-teal
          'secondary-dark': '#0D9488',
          'secondary-light': '#5EEAD4',
          
          // Neutral Colors
          'ghost-white': '#F8F9FA',
          'charcoal-text': '#212529',
          'light-gray': '#DEE2E6',
          
          // Status Colors
          'success-green': '#10B981',
          'warning-yellow': '#F59E0B',
          'error-red': '#EF4444',
          
          // Legacy colors for backward compatibility
          'sky-blue': '#6FBDF0',
          'brand-teal': '#14B8A6',
          'light-gray-border': '#DEE2E6',
        },
      },
    },
    plugins: [],
  };

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      // Add any other properties you want to apply in dark mode
    },
  },
};

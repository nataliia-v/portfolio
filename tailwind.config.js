/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      'pastel-pink': {
        light: '#FFEBEF',
        DEFAULT: '#FFD1DC',
        dark: '#FF7092'
      },
      'light-blue': '#91bbc5'
    },
    boxShadow: {
      card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
    },
    extend: {}
  },
  plugins: []
};

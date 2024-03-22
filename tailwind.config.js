/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      'pink-pastel': {
        light: '#FFEBEF',
        DEFAULT: '#FFD1DC',
        dark: '#FF7092'
      },
      'blue-nepal': '#91bbc5',
      'blue-pattens': '#D2E4FF',
      gray: {
        200: '#D5DAE1'
      }
    },
    boxShadow: {
      card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
    },
    extend: {}
  },
  plugins: []
};

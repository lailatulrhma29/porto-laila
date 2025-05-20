// tailwind.config.js
export default {
  darkMode: 'class', // wajib class mode
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.outline-text': {
          '-webkit-text-stroke': '1px black',
          'color': 'transparent',
          'font-weight': '700',
        },
        '.dark\\:outline-text': {
          '-webkit-text-stroke': '1px white',
          'color': 'transparent',
          'font-weight': '700',
        },
      }, ['responsive', 'dark']);
    },
  ],
};
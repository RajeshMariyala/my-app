module.exports = {
  theme: {
    extend: {
      fontFamily: {
         inter: ['var(--font-inter)', 'sans-serif'],
        robotoCondensed: ['var(--font-roboto-condensed)', 'sans-serif'],
      },
    },
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};

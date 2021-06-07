const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    gunmetal: '#202c39',
    charcoal: '#283845',
    sage: '#b8b08d',
    deepchampagne: '#f2d492',
    atomictangerine: '#f29559',
    internationalorangegoldengatebridge: '#c44536'
  },
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  "theme": {
    "colors": colors,
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}

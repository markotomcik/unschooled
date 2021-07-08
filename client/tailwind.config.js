module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      foreground: '#2C363F',
      background: '#47A8BD',
      text: {
        DEFAULT: '#D6DBD2',
        primary: '#2C363F',
        secondary: '#D6DBD2',
        cleared: '#EF4444'
      },
      input: {
        dark: '#3E885B',
        light: '#999',
        active: '#888',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}

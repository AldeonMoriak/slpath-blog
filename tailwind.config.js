const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      wyekan: ['WYekan'],
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

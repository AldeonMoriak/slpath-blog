const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      wyekan: ['WYekan', 'Vazir', 'Roboto'],
      vazir: ['Vazir', 'WYekan', 'Roboto'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              'text-decoration': 'none',
              color: theme('colors.purple.500'),
              '&:hover': {
                color: theme('colors.purple.700'),
                'text-decoration': 'underline',
              },
            },
          },
        },
      }),
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
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}

const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
const lineClamp = require('windicss/plugin/line-clamp')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  shortcuts: {
    'header-item':
      'px-4 py-2 mt-2 text-sm md:text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-purple-900 focus:text-purple-900 hover:bg-purple-200 focus:bg-purple-200 focus:outline-none focus:shadow-outline,',
    'active-header-item': 'text-lg bg-purple-200 text-purple-900',
  },
  theme: {
    fontFamily: {
      wyekan: ['WYekan', 'Vazir', 'Roboto'],
      vazir: ['Vazir', 'WYekan', 'Roboto'],
    },
    extend: {
      transitionDuration: {
        4000: '4000ms',
      },
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
  // variants: {
  //   extend: {
  //     backgroundColor: ['active'],
  //     boxShadow: ['active'],
  //   },
  // },
  plugins: [lineClamp, typography({ rtl: true })],
}

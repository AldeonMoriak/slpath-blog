const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
const lineClamp = require('windicss/plugin/line-clamp')
const animations = require('@windicss/animations')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  shortcuts: {
    'header-item':
      'px-4 py-2 mt-2 text-sm md:text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-purple-900 focus:text-purple-900 hover:bg-purple-200 focus:bg-purple-200 focus:outline-none focus:shadow-outline,',
    'active-header-item':
      'text-lg bg-purple-200 text-purple-900 transition-all duration-500 ease-in-out',
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
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.5, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        float: 'float 1s ease-in-out infinite',
      },
    },
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ['active'],
  //     boxShadow: ['active'],
  //   },
  // },
  plugins: [lineClamp, typography({ rtl: true }), animations],
}

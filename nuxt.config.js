export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'تانی آنلاین - TaniOnline',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ارائه خدمات گفتار درمانی به صورت آنلاین',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/vazir/vazir.css',
    '~/assets/css/ckeditor.css',
    '~/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-jalaali-moment',
    '~/plugins/scroll-to',
    '~/plugins/axios.js',
    '~/plugins/viewer.js',
    { src: '~/plugins/lottie-player.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://slpath-backedn.herokuapp.com',
    // baseURL: 'http://192.168.43.199:4000',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'تانی',
      lang: 'fa',
      useWebmanifestExtension: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // server: {
  //   host: '0.0.0.0',
  // },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
}

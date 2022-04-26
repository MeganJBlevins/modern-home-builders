import { apiEndpoint } from './sm.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Modern Home Builders | Hambey Construction',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'js/vendor/jquery-1.12.4.min.js',
        body: true,
      },
      {
        src: 'js/vendor/modernizr-3.7.1.min.js',
        body: true,
      },
      {
        src: 'js/popper.min.js',
        body: true,
      },
      {
        src: 'js/bootstrap.min.js',
        body: true,
      },
      {
        src: 'js/slick.min.js',
        body: true,
      },
      {
        src: 'js/jquery.magnific-popup.min.js',
        body: true,
      },
      {
        src: 'js/imagesloaded.pkgd.min.js',
        body: true,
      },
      {
        src: 'js/isotope.pkgd.min.js',
        body: true,
      },
      {
        src: 'js/jquery.easing.min.js',
        body: true,
      },
      {
        src: 'js/scrolling-nav.js',
        body: true,
      },
      {
        src: 'js/main.js',
        body: true,
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/icons.css',
    '~/assets/css/default.css',
    '~/assets/css/style.css',
    
    // SCSS file in the project
  ],
  prismic: {
    endpoint: apiEndpoint,
    modern: true
    /* see configuration for more */
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/prismic'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["@prismicio/vue"],
  }
}

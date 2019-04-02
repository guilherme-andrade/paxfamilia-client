import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/stylesheets/application.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-fontawesome',
    {
      src: '~plugins/vue-highcharts.js',
      ssr: false
    },
    {
      src: '~plugins/vuedraggable.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/Qonfucius/nuxt-fontawesome
    '@nuxtjs/auth'
  ],

  router: {
    middleware: ['auth']
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },


  proxy: {
    '/api/': 'http://localhost:3000/',
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/users/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/api/users/logout', method: 'post' },
          user: { url: '/api/users/load', method: 'get' }
        }
      },
      tokenRequired: true,
      tokenType: 'Bearer'
    }
  },
  // env: {
  //   DEV_API: 'http://localhost:3000',
  //   PROD_API: '/proxy'
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

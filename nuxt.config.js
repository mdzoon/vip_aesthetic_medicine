export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'VIP Aesthetic Medicine' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Aesthetic medicine, health treatment and dermatology services in Bolton' || process.env.npm_package_description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/vipaesmed-favicon.ico' },
      { rel:'stylesheet', href:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', integrity:'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossorigin:'anonymous' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
    script: [
      { src:'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity:'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin:'anonymous' },
      { src:'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', integrity:'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q', crossorigin:'anonymous' },
      { src:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', integrity:'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl', crossorigin:'anonymous' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'assets/fonts/fonts.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    ['nuxt-cookie-control', {
        css: true,
        controlButton: true,
        blockIframe: true,
        barPosition: 'bottom-left',
        //default colours
        colors: {
          barTextColor: '#fff',
          modalOverlay: '#000',
          barBackground: '#000',
          barButtonColor: '#000',
          modalTextColor: '#000',
          modalBackground: '#fff',
          modalOverlayOpacity: 0.8,
          modalButtonColor: '#fff',
          modalUnsavedColor: '#fff',
          barButtonHoverColor: '#fff',
          barButtonBackground: '#fff',
          modalButtonHoverColor: '#fff',
          modalButtonBackground: '#000',
          controlButtonIconColor: '#000',
          controlButtonBackground: '#fff',
          barButtonHoverBackground: '#333',
          checkboxActiveBackground: '#000',
          checkboxInactiveBackground: '#000',
          modalButtonHoverBackground: '#333',
          checkboxDisabledBackground: '#ddd',
          controlButtonIconHoverColor: '#fff',
          controlButtonHoverBackground: '#000',
          checkboxActiveCircleBackground: '#fff',
          checkboxInactiveCircleBackground: '#fff',
          checkboxDisabledCircleBackground: '#fff',
        },
        //default texts
        text: {
          barTitle: 'Cookies',
          barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
          acceptAll: 'Accept all',
          declineAll: 'Delete all',
          manageCookies: 'Manage cookies',
          unsaved: 'You have unsaved settings',
          close: 'Close',
          save: 'Save',
          necessary: 'Necessary cookies',
          optional: 'Optional cookies',
          functional: 'Functional cookies',
          blockedIframe: 'To see this, please enable functional cookies',
          here: 'here'
        }
    }]
  ],
  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_burger.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    fallback: true
  }
}

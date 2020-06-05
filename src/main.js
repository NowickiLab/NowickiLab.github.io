// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import '@/assets/scss/main.scss'
import axios from 'axios'
import Vuex from 'vuex'

// import 'prismjs/themes/prism.css'

axios.defaults.baseURL = process.env.GRIDSOME_API_URL

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      yourName: window.localStorage.getItem('yourName') || ''
    }
  })

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'description',
    content: 'In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plants and their pathogens'
  })

  head.meta.push({
    name: 'author',
    content: 'Marcin Nowicki'
  })

  head.meta.push({
    name: 'theme-color',
    content: '#6fb228'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png'
  })

  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png'
  })

  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png'
  })

  head.link.push({
    rel: 'manifest',
    href: '/favicon/site.webmanifest'
  })

  head.link.push({
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#5bbad5'
  })

  head.link.push({
    rel: 'shortcut icon',
    href: '/favicon/favicon.ico'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap'
  })
}



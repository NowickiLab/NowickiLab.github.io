// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import '@/assets/scss/main.scss'
// import 'prismjs/themes/prism.css'

export default function (Vue, { router, head, isClient }) {
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
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap'
  })
}



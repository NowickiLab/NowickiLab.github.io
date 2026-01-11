const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-music-challenge-day-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\music-challenge\\day.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-people-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\People.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-person-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\templates\\Person.vue")
const c5 = () => import(/* webpackChunkName: "page--src-templates-project-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\templates\\Project.vue")
const c6 = () => import(/* webpackChunkName: "page--src-templates-publication-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\templates\\Publication.vue")
const c7 = () => import(/* webpackChunkName: "page--src-templates-news-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\templates\\News.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-projects-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\Projects.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-publications-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\Publications.vue")
const c10 = () => import(/* webpackChunkName: "page--src-pages-music-challenge-index-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\music-challenge\\Index.vue")
const c11 = () => import(/* webpackChunkName: "page--src-pages-news-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\News.vue")
const c12 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\404.vue")
const c13 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\ja03\\NowickiLab.github.io\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/music-challenge/day/",
    component: c2
  },
  {
    path: "/people/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/people/:slug/",
    component: c4
  },
  {
    path: "/projects/:slug/",
    component: c5
  },
  {
    path: "/publications/:slug/",
    component: c6
  },
  {
    path: "/news/:slug/",
    component: c7
  },
  {
    path: "/projects/",
    component: c8
  },
  {
    path: "/publications/",
    component: c9
  },
  {
    path: "/music-challenge/",
    component: c10
  },
  {
    path: "/news/",
    component: c11
  },
  {
    name: "404",
    path: "/404/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c12
  }
]

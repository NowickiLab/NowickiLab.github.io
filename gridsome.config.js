
// gridsome.config.js

const purgecssImport = require('@fullhuman/postcss-purgecss')
const PurgeCSS = purgecssImport.default || purgecssImport // ES module / CJS safe
const path = require('path')

const SITE_URL = 'https://nowickilab.science/'
const GA_ID = 'UA-158880192-1'

const plugins = [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/news/**/*.md',
      typeName: 'News',
      route: '/news/:id', // guaranteed-unique; avoids path collisions
      refs: { tags: { typeName: 'Tag', create: true } }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/people/**/*.md',
      typeName: 'Person',
      route: '/people/:id',
      refs: { tags: { typeName: 'Tag', create: false } }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/publications/**/*.md',
      typeName: 'Publication',
      route: '/publications/:id',
      refs: { tags: { typeName: 'Tag', create: false } }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/projects/**/*.md',
      typeName: 'Project',
      route: '/projects/:id',
      refs: { tags: { typeName: 'Tag', create: false } }
    }
  },
  {
    use: 'gridsome-plugin-feed',
    options: {
      contentTypes: ['News', 'Project', 'Publication', 'Person'],
      feedOptions: {
        title: 'Nowicki Lab',
        description:
          'In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plants and their pathogens'
      },
      rss: { enabled: true, output: '/rss.xml' },
      atom: { enabled: false, output: '/feed.atom' },
      json: { enabled: false, output: '/feed.json' },
      htmlFields: ['description', 'content'],
      enforceTrailingSlashes: true,
      filterNodes: node => true,
      nodeToFeedItem: node => ({
        title: node.title,
        date: new Date(node.date || node.startDate || Date.now()),
        description: String(node.summary || '').replace(/(<([^>]+)>)/ig, '')
      })
    }
  },
  {
    use: '@gridsome/plugin-sitemap',
    options: { cacheTime: 600000 }
  }
]

// PostCSS plugins (add PurgeCSS in production)
const postcssPlugins = []

if (process.env.NODE_ENV === 'production') {
  // Safer PurgeCSS: restrict to actual source files under ./src to avoid EISDIR on directories
  postcssPlugins.push(
    PurgeCSS({
      content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.ts',
        './src/**/*.html',
        './src/**/*.scss'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [
          // PrismJS
          /^token/, /^language-/, 'pre', 'code',
          // Router classes
          /^active$/, /^router-link-active$/, /^router-link-exact-active$/,
          // Tailwind v1.x utility patterns (adjust as needed)
          /^bg-/, /^text-/, /^font-/, /^leading-/, /^tracking-/,
          /^p-/, /^m-/, /^mt-/, /^mb-/, /^mx-/, /^my-/, /^pt-/, /^pb-/, /^pl-/, /^pr-/,
          /^w-/, /^h-/, /^grid-/, /^col-/, /^row-/, /^justify-/, /^items-/, /^content-/,
          /^flex-/, /^inline-/, /^block-/, /^hidden$/
        ]
      }
    })
  )

  // Google Analytics only in production
  plugins.push({ use: '@gridsome/plugin-google-analytics', options: { id: GA_ID } })
}

// Inject global SCSS resources
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/vars.scss'),
        path.resolve(__dirname, './src/assets/scss/mixins.scss')
      ]
    })
}

module.exports = {
  siteName: 'Nowicki Lab',
  siteDescription:
    'In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plant and their pathogen',
  siteUrl: SITE_URL,
  plugins,

  // Keep friendly templates; later you can switch sources to route '/type/:slug'
  templates: {
    Tag: '/tag/:id',
    News: '/news/:slug',
    Project: '/projects/:slug',
    Publication: '/publications/:slug',
    Person: '/people/:slug'
  },

  transformers: {
    remark: {
      plugins: [
        ['gridsome-plugin-remark-prismjs-all', { showLineNumbers: false, noInlineHighlight: true }]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },

  css: {
    loaderOptions: {
      // Dart Sass
      sass: { implementation: require('sass') },
      scss: { implementation: require('sass') },
      // PostCSS chain (includes PurgeCSS in production)
      postcss: { plugins: postcssPlugins }
    }
  },

  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },

  configureWebpack: {
    output: { chunkFilename: 'assets/js/[contenthash:10].js' }
  }
}

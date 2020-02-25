const purgecss = require('@fullhuman/postcss-purgecss')
const path = require('path')

const SITE_URL = 'https://nowickilab.science/'
const GA_ID = 'UA-158880192-1'

const plugins = [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/news/**/*.md',
      typeName: 'News',
      refs: {
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/people/**/*.md',
      typeName: 'Person',
      refs: {
        tags: {
          typeName: 'Tag',
          create: false
        }
      }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/publications/**/*.md',
      typeName: 'Publication',
      refs: {
        tags: {
          typeName: 'Tag',
          create: false
        }
      }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './database/projects/**/*.md',
      typeName: 'Project',
      refs: {
        tags: {
          typeName: 'Tag',
          create: false
        }
      }
    }
  },
  {
    use: 'gridsome-plugin-feed',
    options: {
      // Required: array of `GraphQL` type names you wish to include
      contentTypes: ['News', 'Project', 'Publication', 'Person'],
      // Optional: any properties you wish to set for `Feed()` constructor
      // See https://www.npmjs.com/package/feed#example for available properties
      feedOptions: {
        title: 'Nowicki Lab',
        description: 'In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plants and their pathogens'
      },
      // === All options after this point show their default values ===
      // Optional; opt into which feeds you wish to generate, and set their output path
      rss: {
        enabled: true,
        output: '/rss.xml'
      },
      atom: {
        enabled: false,
        output: '/feed.atom'
      },
      json: {
        enabled: false,
        output: '/feed.json'
      },
      // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
      // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
      // To disable this functionality, set to `null`.
      htmlFields: ['description', 'content'],
      // Optional: if you wish to enforce trailing slashes for site URLs
      enforceTrailingSlashes: true,
      // Optional: a method that accepts a node and returns true (include) or false (exclude)
      // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
      filterNodes: (node) => true,
      // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
      // See https://www.npmjs.com/package/feed#example for available properties
      // NOTE: `date` field MUST be a Javascript `Date` object
      nodeToFeedItem: (node) => ({
        title: node.title,
        date: node.date || node.startDate,
        description: node.summary.replace(/(<([^>]+)>)/ig, '')
      })
    }
  },
  {
    use: '@gridsome/plugin-sitemap',
    options: {
      cacheTime: 600000, // default
    }
  },
]

const postcssPlugins = []

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss())
  plugins.push({
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: GA_ID
    }
  })
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/vars.scss'),
        path.resolve(__dirname, './src/assets/scss/mixins.scss')
      ]
    })
}


module.exports = {
  siteName: 'NowickiLab',
  siteDescription: 'In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plant and their pathogen',
  siteUrl: SITE_URL,
  plugins,
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
        ['gridsome-plugin-remark-prismjs-all', {
          showLineNumbers: false,
          noInlineHighlight: true
        }]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}

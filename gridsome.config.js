const purgecss = require('@fullhuman/postcss-purgecss')
const path = require('path')

const SITE_URL = 'https://nowickilab.science/'

const postcssPlugins = []

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/vars.scss'),
        path.resolve(__dirname, './src/assets/scss/mixins.scss'),
      ],
    })
}


module.exports = {
  siteName: 'Nowicki Science',
  siteDescription: 'A simple portfolio theme for Gridsome powered by Tailwind CSS v1',
  siteUrl: SITE_URL,
  plugins: [
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
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'News',
        feedOptions: {
          title: 'Gridsome Portfolio Starter Blog',
          feed_url: `${SITE_URL}/rss.xml`,
          site_url: SITE_URL
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: `${SITE_URL}${node.path}`,
          author: 'Marcin Nowicki',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
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
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
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


// gridsome.config.js
module.exports = {
  siteName: 'Nowicki Lab',
  siteUrl: 'https://nowickilab.science/',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './database/news/**/*.md',
        typeName: 'News',
        // TEMP: :id avoids duplicate path collisions while we fix slugs/filenames
        route: '/news/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './database/people/**/*.md',
        typeName: 'Person',
        route: '/people/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './database/publications/**/*.md',
        typeName: 'Publication',
        route: '/publications/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './database/projects/**/*.md',
        typeName: 'Project',
        route: '/projects/:id'
      }
    }
  ]
}

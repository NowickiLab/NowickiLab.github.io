// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const path = require('path');
const pick = require('lodash.pick');
const { pathPrefix } = require('./gridsome.config')

module.exports = function (api, options) {
  api.loadSource(store => {
    /*
    Clean the pathPrefix
    ====================
    not used =>  '/'
    ''       =>  '/'
    '/'      =>  '/'
    '/path'  =>  '/path'
    'path'   =>  '/path'
    'path/'  =>  '/path'
    '/path/' =>  '/path'
    */
    const cleanedPathPrefix = `${pathPrefix ? ['', ...pathPrefix.split('/').filter(dir=>dir.length)].join('/') : ''}`

    /*
    Query
    =====
    <static-query>        <!-- or a page-query -->
    {
      metaData{
        pathPrefix
      }
    }
    </static-query>

    Requests for static files should look like this:
    ===============================================
    Using static-queries: axios( this.$static.metaData.pathPrefix + "/fileName" )
    Using page-queries,   axios( this.$page.metaData.pathPrefix   + "/fileName" )
    */
    store.addMetadata('pathPrefix', cleanedPathPrefix)
  })

  api.beforeBuild(() => {
    const pickValues = post => pick(post, ['title', 'path', 'summary'])

    api.loadSource(actions => {
      const posts = [
        ...actions.getCollection('News').collection.data.map(pickValues),
        ...actions.getCollection('Person').collection.data.map(pickValues),
        ...actions.getCollection('Publication').collection.data.map(pickValues),
        ...actions.getCollection('Project').collection.data.map(pickValues)
      ];

      const output = {
        dir: './static',
        name: 'search.json',
        ...options.output
      }

      const outputPath = path.resolve(process.cwd(), output.dir)
      const outputPathExists = fs.existsSync(outputPath)
      const fileName = output.name.endsWith('.json')
        ? output.name
        : `${output.name}.json`

      if (outputPathExists) {
        fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(posts))
      } else {
        fs.mkdirSync(outputPath)
        fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(posts))
      }
    });
  });
}

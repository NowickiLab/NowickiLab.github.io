
// gridsome.server.js
module.exports = function (api) {
  // Mutate webpack for both server & client builds
  api.chainWebpack((config, { isServer, isClient }) => {
    const js = config.module.rule('js')
    if (js) {
      // 1) Ensure exclude is valid (replace null/{} with a normal regex)
      try { js.exclude.clear() } catch (e) {}
      js.exclude.add(/node_modules/)

      // 2) Remove cache-loader from JS rule to prevent odd merged rule states
      if (js.uses && js.uses.has && js.uses.has('cache-loader')) {
        js.uses.delete('cache-loader')
      }

      // 3) (Safety) Normalize babel-loader options to plain object
      if (js.uses && js.uses.has && js.uses.has('babel-loader')) {
        js.use('babel-loader').tap(opts => {
          return (opts && typeof opts === 'object') ? opts : {}
        })
      }

      // 4) Ensure the test explicitly matches JS
      js.test(/\.m?js$/)
    }
  })
}

export default {
  mounted () {
    if (window.DISQUS) {
      const url = window.location.origin + window.location.pathname

      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = url
          this.page.url = url
        }
      })
    }
  }
}

<template>
  <div id="app">
    <TheNav/>
    <main class="main">
      <router-view />
    </main>
    <TheFooter/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheNav from '@/components/TheNav'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheNav,
    TheFooter
  },
  beforeCreate () {
    // DISQUS
    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://nowickilab.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
}
</script>

<style lang="scss" scoped>
  .main {
    max-width: $max-width;
    min-height: calc(100vh - 262px);
    margin: 0 auto;
    padding: 0 10px;
  }
</style>
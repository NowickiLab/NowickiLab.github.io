<template>
  <div id="app">
    <TheNav/>
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
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
  beforeMount () {
    this.$router.options.scrollBehavior = (to, from, savedPosition) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(savedPosition || { x: 0, y: 0 })
        }, 150)
      })
    }

    // DISQUS
    if (process.env.NODE_ENV === 'production') {
      (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://nowickilab.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
  },
  watch: {
    '$store.state.yourName' (name) {
      window.localStorage.setItem('yourName', name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    max-width: $max-width;
    min-height: calc(100vh - 224px);
    margin: 0 auto;
    padding: 0 15px;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.15s;
    transition-property: height, opacity;
    transition-timing-function: ease;
  }
</style>
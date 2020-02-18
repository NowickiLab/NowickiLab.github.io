<template>
  <div>
    <TheNav/>
    <main class="main">
      <slot/>
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
  }
}
</script>

<style lang="scss" scoped>
  .main {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 10px;
  }
</style>

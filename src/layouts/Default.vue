<template>
  <div>
    <TheNav/>
    <main>
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

<style lang="scss" src="../assets/scss/main.scss">

<template lang="html">
  <div>
    <h2>
      <g-link :to="path">{{ news.title }}</g-link>
    </h2>

    <div>
      <span>{{ news.date }}</span>
      <span> &middot; </span>
      <span>{{ news.timeToRead }} min read</span>
    </div>

    {{ news.summary }}

    <div>
      <g-link :to="path">Read More</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  computed: {
    path () {
      return `/news/${this.news.slug}/`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

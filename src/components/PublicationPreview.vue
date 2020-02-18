<template lang="html">
  <div>
    <h2>
      <g-link :to="path">{{ publication.title }}</g-link>
    </h2>

    <div>
      <span>{{ publication.date }}</span>
      <span> &middot; </span>
      <span>{{ publication.timeToRead }} min read</span>
    </div>

    {{ publication.summary }}

    <div>
      <g-link :to="path">Read More</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
  computed: {
    path () {
      return `/people/${this.publication.slug}/`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

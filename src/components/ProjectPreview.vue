<template lang="html">
  <div>
    <h2>
      <g-link :to="path">{{ project.title }}</g-link>
    </h2>

    <div>
      <span>{{ project.date }}</span>
      <span> &middot; </span>
      <span>{{ project.timeToRead }} min read</span>
    </div>

    {{ project.summary }}

    <div>
      <g-link :to="path">Read More</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    path () {
      return `/projects/${this.project.slug}/`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
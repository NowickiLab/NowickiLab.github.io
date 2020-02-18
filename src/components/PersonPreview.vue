<template lang="html">
  <div>
    <h2>
      <g-link :to="path">{{ person.title }}</g-link>
    </h2>

    <div>
      <span>{{ person.date }}</span>
      <span> &middot; </span>
      <span>{{ person.timeToRead }} min read</span>
    </div>

    {{ person.summary }}

    <div>
      <g-link :to="path">Read More</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    path () {
      return `/people/${this.person.slug}/`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

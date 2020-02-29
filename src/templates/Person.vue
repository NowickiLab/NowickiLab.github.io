<template>
  <div>
    <h1>{{ $page.article.title }}</h1>
    <div class="">
      <g-link
        v-for="tag in $page.article.tags"
        :to="tag.path"
        :key="tag.id"
        v-text="tag.title"
      />
    </div>
    <div v-html="$page.article.content"/>
  </div>
</template>

<page-query>
query Person ($path: String!) {
  article: person (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    summary
    img
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import metaMixin from '@/mixins/meta.mixin.js'

export default {
  mixins: [metaMixin(' - NowickiLab')]
}
</script>

<style lang="scss" scoped>

</style>
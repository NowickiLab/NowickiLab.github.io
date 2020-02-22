<template>
  <div>
    <div class="container-inner mx-auto my-16">
      <h1 class="">{{ $page.publication.title }}</h1>
      <div class="">{{ $page.publication.date }}</div>
      <div class="">
        <g-link
          v-for="tag in $page.publication.tags"
          :to="tag.path"
          :key="tag.id"
          v-text="tag.title"
        />
      </div>
      <div class="markdown-body" v-html="$page.publication.content"/>
      <div class="mb-8">
        <g-link to="/publications/" class="">Back to Publications</g-link>
      </div>
    </div>
  </div>
</template>

<page-query>
query Publication ($path: String) {
  publication (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: `${this.$page.publication.title} - publications`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
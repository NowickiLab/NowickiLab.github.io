<template>
  <div>
    <div class="container-inner mx-auto my-16">
      <h1 class="">{{ $page.news.title }}</h1>
      <div class="">{{ $page.news.date }}</div>
      <div class="">
        <g-link
          v-for="tag in $page.news.tags"
          :to="tag.path"
          :key="tag.id"
          v-text="tag.title"
        />
      </div>
      <div class="markdown-body" v-html="$page.news.content"/>
      <div class="mb-8">
        <g-link to="/news" class="">Back to News</g-link>
      </div>
    </div>
  </div>
</template>

<page-query>
query News ($path: String!) {
  news (path: $path) {
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
      title: `${this.$page.news.title} - news`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

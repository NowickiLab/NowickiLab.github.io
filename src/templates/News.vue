<template>
  <article>
    <header>
      <h1>{{ $page.news.title }}</h1>
      <span class="date">{{ $page.news.date }}</span>
      <p>{{ $page.news.summary }}</p>
    </header>
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
  </article>
</template>

<page-query>
query News ($path: String!) {
  news (path: $path) {
    title
    date (format: "DD MMMM YYYY")
    content
    summary
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
  .date {
    font-size: 14px;
  }
</style>

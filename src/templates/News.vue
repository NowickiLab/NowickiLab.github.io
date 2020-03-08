<template>
  <div>
    <article>
      <header>
        <h1>{{ $page.article.title }}</h1>
        <time class="date" :datetime="$page.article.validDateString">
          {{ $page.article.date }}
        </time>
        <p v-html="$page.article.summary"/>
      </header>

      <div>
        <g-link
          v-for="tag in $page.article.tags"
          :to="tag.path"
          :key="tag.id"
        >
          #{{ tag.title }}
        </g-link>
      </div>

      <div v-html="$page.article.content"/>
    </article>

    <div id="disqus_thread" class="disqus"/>
  </div>
</template>

<page-query>
query News ($path: String!) {
  article: news (path: $path) {
    title
    date (format: "DD MMMM YYYY")
    validDateString: date
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
import disqusMixin from '@/mixins/disqus.mixin.js'
import metaMixin from '@/mixins/meta.mixin.js'

export default {
  mixins: [disqusMixin, metaMixin(' - News - Nowicki Lab')]
}
</script>

<style lang="scss" scoped>
  .date {
    font-size: 14px;
  }
</style>

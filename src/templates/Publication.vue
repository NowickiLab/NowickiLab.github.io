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

      <div class="">
        <g-link
          v-for="tag in $page.article.tags"
          :to="tag.path"
          :key="tag.id"
          v-text="tag.title"
        />
      </div>

      <div v-html="$page.article.content"/>
    </article>

    <div id="disqus_thread" class="disqus"/>
  </div>
</template>

<page-query>
query Publication ($path: String) {
  article: publication (path: $path) {
    title
    date (format: "DD MMMM YYYY")
    content
    validDateString: date
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
  mixins: [disqusMixin, metaMixin(' - Publications - NowickiLab')],
}
</script>

<style lang="scss" scoped>
 .date {
    font-size: 14px;
  }
</style>
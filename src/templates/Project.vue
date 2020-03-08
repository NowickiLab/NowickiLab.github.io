<template>
  <div>
    <article>
      <header class="header">
        <h1 v-html="$page.article.title"/>
        <time class="date" :datetime="$page.article.startDateRaw">
          {{ $page.article.startDate }}
        </time>
        <span v-if="$page.article.endDateRaw">
          -
          <time class="date" :datetime="$page.article.endDateRaw">
            {{ $page.article.endDate }}
          </time>
        </span>


        <p v-html="$page.article.summary"/>

        <div class="">
          <g-link
            v-for="tag in $page.article.tags"
            :to="tag.path"
            :key="tag.id"
          >
            #{{ tag.title }}
          </g-link>
        </div>
      </header>
      <div v-html="$page.article.content"/>
    </article>

    <div id="disqus_thread" class="disqus"/>
  </div>
</template>

<page-query>
query Project ($path: String!) {
  article: project (path: $path) {
    title
    startDate (format: "DD MMMM YYYY")
    startDateRaw: startDate
    endDate (format: "DD MMMM YYYY")
    endDateRaw: endDate
    agency
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
  mixins: [disqusMixin, metaMixin(' - Projects - Nowicki Lab')]
}
</script>

<style lang="scss" scoped>
  .date {
    font-size: 14px;
  }
</style>

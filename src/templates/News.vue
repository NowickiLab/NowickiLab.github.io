<template>
  <div>
    <article>
      <header>
        <h1>{{ $page.article.title }}</h1>
        <time class="date" :datetime="$page.article.validDateString">
          {{ $page.article.date }}
        </time>
        <tags :tags="$page.article.tags"/>
-        <p v-html="$page.article.summary"/>
+        <!-- TEMP: avoid HTML rendering which may include images/HTML that triggers transforms -->
+        <!-- <p v-html="$page.article.summary"/> -->
+        <p>{{ $page.article.summary }}</p>

      </header>

-      <div ref="content" v-html="$page.article.content"/>
+      <!-- TEMP: disable Markdown/HTML content rendering to avoid remark image transforms -->
+      <!-- <div ref="content" v-html="$page.article.content"/> -->
+      <div class="content--placeholder">Content temporarily disabled while fixing images.</div>

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
-   content
-   summary

+   # TEMP: remove fields that cause remark/sharp to process images during build
+   # content
+   # summary
    img
    tags {
      title
      path
    }
  }
</page-query>

<script>
import Tags from '@/components/Tags'
import disqusMixin from '@/mixins/disqus.mixin.js'
import metaMixin from '@/mixins/meta.mixin.js'
import chartMixin from '@/mixins/chart.mixin.js'

export default {
  components: {
    Tags
  },
  mixins: [
    disqusMixin,
    chartMixin,
    metaMixin(' - News - Nowicki Lab')
  ] 
}
</script>

<style lang="scss" scoped>
  .date {
    font-size: 14px;
  }
</style>

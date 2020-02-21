<template>
  <div>
    <article>
      <header class="header">
        <h1 v-html="$page.project.title"/>
        <span class="date">{{ period }}</span>

        <p>
          {{ $page.project.summary }}
        </p>

        <div class="">
          <g-link
            v-for="tag in $page.project.tags"
            :to="tag.path"
            :key="tag.id"
          >
            {{ tag }}
          </g-link>
        </div>
      </header>
      <div class="markdown-body" v-html="$page.project.content"/>
    </article>

    <div id="disqus_thread" class="disqus"/>
  </div>
</template>

<page-query>
query Project ($path: String!) {
  project (path: $path) {
    title
    startDate (format: "DD MMMM YYYY")
    startDateRaw: startDate
    endDate (format: "DD MMMM YYYY")
    endDateRaw: endDate
    agency
    content,
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
    const { title, summary, img } = this.$page.project 

    return {
      title: title,
      titleTemplate: '%s',
      description: summary,
      meta: [
        { name: 'title', content: title },
        { name: 'description', content: summary },
        { name: 'og:title', content: title },
        { name: 'og:description', content: summary },
        // { name: 'og:url', content: url },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: img },
        { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:url', content: url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: summary },
        { name: 'twitter:image', content: img }
      ]
    }
  },
  mounted () {
    if (window.DISQUS) {
      const slug = this.$page.project.slug
      const url = window.location.origin + window.location.pathname
      
      DISQUS.reset({
        reload: true,
        config: function () {  
          this.page.identifier = slug  
          this.page.url = url
        }
      })
    }
  },
  computed: {
    period () {
      const { 
        startDate,
        startDateRaw,
        endDate,
        endDateRaw,
      } = this.$page.project

      return +new Date(startDateRaw) >= +new Date(endDateRaw)
        ? startDate
        : `${startDate} - ${endDate}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    margin-bottom: 2em;
  }

  .date {
    font-size: 14px;
  }
</style>

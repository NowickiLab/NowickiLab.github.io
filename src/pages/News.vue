<template>
  <div>
    <h1 class="main-title">
      <img class="img" src="/img/mn_banner_news.svg" alt="News">
    </h1>

    <p>THIS recently happened in the Nowicki Lab!</p>

    <ArticlesPreview :articles="$page.news.edges" type="news"/>
  </div>
</template>

<page-query>
query {
  news: allNews (sortBy: "date", order: DESC)  {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        startDate: date (format: "MMMM D, Y")
        year: date (format: "YYYY")
        summary
        timeToRead
        slug
      }
    }
  }
}
</page-query>

<script>
import ArticlesPreview from '@/components/ArticlesPreview'

const url = 'https://nowickilab.science/news/'
const title = 'News - NowickiLab'
const img = ''
const desc = 'THIS recently happened in the Nowicki Lab!'

export default {
  metaInfo: {
    title: title,
    titleTemplate: '%s',
    description: desc,
    meta: [
      { name: 'title', content: title },
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: img },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: img },
   ]
  },
  components: {
    ArticlesPreview
  }
}
</script>

<style lang="scss" scoped>
  .svg {
    width: 70%;
    height: 70%;
    display: block;
    margin: -20px auto 20px;
  }

  .main-title {
    margin-top: -40px;
  }
</style>


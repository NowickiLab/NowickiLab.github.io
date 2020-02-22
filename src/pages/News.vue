<template>
  <div>
    <div>
      <h1>News</h1>
      <p>THIS recently happened in the Nowicki Lab!</p>
      <ArticlesPreview :articles="$page.news.edges" type="news"/>
    </div>
  </div>
</template>

<page-query>
query News ($page: Int) {
  news: allNews (sortBy: "date", order: DESC, perPage: 1, page: $page) @paginate {
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
      { name: 'og:title', content: title },
      { name: 'og:description', content: desc },
      { name: 'og:url', content: url },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: img },
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


<template>
  <Layout>
    <div>
      <h1>News</h1>

      <NewsPreview
        v-for="news in $page.news.edges"
        :key="news.id"
        :news="news.node"
      />

      <pagination-posts
        v-if="$page.news.pageInfo.totalPages > 1"
        base="/news"
        :totalPages="$page.news.pageInfo.totalPages"
        :currentPage="$page.news.pageInfo.currentPage"
      />
    </div>
  </Layout>
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
        date (format: "MMMM D, Y")
        summary
        timeToRead
        slug
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '@/components/PaginationPosts'
import NewsPreview from '@/components/NewsPreview'

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
    PaginationPosts,
    NewsPreview
  }
}
</script>


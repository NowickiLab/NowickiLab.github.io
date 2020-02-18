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

export default {
  metaInfo: {
    title: 'News'
  },
  components: {
    PaginationPosts,
    NewsPreview
  }
}
</script>


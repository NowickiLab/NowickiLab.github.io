<template>
  <Layout>
    <div>
      <h1>Publications</h1>

      <PublicationPreview
        v-for="publication in $page.publications.edges"
        :key="publication.id"
        :publication="publication.node"
      />

      <pagination-posts
        v-if="$page.publications.pageInfo.totalPages > 1"
        base="/publications"
        :totalPages="$page.publications.pageInfo.totalPages"
        :currentPage="$page.publications.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Publication ($page: Int) {
  publications: allPublication (sortBy: "date", order: DESC, perPage: 1, page: $page) @paginate {
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
import PublicationPreview from '@/components/PublicationPreview'

export default {
  metaInfo: {
    title: 'News'
  },
  components: {
    PaginationPosts,
    PublicationPreview
  }
}
</script>

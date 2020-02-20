<template>
  <div>
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
  </div>
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

const url = 'https://nowickilab.science/publications/'
const title = 'Publications - NowickiLab'
const img = ''
const desc = 'Fresh from the press in the Nowicki Lab!'

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
    PublicationPreview
  }
}
</script>

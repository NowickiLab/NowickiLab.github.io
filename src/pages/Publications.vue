<template>
  <div>
    <div>
      <h1>Publications</h1>
      <p>Fresh from the press in the Nowicki Lab!</p>
      <ArticlesPreview :articles="$page.publications.edges" type="publications"/>
    </div>
  </div>
</template>

<page-query>
query {
  publications: allPublication (sortBy: "date", order: DESC) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        startDate: date (format: "DD MMM YYYY")
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
import PaginationPosts from '@/components/PaginationPosts'
import ArticlesPreview from '@/components/ArticlesPreview'

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
    ArticlesPreview
  }
}
</script>

<template>
  <div>
      <h1>Projects</h1>
      <p>What’s cooking in the Nowicki Lab right now?</p>
      <ArticlesPreview :articles="$page.projects.edges" type="projects"/>
  </div>
</template>

<page-query>
query {
  projects: allProject (sortBy: "startDate", order: DESC) {
    edges {
      node {
        id
        title
        startDate (format: "DD MMM YYYY")
        endDate (format: "DD MMM YYYY")
        year: startDate (format: "YYYY")
        summary
        timeToRead
        slug,
        agency
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '@/components/PaginationPosts'
import ArticlesPreview from '@/components/ArticlesPreview'

const url = 'https://nowickilab.science/projects/'
const title = 'Projects - NowickiLab'
const img = ''
const desc = 'What’s cooking in the Nowicki Lab right now?'

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


<style lang="scss" scoped>

</style>
<template>
  <Layout>
    <div>
      <h1>Projects</h1>

      <ProjectPreview
        v-for="project in $page.projects.edges"
        :key="project.id"
        :project="project.node"
      />

      <pagination-posts
        v-if="$page.projects.pageInfo.totalPages > 1"
        base="/projects"
        :totalPages="$page.projects.pageInfo.totalPages"
        :currentPage="$page.projects.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Project ($page: Int) {
  projects: allProject (sortBy: "date", order: DESC, perPage: 1, page: $page) @paginate {
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
import ProjectPreview from '@/components/ProjectPreview'

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
    ProjectPreview
  }
}
</script>

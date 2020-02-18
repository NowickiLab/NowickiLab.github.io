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

export default {
  metaInfo: {
    title: 'Projects'
  },
  components: {
    PaginationPosts,
    ProjectPreview
  }
}
</script>

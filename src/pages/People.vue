<template>
  <Layout>
    <div>
      <h1>People</h1>

      <PersonPreview
        v-for="person in $page.people.edges"
        :key="person.id"
        :person="person.node"
      />

      <pagination-posts
        v-if="$page.people.pageInfo.totalPages > 1"
        base="/people"
        :totalPages="$page.people.pageInfo.totalPages"
        :currentPage="$page.people.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Person ($page: Int) {
  people: allPerson (sortBy: "date", order: DESC, perPage: 1, page: $page) @paginate {
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
import PersonPreview from '@/components/PersonPreview'

export default {
  metaInfo: {
    title: 'News'
  },
  components: {
    PaginationPosts,
    PersonPreview
  }
}
</script>

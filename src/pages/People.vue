<template>
  <div>
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
  </div>
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

const url = 'https://nowickilab.science/people/'
const title = 'People - NowickiLab'
const img = ''
const desc = 'That’s who makes the magic (or is it advanced science?) happen in the Nowicki Lab.'

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
    PersonPreview
  }
}
</script>

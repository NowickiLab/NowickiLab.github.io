<template>
  <div>
    <h2>Tag: {{ $page.tag.title }}</h2>
    <SimpleArticlesPreview :articles="$page.tag.belongsTo.edges"/>
  </div>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 3) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          __typename
          ...on News {
            title
    	      startDate: date (format: "DD MMM YYYY")
            path
            slug
            summary
            tags {
              title
            }
          }
          ...on Project {
             title
    	       startDate: startDate (format: "DD MMM YYYY")
             path
             slug
             summary
             tags {
              title
            }
          }
           ...on Publication {
             title
    	       startDate: date (format: "DD MMM YYYY")
             path
             slug
             summary
             tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import SimpleArticlesPreview from '@/components/SimpleArticlesPreview'

export default {
  components: {
    SimpleArticlesPreview
  },
  metaInfo() {
    return {
      title: 'Tag: ' + this.$page.tag.title
    }
  },
  mounted () {
    console.log(this.$page.tag.belongsTo.edges)
  }
}
</script>
<template>
  <Layout>
      <h1>Projects</h1>
      <ul class="years">
        <li class="year" v-for="year in years" :key="year.year">
          <span class="year__label">{{ year.year }}</span>
          <ul class="projects">
            <li class="project" v-for="project in year.projects" :key="project.id">
              {{ project.startDate }} - 
              <g-link :to="`/projects/${project.slug}/`">{{ project.title }}</g-link>
            </li>
          </ul>
        </li>
      </ul>
  </Layout>
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
import groupBy from 'lodash.groupby'
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
  },
  computed: {
    years () {
      const projects = this.$page.projects.edges.map(edge => edge.node)
      const yearsObj = groupBy(projects, project => project.year)

      return Object.keys(yearsObj).map(key => ({
        year: key,
        projects: yearsObj[key]
      })).sort((a, b) => b.year - a.year)
    }
  }
}
</script>


<style lang="scss" scoped>
  .years {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .year {
    margin-top: 20px;

    &__label {
      font-weight: 700;
    }
  }
</style>
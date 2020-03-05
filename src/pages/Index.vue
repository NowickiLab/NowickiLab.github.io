<template>
  <div>
    <section class="section">
    <h1 class="main-title">
      <img src="/img/mn_header.svg" alt="Welcome to the Nowicki Lab page">
    </h1>
    <p>In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plants and their pathogens</p>
    </section>

    <section class="section">
      <h2 class="title">News</h2>
      <p class="desc">THIS recently happened in the Lab!</p>
      <SimpleArticlesPreview :articles="$page.news.edges" type="news"/>
    </section>

    <section class="section">
      <h2 class="title">Projects</h2>
      <p class="desc">What’s cooking in the Lab right now?!</p>
      <SimpleArticlesPreview :articles="$page.projects.edges" type="projects"/>
    </section>
  
    <section class="section">
      <h2 class="title">Publications</h2>
      <p class="desc">Fresh from the press!</p>
      <SimpleArticlesPreview :articles="$page.publications.edges" type="publications"/>
    </section>
  </div>
</template>

<page-query>
query {
  news: allNews (sortBy: "date", order: DESC, limit: 3) {
    edges {
      node {
        id
        title
        startDate: date (format: "MMMM D, Y")
        year: date (format: "YYYY")
        summary
        timeToRead
        slug
      }
    }
  },
  projects: allProject (sortBy: "startDate", order: DESC, limit: 3) {
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
  },
  publications: allPublication (sortBy: "date", order: DESC, limit: 3) {
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
import SimpleArticlesPreview from '@/components/SimpleArticlesPreview'

export default {
  components: {
    SimpleArticlesPreview
  },
  metaInfo () {
    const url = 'https://nowickilab.science/'
    const title = 'NowickiLab'
    const img = 'https://nowickilab.science/img/mn_header.svg'
    const desc = 'In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plants and their pathogens'
    
    return {
      title: title,
      titleTemplate: '%s',
      description: desc,
      meta: [
        { name: 'title', content: title },
        { name: 'description', content: desc },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: img },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: img },
     ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .svg {
    width: 60%;
    height: 60%;
    margin: 30px auto 40px;
    display: block;
  }

  .section {
    border-bottom: 1px dotted #d1d1d1;
    padding-bottom: 25px;
    margin-bottom: 40px;

    &:last-child {
      border-bottom: none;
    }
  }

  .title {
    margin: 20px 0 0;
  }

  .main-title {
    margin: 0;
    display: block;
  }

  .desc {
    margin: 5px 0 25px;
  }
</style>

<template>
  <Layout>
    Nowicki Science
  </Layout>
</template>

<script>
const url = 'https://nowickilab.science/'
const title = 'NowickiLab'
const img = ''
const desc = 'In the Nowicki Lab, we utilize the molecular genetics approach to uncover important processes that drive species diversity, evolutionary history, and explain important traits in plant and their pathogen'

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
  }
}
</script>

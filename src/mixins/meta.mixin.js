export default function (titleSuffix = '') {
  return {
    metaInfo() {
      const { title, summary, img } = this.$page.article
      const strippedSummary = summary
        ? summary.replace(/(<([^>]+)>)/ig, '')
        : ''

      const meta = [
        { name: 'title', content: title },
        { name: 'description', content: strippedSummary },
        { property: 'og:title', content: title },
        { property: 'og:description', content: strippedSummary },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: strippedSummary }
      ]

      if (img) {
        const src = 'https://nowickilab.science' + img.srcset[1].split(' ')[0]

        meta.push(
          { property: 'og:image', content: src },
          { name: 'twitter:image', content: src }
        )
      }

      return {
        title: `${title}${titleSuffix}`,
        titleTemplate: '%s',
        description: strippedSummary,
        meta
      }
    }
  }
}

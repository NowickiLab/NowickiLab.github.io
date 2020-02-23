export default function (titleSuffix = '') {
  return {
    metaInfo() {
      const { title, summary, img } = this.$page.article

      const meta = [
        { name: 'title', content: title },
        { name: 'description', content: summary },
        { property: 'og:title', content: title },
        { property: 'og:description', content: summary },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: summary }
      ]

      if (img) meta.push(
        { property: 'og:image', content: img },
        { name: 'twitter:image', content: img }
      )

      return {
        title: `${title}${titleSuffix}`,
        titleTemplate: '%s',
        description: summary,
        meta
      }
    }
  }
}

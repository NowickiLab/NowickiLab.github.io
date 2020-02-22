<template lang="html">
  <ul class="years">
    <li class="year" v-for="year in years" :key="year.year">
      <span class="year__label">{{ year.year }}</span>
      <ul class="articles">
        <li class="article" v-for="article in year.articles" :key="article.id">
          <b>
            {{ article.startDate }} - 
            <g-link :to="`/${type}/${article.slug}/`">{{ article.title }}</g-link>
          </b>
          <p class="article__summary">
            {{ article.summary }}
          </p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import groupBy from 'lodash.groupby'

export default {
  props: {
    articles: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    years () {
      const articles = this.articles.map(edge => edge.node)
      const yearsObj = groupBy(articles, project => project.year)

      return Object.keys(yearsObj).map(key => ({
        year: key,
        articles: yearsObj[key]
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
    margin: 30px 0;

    &__label {
      font-weight: 700;
    }
  }

  .article {
    &__summary {
      font-size: 14px;
      margin: 2px 0 20px;
    }
  }
</style>

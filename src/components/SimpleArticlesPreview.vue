<template lang="html">
  <div>
    <ul class="articles">
      <li class="article" v-for="article in articles" :key="article.node.id">
        <span v-if="linkTo">
          <b>{{ article.node.startDate }}</b> - 
        </span>
        <span v-else>
          [{{ type(article) }}] <b>{{ article.node.startDate }}</b> <br> 
        </span>
        <b>
          <g-link :to="`/${type(article)}/${article.node.slug}/`">{{ article.node.title }}</g-link>
        </b>

        <br>

        <p class="article__summary" v-html="article.node.summary"/>
      </li>
    </ul>

    <div v-if="linkTo" class="link-wrap">
      <g-link :to="`/${linkTo}/`" class="link">
        See {{ linkTo }} archives...
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    },
    linkTo: {
      type: String,
      default: ''
    }
  },
  computed: {
    type () {
      return article => {
        let type = article.node.__typename.toLowerCase()
        if (type[type.length - 1] !== 's') type += 's'
        return type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .article {
    &__summary {
      font-size: 14px;
      margin: 2px 0 20px;
    }
  }

  .link {
    font-size: 14px;
  }
</style>

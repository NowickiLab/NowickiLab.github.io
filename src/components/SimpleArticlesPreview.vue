<template lang="html">
  <div>
    <ul class="articles">
      <li class="article" v-for="article in articles" :key="article.node.id">
        <b>
          {{ article.node.startDate }} - 
          <g-link :to="`/${type}/${article.node.slug}/`">{{ article.node.title }}</g-link>
        </b>
        <p class="article__summary" v-html="article.node.summary"/>
      </li>
    </ul>
    <div class="link-wrap">
      <g-link :to="`/${type}/`" class="link">
        See {{ type }} archives...
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
    type: {
      type: String,
      required: true
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

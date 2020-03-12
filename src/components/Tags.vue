<template lang="html">
  <ul class="tags" v-if="tags.length > 0">
    <li v-for="tag in tags" :key="tag.id" class="tag">
      <g-link :to="tag.path" class="link">
        {{ tag.title }}
      </g-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .tag {
    padding: 4px 10px 4px 0;
    font-size: 14px;
  }

  .link {
     &::before {
      content: '#';
    }
  }
</style>

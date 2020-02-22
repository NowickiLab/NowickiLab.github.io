<template>
  <div>
    <div class="container-inner mx-auto my-16">
      <h1 class="">{{ $page.person.title }}</h1>
      <div class="">{{ $page.person.date }}</div>
      <div class="">
        <g-link
          v-for="tag in $page.person.tags"
          :to="tag.path"
          :key="tag.id"
          v-text="tag.title"
        />
      </div>
      <div class="markdown-body" v-html="$page.person.content"/>
      <div class="mb-8">
        <g-link to="/people/" class="">Back to people</g-link>
      </div>
    </div>
  </div>
</template>

<page-query>
query Person ($path: String!) {
  person (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: `${this.$page.person.title} - people`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
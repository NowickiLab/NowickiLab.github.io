<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="">{{ $page.project.title }}</h1>
      <div class="">{{ $page.project.startDate }} - {{ $page.project.endDate }}</div>
      <div class="">
        <g-link
          v-for="tag in $page.project.tags"
          :to="tag.path"
          :key="tag.id"
          v-text="tag.title"
        />
      </div>
      <div class="markdown-body" v-html="$page.project.content"/>
      <div class="mb-8">
        <g-link to="/projects" class="">Back to Projects</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project (path: $path) {
    title
    startDate (format: "MMMM D, Y")
    endDate (format: "MMMM D, Y")
    agency
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
      title: `${this.$page.project.title} - projects`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

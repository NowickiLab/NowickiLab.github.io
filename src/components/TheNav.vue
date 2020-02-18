<template lang="html">
  <header>
    <nav>
      <ul>
        <li>
          <search-input />
        </li>
        <li>
          <g-link to="/">Homepage</g-link>
        </li>
        <li>
          <g-link to="/news">News</g-link>
        </li>
        <li>
          <g-link to="/projects">Projects</g-link>
        </li>
        <li>
          <g-link to="/people">People</g-link>
        </li>
        <li>
          <g-link to="/publications">Publications</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SearchInput from '../components/SearchInput'

export default {
  components: {
    SearchInput
  }
}
</script>

<style lang="scss" scoped>

</style>

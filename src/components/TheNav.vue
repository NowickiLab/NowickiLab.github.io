<template lang="html">
  <header class="header">
    <nav class="nav">
      <div class="item">
        <g-link class="link link--homepage" to="/">NowickiLab</g-link>
      </div>
  
      <ul class="list">
        <!-- <li>
          <search-input />
        </li> -->
        <li class="item">
          <g-link class="link" to="/news">News</g-link>
        </li>
        <li class="item">
          <g-link class="link" to="/projects">Projects</g-link>
        </li>
        <li class="item">
          <g-link class="link" to="/people">People</g-link>
        </li>
        <li class="item">
          <g-link class="link" to="/publications">Publications</g-link>
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
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: white;
    border-bottom: 1px solid #d1d1d1;
  }

  .nav {
    max-width: 1000px;
    padding: 0 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .item {
    display: block;
    margin: 0;
  }

  .link {
    color: #333;
    display: block;
    margin: 0;
    padding: 10px 10px 8px;

    background: white;

    transition: all 0.15s;

    &:hover {
      text-decoration: none;
      background: #eeeded;
    }

    &.active--exact {
      background: #eeeded;
    }

    &--homepage {
      background: white !important;
    }
  }
</style>

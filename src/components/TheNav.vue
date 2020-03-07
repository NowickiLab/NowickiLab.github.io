<template lang="html">
  <header class="header">
    <nav class="nav">
      <div class="item">
        <g-link class="link link--homepage" to="/">
         <img class="logo-img" src="/favicon/favicon-32x32.png" alt="">
         Nowicki Lab
        </g-link>
      </div>
  
      <ul class="list" :class="{ 'list--open': isOpen }">
        <li class="search-item">
          <search-input/>
        </li>
        <li class="item">
          <g-link class="link link--news" to="/news/">News</g-link>
        </li>
        <li class="item">
          <g-link class="link link--projects" to="/projects/">Projects</g-link>
        </li>
        <li class="item">
          <g-link class="link link--people" to="/people/">People</g-link>
        </li>
        <li class="item">
          <g-link class="link link--publications" to="/publications/">Publications</g-link>
        </li>
      </ul>

      <MenuButton :isOpen="isOpen" @click.native="isOpen = !isOpen"/>
    </nav>
  </header>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import MenuButton from '@/components/MenuButton'

export default {
  components: {
    SearchInput,
    MenuButton
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    '$route.path' () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    background: white;
    border-bottom: 1px solid #d1d1d1;
  }

  .nav {
    max-width: 1000px;
    height: 43px;
    padding: 0 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @include mq($until: tablet) {
      position: absolute;
      right: 0;
      top: 43px;
      width: 140px;
      flex-wrap: wrap;
      border: 1px solid #d1d1d1;
      transition: all 0.2s;

      transform: translateX(100%);

      &--open {
        transform: translateX(0);
      }
    }
  }

  .item {
    display: block;
    margin: 0;

    @include mq($until: tablet) {
      width: 100%;
    }
  }

  .search-item {
    @include mq($until: tablet) {
      display: none;
    }
  }

  .link {
    color: #333;
    display: block;
    margin: 0;
    padding: 10px 10px 0;
    height: 100%;

    background: white;

    transition: all 0.15s;

    &:hover {
      text-decoration: none;
      background: #eeeded;
    }

    &--news.active--exact {
      color: rgb(0, 165, 165);
      background: rgb(177, 255, 255);
    }

    &--projects.active--exact {
      color: rgb(22, 145, 0);
      background: rgb(196, 252, 186);
    }

    &--people.active--exact {
      color: rgb(196, 78, 0);
      background: rgb(255, 223, 200);
    }

    &--publications.active--exact {
      color: rgb(23, 151, 1);
      background: rgb(221, 255, 194);
    }

    @include mq($until: tablet) {
      padding: 10px 15px;
    }

    &--homepage {
      @include mq($until: tablet) {
        padding: 10px 10px 0;
      }
    }
  }

  .logo-img {
    width: 27px;
    vertical-align: middle;
    position: relative;
    top: -2px;
    margin-right: 6px;
  }
</style>

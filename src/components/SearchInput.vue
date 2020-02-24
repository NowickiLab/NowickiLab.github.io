<template>
  <div class="wrap">
    <div>
      <input
        type="search"
        placeholder="Search..."
        class="input"
        v-model="query"
        @input="softReset"
        @keyup="performSearch"
        @keyup.esc="searchResultsVisible = false"
        @keydown.up.prevent="highlightPrev"
        @keydown.down.prevent="highlightNext"
        @keyup.enter="gotoLink"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        ref="search"
      >
      <!-- <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
      </svg> -->
    </div>
    <transition name="fade">
      <div v-if="query.length > 0 && searchResultsVisible" class="output-wrap">
        <ul class="result-list" ref="results">
          <li
            v-for="(post, index) in results"
            :key="index"
            :href="post.item.path"
            @click="reset"
            class="result"
            :class="{ 'result--highlighted' : index === highlightedIndex }"
          >
            <g-link :to="post.item.path" class="result__link" tabindex="-1">
              <span class="result__title" v-html="post.item.title"/>
              <span class="result__summary" v-html="post.item.summary"/>
            </g-link>
          </li>
        </ul>
        <div v-if="results.length === 0" class="no-results">
          No results for <strong>{{ query }}</strong>
        </div>
      </div>
    </transition>
  </div>
</template>

<static-query>
  {
    metadata{
      pathPrefix
    }
  }
</static-query>

<script>
import axios from 'axios'

export default {
  created () {
    axios.get(`${this.$static.metadata.pathPrefix}/search.json`).then(res => {
      this.posts = res.data
    }).catch(error => {
      console.log(error)
    })
  },
  data () {
    return {
      query: '',
      results: [],
      posts: [],
      highlightedIndex: 0,
      searchResultsVisible: false,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'summary']
      }
    }
  },
  methods: {
    reset () {
      this.query = ''
      this.highlightedIndex = 0
    },
    softReset () {
      this.highlightedIndex = 0
      this.searchResultsVisible = true
    },
    performSearch () {
      this.$search(this.query, this.posts, this.options).then(results => {
        this.results = results
      })
    },
    highlightPrev () {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1
        this.scrollIntoView()
      }
    },
    highlightNext () {
      if (this.highlightedIndex < this.results.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1
        this.scrollIntoView()
      }
    },
    scrollIntoView () {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      })
    },
    gotoLink () {
      const destPath = this.results[this.highlightedIndex].item.path
      const currentPath = this.$route.path

      if (destPath === currentPath) {
        this.reset()
        this.$refs.search.blur()
      } else if (destPath) {
        this.$router.push(destPath).then(() => {
          this.reset()
          this.$refs.search.blur()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .wrap {
    position: relative;
  }

  .output-wrap {
    position: absolute;
    width: 100%;
    top: 100%; left: 0;
    background: white;
    border: 1px solid #d1d1d1;
  }


  .input {
    padding: 10px;
    height: 43px;
    width: 340px;
    border: 1px solid #d1d1d1;
    border-top: none;
    border-bottom: none;
  }

  .result-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    max-height: 420px;
    overflow-y: scroll;

    &:hover {
      .result--highlighted {
        background: none;
      }
    }
  }

  .result {
    line-height: 1.4em;
    border-bottom: 1px solid #d1d1d1;
    position: relative;
    transition: background-color 0.1s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: #f2f2f2 !important;
      border-bottom-color: #ccc !important;
    }

    &__link {
      display: block;
      padding: 6px 15px 8px;
      color: $smokey;
      &:hover {
        text-decoration: none;
      }
    }

    &__title {
      display: block;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 3px;
    }

    &__summary {
      display: block;
      font-size: 12px;
      line-height: 1.4em;
    }

    &--highlighted {
      background: #f2f2f2;
      border-bottom-color: #ccc;
    }
  }

  .no-results {
    padding: 10px;
  }
</style>

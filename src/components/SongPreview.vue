<template lang="html">
  <div>
    <h3 class="title">{{ song.title }}</h3>
    <div class="name">{{ song.creator }}</div>
    <button v-if="videoId" @click="showIframe = !showIframe">Show youtube video</button> (<a target="_blank" :href="song.link">{{ song.link }}</a>)
    
    <iframe v-if="showIframe && videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p class="desc">{{ song.description }}</p>

    <button @click="likeSong">
      Like ({{ song.likes }})
      {{ isLiked }}
    </button>

    <CommentsPreview :comments="song.comments" :songId="song.id"/>

  </div>
</template>

<script>
import CommentsPreview from './CommentsPreview'
import axios from 'axios'

export default {
  components: {
    CommentsPreview
  },
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showIframe: false,
      isLikesLoading: false,
      isLiked: JSON.parse(localStorage.getItem('likedSongs')).includes(this.song.id)
    }
  },
  computed: {
    videoId () {
      return (this.song.link.match(/v=([^&|$|#]+)/) || [])[1]
    }
  },
  methods: {
    likeSong () {
      if (this.isLikesLoading) return
      this.isLikesLoading = true

      const likedSongs = JSON.parse(localStorage.getItem('likedSongs'))
      if (likedSongs.includes(this.song.id)) return
      likedSongs.push(this.song.id)
      localStorage.setItem('likedSongs', JSON.stringify(likedSongs))
      this.isLiked = true

      axios.post('/likes', {
        songId: this.song.id
      }).then(res => {
        const likesNumber = res.data.likes
        this.song.likes = likesNumber
      }).finally(() => {
        this.isLikesLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 0;
  }

  .name {
    color: darkgray;
    font-size: 12px;
  }
</style>

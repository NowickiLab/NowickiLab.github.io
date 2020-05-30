<template lang="html">
  <div class="song">
    <div class="song-card">
      <h3 class="title">{{ song.title }}</h3>
      <div class="name">{{ song.creator }}</div>
      <div class="buttons">
      <button class="like" @click="likeSong">
        Like ({{ song.likes }})
        <!--{{ isLiked }}-->
      </button>    
      <button class="show-video" v-if="videoId" @click="showIframe = !showIframe">Show youtube video</button> <!--(<a target="_blank" :href="song.link">{{ song.link }}</a>)-->
      </div>
      <!-- <div class="video-link"> -->
      <iframe class="video" v-if="showIframe && videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <!-- </div> -->
      <p class="description">{{ song.description }}</p>
    </div>
    <CommentsPreview class="comments" :comments="song.comments" :songId="song.id"/>

  </div>
</template>

<script>
import CommentsPreview from './CommentsPreview'
import fetchToken from '@/assets/js/fetchRecaptchaToken'
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

      fetchToken().then(token => {
        return axios.post('/likes', { songId: this.song.id, token })
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
$blue1: #09b6d1;
$blue2: #91dce7;
$green1: #c2df64;
$green2: #d6e997;
$orange1: #fdb06d;
$orange2: #fdbb81;

// * {
//   border: 1px solid red;
// }

.song {
  display:grid;
  grid-template:
    'song-card song-card'
    'comments comments';
  background: $green2;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  color: #494949;
}

.song-card {
  grid-area: song-card;
  display: grid;
  grid-template:
    'title title'
    'creator video-link'
    'buttons video-link'
    'description description';
  grid-template-columns: 5fr 6fr;
  grid-gap: 10px 5px;
  grid-template-rows: minmax(10px, auto) minmax(10px, auto);
  align-items: center;
  justify-items: center;
  background: $green1;
  padding: 7px;
  border-radius: 10px;
}

.title {
  grid-area: title;
  margin: 0;
  font-size: 20px;
  width: 100%;
  height: max-content;
  padding: 0 10px;
  background: white;
  border-radius: 10px;
}

.name {
  grid-area: creator;
  width: 100%;
  font-size: 15px;
  height: max-content;
  padding: 0 10px;
}

.buttons {
  grid-area: buttons;
  width: 90%;
  align-self: start;
  justify-self: start;
  display: flex;
  justify-content: space-between;
}

.like, .show-video {
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: $orange2;
  align-self: start;
}

.video {
  grid-area: video-link;
  width: 350px;
  height: 250px;
  border-radius: 12px;
}

.description {
  grid-area: description;
  padding: 0 10px;
  margin: 5px 0;
}

.comments {
  grid-area: comments;
}
</style>
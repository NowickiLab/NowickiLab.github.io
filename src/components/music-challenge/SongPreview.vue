<template lang="html">
  <div class="song">
    <div class="song-card">
      <h3 class="title">{{ song.title }}</h3>
      <div class="name">Sender: {{ song.creator }}</div>

      <!-- <button class="show-video" v-if="videoId" @click="showIframe = !showIframe">Show YouTube video</button> (<a target="_blank" :href="song.link">{{ song.link }}</a>) -->
      <p class="description">{{ song.description }}</p>
      
      <iframe class="video" v-if="videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="display-likes">
        {{ displayLikes() }}
      </div>
      <button class="like" @click="likeSong">
        <svg class="heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
        <span class="button-text">Love it!</span>
      </button>
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
    },
    displayLikes () {
      return this.song.likes === 1 ? `${this.song.likes} person loves this`: `${this.song.likes} people love this`
    }
  }
}
</script>

<style lang="scss" scoped>

$green: #179a00;
$blue: #166fa3;
$orange: #dc5800;
$blue-border: #214f69;

// * {
//   border: 1px solid red;
// }

.song {
  display: grid;
  grid-template:
    'song-card'
    'comments';
}

@media (max-width: 650px){
  .like {
    width: 48%;
  }

  .button-text {
    margin-left: 10px;
  }

  .video {
    height: 250px;
  }
}

@media (min-width: 650px) {
  .like {
    width: 130px;
    justify-content: space-around;
  }

  .video {
    height: 300px;
  }
}

.song-card {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 20px;
  width: 100%;
  color: $green;
  margin: 20px 0 10px;
}

.name {
  width: 100%;
  font-size: 15px;
  margin-bottom: 10px;
}

.like {
  position: relative;
  top: 41px;
  padding: 10px;
  height: 41px;
  border: 2px solid $blue-border;
  border-radius: 4px;
  background: $blue;
  color: white;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background: $blue-border;
  }
}

.heart {
  height: 20px;
  width: auto;
  fill: white;
}

.video {
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
}

.display-likes {
  position: relative;
  top: 20px;
}

.description {
  padding: 0 10px;
  margin: 14px 0;
  font-style: italic;
  border-left: 7px solid darkgrey;
}

</style>
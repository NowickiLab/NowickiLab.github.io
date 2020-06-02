<template lang="html">
  <div class="song">
    <h3 class="title">{{ song.title }}</h3>
    <div class="name">Sender: <b>{{ song.creator }}</b> ({{ date }})</div>
    <p class="description">{{ song.description }}</p>

    <iframe
      v-if="videoId"
      class="video"
      :src="`https://www.youtube.com/embed/${videoId}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <Comments :comments="song.comments"/>
    <AddComment :songId="song.id"/>

    <!-- <button class="music-challenge-btn" @click="likeSong">
      <svg class="heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
      </svg>
      <span class="button-text">
        {{ isLiked ? 'Liked!' : 'Love it!' }}
      </span>
    </button>

    <span class="display-likes">
      {{ displayLikes }}
    </span> -->
  </div>
</template>

<script>
import Comments from './Comments'
import AddComment from './AddComment'
import fetchToken from '@/assets/js/fetchRecaptchaToken'
import axios from 'axios'

export default {
  props: ['song'],
  components: {
    Comments,
    AddComment
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
    },
    displayLikes () {
      const s = this.song.likes === 1 ? '' : 's'
      return `${this.song.likes} person${s} loves this`
    },
    date () {
      return new Date(this.song.date).toLocaleString()
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
$green: #179a00;
$blue: #166fa3;
$orange: #dc5800;
$blue-border: #214f69;

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

.title {
  font-size: 20px;
  color: $green;
  margin: 20px 0 10px;
}

.name {
  font-size: 14px;
  margin: -10px 0 10px;
}

.heart {
  height: 20px;
  width: auto;
  fill: white;
}

.video {
  width: 100%;
  border-radius: 4px;
  margin: 12px 0;
}

</style>
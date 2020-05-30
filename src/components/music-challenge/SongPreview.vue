<template lang="html">
  <div class="song">
    <div class="song-card">
      <h3 class="title">{{ song.title }}</h3>
      <div class="name">Sender: {{ song.creator }}</div>

      <div class="buttons">
      <button class="like" @click="likeSong">
        Like ({{ song.likes }})
        <!--{{ isLiked }}-->
      </button>    
      <button class="show-video" v-if="videoId" @click="showIframe = !showIframe">Show YouTube video</button> <!--(<a target="_blank" :href="song.link">{{ song.link }}</a>)-->
      </div>

      <iframe class="video" v-if="showIframe && videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

@media screen and (max-width: 650px){
  .song-card {
    display: flex;
    flex-direction: column;
  }

  .video {
    margin: 10px 0;
  }
}

@media screen and (min-width: 650px) {
  .song-card {
    grid-area: song-card;
    display: grid;
    grid-template:
      'title title'
      'creator creator'
      'buttons video-link'
      'description description';
    grid-template-columns: 5fr 6fr;
    grid-template-rows: minmax(10px, auto) minmax(10px, auto);
  }

  .buttons {
    margin-right: 10px;
  }
}

.title {
  grid-area: title;
  font-size: 20px;
  width: 100%;
  color: $green;
  margin: 20px 0 10px;
}

.name {
  grid-area: creator;
  width: 100%;
  font-size: 15px;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  align-items: start;
  align-content: flex-start;
  justify-content: space-between;
}

.like,
.show-video {
  padding: 10px;
  height: 40px;
  border: 2px solid #2b678a;
  border-radius: 4px;
  background: $blue;
  color: white;
}

.video {
  grid-area: video-link;
  width: 100%;
  height: 250px;
  border-radius: 4px;
}

.description {
  grid-area: description;
  padding: 0 10px;
  margin: 14px 0;
  font-style: italic;
  border-left: 10px solid darkgrey;
}

.comments {
  grid-area: comments;
}

</style>
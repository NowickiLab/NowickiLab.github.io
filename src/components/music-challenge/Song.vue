<template lang="html">
  <div class="song">
    <h3 class="title">{{ song.title }}</h3>
    <div class="name">Sender: <b>{{ song.creator }}</b> ({{ date }})</div>
    <p class="description">{{ song.description }}</p>

    <div class="like-wrap">
      <span class="display-likes">
        {{ displayLikes }}
      </span>
      <button class="music-challenge-btn like" @click="likeSong">
        <svg class="heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
        </svg>
      <span class="like-text">
        {{ isLiked ? 'Liked!' : 'Like' }}
      </span>
      </button>
    </div>
    <iframe
      v-if="videoId"
      class="video"
      :src="`https://www.youtube.com/embed/${videoId}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <Comments :comments="song.comments"/>
    <AddComment :songId="song.id" @comment="onComment"/>
    

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
      isLiked: JSON.parse(localStorage.getItem('likedSongs')).includes(this.song.id),
    }
  },
  computed: {
    videoId () {
      return (this.song.link.match(/v=([^&|$|#]+)/) || [])[1]
    },
    displayLikes () {
      const ppl = this.song.likes === 1 ? 'person likes' : 'people like'
      if (this.song.likes) return `${this.song.likes} ${ppl} this`
      return `No one has liked this yet!`
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
    },
    onComment (comment) {
      this.song.comments.push(comment)
    }
  }
}
</script>

<style lang="scss" scoped>

.song {
  border-top: 1px solid #ccc;
  margin-top: 30px;
  position: relative;
}

.title {
  font-size: 20px;
  color: #179a00;
  margin: 20px 0 10px;
}

.name {
  font-size: 14px;
  margin: -10px 0 10px;
}

.description {
  margin-bottom: 10px;
}

.video {
  display: block;
  width: 100%;
  height: 325px;
  border-radius: 4px;
  margin: 12px 0 8px;
}

.like-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // @include mq($from: tablet) {  
  // display: flex;
  // align-content: center;
  // flex-direction: column;
  // position: absolute;
  // top: 20px;
  // left: -70px;
  // }
}

.display-likes {
  align-self: center;
}

.like {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  fill: white;
  background: #e44747;
  border-color: #bb2e2e;

  &:hover {
    background: #bb2e2e;
  }

  // @include mq($from: tablet) {
  //   border-radius: 50%;
  //   width: 45px;
  //   height: 45px;
  // }
}

.heart {
  height: 24px;
  width: 24px;
  margin-right: 8px;
}
</style>
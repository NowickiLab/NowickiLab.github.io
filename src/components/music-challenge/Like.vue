<template lang="html">
  <div class="like-wrap">
    <span class="display-likes">
      {{ displayLikes }}
    </span>
    <button class="music-challenge-btn like" @click="likeSong">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
      </svg>
    <span class="like-text">
      {{ isLiked ? 'Liked!' : 'Like' }}
    </span>
    </button>
  </div>
</template>

<script>
import axios from '@/assets/js/music-axios'
import fetchToken from '@/assets/js/fetchRecaptchaToken'

export default {
  props: ['song'],
  data () {
    return {
      isLikesLoading: false,
      isLiked: JSON.parse(localStorage.getItem('likedSongs')).includes(this.song.id),
    }
  },
  computed: {
    displayLikes () {
      const ppl = this.song.likes === 1 ? 'person likes' : 'people like'
      if (this.song.likes) return `${this.song.likes} ${ppl} this`
      return `No one has liked this yet!`
    },
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
.like-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.display-likes {
  align-self: center;
}

.like {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  background: #e44747;
  border-color: #bb2e2e;

  &:hover {
    background: #bb2e2e;
  }
}

.icon {
  margin-right: 8px;
}
</style>
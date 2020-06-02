<template lang="html">
  <form class="add-new" @submit.prevent="onSubmit">
    <label>
      <textarea
        v-model.trim="text"
        class="comment-content"
        cols="30"
        rows="1"
        placeholder="Write a comment..."
        required min="3"
      />
    </label>
    <label>
      <input
        v-model.trim="creator"
        class="creator-name"
        type="text"
        placeholder="Your name"
        required
        min="3"
      >
    </label>
    <button class="music-challenge-btn" type="submit" :disabled="isLoading">
      Add comment
    </button>
  </form>
</template>

<script>
import axios from 'axios'
import fetchToken from '@/assets/js/fetchRecaptchaToken'

export default {
  props: ['songId'],
  data () {
    return {
      creator: '',
      text: '',
      isLoading: false,
    }
  },
  methods: {
    onSubmit (e) {
      if (this.isLoading) return

      this.isLoading = true
      fetchToken().then(token => {
        return axios.post('/comments', {
          songId: this.songId,
          text: this.text,
          creator: this.creator,
          token
        })
      }).then(res => {
        const comment = res.data
        this.comments.push(comment)
      }).finally(() => {
        this.isLoading = false
        this.text = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 650px) {
  .add-new {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .creator-name, .comment-content, .post-comment {
    width: 100%;
  }

  .post-comment {
    margin-top: 10px;
  }

  .add-comment {
    width: 48%;
    padding: 0 16px;
    align-self: flex-end;
  }

  .button-text {
    margin-left: 10px;
  }
}

@media (min-width: 650px) {
  .add-new {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
  }

  .post-comment {
    margin-top: 5px;
  }

  .add-comment {
    width: 155px;
    margin-left: 150px;    
    justify-content: space-around;
  }
}

.comment-content {
  transition: all 0.5s ease;
  padding-top: 12px;
  height: 42px;

  &:focus {
    height: 7em;
  }
}

.creator-name, .comment-content {
  padding: 10px 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
  background: white;
}
</style>

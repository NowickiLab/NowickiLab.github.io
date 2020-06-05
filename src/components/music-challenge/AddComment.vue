<template lang="html">
  <form class="form" @submit.prevent="onSubmit">
    <label>
      <div class="visually-hidden">Your comment:</div>
      <textarea
        v-model.trim="text"
        class="input input--textarea"
        cols="30"
        rows="1"
        placeholder="Write a comment..."
        required
        min="3"
      />
    </label>
    <label>
      <div class="visually-hidden">Your name:</div>
      <input
        v-model.trim="$store.state.yourName"
        class="input input--text"
        type="text"
        placeholder="Your name"
        required
        min="3"
      >
    </label>
    <button class="music-challenge-btn btn" type="submit" :disabled="isLoading">
      Add comment
    </button>
  </form>
</template>

<script>
import axios from 'axios'
import fetchToken from '@/assets/js/fetchRecaptchaToken'

export default {
  props: ['songId', 'yourName'],
  data () {
    return {
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
          creator: this.$store.state.yourName,
          token
        })
      }).then(res => {
        this.$emit('comment', res.data)
      }).finally(() => {
        this.isLoading = false
        this.text = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: 8fr 4fr 3fr;
  grid-gap: 5px;

  @include mq($until: tablet) {
    display: block;
  }
}

.input {
  width: 100%;
  padding: 10px 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
  background: white;

  &--textarea {
    transition: height 0.2s;
    height: 42px;

    &:focus {
      height: 5em;
    }
  }
}

.btn {
  @include mq($until: tablet) {
    width: 100%;
    margin-top: 5px;
  }
}
</style>

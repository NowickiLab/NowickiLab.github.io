<template lang="html">
  <div>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.text }}
        <span class="comment__creator">{{ comment.creator }}</span>
      </li>
    </ul>

    <form @submit.prevent="onSubmit">
      <label>
        Your name <br>
        <input type="text" v-model.trim="creator" placeholder="Your name" required min="3">
      </label>

      <br>

      <label>
        Comment <br>
        <textarea cols="30" rows="10" v-model.trim="text" required min="3"/>
      </label>

      <button type="submit" :disabled="isLoading">
        Add comment
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['comments', 'songId'],
  data () {
    return {
      creator: '',
      text: '',
      isLoading: false
    }
  },
  methods: {
    onSubmit (e) {
      if (this.isLoading) return

      this.isLoading = true
      axios.post('/comments', {
        songId: this.songId,
        text: this.text,
        creator: this.creator
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

</style>

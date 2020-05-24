<template lang="html">
  <form @submit.prevent="onSubmit">
    <label>
      Song title <br>
      <input type="text" required min="3" v-model="title"> <br>
    </label>
    <label>
      Youtube link to song <br>
      <input type="url" v-model="link"> <br>
    </label>
    <label>
      Why did you choose that song? <br>
      <textarea v-model="description" cols="30" rows="10"/> <br>
    </label>
    <label>
      Your name: <br>
      <input type="text" v-model="creator" required min="3"> <br>
    </label>

    <button type="submit">
      Send your song
    </button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      isLoading: false,
      title: '',
      description: '',
      link: '',
      creator: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.isLoading) return

      axios.post('/songs', {
        title: this.title,
        link: this.link,
        description: this.description,
        creator: this.creator,
        day: this.$route.query.nr
      }).then(res => {
        const song = res.data
        this.$emit('songAdded', song)
      }).finally(() => {
        this.isLoading = false
        this.title = ''
        this.link = ''
        this.description = ''
      })

    }
  }
}
</script>

<style lang="scss" scoped>

</style>

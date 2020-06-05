<template lang="html">
  <form class="form" @submit.prevent="onSubmit">
    <label class="label">
      Song title:
      <input class="input" type="text" required min="3" v-model="title" placeholder="Enter song's title"> <br>
    </label>
    <label class="label">
      YouTube link to song:
      <input class="input" type="url" v-model="link" placeholder="Add a YouTube link to your song"> <br>
    </label>
    <label class="label">
      Why did you choose that song?
      <textarea class="input " v-model="description" cols="40" rows="5" placeholder="Provide a short explanation"/> <br>
    </label>
    <label class="label">
      Your name:
      <input class="input" type="text" v-model="$store.state.yourName" required min="3" placeholder="Your name"> <br>
    </label>

    <div class="btn-wrap">
      <button class="music-challenge-btn" type="submit">
        Send your song
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import fetchToken from '@/assets/js/fetchRecaptchaToken'

export default {
  data () {
    return {
      isLoading: false,
      title: '',
      description: '',
      link: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.isLoading) return

      fetchToken().then(token => {
        return axios.post('/songs', {
          title: this.title,
          link: this.link,
          description: this.description,
          creator: this.$store.state.yourName,
          day: this.$route.query.nr,
          token
        })
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
.form {
  padding: 10px 0;
  margin: 110px 0 10px;
  color: #494949;

  @include mq($until: tablet) {
    margin: 10px 0;
  }
}

.label {
  display: block;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 8px 10px;
  margin: 5px 0;
}

.btn-wrap {
  text-align: right;
}
</style>
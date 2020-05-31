<template lang="html">
  <form class="add-song" @submit.prevent="onSubmit">
      <label class="title-label">
        Song title <br>
        <input class="title-input" type="text" required min="3" v-model="title" placeholder="Enter song's title"> <br>
      </label>
      <label class="link-label">
        YouTube link to song <br>
        <input class="link-input" type="url" v-model="link" placeholder="Add a YouTube link to your song"> <br>
      </label>
      <label class="description-label">
        Why did you choose that song? <br>
        <textarea class="description-input" v-model="description" cols="40" rows="5" placeholder="Provide a short explanation"/> <br>
      </label>
      <label class="name-label">
        Your name: <br>
        <input class="name-input" type="text" v-model="creator" required min="3" placeholder="Your name"> <br>
      </label>

    <button class="send" type="submit">
      Send your song
    </button>
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
      link: '',
      creator: ''
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
          creator: this.creator,
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
$green: #179a00;
$blue: #166fa3;
$darker-blue: #115379;
$orange: #dc5800;
$blue-border: #214f69;

// * {
//   border: 1px solid green;
// }

@media (max-width: 650px){
  .send {
    width: 100%;
  }
}

@media (min-width: 650px){
  .send {
    width: 165px;
  }
}

.add-song {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;
  margin-bottom: 10px;
  color: #494949;
}

.title-label, .link-label, .description-label, .name-label {
  width: 100%;
}

.title-input, .link-input, .name-input {
  height: 35px;
}

.title-input, .link-input, .description-input, .name-input {
  width: 100%;
  border: 2px solid darkgrey;
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0;
}

.send { // button
  padding: 10px;
  height: 40px;
  border: 2px solid $blue-border;
  border-radius: 4px;
  background: $blue;
  color: white;
  margin-top: 4px;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    background: $blue-border;
  }
}
</style>
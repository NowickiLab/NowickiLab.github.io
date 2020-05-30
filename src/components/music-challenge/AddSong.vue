<template lang="html">
  <form class="add-song" @submit.prevent="onSubmit">
      <label class="title-label">
        Song title <br>
        <input class="title-input" type="text" required min="3" v-model="title"> <br>
      </label>
      <label class="link-label">
        Youtube link to song <br>
        <input class="link-input" type="url" v-model="link"> <br>
      </label>
      <label class="description-label">
        Why did you choose that song? <br>
        <textarea class="description-input" v-model="description" cols="40" rows="5"/> <br>
      </label>
      <label class="name-label">
        Your name: <br>
        <input class="name-input" type="text" v-model="creator" required min="3"> <br>
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
$blue2: #91dce7;
$orange2: #fdbb81;

// * {
//   border: 1px solid green;
// }

.add-song {
  width: 100%;
  background: $blue2;
  border-radius: 10px;
  padding: 10px 17px;
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
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
}

.send {
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: $orange2;
  margin-top: 4px;
}
</style>
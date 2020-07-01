<template lang="html">
  <div>
    <form @submit.prevent="submit" ref="form">
      <input type="file" name="file">
      <input type="email" name="mail" value="adrian.wieprzkowicz@gmail.com" required placeholder="Your email address">
      <br>
      <div v-if="errors.length > 0">
        {{ errors }}
      </div>
      <textarea v-model="csv" class="textarea" spellcheck="false"/>
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      isLoading: false,
      csv: '',
      errors: []
    }
  },
  methods: {
    submit () {
      if (this.isLoading) return
      this.isLoading = true

      // const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      // const formData = new FormData(this.$refs.form)

      // axios.post('http://localhost:3000/', formData, config)
      //   .then(console.log)
      //   .catch(console.error)
      //   .finally(() => {
      //     this.isLoading = false
      //   })
    }
  },
  watch: {
    csv (csv) {
      this.errors = []

      const isAlphaNumeric = str => str.match(/^(\w|\d|\,|\n)*$/)

      if (!isAlphaNumeric(csv)) {
        this.errors.push('Data can contains only alpha-numeric, _, chars')
      }

      const rows = csv.split('\n')
      const headers = rows[2]

      console.log(headers)

      // console.log(csv)
    }
  }
}
</script>

<style lang="scss" scoped>
  .textarea {
    font-family: monospace;
    font-size: 16px;
    width: 100%;
    height: 600px;
  }
</style>

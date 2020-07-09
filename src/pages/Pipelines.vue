<template lang="html">
  <div>
    <form @submit.prevent="submit" ref="form">
      <input type="file" name="file" accept=".csv" @change="loadTextFromFile">
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
      
      axios.post('http://localhost:3000/', { csv: this.csv })
        .then(console.log)
        .catch(console.error)
        .finally(() => {
          this.isLoading = false
        })
    },
    loadTextFromFile (ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()

      reader.onload = e => this.csv = e.target.result.trim()
      reader.readAsText(file)
    }
  },
  watch: {
    csv (csv) {
      this.errors = []

      const isAlphaNumeric = str => str.match(/^(\w|\d|\,|\n)*$/)

      if (!isAlphaNumeric(csv)) {
        this.errors.push('Data must contain only alphanumeric symbols, _, chars')
      }

      const data = csv.split('\n').map(row => row.split(','))
      const headers = data[2]

      const isNatural = data.slice(3).map(row => row.slice(2, row.length - 3).every(element => parseInt(element) >= 0))
      const firstValues = data.slice(3).map(row => row[0])

      if (!isNatural.every(Boolean)) this.errors.push('Every value must be a number >= 0')
      if ([...new Set(firstValues)].length !== firstValues.length) this.errors.push('Each value in the first column must be unique')
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

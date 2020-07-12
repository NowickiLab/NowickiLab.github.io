<template lang="html">
  <div>
    <form @submit.prevent="submit" ref="form">
      <input type="file" name="file" accept=".csv" @change="loadTextFromFile">
      <input type="email" name="mail" v-model="mail" required placeholder="Your email address">
      <br>
      <div v-if="errors.length > 0">
        {{ errors }}
      </div>
      <textarea v-model="csv" class="textarea" spellcheck="false"/>
      <input v-if="xyValues === false" type="file" name="file" accept=".csv" @change="loadAnotherTextFromFile">
      <textarea v-if="xyValues === false" v-model="xy" class="textarea" spellcheck="false"/>
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
      xy: '',
      xyValues: true,
      data: '',
      errors: [],
      mail: ''
    }
  },
  methods: {
    submit () {
      if (this.isLoading) return
      this.isLoading = true

      let csvToSend = this.csv
      const rows = this.csv.split('\n')

      if (this.xy === '' && this.xyValues === false) {
        csvToSend = rows.slice(0,2).map(row => row.replace('\n',',,,\n')).concat(rows[2].replace('\n',',x,y\n')).concat(rows.slice(3).map(row => row.replace('\n',',,,\n'))).join('\n')
      }

      else if (this.xy !== '' && this.xyValues === false) { 
        csvToSend = rows.slice(0,2).map(row => row.replace('\n',',,,\n')).concat(rows.slice(2).map((row, index) => row.concat(',', this.xy.split('\n')[index]))).join('\n')
      }
      
      axios.post('http://localhost:3000/', { email: this.mail, csv: csvToSend })
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
    },
    loadAnotherTextFromFile (ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()

      reader.onload = e => this.xy = e.target.result.trim()
      reader.readAsText(file)
    }
  },
  watch: {
    csv (csv) {
      this.errors = []
      if (csv !== undefined) {
        this.data = csv.split('\n').map(row => row.split(','))
        const headers = csv.split('\n')[2]

        const isAlphaNumeric = str => str.match(/^(\w|\d|\,|\n)*$/)
        const isNatural = this.data.slice(3).map(row => row.slice(2, row.length - 3).every(element => parseInt(element) >= 0))
        const firstValues = this.data.slice(3).map(row => row[0])

        if (!isAlphaNumeric(csv)) this.errors.push('Data must contain only alphanumeric symbols, _, chars')
        if (!isNatural.every(Boolean)) this.errors.push('Every value must be a number >= 0')
        if ([...new Set(firstValues)].length !== firstValues.length) this.errors.push('Each value in the first column must be unique')

        this.xyValues = headers.includes('x,y') || headers.includes('X,Y')
      }
    },
    xy (xy) {
      if (!this.xyValues) {
        const values = xy.split('\n')
        const sampleCount = this.data.length - 2

        if (!(values[0].includes('x,y') || values[0].includes('X,Y'))) this.errors.push('missing x,y columns')
        if (values.length  !== sampleCount) this.errors.push('x,y count must be equal to sample count')
      }
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

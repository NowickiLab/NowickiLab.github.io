<template lang="html">
  <div>
    <div v-for="i in availableDays">
      <router-link :to="`/music-challenge/day?nr=${i}`">
        {{ daysInfo[i] }}
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from '@/assets/js/music-axios'
import daysInfo from '@/assets/js/daysInfo'

export default {
  metaInfo: {
    title: 'Music Challenge - Nowicki Lab',
    titleTemplate: '%s'
  },
  data () {
    return {
      availableDays: 0,
      daysInfo
    }
  },
  mounted () {
    axios.get('/available-days').then(res => {
      this.availableDays = res.data.availableDays
    })
  }
}
</script>

<style lang="scss" scoped>
</style>

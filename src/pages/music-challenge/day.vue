<template lang="html">
  <div>
    <h2>{{ title }}</h2>
    <hr>
    <SongPreview v-for="song in songs" :song="song" :key="song.id"/>
  </div>
</template>

<script>
import daysInfo from '@/assets/js/daysInfo'
import SongPreview from '@/components/SongPreview'
import axios from 'axios'

export default {
  components: {
    SongPreview
  },
  data () {
    return {
      title: 'Loading...',
      songs: []
    }
  },
  async mounted () {
    if (!localStorage.getItem('likedSongs')) {
      localStorage.setItem('likedSongs', JSON.stringify([]))
    }

    const inRange = (min, nr, max) => nr >= min && nr <= max
    const nr = window.parseInt(this.$route.query.nr)
    if (!inRange(1, nr, 30)) {
      this.$router.replace('/music-challenge/')
      return
    }

    const { data } = await axios.get(`/songs/${ nr }`)
    this.songs = data


    this.title = daysInfo[nr]
  }
}
</script>

<style lang="scss" scoped>

</style>

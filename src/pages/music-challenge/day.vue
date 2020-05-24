<template lang="html">
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <h2>{{ title }}</h2>
    <hr>
    <AddSong @songAdded="songAdded"/>
    <hr>
    <SongPreview v-for="song in songs" :song="song" :key="song.id"/>
  </div>
</template>

<script>
import daysInfo from '@/assets/js/daysInfo'
import SongPreview from '@/components/music-challenge/SongPreview'
import AddSong from '@/components/music-challenge/AddSong'
import axios from 'axios'

export default {
  components: {
    SongPreview,
    AddSong
  },
  data () {
    return {
      isLoading: true,
      title: '',
      songs: []
    }
  },
  async mounted () {
    if (!localStorage.getItem('likedSongs')) {
      localStorage.setItem('likedSongs', JSON.stringify([]))
    }

    const inRange = (min, nr, max) => nr >= min && nr <= max
    const nr = window.parseFloat(this.$route.query.nr)

    if (!inRange(1, nr, 30) || nr !== Math.floor(nr)) {
      this.$router.replace('/music-challenge/')
      return
    }

    const { availableDays } = await axios.get('/available-days').then(res => res.data)

    if (nr > availableDays) {
      this.$router.replace('/music-challenge/')
      return
    }

    const { data } = await axios.get(`/songs/${ nr }`)
    this.songs = data
    this.title = daysInfo[nr]
    this.isLoading = false
  },
  methods: {
    songAdded (song) {
      this.songs.push(song)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

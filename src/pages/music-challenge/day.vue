<template lang="html">
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <h2>{{ title }}</h2>
    <AddSong @songAdded="songAdded"/>
    <Song v-for="song in sortedSongs" :song="song" :key="song.id"/>
  </div>
</template>

<script>
import daysInfo from '@/assets/js/daysInfo'
import Song from '@/components/music-challenge/Song'
import AddSong from '@/components/music-challenge/AddSong'
import axios from 'axios'

export default {
  metaInfo: {
    script: [
      { src: `https://www.google.com/recaptcha/api.js?render=${process.env.GRIDSOME_RECAPTCHA_KEY}` }
    ],
    title: '30-Day Music Challenge - Nowicki Lab',
    titleTemplate: '%s'
  },
  components: {
    Song,
    AddSong
  },
  data () {
    return {
      isLoading: true,
      title: '',
      songs: []
    }
  },
  computed: {
    sortedSongs () {
      return this.songs.sort((a, b) => new Date(a.date) - new Date(b.date) < 0 ? 1 : -1)
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

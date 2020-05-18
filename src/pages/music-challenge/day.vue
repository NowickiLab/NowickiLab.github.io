<template lang="html">
  <div>
    <h2>{{ title }}</h2>
    <hr>
    <SongPreview v-for="song in songs" :song="song" :key="song.id"/>
  </div>
</template>

<script>
import daysInfo from '@/assets/js/daysInfo'
import fetchDayInfo from '@/assets/js/fetchDayInfo'
import fetchSpreadSheet from '@/assets/js/fetchSpreadSheets'
import SongPreview from '@/components/SongPreview'

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
    const inRange = (min, max) => nr => nr >= min && nr <= max
    const nr = window.parseInt(this.$route.query.nr)
    if (!inRange(1, 30)(nr)) {
      this.$router.replace('/music-challenge/')
      return
    }

    const sheetsNames = await fetchSpreadSheet()

    const hasDayNumber = name => parseInt(name.split(' ')[2]) === nr

    if (!sheetsNames.some(hasDayNumber)) {
      this.$router.replace('/music-challenge/')
      return
    }

    this.title = daysInfo[nr]
    this.songs = await fetchDayInfo(nr)
  }
}
</script>

<style lang="scss" scoped>

</style>

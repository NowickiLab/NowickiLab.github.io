<template lang="html">
  <div>
    c
  </div>
</template>

<script>
import fetchSpreadSheets from '@/assets/js/fetchSpreadSheets'
import fetchDayInfo from '@/assets/js/fetchDayInfo'


export default {
  // https://sheets.googleapis.com/v4/spreadsheets/1cPNVwN9y4TghoLTGDmtvqZskY70z5Tzfyb5rVBH6t3E/values/Form%20Responses%201!A1:E1000?&key=AIzaSyCDItEkgYsQvyMbUsk_NxXdbpDih_dsB3E
  mounted () {
    fetchSpreadSheets().then(console.log)

    fetchDayInfo(1).then(console.log)
    fetchDayInfo(2).then(console.log)
  }
}
</script>

<style lang="scss" scoped>

</style>

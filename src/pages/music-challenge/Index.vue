<template lang="html">
  <div>
    <h1>Welcome to the EPP-UTK music challenge!</h1>
    <p>
      <b>Music</b> helps to maintain the internal balance. <br>
      <b>Music</b> is culture. <b>Music</b> is serenity. <b>Music</b> connects people.
    </p>
    <p>
      We wish to use music to connect to one another in these trying times. Hope you enjoy it! 
      Ideas on the further topics in this challenge are very welcome at mnowicki(at)utk.edu
    </p>

    <h4>Rules to observe</h4>

    <ol>
      <li>Posting for each day takes place between <b>00:00 AM</b> and <b>23:59 PM</b> (Memphis time).</li>
      <li><b>Stories</b> that are related to the song/music you post are encouraged.</li>
      <!-- <li>Past daily challenges (topics) are available at <a href="/music-challenge/">nowickilab.science/music-challenge</a></li> -->
      <li>Likes and comments on the current and past daily topics are also encouraged. Liking and commenting is not limited to each day - let's enjoy enjoy the music any time we feel like it!</li>
      <!-- <li>No limits on likes/comments on others' music and stories!</li> -->
      <li>Please post <b>one</b> (max. two) songs for each day.</li>
      <li>Post carefully! If anyone needs to change/remove their song or story, please email me.</li>
      <li>Let's <b>keep it clean!</b> This is somewhat work-related activity, and as such we should have the maximum possible fun while keeping it civil. There will be moderation implemented for inappropriate comments/songs.</li>
      <li>You can post your song under any name you wish. Can be your actual real life name, but does not have to be.</li>
      <li>Likes (admiration of others) and <b>bringing joy</b> into other peoples' lives is the real price here. We do not anticipate any tangible awards.</li>
      <!-- <li>The website works both on computers and cellphones. Some experience may vary.</li> -->
    </ol>

    <p>Bring your SOs, family, friends, UTK community... The more the marrier!</p>

    <div class="days">
      <router-link
        v-for="day in days"
        :key="day.day"
        class="day"
        :to="`/music-challenge/day?nr=${day.day}`"
      >
        <div>
          <span class="day-nr">Day {{ day.day }} </span>
          <span class="date">From: {{ dateFrom(day) }}</span>
        </div>
        <div class="theme">
          {{ day.theme }}
        </div>
        <div class="social">
          {{ day.songsNumber }} songs, {{ day.commentsNumber }} comments
        </div>
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
      days: []
    }
  },
  computed: {
    dateFrom () {
      return day => new Date(day.dateFrom).toLocaleString()
    }
  },
  mounted () {
    axios.get('/days').then(res => {
      this.days = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.days {
  margin-top: 40px;
}

.day {
  display: block;
  color: #58595B;
  text-decoration: none;
  margin: 10px 0;
  border: 2px solid #ddd;
  padding: 10px;
}

.day-nr {
  font-size: 20px;
  font-weight: bold;
}

.date {
  font-size: 14px;
}

.theme {
  margin: 10px 0;
}

.social {
  // font-size: 12px;
  font-size: 14px;
}
</style>

<template lang="html">
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <div class="title-wrap">
      <h2 class="title">Day {{ day.day }}: {{ day.theme }}</h2>
    </div>

    <div v-if="day.isPast" class="past">
      <p>Past</p>
    </div>
    <AddSong v-else @songAdded="songAdded"/>


    <div v-if="day.songs.length > 0" class="songs">
      <Song v-for="song in day.songs" :song="song" :key="song.id"/>
    </div>
    <p v-else class="no-songs">
      <span v-if="day.isPast">Unfortunetly, there are <b>no songs</b> for day {{ day.day }}</span>
      <span v-else>There are <b>no songs</b> for day {{ day.day }} yet. Be the first one and send your song!</span>
    </p>

    <hr>

    <div class="buttons">
      <button class="music-challenge-btn navigate">
        <svg class="icon left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        Previous day
      </button>
      <button class="music-challenge-btn back">Back to days list</button>
      <button class="music-challenge-btn navigate">
        Next day
        <svg class="icon right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
      </button>
    </div>

  </div>
</template>

<script>
import daysInfo from '@/assets/js/daysInfo'
import Song from '@/components/music-challenge/Song'
import AddSong from '@/components/music-challenge/AddSong'
import axios from '@/assets/js/music-axios'

export default {
  metaInfo: {
    script: [
      { src: `https://www.google.com/recaptcha/api.js?render=${process.env.GRIDSOME_RECAPTCHA_KEY}` }
    ],
    title: 'Music Challenge - Nowicki Lab',
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
      day: null,
    }
  },
  mounted () {
    if (!localStorage.getItem('likedSongs')) {
      localStorage.setItem('likedSongs', JSON.stringify([]))
    }

    const nr = window.parseFloat(this.$route.query.nr)

    if (nr < 1 || nr !== Math.floor(nr)) {
      this.$router.replace('/music-challenge/')
      return
    }

    axios.get(`/day/${nr}`).then(res => {
      this.day = res.data
    }).catch(err => {
      this.$router.replace('/music-challenge/')
    }).finally(() => {
      this.isLoading = false
    })
  },
  methods: {
    songAdded (song) {
      this.songs.push(song)
    }
  }
}
</script>

<style lang="scss" scoped>
@include mq($from: tablet) {
  .title-wrap {
    position: fixed;
    top: 43px;
    left: 0;
    width: 100%;
    margin: 0 auto;
    background: white;
    border-bottom: 1px solid #d1d1d1;
    z-index: 1;
  }

  .title {
    max-width: $max-width;
    margin: 0 auto;
    padding: 10px 15px;
    font-size: 22px;
  }

  .no-songs {
    text-align: center;
    margin: 80px 0 40px;
  }

  .past {
    padding-top: 30px;
  }
}

.music-challenge-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31%;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @include mq($until: tablet) {
    flex-wrap: wrap;
  }
}

@include mq($until: tablet) {
  .back {
    order: 1;
    width: 100%;
  }

  .navigate {
    width: 49%;
    margin-bottom: 8px;
  }
}

.left {
  margin-right: 20px;
}

.right {
  margin-left: 20px;
}

</style>

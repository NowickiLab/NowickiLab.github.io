<template lang="html">
  <div class="song">
    <h3 class="title">{{ song.title }}</h3>
    <div class="name">Sender: <b>{{ song.creator }}</b> ({{ date }})</div>
    <p class="description">{{ song.description }}</p>

    <Like :song="song"/>

    <iframe
      v-if="videoId"
      class="video"
      :src="`https://www.youtube.com/embed/${videoId}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <Comments :comments="song.comments"/>
    <AddComment :songId="song.id" @comment="onComment"/>
  </div>
</template>

<script>
import Comments from './Comments'
import AddComment from './AddComment'
import Like from './Like'
import fetchToken from '@/assets/js/fetchRecaptchaToken'
import axios from '@/assets/js/music-axios'

export default {
  props: ['song'],
  components: {
    Comments,
    AddComment,
    Like
  },
  data () {
    return {
      showIframe: false
    }
  },
  computed: {
    videoId () {
      return ((this.song.link.match(/v=([^&|$|#]+)/) || [])[1]) ||
        ((this.song.link.match(/https\:\/\/youtu\.be\/(.*)/) || [])[1])
    },
    date () {
      return new Date(this.song.date).toLocaleString()
    }
  },
  methods: {
    onComment (comment) {
      this.song.comments.push(comment)
    }
  }
}
</script>

<style lang="scss" scoped>
.song {
  border-top: 1px solid #ccc;
  margin: 30px 0;
}

.title {
  font-size: 20px;
  color: #179a00;
  margin: 20px 0 10px;
}

.name {
  font-size: 14px;
  margin: -10px 0 10px;
}

.description {
  margin-bottom: 10px;
}

.video {
  display: block;
  width: 100%;
  height: 325px;
  border-radius: 4px;
  margin: 12px 0 8px;
}
</style>
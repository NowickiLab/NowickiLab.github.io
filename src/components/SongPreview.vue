<template lang="html">
  <div>
    <h3 class="title">{{ song.song }}</h3>
    <div class="name">{{ song.name }}</div>
    <button v-if="videoId" @click="showIframe = !showIframe">Show youtube video</button> (<a target="_blank" :href="song.link">{{ song.link }}</a>)
    
    <iframe v-if="showIframe && videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p class="desc">{{ song.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showIframe: false
    }
  },
  computed: {
    videoId () {
      return (this.song.link.match(/v=([^&|$|#]+)/) || [])[1]
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 0;
  }

  .name {
    color: darkgray;
    font-size: 12px;
  }
</style>

<template lang="html">
  <ul class="comments">
    <li class="comment" v-for="comment in comments" :key="comment.id">
      <span class="creator">{{ comment.creator }} </span>
      <span class="date">({{ date(comment) }})</span>
      <div>{{ comment.text }}</div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import fetchToken from '@/assets/js/fetchRecaptchaToken'


export default {
  props: ['comments'],
  computed: {
    date () {
      return comment => new Date(comment.date).toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  list-style: none;
  padding-left: 0;
}

.comment {
  position: relative;
  border-radius: 4px;
  border: 2px solid #ddd;
  padding: 8px 10px 10px;
  margin: 4px 0;
}

.date {
  font-size: 12px;
  margin: -3px 0;
  color: #aaa;
}

.creator {
  color: #dc5800;
  font-weight: bold;
}
</style>

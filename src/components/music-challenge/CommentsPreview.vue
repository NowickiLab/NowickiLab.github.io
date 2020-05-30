<template lang="html">
  <div class="comments">
    <ul class="posted">
      <li class="single" v-for="comment in comments" :key="comment.id">
        {{ comment.text }}
        <span class="creator">~{{ comment.creator }}</span>
      </li>
    </ul>

    <form class="add-new" @submit.prevent="onSubmit">
      <label>
        <!-- Comment <br> -->
        <textarea class="comment-content" cols="30" rows="4" v-model.trim="text" placeholder="Write a comment..." required min="3"/>
      </label>
      <label>
        <!-- Your name <br> -->
        <input class="creator-name" type="text" v-model.trim="creator" placeholder="Your name" required min="3">
      </label>

      <button class="add-comment" type="submit" :disabled="isLoading">
        Add comment
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import fetchToken from '@/assets/js/fetchRecaptchaToken'

export default {
  props: ['comments', 'songId'],
  data () {
    return {
      creator: '',
      text: '',
      isLoading: false
    }
  },
  methods: {
    onSubmit (e) {
      if (this.isLoading) return

      this.isLoading = true
      fetchToken().then(token => {
        return axios.post('/comments', {
          songId: this.songId,
          text: this.text,
          creator: this.creator,
          token
        })
      }).then(res => {
        const comment = res.data
        this.comments.push(comment)
      }).finally(() => {
        this.isLoading = false
        this.text = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// * {
//   border: 1px solid blue;
// }

$blue1: #09b6d1;
$green1: #c2df64;
$orange1: #fdb06d;

.posted {
  list-style: none;
  padding-left: 0;
}

.single {
  background: white;
  border-radius: 10px;
  padding: 10px;
  margin: 4px 0;
}

.creator {
  color: $blue1;
  font-style: italic;
}

.add-new {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  background: $green1;
  padding: 8px;
  border-radius: 10px;
  width: 100%;
}

.comments {
  width: 100%;
}

.creator-name, .comment-content, .add-comment {
  padding: 5px 8px;
  border-radius: 10px;
  border: none;
  height: 40px;
  margin-top: 5px;
  background: white;
}

.add-comment {
  background: $orange1;
}

.comment-content {
  // margin-top: 5px;
  transition: all 0.5s ease;
  padding-top: 12px;
  &:focus {
    height: 7em;
  }
}
</style>

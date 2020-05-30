<template lang="html">
  <div class="comments">
    <span class="comments-title">Comments:</span>
    <ul class="posted">
      <li class="single" v-for="comment in comments" :key="comment.id">
        <span class="creator">{{ comment.creator }}:</span>
        {{ comment.text }}
      </li>
    </ul>

    <form class="add-new" @submit.prevent="onSubmit">
      <label>
        <!-- Comment <br> -->
        <textarea class="comment-content" cols="30" rows="1" v-model.trim="text" placeholder="Write a comment..." required min="3"/>
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
$green: #179a00;
$blue: #166fa3;
$orange: #dc5800;
$blue-border: #214f69;

// * {
//   border: 1px solid blue;
// }

.posted {
  list-style: none;
  padding-left: 0;
}

.single {
  border-radius: 4px;
  border: 2px solid lightgrey;
  padding: 10px;
  margin: 4px 0;
}

.comments-title {
  margin-top: 100px;
}

.creator {
  color: $orange;
  font-weight: bold;
}

@media screen and (max-width: 650px){
  .add-new {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .creator-name, .comment-content, .add-comment {
    width: 100%;
  }
}

@media screen and (min-width: 650px) {
  .add-new {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    width: 100%;
  }
}

.comments {
  width: 100%;
  margin: 10px 0;
}

.comment-content {
  transition: all 0.5s ease;
  padding-top: 12px;
  &:focus {
    height: 7em;
  }
}
.creator-name, .comment-content {
  padding: 10px 8px;
  border: 2px solid darkgrey;
  border-radius: 4px;
  margin-top: 5px;
  background: white;
}

.add-comment { // button
  padding: 10px;
  height: 40px;
  border: 2px solid $blue-border;
  border-radius: 4px;
  background: $blue;
  color: white;
  margin-top: 5px;
}

</style>

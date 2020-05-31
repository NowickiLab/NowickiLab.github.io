<template lang="html">
  <div class="comments">
    <!-- <span class="comments-title">Comments:</span> -->
    <button class="add-comment" @click="addComment = !addComment">
      <svg class="comment-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>
      <span class="button-text">Comment</span>
    </button> 
    <form class="add-new" v-if="addComment" @submit.prevent="onSubmit">
      <label>
        <textarea class="comment-content" cols="30" rows="1" v-model.trim="text" placeholder="Write a comment..." required min="3"/>
      </label>
      <label>
        <input class="creator-name" type="text" v-model.trim="creator" placeholder="Your name" required min="3">
      </label>

      <button class="post-comment" type="submit" :disabled="isLoading">
        Add comment
      </button>
    </form>
    <ul class="posted">
      <li class="single" v-for="comment in comments" :key="comment.id">
        <span class="creator">{{ comment.creator }}:</span>
        {{ comment.text }}
      </li>
    </ul>

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
      isLoading: false,
      addComment: false
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

@media (max-width: 650px) {
  .add-new {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .creator-name, .comment-content, .post-comment {
    width: 100%;
  }

  .post-comment {
    margin-top: 10px;
  }

  .add-comment {
    width: 48%;
    padding: 0 16px;
    align-self: flex-end;
  }

  .button-text {
    margin-left: 10px;
  }
}

@media (min-width: 650px) {
  .add-new {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
  }

  .post-comment {
    margin-top: 5px;
  }

  .add-comment {
    width: 155px;
    margin-left: 150px;    
    justify-content: space-around;
  }
}

.comments {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin-bottom: 10px;
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

.add-comment {
  display: flex;
  align-items: center;
}

.comment-icon {
  width: auto;
  height: 20px;
  fill: white;
}

.post-comment, .add-comment { // button
  padding: 10px;
  height: 41px;
  border: 2px solid $blue-border;
  border-radius: 4px;
  background: $blue;
  color: white;
  &:hover {
    cursor: pointer;
    background: $blue-border;
  }
}
</style>

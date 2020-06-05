import axios from 'axios'

export default axios.create({
  baseURL: process.env.GRIDSOME_MUSIC_API_URL
})

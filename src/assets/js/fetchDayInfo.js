import axios from 'axios'

let uid = 1

export default function fetchDayInfo (nr) {
  return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.GRIDSOME_GOOGLE_SHEET_ID}/values/Form%20Responses%20${nr}!A1:E1000/?key=${process.env.GRIDSOME_GOOGLE_KEY}`).then(res => {
    return res.data.values.splice(1).map(info => {
      return {
        id: uid++,
        date: info[0],
        song: info[1],
        desc: info[2],
        link: info[3],
        name: info[4]
      }
    })
  })
}

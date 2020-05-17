import axios from 'axios'

export default function fetchDayInfo (nr) {
  return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.GRIDSOME_GOOGLE_SHEET_ID}/values/Form%20Responses%20${nr}!A1:E1000/?key=${process.env.GRIDSOME_GOOGLE_KEY}`).then(res => {
    return res.data.values.splice(1).map(info => {
      return {
        date: info[0],
        name: info[1],
        song: info[2],
        desc: info[3],
        link: info[4]
      }
    })
  })
}

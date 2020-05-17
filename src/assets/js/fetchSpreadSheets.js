import axios from 'axios'

export default function fetchSpreadSheets () {
  return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.GRIDSOME_GOOGLE_SHEET_ID}?key=${process.env.GRIDSOME_GOOGLE_KEY}`).then(res => {
    return res.data.sheets.map(sheet => {
      return sheet.properties.title
    })
  })
}

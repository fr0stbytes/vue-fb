import axios from 'axios'

export default {
  created () {
    axios.get('https://aegean-guides.firebaseio.com/syros/cafebars.json').then(response => {
      // return data.json()
      this.bars = response.data
    }).then(function (data) {
      var barsArray = []
      for (let key in data) {
        data[key].id = key
        barsArray.push(data[key])
      }
    })
  }
}

import axios from 'axios'

export default {
  created () {
    axios.get('https://aegean-guides.firebaseio.com/syros/restaurants.json').then(response => {
      // return data.json()
      this.restaurants = response.data
    }).then(function (data) {
      var restaurantsArray = []
      for (let key in data) {
        data[key].id = key
        restaurantsArray.push(data[key])
      }
    })
  }
}

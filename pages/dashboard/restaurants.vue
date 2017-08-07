<template>
  <div class="container has-margin-3">
    <p class="title is-2">Restaurants <span class="subtitle is-4"><router-link to="/dashboard/create-restaurant">Add new</router-link></span></p>
    <div class="has-margin-2 column is-half">
      <input class="input" type="text" v-model="search" placeholder="Search...">
    </div>
    <div class="has-margin-3">
      <ul v-for="restaurant in filteredRestaurants">
        <li>
          <div class="card">
            <div class="columns">
              <div class="column is-three-quarters">
                <a><p class="title is-5">{{ restaurant.title }}</p></a>
                <p class="subtitle is-6"> {{ restaurant.address}} </p>
              </div>
              <div class="column has-text-right">
                <a class="button is-dark is-inverted">Edit</a>
                <a class="button is-danger is-inverted">Delete</a>
              </div>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import restaurantsFirebase from '../../mixins/restaurantsFirebase'

export default {

  layout: 'dashboard-layout',

  data () {
    return {
      restaurants: [],
      search: ''
    }
  },

  mixins: [restaurantsFirebase],
  computed: {

    filteredRestaurants: function () {
      return this.restaurants.filter((restaurant) => {
        return restaurant.title.match(this.search.toUpperCase())
      })
    }
  }
}

</script>

<style lang="sass" scoped>
  .card
    margin: 1em
    padding: 1em


</style>

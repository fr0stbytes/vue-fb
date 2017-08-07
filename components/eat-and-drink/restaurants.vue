<template>
  <div>
    <div class="columns">
      <div class="column is-one-quarter">
        <p class="notification is-info">
          <code class="html">is-one-quarter</code>
        </p>
      </div>
      <div class="column">
        <div class="columns">
          <div class="column is-one-third is-desktop">
            <div class="card" v-for="restaurant in restaurants">
              {{ restaurant.title }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import restaurantsFirebase from '../../mixins/restaurantsFirebase'

export default {
  name: 'Restaurants',
  data () {
    return {
      restaurants: []
    }
  },

  mixins: [restaurantsFirebase]
}

</script>

<style lang="scss">

</style>

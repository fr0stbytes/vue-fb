<template>
  <div class="container has-margin-5">
    <p class="title is-2 is-spaced">Eat & Drink in Syros</p>
    <p class="subtitle is-6">123 listings found</p>
    <div class="tabs has-margin-3">
      <ul>
        <li id="tab-1" v-bind:class="{ 'is-active': isActive }" @click="showCafeBars1()"><a>Cafe & Bars</a></li>
        <li id="tab-2" v-bind:class="{ 'is-active': isActive }"  @click="showRestaurants1()"><a> Restaurants </a></li>
        <li id="tab-3" v-bind:class="{ 'is-active': isActive }"  @click="showTaverns1()"><a>Taverns & Grill</a></li>
      </ul>
    </div>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Restaurants from '~components/eat-and-drink/restaurants.vue'
import CafeAndBars from '~components/eat-and-drink/cafe-and-bars.vue'
import TavernsAndGrill from '~components/eat-and-drink/taverns-and-grill.vue'

export default {
  name: 'EatAndDrink',
  data () {
    return {
      showRestaurants: false,
      showTaverns: false,
      showCafeBars: true
    }
  },
  components: {
    'restaurants': Restaurants,
    'cafe-and-bars': CafeAndBars,
    'taverns-and-grill': TavernsAndGrill
  },
  computed: {
    dynamicComponent () {
      if (this.showRestaurants) {
        return 'restaurants'
      } else if (this.showTaverns) {
        return 'taverns-and-grill'
      } else {
        return 'cafe-and-bars'
      }
    }
  },

  methods: {
    showCafeBars1: function () {
      this.showRestaurants = false
      this.showTaverns = false
      this.showCafeBars = true
    },
    showRestaurants1: function () {
      this.showRestaurants = true
      this.showTaverns = false
      this.showCafeBars = false
    },
    showTaverns1: function () {
      this.showRestaurants = false
      this.showTaverns = true
      this.showCafeBars = false
    }
  }
}

</script>

<style lang="scss">

</style>

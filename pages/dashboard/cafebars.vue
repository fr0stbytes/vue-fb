<template>
  <div class="container has-margin-3">
    <p class="title is-2">Cafe and bars <a class="button is-success is-large is-inverted">Add new</a></p>
    <div class="has-margin-2 column is-half">
      <input class="input" type="text" v-model="search" placeholder="Search...">
    </div>
    <div class="has-margin-3">
      <ul v-for="bar in filteredBars">
        <li>
          <div class="card">
            <div class="columns">
              <div class="column is-three-quarters">
                <a><p class="title is-5">{{ bar.title }}</p></a>
                <p class="subtitle is-6"> {{ bar.address}} </p>
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
import barsFirebase from '../../mixins/barsFirebase'

export default {

  layout: 'dashboard-layout',

  data () {
    return {
      bars: [],
      search: ''
    }
  },

  mixins: [barsFirebase],
  computed: {

    filteredBars: function () {
      return this.bars.filter((bar) => {
        return bar.title.match(this.search.toUpperCase())
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

<template>
  <div>
    <ul v-for="bar in bars">
      <li>{{ bar.title }}</li>
    </ul>
  </div>
</template>

<script>
import barsFirebase from '../../mixins/barsFirebase'

export default {
  name: 'CafeAndBars',
  data () {
    return {
      bars: []
    }
  },

  mixins: [barsFirebase]
}

</script>

<style lang="scss">

</style>

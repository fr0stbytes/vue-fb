<template>
  <nav class="navbar">
  <div class="navbar-brand">
    <router-link class="button is-white" to="/"><img src="../../static/aegean-guides-logo.svg" alt="Aegean Guides"></router-link>
    <div class="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="navbar-menu">
    <login-modal v-if="showLoginModal" @close="showLoginModal = false"></login-modal>
    <div class="navbar-end">
      <a class="navbar-item button is-white" to="/dashboard">
        Plan your journey
      </a>
      <button @click="showLoginModal = true" class="navbar-item button is-primary">
        Sign in /Sign up
      </button>
      <a class="navbar-item button is-white" to="/dashboard">
        <img src="../../static/search_black.svg" alt="Search">
      </a>
    </div>
  </div>
</nav>
</template>

<script>
import LoginModal from '~components/app-header/login-modal/login-modal'

export default {
  name: 'AppNavbarTop',
  data () {
    return {
      showLoginModal: false
    }
  },

  components: {
    'login-modal': LoginModal
  }

}
</script>

<style lang="scss">

</style>

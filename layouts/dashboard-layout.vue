<template>
  <div class="main-container">
    <div class="app-sidebar">
      <aside class="menu">
        <div class="logo">
          <a><img src="" alt=""></a>
        </div>
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><router-link to="/dashboard">Dashboard</router-link></li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
        <ul class="menu-list">
          <li><router-link to="/dashboard/restaurants">Restaurants</router-link></li>
          <li><router-link to="/dashboard/cafebars">Cafe and bars</router-link></li>
          <li><a>Taverns and grill</a></li>
        </ul>
      </aside>
    </div>
    <div class="dashboard-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/initial-variables"

$primary:    #3386ff !default

@import "~bulma/bulma"

.button.is-white
  color: #6c6c6c
.button.is-white:hover, .button.is-white.is-hovered
  color: #3386ff

.main-container
  overflow: hidden

.has-margin-5
  margin-top: 5em

.has-margin-3
  margin-top: 3em

.has-margin-2
  margin-top: 2em

.app-sidebar
  position: fixed
  top: 0
  left: 0
  bottom: 0
  padding: 20px 0 50px 20px
  width: 200px
  min-width: 45px
  max-height: 100vh
  z-index: 1024 - 1
  background: #FFF
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1)
  overflow-y: auto
  overflow-x: hidden

.dashboard-container
  margin-left: 200px
  padding-left: 3em

  .textarea
    min-height: 160px

</style>

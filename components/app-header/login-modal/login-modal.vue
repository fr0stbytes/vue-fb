<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head has-text-centered">
        <p class="modal-card-title">Login in to Aegean Guides</p>
        <button class="delete" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        <div class="card-content">
          <div class="title is-5">
            Welcome
          </div>
          <div class="subtitle is-6">
            For a better user experience sign in to Aegean Guides so you can fully plan and customize your next journey!
          </div>
          <div class="button is-fullwidth is-medium is-facebook">
            Continue with Facebook
          </div>
          <div class="button is-fullwidth is-medium">
            Continue with Google
          </div>
          <div class="button is-fullwidth is-medium">
            Sign in with email
          </div>
          <div class="button is-fullwidth is-primary is-inverted">
            Don't have an account? Sign up
          </div>
        </div>
      </section>
      <footer class="modal-card-foot is-small">
        <p class="is-small">
          To use Aegean Guides you must have cookies enabled. <br>
          Also, we’ll never post to Facebook or Google without your permission. For more info, please see Login FAQ.
        </p>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginModal',
  components: {

  }
}

</script>

<style lang="scss" scoped>
  .card-content {
    padding: 0 20%
  }
  .is-small {
    font-size: .75rem
  }
  .button {
    margin-top: .5rem;
  }

  .is-facebook {
    background-color: #3B5998;
    color: #f2f2f2;
  }
</style>

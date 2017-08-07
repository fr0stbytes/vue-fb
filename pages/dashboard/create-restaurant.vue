<template>
  <div class="container has-margin-3">
    <p class="title is-3">Create new restaurant</p>
    <div class="columns">
      <div class="column is-three-quarters has-margin-1">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" required placeholder="Add a title" v-model="restaurant.title">
          </div>
        </div>
        <label class="label">Address</label>
        <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" placeholder="street" v-model="restaurant.address.street">
          </div>
          <div class="control">
            <input class="input" type="text" placeholder="number" v-model="restaurant.address.number">
          </div>
          <div class="control">
            <input class="input" type="text" placeholder="postcode" v-model="restaurant.address.postcode">
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" required placeholder="latitude" v-model="restaurant.latitude">
          </div>
          <div class="control">
            <input class="input" type="text" required placeholder="longitude" v-model="restaurant.longitude">
          </div>
        </div>
        <label class="label">Contact info</label>
        <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" required placeholder="phone" v-model="restaurant.phone">
          </div>
          <div class="control">
            <input class="input" type="text" required placeholder="email" v-model="restaurant.email">
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" required placeholder="website_url" v-model="restaurant.website_url">
          </div>
          <div class="control">
            <input class="input" type="text" required placeholder="facebook" v-model="restaurant.facebook">
          </div>
        </div>
        <div class="field">
          <label class="label">Short description</label>
          <div class="control">
            <input class="input" type="text" placeholder="A short description" v-model="restaurant.short_description">
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" placeholder="Detailed description" v-model="restaurant.description"></textarea>
          </div>
        </div>
      </div>

        <div class="column">
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link">Cancel</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  layout: 'dashboard-layout',
  name: 'CreateRestaurant',
  data () {
    return {
      restaurant: {
        title: '',
        short_description: '',
        description: '',
        address: {
          street: '',
          number: '',
          postcode: ''
        },
        phone: '',
        email: '',
        website_url: '',
        facebook: '',
        latitude: '',
        longitude: ''
      }
    }
  }
}
</script>

<style lang="scss">


</style>

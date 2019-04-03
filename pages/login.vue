<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col class="pb-4" cols="6">
        <b-form method="post" @submit.prevent="login">
          <b-form-group label="Email:" label-for="email">
            <b-form-input
              id="email"
              v-model="user.email"
              trim
              type="email"
              placeholder="email"
            />
          </b-form-group>
          <b-form-group label="Password:" label-for="password">
            <b-form-input
              id="password"
              v-model="user.password"
              trim
              type="password"
              placeholder="********"
            />
          </b-form-group>
          <b-button type="submit" variant="primary" class="w-100">
            Login
          </b-button>
          <p class="py-2">
            Don't have an account yet?
            <b-link>Talk to us</b-link>
          </p>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'authentication',
  computed: {
    user() {
      return {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login: function() {
      this.$auth.loginWith('local', {
        data: {
          user: {
            email: this.user.email,
            password: this.user.password
          }
        }
      })
    }
  },
  auth: true
}
</script>

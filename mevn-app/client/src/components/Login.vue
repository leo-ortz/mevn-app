<template>
  <!--ORIGINAL JXR HTML/CSS TO GO HERE!-->
  <v-layout column>
    <v-flex xs6>
      <panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb2">
          <form name="jxr-app-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br/>
            <v-text-field label="Password" type="password" autocomplete="new-password" v-model="password"></v-text-field>
          </form>
          <br/>
          <div class="error" v-html="error" />
          <br/>
          <v-btn class="primary" @click="login">Login</v-btn>
          <p>
            <v-btn @click="navigateTo({name: 'forgot-password'})">Don't remember your password?</v-btn>
          </p>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  /*
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  */
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('home')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: white;
  font-size:24px;
}
</style>

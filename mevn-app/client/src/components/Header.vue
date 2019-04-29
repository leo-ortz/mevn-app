<template>
  <v-toolbar fixed class="white" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat dark @click="navigateTo({name: 'root'})">
        <img class="resp-img" src="../assets/jxr_logo.png" alt="JXR App"/>
      </v-btn>
    </v-toolbar-title>

    <v-toolbar-items>
      <!--<router-link to="register">-->
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat dark class="black--text"  @click="navigateTo({name: 'home'})">
        Home
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat dark class="black--text" @click="navigateTo({name: 'dashboard'})">
        Dashboard
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat dark class="black--text" @click="navigateTo({name: 'todo'})">
        To Do List
      </v-btn>
      <v-btn
        v-if="$store.state.isUserAdmin"
        flat dark class="black--text" @click="navigateTo({name: 'admin'})">
        Admin
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <!--<router-link to="register">-->
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat dark class="black--text" @click="navigateTo({name: 'login'})">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat dark class="black--text" @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat dark class="black--text" @click="logout">
        Log Out
      </v-btn>

      <!--</router-link>-->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setIsAdmin', false)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.center {
text-align:center;
}

.resp-img {
  width:47%;
  height:auto;
}
v-btn{
  color:black;
}
</style>

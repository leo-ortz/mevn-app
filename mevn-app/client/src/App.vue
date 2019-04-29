<link rel="stylesheet" media="screen" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\|Material+Icons" />
<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.primary {
    background-color: #1976d2 !important;
    border-color: #1976d2 !important;
}
.v-input--selection-controls__input input {
  opacity:1;
}
</style>

<template>
  <v-layout align-center column row wrap>
    <v-flex xs12 sm6>
      <panel title="Home">
        <h2>Welcome!</h2>
          <date-picker />
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import DatePicker from '@/components/DatePicker'

export default {
  components: {
    Panel,
    DatePicker
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

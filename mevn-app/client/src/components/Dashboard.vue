<template>
  <v-layout column>
    <v-flex xs12 sm6 md3>
      <panel title="Dashboard">
          <v-layout row>
            <v-flex xs4 order-md2 order-xs1>
              <v-card tile flat color=" lighten-1">
<span class="text" style="font-weight: bold;">Gains</span>
            <v-text-field
              label="#"
              solo
              outline
            ></v-text-field>              </v-card>
            </v-flex>
            <v-flex xs4 order-md3 order-xs2>
              <v-card tile flat color=" lighten-2">
            <span class="text" style="font-weight: bold;">Costs</span>
            <v-text-field
              label="#"
              solo
              outline
            ></v-text-field>
              </v-card>
            </v-flex>
            <v-flex xs4 order-md1 order-xs3>
              <v-card tile flat color=" darken-1">
                <span class="text" style="font-weight: bold;">Balance</span>
                <v-text-field
                  label="#"
                  solo
                  outline
                ></v-text-field>
              </v-card>
            </v-flex>
          </v-layout>
          <v-divider
            class="mx-3"
            inset
            vertical
          ></v-divider>
          <v-flex xs6>
            <v-text-field label="First Name" v-model="user.firstName"></v-text-field>
            <br/>
            <v-text-field label="Last Name" v-model="user.lastName"></v-text-field>
            <br/>
            <v-text-field label="Job Description" v-model="user.jobDescription"></v-text-field>
            <br/>
            <v-text-field label="Email" v-model="user.email"></v-text-field>
          </v-flex>
     </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import UsersService from '@/services/UsersService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      user: {},
      checkbox1: false,
      checkbox2: false
    }
  },
  async mounted () {
    try {
      // call API
      const userId = this.$store.state.user.id
      this.user = (await UsersService.show(userId)).data
      console.log('user', this.user)
    } catch (err) {
      console.log(err)
    }
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
.fieldset-text {
padding-top: 19px;
padding-bottom: 6px;
}
.text {
text-align: left;
padding-right: 62%;
}

</style>

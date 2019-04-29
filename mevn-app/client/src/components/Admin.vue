<template>
  <v-layout column>
    <v-flex xs6>
      <panel title="Admin">
        <h2>Today's Totals</h2>
          <v-container>
            <div class="text-med-left inline">
              <v-layout row wrap style="height:250px; overflow: scroll;">
                <!--
                <v-flex xs12 sm4 md4 class="pr-4">
                  <v-checkbox class="v-checkbox" v-model="profile1" :label="`profile1: ${profile1.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile2" :label="`profile2: ${profile2.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile3" :label="`profile3: ${profile3.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile4" :label="`profile4: ${profile4.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile5" :label="`profile5: ${profile5.toString()}`"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm4 md4 class="pl-4">
                  <v-checkbox class="v-checkbox" v-model="profile6" :label="`profile6: ${profile6.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile7" :label="`profile7: ${profile7.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile8" :label="`profile8: ${profile8.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile9" :label="`profile9: ${profile9.toString()}`"></v-checkbox>
                  <v-checkbox class="v-checkbox" v-model="profile10" :label="`profile10: ${profile10.toString()}`"></v-checkbox>
                </v-flex>
                -->
                <div v-for="user in users" :key="user.id" style="margin:auto; text-align:left;margin-bottom:10px;">
                  Profile{{user.id}}:
                  {{user.firstName}}
                  {{user.lastName}} -
                  Email:{{user.email}} -
                  Gains: {{user.gains}} -
                  Costs: {{user.costs}} -
                  Balance: {{user.balance}}
                </div>
              </v-layout>
            </div>
            <!--
            <div class="text-med-right inline top">
              <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="value"
                color="primary"
                class="top"
              >
                {{ value }}
              </v-progress-circular>
            </div>
            -->
            <br/><br/>
            <div class="text-xs-center">
                <v-flex xs12 sm6 md3 class="inline">
                <span class="text" style="font-weight: bold;">Total Gains</span>
                <v-text-field
                  disabled
                  label="#"
                  solo
                  outline
                  v-model="gains"
                ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3 class="inline">
                <span class="text" style="font-weight: bold;">Total Costs</span>
                <v-text-field
                  disabled
                  label="#"
                  solo
                  outline
                  v-model="costs"
                ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3 class="inline">
                  <span class="text" style="font-weight: bold;">Total Balance</span>
                  <v-text-field
                    disabled
                    label="#"
                    solo
                    outline
                    v-model="balance"
                  ></v-text-field>
                </v-flex>
            </div>

            <v-btn dark class="primary" @click="navigateTo({name: 'older-dates'})">See Older Dates</v-btn>
            <br/><br/>

            <h2>BACKLOG</h2>
            <v-flex class="text-xs-center">
              <v-textarea
                box
                name="input-7-4"
                label="Box textarea"
                value="BACKLOG NOTES TO GO HERE."
              ></v-textarea>
            </v-flex>
          </v-container>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// import AdminService from '@/services/AdminService'
import UsersService from '@/services/UsersService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      interval: {},
      value: 0,
      profile1: false,
      profile2: false,
      profile3: false,
      profile4: false,
      profile5: false,
      profile6: false,
      profile7: false,
      profile8: false,
      profile9: false,
      profile10: false,
      costs: 0,
      gains: 0,
      balance: 0,
      users: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    var gains = this.gains
    var costs = this.costs
    // do a reqeust to backend for all the songs
    this.users = (await UsersService.getAllUsers()).data

    for (var i = 0; i < this.users.length; i++) {
        gains += parseInt(this.users[i].gains)
    }
    this.gains = gains

    for (var j = 0; j < this.users.length; j++) {
      costs += parseInt(this.users[j].costs)
    }
    this.costs = costs
    // loop through users and add current gain to gains
    // this.gains += user[i].gains
    // this.costs += user[i].costs
    // when complete this.gains - this.costs = this.balance
    this.balance = gains - costs
    /*
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
    */
  }}
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
.inline {
  display:inline-block;
}
.top {
  vertical-align:top;
}
.center-users {
  margin:auto;
}
</style>

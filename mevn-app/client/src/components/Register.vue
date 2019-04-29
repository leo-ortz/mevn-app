<template>
  <!--ORIGINAL JXR HTML/CSS TO GO HERE!-->
  <v-layout column>
    <v-flex xs6>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb2">
          <form name="jxr-app-form" autocomplete="off">
            <v-text-field label="First Name" v-model="firstName"></v-text-field>
            <br/>
            <v-text-field label="Last Name" v-model="lastName"></v-text-field>
            <br/>
            <v-text-field label="Job Description" v-model="jobDescription"></v-text-field>
            <br/>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br/>
            <v-text-field label="Password" type="password" autocomplete="new-password" v-model="password"></v-text-field>
            <!--
            <v-text-field label="Retype password" type="password" autocomplete="new-password" v-model="password"></v-text-field>
            -->
            <br/><br/>
            <h3>Check off following benefits you currently receive from Company:</h3>
            <br/>

            <v-layout row wrap>
              <v-flex xs12 sm4 md4>
                <v-checkbox
                  v-model="benefit1"
                  label="Vehicle"
                  color="red"
                  value="red"
                ></v-checkbox>
                <v-checkbox
                  v-model="benefit2"
                  label="Cell Phone"
                  color="red darken-3"
                  value="red darken-3"
                  hide-details
                ></v-checkbox>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-checkbox
                  v-model="benefit3"
                  label="Gas Card"
                  color="indigo"
                  value="indigo"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="benefit4"
                  label="Medical"
                  color="indigo darken-3"
                  value="indigo darken-3"
                  hide-details
                ></v-checkbox>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-checkbox
                  v-model="benefit5"
                  label="Allowance"
                  color="orange"
                  value="orange"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="benefit6"
                  label="Other"
                  color="orange darken-3"
                  value="orange darken-3"
                  hide-details
                ></v-checkbox>
              </v-flex>
            </v-layout>

            <br/><br/>
            <h3>Choose TDL Items that pertain to you:</h3>
            <br/>
            <v-flex xs12 sm4 md4 class="tdl-container">
              <v-checkbox class="v-checkbox" v-model="tdl1" :label="`Update Schedule: ${tdl1.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl2" :label="`Daily Reports: ${tdl2.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl3" :label="`Agenda: ${tdl3.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl4" :label="`Making Minutes: ${tdl4.toString()}`"></v-checkbox>
             <v-checkbox class="v-checkbox" v-model="tdl5" :label="`Proposed Change (other): ${tdl5.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl6" :label="`3 Week Look Ahead: ${tdl6.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl7" :label="`Check Emails: ${tdl7.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl8" :label="`Inspect Site: ${tdl8.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl9" :label="`Weekly Safety Tailgate: ${tdl9.toString()}`"></v-checkbox>
              <v-checkbox class="v-checkbox" v-model="tdl10" :label="`RFIs: ${tdl10.toString()}`"></v-checkbox>
            </v-flex>
            <br/><br/>
            <h3>Select your work hours:</h3>
            <p>TODO: add time sliders</p>
            <br/><br/>
            <v-checkbox class="is-admin" v-model="isAdmin">
              <div slot="label">
                Are you an administrator?
              </div>
            </v-checkbox>
            <v-checkbox class="you-agree" v-model="youAgree">
              <div slot="label">
                You agree to log in at the start of each work day.
              </div>
            </v-checkbox>
            <br/>
          </form>
          <br/>
          <div class="error" v-html="error" />
          <br/>
          <v-btn class="primary" @click="register">Register</v-btn>
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
      firstName: '',
      lastName: '',
      jobDescription: '',
      email: '',
      password: '',
      benefit1: false,
      benefit2: false,
      benefit3: false,
      benefit4: false,
      benefit5: false,
      benefit6: false,
      tdl1: false,
      tdl2: false,
      tdl3: false,
      tdl4: false,
      tdl5: false,
      tdl6: false,
      tdl7: false,
      tdl8: false,
      tdl9: false,
      tdl10: false,
      isAdmin: false,
      youAgree: false,
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          jobDescription: this.jobDescription,
          /*
          benefit1: this.benefit1,
          benefit2: this.benefit2,
          benefit3: this.benefit3,
          benefit4: this.benefit4,
          benefit5: this.benefit5,
          benefit6: this.benefit6,
          */
          isAdmin: (this.isAdmin) ? 1 : 0, // converting boolean to integer for sqlite
          youAgree: (this.youAgree) ? 1 : 0 // converting boolean to integer for sqlite
        })
        console.log('RESPONSE: ', response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setIsAdmin', response.data.isAdmin)
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
  font-size: 24px;
}
.tdl-container {
  width:400px;
  display:inline-block;
  margin:auto;
}

.you-agree, .is-admin{
  width:400px;
  display:block;
  margin:auto;
}
</style>

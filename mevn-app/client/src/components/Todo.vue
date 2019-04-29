<template>
  <v-layout column>
    <v-flex xs6>
      <panel title="To Do List">
          <v-container fluid>
          <h2>PERCENT&nbsp;COMPLETE:&nbsp;___% </h2>
          <v-progress-linear class="border-spacing" v-model="valueDeterminate"></v-progress-linear>
            <v-checkbox class="checkbox height"
            v-model="checkbox1"
            :label="`Daily reports: `"
            color="blue"
                ></v-checkbox>
                <v-flex xs12 sm6 md3>
                <v-text-field
                label="notes ..."
                ></v-text-field>
               </v-flex>
            <v-checkbox class="checkbox height"
            v-model="checkbox2"
            :label="`Agenda: `"
            color="blue"
            ></v-checkbox>
                <v-flex xs12 sm6 md3>
                <v-text-field
                label="notes ..."
                ></v-text-field>
               </v-flex>
            <v-checkbox class="checkbox height" id="number-3"
             v-model="checkbox3"
             :label="`Meeting minutes: `">
            </v-checkbox>
            <v-flex xs12 sm6 md3>
              <v-text-field
              label="notes ..."
              ></v-text-field>
           </v-flex>
            <v-checkbox class="checkbox height" id="number-4"
             v-model="checkbox4"
             :label="`Inspect: `">
            </v-checkbox>
                <v-flex xs12 sm6 md3>
                <v-text-field
                label="notes ..."
                ></v-text-field>
               </v-flex>
             <v-checkbox class="checkbox height" id="number-5"
             v-model="checkbox5"
             :label="`RFIs: `">
            </v-checkbox>
                <v-flex xs12 sm6 md3>
                <v-text-field
                label="notes ..."
                ></v-text-field>
               </v-flex>
            <v-checkbox class="checkbox height" id="number-6"
             v-model="checkbox6"
             :label="`Check emails: `">
            </v-checkbox>
                <v-flex xs12 sm6 md3>
                <v-text-field
                label="notes ..."
                ></v-text-field>
               </v-flex>
          </v-container>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
      return {
        valueDeterminate: 50,
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false
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
label {
  font-weight: bold;
}
.border-spacing {
padding-bottom: 35px;
}
.checkbox {
  font-weight: bold;
}

.height {
height: 25px;
}
</style>

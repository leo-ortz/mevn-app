<template>
	<v-layout column>
		<v-flex xs6 offset-xs2>
			<panel title="Users">
				<h3>Users</h3>
        <v-btn flat dark class="primary" @click="navigateTo({name: 'users-create'})">Create New User</v-btn>
        <div v-for="user in users" :key="user.id" style="margin:auto;">
          Profile {{user.id}} -
          First Name:{{user.firstName}} -
          Last Name:{{user.lastName}} -
          Email:{{user.email}} -
          Gains: {{user.gains}} -
          Costs: {{user.costs}} -
          Balance: {{user.balance}}
          <br/>
          <v-btn dark class="primary" @click="navigateTo({
            name: 'user',
            params: {
              userId: user.id
            }
          })">
          View
          </v-btn>
        </div>
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
        users: null
      }
  },
  async mounted () {
    // do a reqeust to backend for all the songs
    this.users = (await UsersService.getAllUsers()).data
    console.log('users', this.users)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async create () {
      try {
        // call API
        await UsersService.post(this.user)
        this.$router.push({
          name: 'users'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.center-users {
  margin:auto;
}
</style>

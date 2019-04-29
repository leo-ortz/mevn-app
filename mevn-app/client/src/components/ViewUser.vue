<template>
  <v-layout column>
    <v-flex xs12 sm6 md3>
      <panel title="User Metadata">
		<h3>User {{user.id}}</h3>
		<div class="user-firstName">
			<b>First Name: </b>
			{{user.firstName}}
        </div>
        <div class="user-lastName">
			<b>Last Name:</b>{{user.lastName}}
		</div>
          Email:{{user.email}} -
          Gains: {{user.gains}} -
          Costs: {{user.costs}} -
          Balance: {{user.balance}}
        <br/>
		<v-btn dark class="primary" @click="navigateTo({
			name: 'user-edit',
				params: {
					userId: user.id
				}
			})">
			Edit
		</v-btn>
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
			user: {}
		}
	},
	async mounted () {
		const userId = this.$store.state.route.params.userId
		console.log(userId)
		this.user = (await UsersService.show(userId)).data
		console.log('THIS USER', this.user)
	},
	methods: {
		navigateTo (route) {
			this.$router.push(route)
		}
	}
}
</script>

<style scoped>
</style>

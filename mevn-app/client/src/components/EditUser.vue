<template>
  <v-layout column>
    <v-flex xs12 sm6 md3>
      <panel title="Edit User Metadata">
		<h3>User {{user.id}}</h3>
		<div class="user-firstName">
			<b>First Name: </b>
			{{user.firstName}}
        </div>
        <div class="user-lastName">
			<b>Last Name: </b>
			{{user.lastName}}
        </div>
          Email:{{user.email}} -
		<div class="user-gains">
          Gains: {{user.gains}} -
        </div>
		<div class="user-costs">
          Costs: {{user.costs}} -
		</div>
		<v-text-field
		label="Email"
		v-model="user.email"
		></v-text-field>
		<!--
		<v-text-field
		label="Password"
		v-model="user.password"
		></v-text-field>
        -->
		<v-text-field
		label="First Name"
		v-model="user.firstName"
		></v-text-field>
		<v-text-field
		label="Last Name"
		v-model="user.lastName"
		></v-text-field>
		<v-text-field
		label="Job Description"
		v-model="user.jobDescription"
		></v-text-field>
		<v-text-field
		label="Gains"
		v-model="user.gains"
		@change="updateBalance"
		></v-text-field>
		<v-text-field
		label="Costs"
		v-model="user.costs"
		@change="updateBalance"
		></v-text-field>
		<v-text-field
		disabled
		label="Balance"
		v-model="user.balance"
		></v-text-field>
		<v-btn dark class="primary" @click="save">Save User</v-btn>
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
	methods: {
		async save () {
			/*
			console.log('save clicked')
			this.error = null
			const areallFieldsFilledIn = Object
				.keys(this.user)
				.every(key => !!this.song[key])
			if (!areallFieldsFilledIn) {
				this.error = 'Please fill in all the required fields.'
				return
			}
			*/
			const userId = this.$store.state.route.params.userId
			console.log('save: ' + userId)

			try {
				await UsersService.put(this.user)
				console.log('this.user', this.user)
				this.$router.push({
					name: 'user',
					params: {
						userId: userId
					}
				})
			} catch (err) {
				console.log(err)
			}
		},
		updateBalance () {
			this.user.balance = this.user.gains - this.user.costs
			console.log('updateBalance: ' + this.user.balance)
		}
	},
	async mounted () {
		try {
			// call API
			const userId = this.$store.state.route.params.userId
			this.user = (await UsersService.show(userId)).data
			console.log('user', this.user)
		} catch (err) {
			console.log(err)
		}
	}
}
</script>

<style scoped>
</style>

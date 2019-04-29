<template>
	<v-layout>
		<v-flex xs5>
			<panel title="User Metadata">
				<v-text-field
				label="Email"
				v-model="user.email"
				></v-text-field>
				<v-text-field
				label="Password"
				v-model="user.password"
				></v-text-field>
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
				<v-checkbox label="You Agree" v-model="user.youAgree">
					<div>
						You agree to log in at the start of each work day.
					</div>
				</v-checkbox>
			</panel>
		</v-flex>
		<v-flex xs8>
			<v-btn dark class="primary" @click="create">Save User</v-btn>
		</v-flex>
	</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import UsersService from '@/services/UsersService'

export default {
	data () {
		return {
			user: {
				email: null,
				password: null,
				firstName: null,
				lastName: null,
				jobDescription: null,
				gains: 0,
				costs: 0,
				balance: 0,
				isAdmin: null,
				youAgree: null
			}
		}
	},
	methods: {
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
		},
		updateBalance () {
			this.user.balance = this.user.gains - this.user.costs
			console.log('updateBalance: ' + this.user.balance)
		}
	},
	components: {
		Panel
	}
}
</script>

<style scoped>
</style>

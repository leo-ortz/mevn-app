import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	plugins: [
		createPersistedState()
	],
	state: {
		token: null,
		user: null,
		isUserLoggedIn: false,
		isUserAdmin: false
	},
	mutations: {
		setToken (state, token) {
			state.token = token
			if (token) {
				state.isUserLoggedIn = true
			} else {
				state.isUserLoggedIn = false
			}
		},
		setUser (state, user) {
			console.log(user)
			state.user = user
		},
		setIsAdmin (state, isAdmin) {
			if (isAdmin === 1) {
				state.isUserAdmin = true
			} else {
				state.isUserAdmin = false
			}
		}
	},
	actions: {
		setToken ({commit}, token) {
			commit('setToken', token)
		},
		setUser ({commit}, user) {
			commit('setUser', user)
		},
		setIsAdmin ({commit}, isAdmin) {
			commit('setIsAdmin', isAdmin)
		}
	}
})

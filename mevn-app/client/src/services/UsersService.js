import Api from '@/services/Api'

// export object and call this object
// will make post request to express server
export default {
  getAllUsers () {
	console.log('get users')
	console.log(Api().get('users'))
    return Api().get('users')
  },
  show (userId) {
    return Api().get(`users/${userId}`)
  },
  post (user) {
    return Api().post('users', user)
  },
  put (user) {
    console.log('put user: ', JSON.stringify(user))
    var userId = user.id
    console.log('put userId: ', userId)
    return Api().put(`users/${user.id}`, user)
    // return Api().put('users', userId, user)
  }
}

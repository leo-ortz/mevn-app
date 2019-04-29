import Api from '@/services/Api'

// export register object and call this object
// will make post request to express server
export default {
  register (credentials) {
    console.log('CREDENTIALS: ', credentials)
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

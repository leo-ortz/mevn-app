import Api from '@/services/Api'

// export register object and call this object
// will make post request to express server
export default {
  getAllSongs () {
    return Api().get('admin')
  },
  post (admin) {
    return Api().post('admin', admin)
  }
}

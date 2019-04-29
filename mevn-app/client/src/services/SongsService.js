import Api from '@/services/Api'

// export register object and call this object
// will make post request to express server
export default {
  getAllSongs () {
	console.log('get songs')
	console.log(Api().get('songs'))
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}

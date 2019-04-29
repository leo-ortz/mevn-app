import axios from 'axios'

// returns axios object
export default () => {
  // return connector
  return axios.create({
    // point to backend api
    baseURL: 'http://localhost:8081/'
  })
}

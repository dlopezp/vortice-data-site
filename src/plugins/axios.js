import axios from 'axios'

export default ({ Vue }) => {
  axios.defaults.baseURL = 'https://s3-eu-west-1.amazonaws.com/swgoh-vortice-bbdd'
  Vue.prototype.$axios = axios
}

import axios from 'axios'

// const baseURL = 'http://127.0.0.1:8888'
const baseURL = 'http://vue-shop-api.itheima.net'

axios.defaults.baseURL = `${baseURL}/api/private/v1`
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})

export { axios, baseURL }

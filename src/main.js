import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ZkTable from 'vue-table-with-tree-grid'

import '@/assets/css/global.scss'
import '@/assets/fonts/iconfont.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://vue-shop-api.itheima.net/api/private/v1'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios

// Vue.use(ZkTable)
Vue.component('tree-table', ZkTable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

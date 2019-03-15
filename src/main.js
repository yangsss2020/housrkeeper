import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './common/styles/index.scss'
import './lib/rem'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './common/styles/iconfont.css'
import './lib/rem'
import 'swiper/dist/css/swiper.css' // 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './common/styles/iconfont.css'
import './lib/rem'
import 'swiper/dist/css/swiper.css' // 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import animate from 'animate.css'
// Vue.use(animate)
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
import loading2 from './common/images/loading1.gif'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // loading,
  adapter: {
    loading ({ el }) {
      const className = el.className
      if (className.indexOf('img_content_h') !== -1) {
        el.src = loading2
      } else if (className.indexOf('img_content_other_banner') !== -1) {
        el.src = loading2
      } else if (className.indexOf('img_content_area_banner') !== -1) {
        el.src = loading2
      } else {
        el.src = loading
      }
    }
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

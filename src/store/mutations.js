// 直接更新state的多个方法的对象
import {
  RECEIVE_SWIPER,
  RECEIVE_CATEGORY,
  RECEIVE_RECOMMEND,
  RECEIVE_AREA,
  RECEIVE_ENTERPRISE,
  RECEIVE_PRODUCT
} from './mutations-type'
// import Vue from 'vue'

export default {
  [RECEIVE_SWIPER] (state, { swiper }) {
    state.swiper = swiper
  },
  [RECEIVE_CATEGORY] (state, { category }) {
    state.category = category
  },
  [RECEIVE_RECOMMEND] (state, { recommend }) {
    state.recommend = recommend
  },
  [RECEIVE_AREA] (state, { area }) {
    state.area = area
  },
  [RECEIVE_ENTERPRISE] (state, { enterprise }) {
    state.enterprise = enterprise
  },
  [RECEIVE_PRODUCT] (state, { product }) {
    state.product = product
  }
}

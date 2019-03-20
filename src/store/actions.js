// 通过mutation间接更新state的多个方法的对象
import {
  RECEIVE_SWIPER,
  RECEIVE_CATEGORY,
  RECEIVE_RECOMMEND,
  RECEIVE_AREA,
  RECEIVE_ENTERPRISE,
  RECEIVE_PRODUCT
} from './mutations-type'
import {
  reqSwiper,
  reqCategory,
  reqRecommend,
  reqArea,
  reqEnterprise,
  reqProduct
} from '../api/index'

export default {
  async reqSwiper ({ commit }) {
    const result = await reqSwiper()
    if (result.code === 0) {
      const swiper = result.data
      commit(RECEIVE_SWIPER, { swiper })
    }
  },
  async reqCategory ({ commit }) {
    const result = await reqCategory()
    if (result.code === 0) {
      const category = result.data
      commit(RECEIVE_CATEGORY, { category })
    }
  },
  async reqRecommend ({ commit }) {
    const reslut = await reqRecommend()
    if (reslut.code === 0) {
      const recommend = reslut.data
      commit(RECEIVE_RECOMMEND, { recommend })
    }
  },
  async reqArea ({ commit }) {
    const reslut = await reqArea()
    if (reslut.code === 0) {
      const area = reslut.data
      commit(RECEIVE_AREA, { area })
    }
  },
  async reqEnterprise ({ commit }) {
    const reslut = await reqEnterprise()
    if (reslut.code === 0) {
      const enterprise = reslut.data
      commit(RECEIVE_ENTERPRISE, { enterprise })
    }
  },
  async reqProduct ({ commit }) {
    const reslut = await reqProduct()
    if (reslut.code === 0) {
      const product = reslut.data
      commit(RECEIVE_PRODUCT, { product })
    }
  }
}

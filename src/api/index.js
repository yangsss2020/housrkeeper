import ajax from './ajax'

const BASE_URL = '/api'
// // 1、根据经纬度获取位置详情<br/>
// export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//1. 获取轮播图
export const reqSwiper = () => ajax(BASE_URL + '/swiper')

//2. 获取category
export const reqCategory = () => ajax(BASE_URL + '/category')

//3. 获取首页推荐
export const reqRecommend = () => ajax(BASE_URL + '/recommend')
//4. 获取地区列表
export const reqArea = () => ajax(BASE_URL + '/area')

//5. 获取企业商品列表
export const reqEnterprise = () => ajax(BASE_URL + '/enterprise')

//6. 获取产品列表
export const reqProduct = () => ajax(BASE_URL + 'product')

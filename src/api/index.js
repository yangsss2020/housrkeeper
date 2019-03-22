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
export const reqProduct = () => ajax(BASE_URL + '/product')

//1. 获取一次性图形验证
export const reqCaptcha = () => ajax(BASE_URL + '/captcha')
//2.用户名密码登陆
export const loginPwd = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'post')
//3.获取手机短信
export const reqSendcode = (phone) => ajax(BASE_URL + '/sendcode', { phone })
//4. 手机短信登陆
export const loginSms = (phone, code) => ajax(BASE_URL + '/login_sms', { phone, code }, 'post')
//5. 注册
export const register = (name, nickname, pwd, tel) => ajax(BASE_URL + '/register', { name, nickname, pwd, tel }, 'post')
//6. 根据sesion中的userid, 查询对应的user
export const reqInfo = () => ajax(BASE_URL + '/userinfo')
//7.退出登录
export const reqLogout = () => ajax(BASE_URL + '/logout')

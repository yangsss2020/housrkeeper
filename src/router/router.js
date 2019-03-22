import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Other from '../pages/Other/Other'
import Person from '../pages/Penson/Person'
import Shop from '../pages/Shop/Shop'
import Category from '../pages/Category/Category'
import Recommend from '../pages/Recommend/PageRecommend'
import Area from '../pages/Area/Area'
import Goods from '../pages/Goods/Goods'
import SignIn from '../pages/Login/Login'
import PhoneLogin from '../pages/Login/components/phonelogin/phonelogin'
import accountLogin from '../pages/Login/components/accountlogin/accountlogin'
import Register from '../pages/Register/Register'
import PersonManag from '../pages/PersonManag/PersonManag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        showTabbar: true
      },
      component: Home
    },
    {
      path: '/other',
      name: 'other',
      meta: {
        showTabbar: true
      },
      component: Other
    },
    {
      path: '/person',
      name: 'person',
      meta: {
        showTabbar: true
      },
      component: Person
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        showTabbar: true
      },
      component: Shop
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/area',
      name: 'area',
      component: Area,
      meta: {
        showTabbar: true
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/goods/:id',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/singin',
      name: 'SignIn',
      component: SignIn,
      children: [
        {
          path: '',
          redirect: 'phonelogin'
        },
        {
          path: 'accountlogin',
          name: 'accountLogin',
          component: accountLogin
        },
        {
          path: 'phonelogin',
          name: 'PhoneLogin',
          component: PhoneLogin
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/personmanag',
      name: 'PersonManag',
      component: PersonManag
    }
  ]
})

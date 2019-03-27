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
import subOrder from '../pages/subOrder/subOrder'
import Address from '../pages/Address/Address'
import EditAddress from '../pages/EditAddress/EditAddress'
import AddAddress from '../pages/AddAddress/AddAddress'
import Order from '../pages/Order/Order'
import OrderAll from '../pages/Order/components/OrderAll/OrderAll'
import OrderDelivered from '../pages/Order/components/OrderDelivered/OrderDelivered'
import OrderPay from '../pages/Order/components/OrderPay/OrderPay'
import OrderPending from '../pages/Order/components/OrderPending/OrderPending'
import Season from '../pages/Season/Season'
import More from '../pages/More/More'
import Search from '../pages/Search/Search'

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
        showTabbar: true,
        keepAlive: true
      },
      component: Home
    },
    {
      path: '/other',
      name: 'other',
      meta: {
        showTabbar: true,
        keepAlive: true
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
      component: Category,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/area',
      name: 'area',
      component: Area,
      meta: {
        showTabbar: true,
        keepAlive: true
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/goods/:id',
      name: 'Goods',
      component: Goods,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/singin',
      name: 'SignIn',
      component: SignIn,
      redirect: '/singin/phonelogin',
      children: [
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
      component: Register,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/personmanag',
      name: 'PersonManag',
      component: PersonManag,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/suborder/:data',
      name: 'subOrder',
      component: subOrder,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/address',
      name: 'address',
      component: Address,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/editaddress',
      name: 'EditAddress',
      component: EditAddress,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/addaddress',
      name: 'AddAddress',
      component: AddAddress,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      redirect: '/order/orderall',
      children: [
        {
          path: 'orderall',
          name: 'OrderAll',
          component: OrderAll
        },
        {
          path: 'orderdelivered',
          name: 'OrderDelivered',
          component: OrderDelivered
        },
        {
          path: 'orderpay',
          name: 'OrderPay',
          component: OrderPay
        },
        {
          path: 'orderpending',
          name: 'OrderPending',
          component: OrderPending
        }
      ]
    },
    {
      path: '/season',
      name: 'Season',
      component: Season,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/more',
      name: 'More',
      component: More,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        keepAlive: true
      }
    }
  ]
})

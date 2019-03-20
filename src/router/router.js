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
    }
  ]
})

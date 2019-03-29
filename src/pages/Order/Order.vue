<template>
  <div class="Order">
    <loginbar title="我的订单" color="#F83478"/>
    <div class="nav_bar">
      <router-link to="/order/orderall" replace>全部</router-link>
      <router-link to="/order/orderpay" replace>待付款</router-link>
      <router-link to="/order/orderdelivered" replace>待发货</router-link>
      <router-link to="/order/orderpending" replace>待收货</router-link>
    </div>
    <div class="wrapper">
      <cube-scroll>
        <transition :name="transitionName" >
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Loginbar from '@/components/Loginbar/Loginbar'
import { mapState } from 'vuex'

export default {
  name: 'Order',
  data () {
    return {
      transitionName: ''
    }
  },
  computed: {
    ...mapState(['order'])
  },
  components: { Loginbar },
  watch: {
    $route (from, to) {
      if (!from.meta.index && !to.meta.index) return false
      if (from.meta.index > to.meta.index) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .Order {
    padding-top: 43px;

    .nav_bar {
      display: flex;
      justify-content: space-around;
      line-height: 35px;
      color: #666;

      .router-link-active {
        color: #EF0C0A;
      }
    }

    .wrapper {
      position: fixed;
      top: 78px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      background-color: #eee;

/*      .move_left-enter {
        transform: translate(-100%);
      }

      .move_left-leave-to {
        transform: translate(100%);
      }

      .move_right-enter {
        transform: translate(100%);
      }

      .move_right-leave-to {
        transform: translate(-100%);
      }

      .move_left-enter-active, .move_left-leave-active, .move_right-enter-active, .move_right-leave-active {
        transition: all .3s;
      }*/

      .slide-right-enter-active,
      .slide-right-leave-active,
      .slide-left-enter-active,
      .slide-left-leave-active {
        transition: transform 300ms;
        position: absolute;
      }

      .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }

      .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }

      .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }

      .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    }
  }
</style>

<template>
  <div class="Order">
    <loginbar title="我的订单" color="#F83478"/>
    <div class="nav_bar">
      <router-link to="/order/orderall">全部</router-link>
      <router-link to="/order/orderpay">待付款</router-link>
      <router-link to="/order/orderdelivered">待发货</router-link>
      <router-link to="/order/orderpending">待收货</router-link>
    </div>
    <div class="wrapper">
      <cube-scroll>
        <transition name="move" mode="out-in">
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
  computed: {
    ...mapState(['order'])
  },
  components: { Loginbar }
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

      .move-enter {
        transform: translate(-100%);
      }

      .move-leave-to {
        transform: translate(100%);
      }

      .move-enter-active, .move-leave-active {
        transition: all .3s;
      }
    }
  }
</style>

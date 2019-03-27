<template>
  <div class="subOrder">
    <topbar title="订单" color="#F83478"/>
    <div class="wrapper">
      <cube-scroll>
        <OrderAddress :totalPrice="totalPrice"/>
        <order-list :goods="goods" :totalCount="totalCount" :totalPrice="totalPrice"/>
      </cube-scroll>
    </div>
    <OrderSub :totalPrice="totalPrice" :totalCount="totalCount" :goods="goods"/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'
import OrderAddress from '@/pages/subOrder/components/OrderAddress/OrderAddress'
import OrderList from '@/pages/subOrder/components/OrderList/OrderList'
import OrderSub from '@/components/OrderSub/OrderSub'

export default {
  name: 'subOrder',
  computed: {
    goods () {
      let data = JSON.parse(this.$route.params.data)
      let goods = []
      if (data instanceof Array) {
        goods = data
      } else {
        goods.push(data)
      }
      return goods
    },
    totalCount () {
      const goods = this.goods
      let count = 0
      goods.forEach(item => {
        count += parseInt(item.count)
      })
      return count
    },
    totalPrice () {
      const goods = this.goods
      let price = 0
      goods.forEach(item => {
        price += parseInt(item.price)
      })
      return price
    }
  },
  components: { OrderSub, OrderList, OrderAddress, Topbar }
}
</script>

<style scoped lang="scss">
  .subOrder {
    .wrapper {
      position: fixed;
      top: 43px;
      bottom: 48px;
      left: 0;
      right: 0;
      overflow: hidden;
      background-color: #eee;
    }
  }
</style>

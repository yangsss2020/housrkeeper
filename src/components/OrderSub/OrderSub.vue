<template>
  <div class="OrderSub">
    <div class="right">
      <span>实付：</span>
      <span class="price">￥{{totalPrice}}.00</span>
    </div>
    <div class="left" @click="subOrder">
      提交订单
    </div>
    <div class="mark" v-if="showMark">
      <cube-loading :size="40"></cube-loading>
    </div>
  </div>
</template>

<script>
import { setorder } from '../../api/index'
import { mapState } from 'vuex'

export default {
  name: 'OrderSub',
  props: {
    totalPrice: Number,
    totalCount: Number,
    goods: Array
  },
  data () {
    return {
      showMark: false
    }
  },
  methods: {
    showAlert () {
      this.$createDialog({
        type: 'alert',
        title: '错误!',
        content: '请添加收货地址',
        icon: 'cubeic-alert'
      }).show()
    },
    async subOrder () {
      if (this.address.length) {
        this.showMark = true
        let code = 0
        this.goods.forEach(async item => {
          const result = await setorder(item)
          if (result.code !== 0) {
            code = result.code
            return false
          }
        })
        this.timeId = setTimeout(() => {
          this.showMark = false
          if (code === 0) {
            this.$router.replace('/order/orderpay')
            clearTimeout(this.timeId)
          }
        }, 1000)
      } else {
        this.showAlert()
      }
    }
  },
  computed: {
    ...mapState(['address'])
  }
}
</script>

<style scoped lang="scss">
  .OrderSub {
    height: 48px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    display: flex;

    .right {
      width: 68%;
      font-size: 15px;
      color: #333333;
      padding-left: 28px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 48px;

      .price {
        color: #FE275C;
      }
    }

    .left {
      background-color: #FF1346;
      width: 32%;
      text-align: center;
      line-height: 48px;
      color: #fff;
      font-size: 12px;
    }

    .mark {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .2);

      .cube-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>

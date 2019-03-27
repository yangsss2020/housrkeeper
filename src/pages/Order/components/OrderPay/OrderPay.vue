<template>
  <div class="OrderPay">
    <ul class="order_list border-bottom-1px" v-if="order.length">
      <li class="lsit_item" v-for="(item,index) in order" :key="index">
        <div class="head">
          <div class="left">
            <i class="iconfont">&#xe656;</i>
            <span>购物清单</span>
          </div>
          <div class="right">等待付款</div>
        </div>
        <div class="center">
          <div class="img">
            <img :src="BASE_URL+item.icomimg" alt="" class="img_content">
          </div>
          <div class="info">
            <div class="desc">{{item.title}}{{item.describe}}{{item.size}}装</div>
          </div>
          <div class="right">
            <div class="price">￥{{item.price}}</div>
            <div class="count">x{{item.count}}</div>
          </div>
        </div>
        <div class="footer">
          <span>共{{item.count}}件商品</span>
          <span>合计：<i class="price">￥{{item.price*item.count}}</i></span>
        </div>
        <ul class="btn_list">
          <li class="list_item" @click="del(index)">取消订单</li>
          <li class=" list_item
          ">朋友代付
          </li>
          <li class="list_item on" @click="pay(index)">付款</li>
        </ul>
      </li>
    </ul>
    <div class="no_address" v-else>
      <div class="img"></div>
      <p class="titel">您还没有相关订单哦！</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { delorder } from '../../../../api/index'

export default {
  name: 'OrderPay',
  data () {
    return {
      showList: true,
      BASE_URL: 'http://127.0.0.1:3000/',
      content: '',
      flag: true,
      list: []
    }
  },
  methods: {
    pay (index) {
      const price = this.order[index].price * this.order[index].count
      console.log(price)
      this.content = '您可以把' + price + '元打到支付宝13101060040,我们会及时给您安排发货!!!'
      this.showAlert()
    },
    showAlert () {
      this.$createDialog({
        type: 'alert',
        title: '抱歉,本商城还没开通支付通道',
        content: this.content,
        icon: 'cubeic-alert'
      }).show()
    },
    async del (index) {
      if (this.flag) {
        console.log(index)
        this.flag = false
        await delorder(index)
        await this.$store.dispatch('getorder')
        console.log(this.order)
        // if (result.code === 0) {
        //
        // }
        this.timer = setTimeout(() => {
          this.flag = true
        }, 100)
      }
    }
  },
  computed: {
    ...mapState(['order'])
  },
  mounted () {
    if (!this.order.length) {
      this.$store.dispatch('getorder')
    }
  },
  watch: {
    order (val) {
      this.list = val
      // this.$store.dispatch('getorder')
    }
  }

}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .OrderPay {
    .order_list {
      padding: 0 10px;

      .lsit_item {
        background-color: #fff;
        padding: 0 8px;
        margin-top: 10px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;

        .head {
          font-size: 12px;
          color: #333333;
          line-height: 40px;
          display: flex;
          justify-content: space-between;

          .left {
            .iconfont {
              font-size: 16px;
              margin-right: 10px;
            }
          }

          .right {
            color: #EF0C0A;
          }

        }

        .center {
          display: flex;
          justify-content: space-between;

          .img {
            width: 60px;
            height: 60px;

            .img_content {
              width: 100%;
              height: auto;
            }
          }

          .info {
            width: 200px;
            line-height: 22px;
            margin-top: -4px;
            color: #666666;

            .desc {
            }
          }

          .right {
            /*float: 1;*/
            .price {
            }

            .count {
            }
          }
        }

        .footer {
          padding-right: 15px;
          line-height: 20px;
          color: #333333;
          text-align: right;

          span {
            margin-left: 15px;
          }

          .price {
            font-style: normal;
          }
        }

        .btn_list {
          text-align: right;
          padding: 10px 0;

          .list_item {
            color: #666;
            display: inline-block;
            padding: 4px 8px;
            border: 1px solid #999999;
            margin-left: 8px;
            border-radius: 4px;
            text-align: center;

            &.on {
              color: #FF1346;
              border-color: #FF1346;
            }
          }
        }
      }
    }

    .no_address {
      position: fixed;
      top: 78px;
      bottom: 48px;
      left: 0;
      right: 0;
      height: 500px;
      background-color: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .img {
        width: 68px;
        height: 68px;
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        @include bg-image("../img/gwck");
      }

      .titel {
        font-size: 12px;
        color: #999999;
        margin-top: 18px;
      }
    }
  }
</style>

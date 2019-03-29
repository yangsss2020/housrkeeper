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
          <li class="list_item" @click="showBtn(index)">取消订单</li>
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
// import subOrder from '@/pages/subOrder/subOrder'

export default {
  name: 'OrderPay',
  data () {
    return {
      showList: true,
      BASE_URL: 'http://47.102.192.219/',
      content: '',
      flag: true,
      list: [],
      lastrouter: ''
    }
  },
  methods: {
    pay (index) {
      const price = this.order[index].price * this.order[index].count
      this.content = '哈哈' + price
      this.showAlert()
    },
    showAlert () {
      this.$createDialog({
        type: 'alert',
        title: '抱歉,本商城只供测试还没开通支付通道',
        content: this.content,
        icon: 'cubeic-alert'
      }).show()
    },
    showBtn (index) {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '删除订单!!!',
        content: '您确定要删除此订单吗?',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: async () => {
          await delorder(index)
          await this.$store.dispatch('getorder')
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '取消订单成功'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '取消'
          }).show()
        }
      }).show()
    }
  },
  computed: {
    ...mapState(['order'])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.lastrouter = from.name
    })
  },
  activated () {
    if (!this.order.length) {
      this.$store.dispatch('getorder')
    }
  },
  watch: {
    order (val) {
      this.list = val
    },
    lastrouter: function (value) {
      if (value === 'subOrder') {
        this.$store.dispatch('getorder')
      }
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

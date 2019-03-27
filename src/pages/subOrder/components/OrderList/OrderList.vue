<template>
  <div class="OrderList">
    <div class="shop_list">
      <div class="head border-bottom-1px">
        <i class="iconfont">&#xe656;</i>
        <span>购物清单</span>
      </div>
      <div class="content">
        <ul class="order_list border-bottom-1px">
          <li class="lsit_item" v-for="(item,index) in goods" :key="index">
            <div class="img">
              <img :src="BASE_URL+item.icomimg" alt="" class="img_content">
            </div>
            <div class="info">
              <div class="desc">{{item.describe}}{{item.size}}装</div>
            </div>
            <div class="right">
              <div class="price">￥{{item.price}}</div>
              <div class="count">x{{item.count}}</div>
            </div>
          </li>
        </ul>
        <!--<div class="msg">给卖家留言：（50字以内）</div>-->
        <cube-textarea v-model="value" :autoExpand="textflag" placeholder='给卖家留言：（50字以内）'></cube-textarea>
      </div>
      <div class="footer">
        <span>共{{totalCount}}件商品</span>
        <span>合计：<i class="price">￥{{totalPrice}}.00</i></span>
      </div>
    </div>
    <div class="item">
      <span>优惠抵扣</span>
      <span>已优惠0元></span>
    </div>
    <div class="item">
      <span>支付方式</span>
      <span>在线支付</span>
    </div>
    <div class="price_list">
      <div class="list_item">
        <span>商品金额</span>
        <span>￥{{totalPrice}}.00</span>
      </div>
      <div class="list_item">
        <span>优惠抵扣</span>
        <span>-￥0</span>
      </div>
      <div class="list_item">
        <span>运费</span>
        <span>+￥0</span>
      </div>
      <div class="list_item">
        <span>实际支付</span>
        <span class="totalprice">￥{{totalPrice}}.00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  props: {
    goods: Array,
    totalCount: Number,
    totalPrice: Number
  },
  data () {
    return {
      value: '',
      textflag: true,
      BASE_URL: 'http://127.0.0.1:3000/'
    }
  }
}
</script>

<style scoped lang="scss">
  .OrderList {
    background-color: #eee;

    .shop_list {
      background-color: #fff;
      padding-left: 15px;
      margin-bottom: 6px;

      .head {
        font-size: 15px;
        color: #333333;
        line-height: 40px;

        .iconfont {
          font-size: 16px;
          margin-right: 10px;
        }
      }

      .content {
        margin-top: 10px;
        padding-left: 15px;

        .order_list {
          padding-right: 15px;

          .lsit_item {
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
              width: 180px;
              line-height: 22px;
              margin-top: -6px;
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
        }

        .msg {
          line-height: 50px;
          padding-right: 15px;
        }

        .cube-textarea_expanded {
          height: 50px;
        }

        .cube-textarea-wrapper {
          font-size: 12px;
        }

        .cube-textarea-wrapper::after {
          border: none;
          border-bottom: 1Px solid #ebebeb;
        }
      }

      .footer {
        padding-right: 15px;
        line-height: 40px;
        color: #333333;
        text-align: right;

        span {
          margin-left: 15px;
        }

        .price {
          color: #FE275C;
          font-style: normal;
        }
      }
    }

    .item {
      display: flex;
      padding: 0 15px;
      justify-content: space-between;
      font-size: 15px;
      color: #333333;
      line-height: 40px;
      margin-bottom: 6px;
      background-color: #fff;
    }

    .price_list {
      padding: 0 15px;
      background-color: #fff;

      .list_item {
        display: flex;
        justify-content: space-between;
        line-height: 36px;
        font-size: 15px;
        color: #666666;

        .totalprice {
          color: #F90A0A;
        }
      }
    }
  }
</style>

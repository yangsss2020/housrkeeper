<template>
  <div class="OrderPending">
    <ul class="order_list border-bottom-1px" v-if="showList">
      <li class="lsit_item">
        <div class="head">
          <div class="left">
            <i class="iconfont">&#xe656;</i>
            <span>购物清单</span>
          </div>
          <div class="right">卖家已发货</div>
        </div>
        <div class="center">
          <div class="img">
            <img src="../../../img/youcha@2x.png" alt="" class="img_content">
          </div>
          <div class="info">
            <div class="desc">山地鸡活鸡（母鸡）要公鸡请备注 1只</div>
          </div>
          <div class="right">
            <div class="price">￥168.00</div>
            <div class="count">x1</div>
          </div>
        </div>
        <div class="footer">
          <span>共一件商品</span>
          <span>合计：<i class="price">￥168.00</i></span>
        </div>
        <ul class="btn_list">
          <li class="list_item">查看物流</li>
          <li class="list_item">延长收货</li>
          <li class="list_item on">确认收货</li>
        </ul>
      </li>
      <li class="lsit_item">
        <div class="head">
          <div class="left">
            <i class="iconfont">&#xe656;</i>
            <span>购物清单</span>
          </div>
          <div class="right">卖家已发货</div>
        </div>
        <div class="center">
          <div class="img">
            <img src="../../../img/youcha@2x.png" alt="" class="img_content">
          </div>
          <div class="info">
            <div class="desc">山地鸡活鸡（母鸡）要公鸡请备注 1只</div>
          </div>
          <div class="right">
            <div class="price">￥168.00</div>
            <div class="count">x1</div>
          </div>
        </div>
        <div class="footer">
          <span>共一件商品</span>
          <span>合计：<i class="price">￥168.00</i></span>
        </div>
        <ul class="btn_list">
          <li class="list_item">查看物流</li>
          <li class="list_item">延长收货</li>
          <li class="list_item on">确认收货</li>
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
export default {
  name: 'OrderPending',
  data () {
    return {
      showList: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .OrderPending {
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

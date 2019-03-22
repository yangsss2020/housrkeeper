<template>
  <div class="Shop">
    <topbar title="购物车" color="#F83478" more="更多"/>
    <div class="shop_wrapper">
      <cube-scroll
        ref="scroll">
        <ul class="shop_list">
          <li class="list_item">
            <div class="head">
              <div class="left">
                <div class="circle on">
                  <i class="iconfont">&#xe67f;</i>
                </div>
              </div>
              <div class="right">
                <div class="title">
                  <div class="title_img">
                    <img src="../img/01.png" alt="" class="img_content">
                  </div>
                  <span>四季五谷生态农业园</span>
                </div>
                <div class="more">
                  <i class="iconfont">&#xe606;</i>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="left">
                <div class="circle on">
                  <i class="iconfont">&#xe67f;</i>
                </div>
              </div>
              <div class="goods_content">
                <div class="goods_img">
                  <img src="../img/01.png" alt="" class="img_content">
                </div>
                <div class="goods_info">
                  <div class="title">山地鸡活鸡（母鸡）要公鸡请备 注 只</div>
                  <div class="price">￥168.00</div>
                </div>
                <div class="cart_control">
                  <div class="decrement item" @click="changCount(!addCount)">-</div>
                  <div class="count item">1</div>
                  <div class="increment item" @click="changCount(addCount)">+</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
    <div class="shop_cart border-bottom-1px">
      <div class="left">
        <div class="select_all">
          <div class="select_left">
            <div class="circle on">
              <i class="iconfont">&#xe67f;</i>
            </div>
            <div class="all">全选</div>
          </div>
          <div class="pirce">￥168.00</div>
        </div>
      </div>
      <div class="buy">结算</div>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'

export default {
  name: 'Shop',
  components: { Topbar }
}
</script>

<style scoped lang="scss">
.Shop {
  padding-top: 43px;
  .shop_wrapper {
    position: fixed;
    top: 43px;
    bottom: 88px;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: #eee;
    .shop_list {
      width: 100%;
      .list_item {
        padding:0 15px;
        background-color: #fff;
        margin-top: 6px;
        .head {
          display: flex;
          height: 50px;
          line-height: 50px;
          .left {
            width: 16px;
            margin-right: 15px;
            .circle {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              width: 16px;
              height: 16px;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              border: 1px solid #666;
              border-radius: 50%;
              text-align: center;
              line-height: 16px;
              &.on {
                background-color: #FE275C;
                border-color: #FE275C;
              }
              .iconfont {
                font-size: 12px;
                color: #fff;
              }
            }
          }
          .right {
            flex: 1;
            display: flex;
            justify-content: space-between;
            .title {
              font-size: 15px;
              color: #3B3B3B;
              display: flex;
              line-height: 50px;
              .title_img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                margin-right: 6px;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                overflow: hidden;
                .img_content {
                  display: block;
                  width: 100%;
                  height: auto;
                }
              }
            }
            .more {
              transform: rotate(180deg);
              color: #F83478;
            }
          }
        }
        .content {
          display: flex;
          padding: 17px 0;
          .left {
            width: 16px;
            margin-right: 15px;
            .circle {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              width: 16px;
              height: 16px;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              border: 1px solid #666;
              border-radius: 50%;
              text-align: center;
              line-height: 16px;
              &.on {
                background-color: #FE275C;
                border-color: #FE275C;
              }
              .iconfont {
                font-size: 12px;
                color: #fff;
              }
            }
          }
          .goods_content {
            flex: 1;
            display: flex;
            position: relative;
            .goods_img {
              width: 97px;
              height: 97px;
              margin-right: 15px;
              .img_content {
                width: 100%;
              }
            }
            .goods_info {
              flex: 1;
              .title {
                font-size: 15px;
                line-height: 26px;
                color: #3B3B3B;
              }
              .price {
                color: #FE275C;
                font-size: 15px;
                margin-top: 22px;
              }
            }
            .cart_control {
              position: absolute;
              right: 15px;
              bottom: 5px;
              display: flex;
              .item {
                text-align: center;
                width: 18px;
                color: #FE275C;
                font-size: 18px;
                box-sizing: border-box;
                line-height: 16px;
                height: 18px;
              }
              .decrement {
                border-radius: 4px 0 0 4px;
                border: 1px solid #666666;
                line-height: 13px;
              }
              .count {
                font-size: 11px;
                color: #3B3B3B;
                width: 31px;
                border-top: 1px solid #666666;
                border-bottom: 1px solid #666666;
              }
              .increment {
                border-radius: 0 4px 4px 0;
                border: 1px solid #666666;
              }
            }
          }
        }
      }
    }
  }
  .shop_cart {
    position: fixed;
    bottom: 48px;
    height: 40px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    background-color: #fff;
    z-index: 100;
    .left {
      flex: 1;
      padding: 0 15px;
      .select_all {
        display: flex;
        justify-content: space-between;
        .select_left {
          color: #666666;
          .circle {
            width: 16px;
            height: 16px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border: 1px solid #666;
            border-radius: 50%;
            text-align: center;
            line-height: 16px;
            display: inline-block;
            margin-right: 4px;
            &.on {
              background-color: #FE275C;
              border-color: #FE275C;
            }
            .iconfont {
              font-size: 12px;
              color: #fff;
            }
          }
          .all {
            display: inline-block;
          }
        }
      }
      .pirce {
        font-size: 15px;
        color: #FE275C;
        font-weight: 400;
      }
    }
    .buy {
      width: 104px;
      background-color: #FF1346;
      text-align: center;
      font-size: 12px;
      color: #FEFEFE;
      font-weight: 400;
    }
  }
}
</style>

<template>
  <div class="Shop">
    <topbar title="购物车" color="#F83478">
      <div class="edit_shop" @click="test">{{edit}}</div>
    </topbar>
    <div class="shop_wrapper" v-if="showList">
      <cube-scroll
        ref="scroll">
        <transition-group appear tag="ul" class="shop_list">
          <li class="list_item" v-for="(item,index) in shopcart" :key="item.goodsid">
            <div class="head">
              <div class="left">
                <div class="circle" :class="{on:item.checkAll}" @click="checkAll(index)">
                  <i class="iconfont">&#xe67f;</i>
                </div>
              </div>
              <div class="right">
                <div class="title">
                  <div class="title_img">
                    <img :src="BASE_URL+item.icomimg" alt="" class="img_content">
                  </div>
                  <span>{{item.title}}</span>
                </div>
                <div class="more">
                  <i class="iconfont">&#xe606;</i>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="left">
                <div class="circle" :class="{on:item.check}" @click="check(index)">
                  <i class="iconfont">&#xe67f;</i>
                </div>
              </div>
              <div class="goods_content">
                <div class="goods_img">
                  <img :src="BASE_URL+item.icomimg" alt="" class="img_content">
                </div>
                <div class="goods_info">
                  <div class="title">{{item.describe}}{{item.size}}装</div>
                  <div class="price">￥{{item.price}}</div>
                </div>
                <div class="cart_control">
                  <div class="decrement item" @click="changCount(!isAdd,index)">-</div>
                  <div class="count item">{{item.count}}</div>
                  <div class="increment item" @click="changCount(isAdd,index)">+</div>
                </div>
              </div>
            </div>
          </li>
        </transition-group>
      </cube-scroll>
    </div>
    <div class="shop_cart border-bottom-1px" v-if="showList">
      <div class="left">
        <div class="select_all">
          <div class="select_left">
            <div class="circle" :class="{on:checkAllShop}" @click="allCheck">
              <i class="iconfont">&#xe67f;</i>
            </div>
            <div class="all">全选</div>
          </div>
          <div class="pirce" v-if="isEdit">￥{{totalPrice}}</div>
        </div>
      </div>
      <div class="buy" @click="accountHandle">
        <span v-if="isEdit">结算({{totalCount}})</span>
        <span v-else>删除</span>
      </div>
    </div>
    <div class="noshop" v-else>
      <!--<div class="content">-->
      <div class="img"></div>
      <p class="titel">您的购物还是空的哟</p>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'
import { mapState, mapGetters } from 'vuex'
import { clearshop } from '../../api/index'

export default {
  name: 'Shop',
  data () {
    return {
      BASE_URL: 'http://47.102.192.219/',
      isAdd: true,
      edit: '管理',
      isEdit: true
    }
  },
  methods: {
    check (index) {
      this.shopcart[index].check = !this.shopcart[index].check
      this.shopcart[index].checkAll = !!this.shopcart[index].check
    },
    checkAll (index) {
      this.shopcart[index].checkAll = !this.shopcart[index].checkAll
      this.shopcart[index].check = this.shopcart[index].checkAll
    },
    allCheck () {
      this.shopcart.forEach((item) => {
        item.check = !item.check
        item.checkAll = !item.checkAll
      })
    },
    changCount (isAdd, index) {
      this.$store.dispatch('setShopCount', { isAdd, shopindex: index })
      this.shopcart[index].check = this.shopcart[index].count !== 0
    },
    test () {
      this.isEdit = !this.isEdit
      if (this.isEdit) {
        this.edit = '管理'
      } else {
        this.edit = '完成'
      }
    },
    async accountHandle () {
      if (this.isEdit) {
        let arr = []
        let items = {}
        let data
        this.shopcart.forEach(item => {
          items.count = item.count
          items.describe = item.describe
          items.goodsid = item.goodsid
          items.icomimg = item.icomimg
          items.price = item.price
          items.size = item.size
          items.title = item.title
          items.userid = this.userinfo._id
          arr.push(items)
          items = {}
        })
        data = JSON.stringify(arr)
        this.$store.dispatch('clearShopcart')
        await clearshop(this.shopcart)
        this.$router.push({
          name: 'subOrder',
          params: {
            data
          }
        })
      } else {
        this.$store.dispatch('clearShopcart')
        await clearshop(this.shopcart)
      }
    }
  },
  components: { Topbar },
  computed: {
    ...mapState(['shopcart']),
    ...mapState(['userinfo']),
    ...mapGetters(['totalCount', 'totalPrice']),
    showList () {
      return this.shopcart.length && this.userinfo
    },
    checkAllShop () {
      let flag = true
      this.shopcart.forEach((item) => {
        if (item.check && item.checkAll) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .edit_shop {
    font-size: 15px;
  }

  .Shop {
    /*padding-top: 43px;*/
    height: 100%;
    width: 100%;
    overflow: hidden;

    .shop_wrapper {
      position: fixed;
      position: absolute;
      top: 43px;
      bottom: 88px;
      left: 0;
      right: 0;
      overflow: hidden;
      background-color: #eee;

      .shop_list {
        width: 100%;

        .list_item {
          padding: 0 15px;
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

    .noshop {
      position: fixed;
      top: 43px;
      bottom: 48px;
      left: 0;
      right: 0;
      background-color: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .img {
        width: 68px;
        height: 68px;
        -webkit-background-size: cover;
        background-size: cover;
        background-image: url("./img/gwck@2x.png");
      }

      .titel {
        font-size: 12px;
        color: #999999;
        margin-top: 18px;
      }
    }

    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateY(80px);
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.6s ease;
    }

    /* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */
    .v-move {
      transition: all 0.6s ease;
    }

    .v-leave-active {
      position: absolute;
    }
  }
</style>

<template>
  <div class="ShopCart">
    <div class="shopcart_container">
      <div class="left">
        <div class="item">
          <i class="iconfont">&#xe626;</i>
          <p class="text">首页</p>
        </div>
        <div class="item">
          <i class="iconfont">&#xe60f;</i>
          <p class="text">收藏</p>
        </div>
      </div>
      <div class="cart" @click="toggleShowCart">
        加入购物车
      </div>
      <div class="cell" @click="toggleShowCart">
        立即购买
      </div>
    </div>
    <div class="cart_cover" :class="{on:showList}" v-if="flag">
      <div class="head border-bottom-1px">
        <div class="left">
          <img :src="BASE_URL+currentPorduct.bannerlist[0]" alt="" class="img_content">
        </div>
        <div class="info">
          <div class="preice"><span>￥</span>{{currentPorduct.pricea}}</div>
          <div class="inventory">库存298件</div>
          <div class="desc">选择规格,尺寸分类</div>
        </div>
      </div>
      <div class="size">
        <div class="title">规格</div>
        <ul class="size_list">
          <li class="list_item on">1L</li>
          <li class="list_item">1L</li>
          <li class="list_item">1L</li>
        </ul>
      </div>
      <div class="foot">
        <div class="left">购买数量</div>
        <div class="right">
          <div class="decrement item">-</div>
          <div class="count item">1</div>
          <div class="increment item">+</div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="cover_bg" v-if="showList"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  props: {
    currentPorduct: Object
  },
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000/',
      showList: false,
      flag: false
    }
  },
  methods: {
    toggleShowCart () {
      this.showList = !this.showList
    }
  },
  watch: {
    currentPorduct: function (value) {
      if (value) {
        this.flag = true
      }
    }
  }
  // computed: {
  //   banner () {
  //     console.log(this.currentPorduct)
  //     // const banner = this.currentPorduct.bannerlist[0]
  //     // return banner
  //   }
  // }
}
</script>

<style scoped lang="scss">
  .ShopCart {
    .shopcart_container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 48px;
      background-color: #fff;
      display: flex;
      z-index: 13;
      box-shadow: 0 -4px 5px #E1E1E2;

      .left {
        background-color: #fff;
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .item {
          font-size: 12px;
          text-align: center;
          flex: 1;
          color: #666666;

          .iconfont {
            font-size: 18px;
            color: #FE7798;
          }

          .text {
            margin-top: 2px;
          }
        }
      }

      .cart, .cell {
        line-height: 48px;
        width: 104px;
        background-color: #FE7798;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 400;
        font-family: "微软雅黑";
        text-align: center;
      }

      .cell {
        background-color: #FE275C;
        color: #FEFEFE;
        font-size: 12px;
      }
    }

    .cart_cover {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 48px;
      z-index: 12;
      transform: translateY(100%);
      transition: transform .3s;
      background-color: #fff;
      padding: 15px;
      border-radius: 5px 5px 0 0;

      .head {
        display: flex;

        .left {
          width: 100px;
          height: 100px;
          margin-right: 15px;
          border-radius: 10px;
          overflow: hidden;
          padding-bottom: 15px;

          .img_content {
            width: 100%;
          }
        }

        .info {
          flex: 1;

          .preice {
            font-size: 22px;
            line-height: 30px;
            color: #FF184B;
            font-weight: 400;
            margin-top: 15px;

            span {
              font-size: 14px;
            }
          }

          .inventory {
            margin-top: 5px;
            line-height: 22px;
            font-size: 11px;
            color: #666;
          }

          .desc {
            margin-top: 8px;
            line-height: 22px;
            font-size: 11px;
            color: #111111;
          }
        }
      }

      .size {
        .title {
          font-size: 14px;
          line-height: 22px;
        }

        .size_list {
          overflow: hidden;

          .list_item {
            float: left;
            padding: 4px 8px;
            background-color: #eee;
            margin-right: 15px;
            border-radius: 4px;
            color: #666;
            margin-bottom: 15px;

            &.on {
              background-color: #FE7798;
              color: #fff;
            }
          }
        }
      }

      .foot {
        display: flex;
        justify-content: space-between;

        .left {
          font-size: 14px;
        }

        .right {
          overflow: hidden;

          .item {
            float: left;
            padding: 4px 10px;
            background-color: #eee;
            color: #666;
            margin-left: 2px;
          }
        }
      }

      &.on {
        transform: translateY(0);
      }
    }

    .cover_bg {
      position: fixed;
      top: 0;
      bottom: 48px;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .2);
      z-index: 11;

      &.fade-enter-active, &.dade-leave-active {
        transition: opacity .5s;
      }

      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
    }
  }
</style>

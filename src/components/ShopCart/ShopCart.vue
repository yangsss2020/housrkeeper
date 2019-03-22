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
      <div class="cart" @click="toggleShowCart(isCar)" :class="{off:!showBtn}">
        加入购物车
      </div>
      <div class="cell" @click="toggleShowCart(isBuy)" :class="{off:!showBuy}">
        立即购买
      </div>
    </div>
    <div class="cart_cover" :class="{on:showList}" v-if="flag">
      <div class="head border-bottom-1px">
        <div class="left">
          <img :src="BASE_URL+currentPorduct.bannerlist[0]" alt="" class="img_content">
        </div>
        <div class="info">
          <div class="preice"><span>￥</span>{{price}}</div>
          <div class="inventory">库存298件</div>
          <div class="desc">选择规格,尺寸分类</div>
        </div>
      </div>
      <div class="size">
        <div class="title">规格</div>
        <ul class="size_list">
          <li class="list_item" :class="{on:key===size}" v-for="(item,key) in currentPorduct.price" :key="key"
              @click="checkSize(key)">
            {{key}}
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="left">购买数量</div>
        <div class="right">
          <div class="decrement item" @click="changCount(!addCount)">-</div>
          <div class="count item">{{count}}</div>
          <div class="increment item" @click="changCount(addCount)">+</div>
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
      showList: false, //是否显示购物车列表
      showBtn: true, //加入购物车是否可以点击
      showBuy: true, //购买是否可以点击
      isCar: 'car', //true为加入购物车,flase为购买
      isBuy: 'bau', //购买
      isgogo: true,
      flag: false, //条件渲染商品列表
      addCount: true, //增加商品数量
      count: 0, //存放商品数量
      size: '' //存放商品的规格
    }
  },
  methods: {
    toggleShowCart (flag) {
      if (flag === this.isCar) {
        if (!this.showList) {
          this.showList = true
          this.showBtn = false
          this.showBuy = false
          this.isgogo = false
        }
        if (this.showList && this.showBtn) {
          this.count = 0
          this.showList = false
          this.showBuy = true
          this.isgogo = true
          this.size = ''
          this.showToastType()
          //执行加入购物车ajax请求
        }
      } else {
        if (!this.showList) {
          this.showList = true
          this.showBuy = false
          this.showBtn = false
          this.isgogo = true
        }
        if (this.showList && this.showBuy) {
          this.count = 0
          this.showBuy = true
          this.showBtn = true
          this.showList = false
          this.isgogo = false
          this.size = ''
          //跳转到购买页面
        }
      }
    },
    checkSize (key) {
      if (!this.size || key !== this.size) {
        this.size = key
      } else {
        this.size = ''
      }
      this.showBtn = !!(this.count !== 0 && this.size && !this.isgogo)
      this.showBuy = !!(this.count !== 0 && this.size && this.isgogo)
    },
    changCount (flag) {
      if (flag) {
        this.count += 1
      } else {
        if (this.count > 0) {
          this.count -= 1
        }
      }
      this.showBtn = !!(this.count !== 0 && this.size && !this.isgogo)
      this.showBuy = !!(this.count !== 0 && this.size && this.isgogo)
    },
    showToastType () {
      const toast = this.$createToast({
        txt: '添加成功',
        type: 'correct'
      })
      toast.show()
    }
  },
  watch: {
    currentPorduct: function (value) {
      if (value) {
        this.flag = true
      }
    }
  },
  computed: {
    price () {
      const { currentPorduct, size } = this
      let price = 0
      const priceArr = []
      if (!size) {
        for (let key in currentPorduct.price) {
          priceArr.push(currentPorduct.price[key])
        }
        price = priceArr[0] + '-' + priceArr[priceArr.length - 1]
      } else {
        price = currentPorduct.price[size]
      }
      return price
    }
  }
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

      .cart {
        &.off {
          background-color: #666;
          color: #eee;
        }
      }

      .cell {
        background-color: #FE275C;
        color: #FEFEFE;
        font-size: 12px;

        &.off {
          background-color: #666;
          color: #eee;
        }
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
            /*padding: 4px 10px;*/
            width: 26px;
            height: 20px;
            background-color: #eee;
            color: #666;
            line-height: 20px;
            text-align: center;
            margin-left: 2px;

            &.count {
              width: 30px;
            }
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

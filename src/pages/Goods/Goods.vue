<template>
  <div class="Goods">
    <Topbar color="#F83478">
      <div slot="default" class="tab_bar">
        <span class="bar_item" :class="{on:toggle}" @click="toggleBar(goods)">商品</span>
        <span class="bar_item" :class="{on:!toggle}" @click="toggleBar(detail)">详情</span>
      </div>
    </Topbar>
    <div class="wrapper" v-if="currentPorduct">
      <div class="container">
        <div class="product" ref="goods">
          <div class="swiper_contaner">
            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" v-if="currentPorduct">
              <!-- slides -->
              <swiper-slide v-for="(item,index) in currentPorduct.bannerlist" :key="index">
                <div class="img_item" @click="showCustomImagePreview(index)">
                  <img
                    class="img_content"
                    :src="BASE_URL+item"
                    alt="">
                </div>
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="info">
            <h2 class="title">{{currentPorduct.describe}}1{{currentPorduct.unit}}装/1{{currentPorduct.unit}}</h2>
            <div class="desc">{{currentPorduct.title}}</div>
            <div class="price">￥{{currentPorduct.pricea}}.00</div>
            <div class="deliveryPrice">运费：{{currentPorduct.deliveryPrice}}.00</div>
          </div>
          <div class="nav">
            <div class="right">
              <img :src="BASE_URL+currentPorduct.icomimg" alt="" class="img_content">
              {{currentPorduct.title}}
            </div>
            <div class="go_shop">
              进入店铺>
            </div>
          </div>
        </div>
        <div class="product_detail" ref="detail">
          <div class="head">
            <i class="iconfont">&#xe6bd;</i>
            产品详情
          </div>
          <div class="content">
            <img :src="BASE_URL+item" alt="" v-for="(item,index) in currentPorduct.imgUrl" :key="index"
                 class="img_content">
          </div>
        </div>
      </div>
    </div>
    <ShopCart :currentPorduct="currentPorduct"/>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar/Topbar'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import ShopCart from '../../components/ShopCart/ShopCart'

export default {
  name: 'Goods',
  components: { ShopCart, Topbar },
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000/',
      notNextTick: true,
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        autoplay: {
          delay: 3000//1秒切换一次
        }
      },
      toggle: true, //切换bar true时商品,false详情
      goods: 'goods',
      detail: 'detail'
    }
  },
  methods: {
    toggleBar (value) {
      if (value === this.goods) {
        this.toggle = true
        this.scrollGoods.scrollToElement(this.$refs.goods, 300)
      } else {
        this.toggle = false
        this.scrollGoods.scrollToElement(this.$refs.detail, 300)
      }
    },
    showCustomImagePreview (value) {
      this.$createImagePreview({
        imgs: this.galleryImg,
        initialIndex: value,
        loop: false,
        speed: 300
      }).show()
    }
  },
  computed: {
    ...mapState(['product', 'enterprise']),
    currentPorduct () {
      if (this.$route.params.id) {
        let idd = this.$route.params.id
        let id
        let list = []
        if (idd[0] === 'a') {
          id = parseInt(idd[1])
          list = this.enterprise
        } else {
          id = parseInt(idd)
          list = this.product
        }
        const current = list.find((item) => {
          return item.id === id
        })
        return current
      } else {
        return false
      }
    },
    galleryImg () {
      const imgList = this.currentPorduct.bannerlist
      const imgArr = []
      let items = ''
      imgList.forEach(item => {
        items = this.BASE_URL + item
        imgArr.push(items)
      })
      return imgArr
    }
  },
  mounted () {
    this.$store.dispatch('reqProduct')
    this.$store.dispatch('reqEnterprise')
  },
  watch: {
    currentPorduct: function (value) {
      this.$nextTick(() => {
        this.scrollGoods = new BScroll('.wrapper', {
          click: true
        })
      })
    }
  }
}
</script>
<style lang="scss">
  .Goods {
    .swiper-container {
      width: 100%;
      height: 280px;
    }

    .swiper-pagination {
      .swiper-pagination-bullet {
        background: #fff;
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background: #FE275C;
          width: 14px;
          border-radius: 4px;
        }
      }
    }
  }
</style>
<style scoped lang="scss">
  @import "~styles/index.scss";

  .Goods {
    .tab_bar {
      width: 116px;
      line-height: 43px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .bar_item {
        font-size: 22px;
        color: #111111;

        &.on {
          color: $color-red-1;
        }
      }
    }

    .wrapper {
      position: fixed;
      top: 43px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      background-color: #eee;

      .product {
        .swiper_contaner {
          width: 100%;
          /*height: 200px;*/
          height: 0;
          padding-bottom: 280px;
          background-color: #ddd;

          .img_item {
            width: 100%;
            height: 100%;

            .img_content {
              max-width: 100%;
              height: auto;
            }
          }
        }

        .info {
          background-color: #fff;
          padding: 36px 15px 0;

          .title {
            font-size: 20px;
            line-height: 30px;
            color: #111111;
          }

          .desc {
            font-size: 15px;
            line-height: 25px;
            color: #666;
          }

          .price {
            font-size: 18px;
            line-height: 28px;
            color: #FF184B;
          }

          .deliveryPrice {
            line-height: 40px;
            font-size: 12px;
            color: #666666;
          }
        }

        .nav {
          background-color: #fff;
          margin-top: 8px;
          height: 54px;
          display: flex;
          justify-content: space-between;
          line-height: 54px;
          padding: 0 15px;

          .right {
            font-size: 17px;
            color: #111111;
            font-weight: 400;
            font-family: "微软雅黑";

            .img_content {
              display: inline-block;
              vertical-align: middle;
              width: 26px;
              height: 22px;
            }
          }

          .go_shop {
            font-size: 15px;
            color: #FF184B;
            font-family: "微软雅黑";
            font-weight: 400;
          }
        }
      }

      .product_detail {
        padding-bottom: 48px;

        .head {
          line-height: 47px;
          text-align: center;
          font-size: 12px;
          color: #666666;
        }

        .content {
          width: 100%;

          .img_content {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

</style>

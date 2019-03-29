<template>
  <div class="More">
    <topbar color="#F83478">
      <div class="search" @click="$router.push('/search')">{{$route.query.keyword||'搜索'}}</div>
    </topbar>
    <div class="wrapper">
      <cube-scroll @pulling-down="onPullingDown" :options="options" ref="scroll" @pulling-up="onPullingUp">
        <ul class="shop_list" v-if="enterprise.length && !keyList.length ">
          <router-link class="list_item" v-for="(item) in enterprise" :key="item._id" tag="li" :to="'/goods/a'+item.id">
            <div class="img">
              <img v-lazy="BASE_URL+item.bannerlist[0]" alt="" class="img_content">
            </div>
            <div class="content">
              <div class="title">{{item.describe}}</div>
              <div class="price">￥{{item.pricea}}</div>
            </div>
          </router-link>
          <router-link class="list_item" v-for="(item,index) in list" :key="index" tag="li" :to="'/goods/'+item.id">
            <div class="img">
              <img v-lazy="BASE_URL+item.bannerlist[0]" alt="" class="img_content">
            </div>
            <div class="content">
              <div class="title">{{item.describe}}</div>
              <div class="price">￥{{item.pricea}}</div>
            </div>
          </router-link>
        </ul>
        <ul class="shop_list" v-else-if="keyList.length">
          <router-link class="list_item" v-for="(item) in keyList" :key="item._id" tag="li" :to="'/goods/'+item.id">
            <div class="img">
              <img v-lazy="BASE_URL+item.bannerlist[0]" alt="" class="img_content">
            </div>
            <div class="content">
              <div class="title">{{item.describe}}</div>
              <div class="price">￥{{item.pricea}}</div>
            </div>
          </router-link>
        </ul>
        <ul class="shop_list" v-else>
          <li v-for="count in 10" :key="count">
            <img src="../../common/images/shop_back.svg" alt="">
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'
import { mapState } from 'vuex'

export default {
  name: 'More',
  data () {
    return {
      BASE_URL: 'http://47.102.192.219/',
      // items: _foods,
      pullDownRefresh: {
        txt: '刷新成功'
      },
      pullUpLoad: {
        txt: {
          more: '下拉',
          noMore: '没有更多了'
        }
      },
      list: []
    }
  },
  methods: {
    onPullingDown () {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          // this.items.unshift(_foods[1])
          this.$refs.scroll.forceUpdate()
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp () {
      // 模拟更新数据
      setTimeout(() => {
        if (this.list.length < 30) {
          // 如果有新数据
          this.list = this.list.concat(this.product)
          this.$refs.scroll.forceUpdate()
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  },
  watch: {
    product: function (value) {
      this.list = value
    }
  },
  computed: {
    ...mapState(['enterprise', 'product']),
    keyList () {
      let list = []
      if (this.$route.query.keyword) {
        this.product.forEach(item => {
          if (item.describe.indexOf(this.$route.query.keyword) > -1) {
            list.push(item)
          }
        })
      }
      return list
    },
    options () {
      return {
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        scrollbar: true
      }
    }
  },
  mounted () {
    // this.$store.dispatch('reqRecommend')
    this.$store.dispatch('reqEnterprise')
    this.$store.dispatch('reqProduct')
  },
  activated () {
    this.$refs.scroll.forceUpdate()
  },
  components: { Topbar }
}
</script>

<style scoped lang="scss">
  .More {
    .search {
      position: absolute;
      width: 80%;
      height: 26px;
      border: 1px solid #999;
      border-radius: 15px;
      line-height: 25px;
      padding-left: 15px;
      box-sizing: border-box;
      color: #999;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .wrapper {
      position: fixed;
      top: 43px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #eee;

      .shop_list {
        padding: 0 6px;
        margin-top: 10px;

        .list_item {
          display: flex;
          padding: 10px 10px;
          margin-bottom: 10px;
          background-color: #fff;
          border-radius: 10px;

          .img {
            width: 90px;
            height: 90px;
            margin-right: 15px;

            .img_content {
              width: 100%;
              height: auto;
            }
          }

          .content {
            flex: 1;

            .title {
              font-size: 15px;
              line-height: 28px;
              margin-bottom: 10px;
            }

            .price {
              font-size: 15px;
              color: #FE275C;
            }
          }
        }
      }
    }
  }
</style>

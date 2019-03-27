<template>
  <div class="More">
    <topbar color="#F83478">
      <div class="search" @click="$router.push('/search')">{{$route.query.keyword||'搜索'}}</div>
    </topbar>
    <div class="wrapper">
      <cube-scroll>
        <ul class="shop_list" v-if="!keyList.length">
          <router-link class="list_item" v-for="(item) in enterprise" :key="item._id" tag="li" :to="'/goods/a'+item.id">
            <div class="img">
              <img :src="BASE_URL+item.bannerlist[0]" alt="" class="img_content">
            </div>
            <div class="content">
              <div class="title">{{item.describe}}</div>
              <div class="price">￥{{item.pricea}}</div>
            </div>
          </router-link>
          <router-link class="list_item" v-for="(item) in product" :key="item._id" tag="li" :to="'/goods/'+item.id">
            <div class="img">
              <img :src="BASE_URL+item.bannerlist[0]" alt="" class="img_content">
            </div>
            <div class="content">
              <div class="title">{{item.describe}}</div>
              <div class="price">￥{{item.pricea}}</div>
            </div>
          </router-link>
        </ul>
        <ul class="shop_list" v-else>
          <router-link class="list_item" v-for="(item) in keyList" :key="item._id" tag="li" :to="'/goods/'+item.id">
            <div class="img">
              <img :src="BASE_URL+item.bannerlist[0]" alt="" class="img_content">
            </div>
            <div class="content">
              <div class="title">{{item.describe}}</div>
              <div class="price">￥{{item.pricea}}</div>
            </div>
          </router-link>
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
      BASE_URL: 'http://127.0.0.1:3000/'
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
    }
  },
  mounted () {
    // this.$store.dispatch('reqRecommend')
    this.$store.dispatch('reqEnterprise')
    this.$store.dispatch('reqProduct')
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

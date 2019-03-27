<template>
  <div class="Area">
    <topbar :title="$route.query.name" color="#F83478"/>
    <div class="banner">
      <img :src="BASE_URL+$route.query.imgBanner" alt="" class="img_content">
    </div>
    <div class="list_wrapper">
      <div class="headr">
        <div class="right">
          <div class="title product_title"></div>
          <span class="desc">这里全是三品一标产品</span>
        </div>
        <div class="more" @click="$router.push('/more')">更多>></div>
      </div>
      <div class="product">
        <ul class="list">
          <router-link class="list_item" v-for="(item,index) in product" :key="index" tag="li" :to="'/goods/'+item.id">
            <div class="head">
              <img :src="BASE_URL+item.icomimg" alt="" class="img_content">
              <div class="mark">{{item.describe}}</div>
            </div>
            <div class="info">
              <span class="area">{{$route.query.name}}</span>
              <span class="price">￥{{item.pricea}}/1{{item.unit}}</span>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="list_wrapper">
      <div class="headr">
        <div class="right">
          <div class="title enterprise_title"></div>
          <span class="desc">优选当地最受欢迎的品牌</span>
        </div>
        <div class="more" @click="$router.push('/more')">更多>></div>
      </div>
      <div class="enterprise">
        <ul class="enterprise_list">
          <router-link class="list_item" v-for="(item,index) in enterprise" :key="index" tag="li" :to="'/goods/a'+item.id">
            <div class="item_wrapper">
              <div class="head">
                <img :src="BASE_URL+item.icomimg" alt="" class="img_content">
              </div>
              <div class="item_name"><i class="iconfont">&#xe692;</i>{{item.title}}</div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar/Topbar'
import { mapState } from 'vuex'

export default {
  name: 'Area',
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000/'
    }
  },
  computed: {
    ...mapState(['enterprise', 'product'])
  },
  mounted () {
    this.$store.dispatch('reqEnterprise')
    this.$store.dispatch('reqProduct')
  },
  components: { Topbar }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .Area {
    padding-top: 43px;
    padding-bottom: 50px;

    .banner {
      width: 100%;
      height: 0;
      padding-bottom: 180px;

      .img_content {
        width: 100%;
        height: auto;
      }
    }

    .list_wrapper {
      padding: 0 13px;
      margin-top: 10px;
      background-color: #fff;

      .headr {
        display: flex;
        justify-content: space-between;
        line-height: 70px;

        .right {
          .title {
            width: 87px;
            height: 30px;
            position: relative;
            margin-top: 15px;
            float: left;
            background-size: cover;

            &.product_title {
              @include bg-image("./img/pzcp");
            }

            &.enterprise_title {
              margin-top: 10px;
              width: 82px;
              height: 37px;
              @include bg-image("./img/tjqy");
            }
          }

          .desc {
            margin-left: 5px;
            font-size: 12px;
            color: #666666;
          }
        }

        .more {
          font-size: 11px;
          color: #666666;
        }
      }

      .product {
        .list {
          display: flex;
          /*justify-content: space-around;*/
          flex-wrap: wrap;

          .list_item {
            width: 33.33%;
            padding: 10px;
            box-sizing: border-box;

            .head {
              height: 0;
              padding-bottom: 90px;
              width: 100%;
              position: relative;
              background-color: #ddd;
              border-radius: 8px 8px 0 0;
              overflow: hidden;

              .img_content {
                width: 100%;
                /*height: auto;*/
                /*height: 100%;*/
              }

              .mark {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 18px;
                line-height: 18px;
                background-color: rgba(0, 0, 0, .58);
                color: #fff;
                padding-left: 10px;
                @include ellipsis();
              }
            }

            .info {
              line-height: 16px;
              margin-top: 4px;
              @include ellipsis();
              color: $color-red-1;

              .area {
                display: inline-block;
                background-color: $color-red-1;
                color: #fff;
                font-size: 10px;
                padding: 0 1px;
              }

              .price {
                color: $color-red-1;
              }
            }
          }
        }
      }

      .enterprise {
        .enterprise_list {
          margin-top: 9px;
          display: flex;
          flex-wrap: wrap;

          .list_item {
            width: 50%;
            box-sizing: border-box;
            border-radius: 10px;
            padding: 6px;
            overflow: hidden;

            .item_wrapper {
              border: 1px solid #eee;
              border-radius: 10px;
              overflow: hidden;

              .head {
                width: 100%;
                height: 90px;
                overflow: hidden;

                .img_content {
                  width: 100%;
                  height: auto;
                }
              }

              .item_name {
                line-height: 30px;
                font-size: 14px;
                /*border-radius: 0 0 10px 10px;*/
                overflow: hidden;
                margin-left: 10px;
                color: #0B0B0B;

                .iconfont {
                  font-size: 18px;
                  color: #DF6003;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

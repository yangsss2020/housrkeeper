<template>
  <div class="Recommend">
    <div class="wrapper">
      <div class="header">
        <h3 class="title">推荐专区</h3>
        <div class="more" @click="$router.push('/recommend')">更多>></div>
      </div>
      <div class="recom">
        <ul class="recom_list">
          <li class="list_item" v-for="item in recommend" :key="item._id">
            <div class="item_wrapper">
              <div class="head">
                <img :src="BASE_URL+item.imgUrl" alt="" class="img_content">
              </div>
              <div class="item_name">{{item.title}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <div class="header">
        <h3 class="title">地区特产专区</h3>
        <div class="more">更多>></div>
      </div>
      <div class="special">
        <ul class="special_list">
          <li class="list_item">
            <div class="head">
              <img src="../../../img/01.png" alt="" class="img_content">
              <div class="mark">琥珀茶油山茶籽油悠悠</div>
            </div>
            <div class="info">
              <span class="area">酉阳县</span>
              <span class="price">￥468.00/1盒</span>
            </div>
          </li>
          <li class="list_item">
            <div class="head">
              <img src="../../../img/01.png" alt="" class="img_content">
              <div class="mark">琥珀茶油山茶籽油悠悠</div>
            </div>
            <div class="info">
              <span class="area">酉阳县</span>
              <span class="price">￥468.00/1盒</span>
            </div>
          </li>
          <li class="list_item">
            <div class="head">
              <img src="../../../img/01.png" alt="" class="img_content">
              <div class="mark">琥珀茶油山茶籽油悠悠</div>
            </div>
            <div class="info">
              <span class="area">酉阳县</span>
              <span class="price">￥468.00/1盒</span>
            </div>
          </li>
          <li class="list_item">
            <div class="head">
              <img src="../../../img/01.png" alt="" class="img_content">
              <div class="mark">琥珀茶油山茶籽油悠悠</div>
            </div>
            <div class="info">
              <span class="area">酉阳县</span>
              <span class="price">￥468.00/1盒</span>
            </div>
          </li>
          <li class="list_item">
            <div class="head">
              <img src="../../../img/01.png" alt="" class="img_content">
              <div class="mark">琥珀茶油山茶籽油悠悠</div>
            </div>
            <div class="info">
              <span class="area">酉阳县</span>
              <span class="price">￥468.00/1盒</span>
            </div>
          </li>
          <li class="list_item">
            <div class="head">
              <img src="../../../img/01.png" alt="" class="img_content">
              <div class="mark">琥珀茶油山茶籽油悠悠</div>
            </div>
            <div class="info">
              <span class="area">酉阳县</span>
              <span class="price">￥468.00/1盒</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Recommend',
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000/'
    }
  },
  computed: {
    ...mapState(['recommend'])
  },
  mounted () {
    this.$store.dispatch('reqRecommend')
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .Recommend {
    background-color: #fff;

    .wrapper {
      margin-top: 8px;

      .header {
        line-height: 45px;
        background-color: $bgcolor-1;
        color: #3B5E05;
        padding: 0 20px 0 17px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;

        .title {
          font-size: 12px;
        }

        .more {
          font-size: 10px;
          color: #282828;
        }
      }

      .recom {
        .recom_list {
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
              box-shadow: 0 0 9px #B6B5B5;
              border-radius: 10px;
              overflow: hidden;

              .head {
                width: 100%;
                height: 85px;
                overflow: hidden;

                .img_content {
                  /*border-radius: 10px 10px 0 0;*/
                  /*overflow: hidden;*/
                  width: 100%;
                  height: auto;
                }
              }

              .item_name {
                line-height: 30px;
                font-size: 12px;
                /*border-radius: 0 0 10px 10px;*/
                overflow: hidden;
                text-align: center;
                color: #525252;
              }
            }
          }
        }
      }

      .special {
        .special_list {
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
              margin-top: 2px;
              @include ellipsis();
              color: $color-red-1;

              .area {
                display: inline-block;
                background-color: $color-red-1;
                color: #fff;
              }

              .price {
                color: $color-red-1;
              }
            }
          }
        }
      }
    }
  }
</style>

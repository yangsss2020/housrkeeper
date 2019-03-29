<template>
  <div class="AreaList">
    <div class="area_bar">
      <div class="head">
        <h3 class="title">区县直达</h3>
      </div>
      <div class="bar_wrapper" :class="{move:move}">
        <ul class="bar_list" ref="bar">
          <li class="list_item" @click="checkArea(0)" :class="{active:activeIndex===0}">
            所有区县
          </li>
          <li class="list_item" v-for="(item,index) in area" :key="(index+1)" @click="checkArea(index+1)"
              :class="{active:index===activeIndex-1}">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="shou_all" @click="showAll">
        <div class="title"><span>展开全部</span></div>
        <div class="arrow" :class="{move:move}">
          <i class="iconfont">&#xe612;</i>
        </div>
      </div>
    </div>
    <div class="area_content">
      <ul class="enterprise_list" ref="areaUi">
        <router-link tag="li" class="list_item" v-for="items in area" :key="items.id"
                     :to="{path:'/area',query:items}">
          <div class="item_wrapper">
            <div class="head">
              <img v-lazy="BASE_URL+items.imgUrl" alt="" class="img_content">
            </div>
            <div class="item_name"><i class="iconfont">&#xe61b;</i>{{items.name}}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import scrll from '@/common/util/scroll.js'

export default {
  name: 'AreaList',
  data () {
    return {
      BASE_URL: 'http://47.102.192.219/',
      move: false,
      activeIndex: 0,
      tops: [] //存放所有top值
    }
  },
  methods: {
    showAll () {
      this.move = !this.move
      if (this.move) {
        this.scrollBar = new BScroll('.bar_wrapper', {
          click: true
        })
      } else {
        this.scrollBar.disable()
      }
    },
    checkArea (value) {
      this.activeIndex = value
      // window.scrollTo(0, this.tops[value - 1])
      scrll(0, this.tops[value - 1])
    }
  },
  mounted () {
    this.$store.dispatch('reqArea').then(() => {
      const lis = this.$refs.areaUi.getElementsByClassName('list_item')
      Array.prototype.slice.call(lis).forEach(item => {
        this.tops.push(item.offsetTop - 43)
      })
    })
  },
  computed: {
    ...mapState(['area'])
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .AreaList {
    .area_bar {
      line-height: 44px;

      .head {
        padding: 0 13px;

        .title {
          font-size: 14px;
          color: #8A8A8A;
        }
      }

      .bar_wrapper {
        padding: 0 7px;
        overflow: hidden;
        transition: all .5s;
        height: 78px;

        &.move {
          height: 156px;
        }

        .bar_list {
          overflow: hidden;

          .list_item {
            margin: 0 5px 13px 5px;
            color: #7D7D7D;
            font-size: 14px;
            background-color: #fff;
            float: left;
            width: 110px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            box-sizing: border-box;
            border: 1px solid #7D7D7D;

            &.active {
              border-color: #F83478;
              background-color: #FEDEE9;
              color: #F83478;
            }
          }
        }
      }

      .shou_all {
        width: 33%;
        margin: 0 auto;

        .title {
          width: 100%;
          line-height: 14px;
          text-align: center;
          color: #7D7D7D;
          position: relative;
          z-index: 2;

          span {
            position: relative;
            z-index: 2;
            background-color: #eee;
            padding: 0 4px;
          }

          &::after {
            content: "";
            position: absolute;
            height: 1Px;
            background-color: #7D7D7D;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            transform: scaleY(0.5);
          }
        }

        .arrow {
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          transition: transform .5s;

          &.move {
            transform: rotate(180deg);
          }

          .iconfont {
            color: #7D7D7D;
            font-size: 20px;
          }
        }
      }
    }

    .area_content {
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
            background-color: #fff;

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
</style>

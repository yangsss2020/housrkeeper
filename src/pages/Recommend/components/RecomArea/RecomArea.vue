<template>
  <div class="RecomArea">
    <div class="nav_bar_container" ref="wrapper">
      <ul class="nav_bar_list">
        <li class="nav_bar_item" :class="{active:currentIndex===index}" v-for="(item,index) in area" :key="item.id"
            @click="handlScroll(index)"
            ref="bar"
            :style="{backgroundImage:`url(${BASE_URL}${item.icoUrl})`}">
          <div class="content">
            <h4 class="title">{{item.name}}</h4>
            <div class="line border-bottom-1px"></div>
            <p class="desc">{{item.describe}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="area_panel">
      <div class="list_wrapper" ref="listUi">
        <ul class="area_item" v-for="item in area" :key="item.id" ref="panel">
          <li v-for="(food,index) in item.list" :key="index" class="item_list">
            <div class="area_wrapper">
              <div class="item_img">
                <img :src="BASE_URL+food.imgUrl" class="img_content">
              </div>
              <p class="desc">{{food.title}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'RecomArea',
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000/',
      indexBar: 0,
      scrollY: 0,
      tops: [] // 存放列表坐标
    }
  },
  methods: {
    _initScroll () {
      this.scrollBar = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollX: true
      })
      this.scrollList = new BScroll('.area_panel', {
        probeType: 2
      })
      this.scrollList.on('scroll', ({ x, y }) => {
        console.log(this.currentIndex)
        this.scrollY = Math.abs(y)
        // this.scrollBar.scrollToElement(this.$refs.bar[this.currentIndex], 300)
      })
      this.scrollList.on('scrollEnd', ({ x, y }) => {
        // console.log(y)
        this.scrollY = Math.abs(y)
        this.scrollBar.scrollToElement(this.$refs.bar[this.currentIndex], 300)
      })
    },
    _initTop () {
      // const { scrollY, tops } = this
      const tops = []
      let top = 0
      tops.push(top)
      const lis = this.$refs.listUi.getElementsByClassName('area_item')
      Array.prototype.slice.call(lis).forEach(ul => {
        top += ul.clientHeight
        tops.push(top)
      })
      this.tops = tops
    },
    handlScroll (index) {
      this.indexBar = index
      this.scrollList.scrollToElement(this.$refs.panel[index], 300)
    }
  },
  mounted () {
    // console.log(this.area)
    this.$store.dispatch('reqArea')
  },
  computed: {
    ...mapState(['area']),
    currentIndex () {
      const { tops, scrollY } = this
      const index = tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < tops[index + 1]
      })
      return index
    }
  },
  watch: {
    area: function (value) {
      // console.log(value)
      this.$nextTick(() => {
        this._initScroll()
        this._initTop()
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .RecomArea {
    position: fixed;
    top: 223px;
    left: 0;
    right: 0;
    bottom: 0;

    .nav_bar_container {
      background-color: #eee;
      height: 90px;
      width: 100%;
      overflow: hidden;

      .nav_bar_list {
        float: left;
        white-space: nowrap;
        margin-top: 17px;
        margin-left: 10px;
        /*overflow: hidden;*/

        .nav_bar_item {
          display: inline-block;
          position: relative;
          width: 62px;
          height: 62px;
          margin: 0 7px;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          text-align: center;
          -webkit-background-size: cover;
          background-size: cover;
          background-repeat: no-repeat;

          &.active {
            &::after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              bottom: -10px;
              z-index: 99;
              border-bottom: 2Px solid #FE300D;
            }
          }

          .content {
            display: inline-block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            font-family: "微软雅黑";
          }

          .title {
            font-size: 12px;
            line-height: 20px;
            color: #fff;
            text-shadow: 0 0 2px #080D0A;
          }

          .line {
            &.border-bottom-1px::after {
              border-color: #fff;
            }
          }

          .desc {
            text-shadow: 0 0 2px #080D0A;
            font-size: 10px;
            line-height: 14px;
            color: #fff;
            /*display: inline-block;*/
          }
        }
      }
    }

    .area_panel {
      position: absolute;
      top: 90px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;

      .area_item {
        overflow: hidden;

        .item_list {
          width: 50%;
          float: left;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 10px;

          .area_wrapper {
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 5px #B6B5B5;

            .item_img {
              width: 100%;
              height: 85px;
              /*border-radius: 5px 5px 0 0 ;*/
              overflow: hidden;

              .img_content {
                width: 100%;
                height: auto;
              }
            }

            .desc {
              line-height: 30px;
              text-align: center;
              color: #525252;
              /*border-radius: 0 0 5px 5px;*/
            }
          }
        }

      }
    }
  }

</style>

<template>
  <div class="HomeSwiper">
    <div class="swiper_contaner" v-if="swiper.length">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiper" :key="index">
          <div class="img_item">
            <img
              class="img_content_h"
              :src="BASE_URL+item.imgUrl"
              alt="">
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeSwiper',
  data () {
    return {
      BASE_URL: 'http://47.102.192.219',
      notNextTick: true,
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        autoplay: {
          delay: 1000, //1秒切换一次
          disableOnInteraction: false
        }
      }
    }
  },
  methods: {},
  computed: {
    ...mapState(['swiper'])
  },
  mounted () {
    // this.getswiper()
    if (!this.swiper.length) {
      this.$store.dispatch('reqSwiper')
    }
    // if (!this.area.length) {
    //   this.$store.dispatch('reqArea')
    // }
  },
  beforeMount () {
    this.$Lazyload.config({ loading: 'http://img.soogif.com/DIqhMVRGNcMI356N4PtBHj3EudMAXjDo.gif_s400x0' })
  }
}
</script>
<style lang="scss">
  .HomeSwiper {
    .swiper-container {
      width: 100%;
      height: 185px;
    }

    .swiper-pagination {
      .swiper-pagination-bullet {
        background: #fff;
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background: #FE275C;
        }
      }
    }
  }
</style>

<style scoped lang="scss">
  .HomeSwiper {
    background-color: #eee;
    /*padding-bottom: 50px;*/

    .swiper_contaner {
      width: 100%;
      /*height: 200px;*/
      height: 0;
      padding-bottom: 185px;
      background-color: #ddd;

      .img_item {
        width: 100%;
        height: 100%;
        overflow: hidden;

        .img_content_h {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
</style>

<template>
  <div class="home">
    <div class="swiper_contaner">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiper" :key="index">
          <div class="img_item">
            <img
              class="img_content"
              :src="BASE_URL+item.imgUrl"
              alt="">
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <Category/>
    <Recommend/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Category from '@/pages/Home/components/Category/Category'
import Recommend from '@/pages/Home/components/Recommend/Recommend'

export default {
  name: 'Home',
  components: { Recommend, Category },
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000',
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
      }
    }
  },
  methods: {},
  computed: {
    ...mapState(['swiper'])
  },
  mounted () {
    // this.getswiper()
    this.$store.dispatch('reqSwiper')
    // this.$store.dispatch('reqArea')
  }
}
</script>
<style lang="scss">
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
</style>
<style scoped lang="scss">
  .home {
    background-color: #eee;
    padding-bottom: 50px;
    .swiper_contaner {
      width: 100%;
      /*height: 200px;*/
      height: 0;
      padding-bottom: 185px;
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
  }
</style>

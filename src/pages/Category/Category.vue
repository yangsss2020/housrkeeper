<template>
  <div class="Category">
    <Topbar :title="$route.query.title" color="#007BF2"/>
    <div class="wrapper">
      <cube-scroll>
        <div class="content">
          <img :src="BASE_URL+$route.query.imgUrl2x" alt="" class="img_content">
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'
export default {
  name: 'Category',
  data () {
    return {
      title: '购物车',
      BASE_URL: 'http://47.102.192.219/'
    }
  },
  components: { Topbar }
}
</script>

<style scoped lang="scss">
.Category {
  width: 100%;
  padding-top: 43px;
  .wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 43px;
    bottom: 0;
    overflow: hidden;
    .content {
      width: 100%;
      /*border: 1px dashed red;*/
      .img_content {
        width: 100%;
        height: auto;
      }
    }
  }

}
</style>

<template>
  <div class="Category">
    <Topbar :title="$route.query.title" color="#007BF2"/>
    <div class="content">
      <img :src="BASE_URL+$route.query.imgUrl2x" alt="" class="img_content">
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
      BASE_URL: 'http://127.0.0.1:3000/'
    }
  },
  components: { Topbar }
}
</script>

<style scoped lang="scss">
.Category {
  width: 100%;
  padding-top: 43px;
  .content {
    width: 100%;
    border: 1px dashed red;
    .img_content {
      width: 100%;
      height: auto;
    }
  }
}
</style>

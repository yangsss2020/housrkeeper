<template>
  <div class="PageRecommend">
    <topbar title="推荐专区" color="#F83478"/>
    <div class="banner">
      <img src="./images/01.png" alt="" class="img_content">
    </div>
    <RecomArea/>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar/Topbar'
import RecomArea from '@/pages/Recommend/components/RecomArea/RecomArea'

export default {
  name: 'PageRecommend',
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000/',
      data: []
    }
  },
  components: { RecomArea, Topbar }
}
</script>
<style scoped lang="scss">
  .PageRecommend {
    padding-top: 43px;
    background-color: #eee;

    .banner {
      width: 100%;
      height: 0;
      padding-bottom: 180px;

      .img_content {
        width: 100%;
        height: auto;
      }
    }
  }

</style>

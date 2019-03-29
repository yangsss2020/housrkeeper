<template>
  <div class="home">
    <HomeSwiper/>
    <Category/>
    <Recommend/>
  </div>
</template>

<script>
import Category from '@/pages/Home/components/Category/Category'
import Recommend from '@/pages/Home/components/Recommend/Recommend'
import HomeSwiper from '@/pages/Home/components/HomeSwiper/HomeSwiper'

export default {
  name: 'Home',
  components: { HomeSwiper, Recommend, Category }

}
</script>

<style scoped lang="scss">
  .home {
    padding-bottom: 50px;
  }
</style>

<template>
  <div id="app">
    <!--<keep-alive :include="test">-->
      <!--<router-view/>-->
    <!--</keep-alive>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Tabbar v-if="$route.meta.showTabbar"/>
  </div>
</template>

<style lang="scss">
  #app {
    font-size: 12px;
  }
</style>
<script>
// import {map} from 'vuex'
import Tabbar from './components/Tabbar/Tabbar'

export default {
  components: { Tabbar },
  data () {
    return {
      test: 'area'
    }
  },
  created () {
    this.$store.dispatch('reqInfo').then(() => {
      this.$store.dispatch('getorder')
    })
    this.$store.dispatch('getShopcar')
    // this.$store.dispatch('getaddress')
  }
}
</script>

<template>
  <div id="app">
    <router-view/>
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
  mounted () {
    this.$store.dispatch('reqInfo')
  }
}
</script>

<template>
  <div class="Other">
    <topbar title="家乡地" color="#F83478"/>
    <div class="banner">
      <img :src="BASE_URL+area[0].imgBanner" alt="" class="img_content" v-if="area.length">
    </div>
    <AreaList/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'
import { mapState } from 'vuex'
import AreaList from '@/pages/Other/components/AreaList/AreaList'

export default {
  name: 'Other',
  data () {
    return {
      BASE_URL: 'http://127.0.0.1:3000/'
    }
  },
  components: { AreaList, Topbar },
  mounted () {
    this.$store.dispatch('reqArea')
  },
  computed: {
    ...mapState(['area'])
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .Other {
    padding-top: 43px;
    background-color: #eee;
    padding-bottom: 50px;
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

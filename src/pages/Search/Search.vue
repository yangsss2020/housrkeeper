<template>
  <div class="Search">
    <topbar color="#F83478">
      <div class="wrapper">
        <cube-input v-model="keyword"></cube-input>
        <div class="btn" @click="goMore(keyword)">搜索</div>
      </div>
    </topbar>
    <div class="container">
      <cube-scroll>
        <ul class="search_list">
          <li class="list_litem border-bottom-1px" v-for="(item,index) in list" :key="index"
              @click="goMore(item.describe)">{{item.describe}}
          </li>
          <li class="list_litem border-bottom-1px" v-if="!this.list.length">没有找到匹配项</li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'
import { mapState } from 'vuex'

export default {
  name: 'Search',
  components: { Topbar },
  data () {
    return {
      keyword: '',
      list: '',
      timer: null
    }
  },
  methods: {
    goMore (val) {
      this.keyword = val
      this.$router.push({ path: '/more', query: { keyword: this.keyword } })
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        if (!this.keyword) {
          this.list = []
          return this.list
        }
        this.product.forEach(item => {
          if (item.describe.indexOf(this.keyword) > -1) {
            result.push(item)
          }
        })
        this.list = result
      }, 100)
    }
  },
  computed: {
    ...mapState(['enterprise', 'product'])
  },
  mounted () {
    this.$store.dispatch('reqEnterprise')
    this.$store.dispatch('reqProduct')
  }
}
</script>

<style scoped lang="scss">
  .Search {
    .cube-input {
      position: absolute;
      width: 75%;
      height: 30px;
      left: 50%;
      top: 50%;

      &::after {
        border-radius: 30Px;
      }

      transform: translate(-50%, -50%);

      .cube-input-field {
        border-radius: 50%;
      }
    }

    .btn {
      font-size: 14px;
    }

    .container {
      position: fixed;
      top: 43px;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #eee;

      .search_list {
        margin-top: 4px;
        overflow: hidden;
        background-color: #fff;
        border-radius: 6px 6px 0 0;

        .list_litem {
          padding: 10px 15px;
        }
      }
    }
  }
</style>

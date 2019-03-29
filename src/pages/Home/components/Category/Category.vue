<template>
  <div class="Category">
    <ul class="category_list" v-if="categorys.length">
      <router-link :to="{path:'/category',query:items}" tag="li" class="list_item" v-for="items in categorys"
                   :key="items.id">
        <div class="item_img">
          <img :src="BASE_URL+items.imgicon" alt="" class="img_content">
        </div>
        <div class="item_title">{{items.title}}</div>
      </router-link>
      <li class="list_item">
        <div class="item_img">
          <img src="./images/jxd@2x(1).png" alt="" class="img_content">
        </div>
        <div class="item_title">更多</div>
      </li>
    </ul>
    <ul class="category_list" v-else>
      <li>
        <img src="../../../../common/images/msite_back.svg" alt="">
      </li>
    </ul>
    <div class="catefory_banner" @click="$router.push('/season')">
      <img src="../../../img/bnr@2x.png" alt="" class="img_content">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',
  data () {
    return {
      BASE_URL: 'http://47.102.192.219/'
    }
  },
  computed: {
    ...mapState(['category']),
    categorys () {
      const category = this.category.slice(0, 9)
      // const newcategory = []
      // let minArr = []
      // category.forEach((item, index) => {
      //   if (minArr.length === 5) {
      //     minArr = []
      //   }
      //   if (minArr.length === 0) {
      //     newcategory.push(minArr)
      //   }
      //   minArr.push(item)
      // })
      return category
    }
  },
  mounted () {
    if (!this.category.length) {
      this.$store.dispatch('reqCategory')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/variable.scss";
  @import "~styles/mixins.scss";

  .Category {
    width: 100%;
    background-color: #fff;

    .category_list {
      /*display: flex;*/
      padding: 0 5px;
      overflow: hidden;
      /*justify-content: space-between;*/

      .list_item {
        text-align: center;
        width: 20%;
        float: left;
        box-sizing: border-box;
        margin: 20px 0;

        .item_img {
          /*display: inline-block;*/
          margin: 0 auto;
          width: 39px;
          height: 39px;
          margin-bottom: 6px;

          .img_content {
            max-width: 100%;
            font-size: 12px;
            color: #050505;
            @include ellipsis();
          }
        }

        .item_title {
          display: inline-block;
          max-width: 60px;
          @include ellipsis()
        }
      }
    }

    .catefory_banner {
      height: 98px;
      padding: 0 15px 15px 15px;
      overflow: hidden;

      .img_content {
        overflow: hidden;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

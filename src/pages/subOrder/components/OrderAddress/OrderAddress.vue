<template>
  <div class="OrderAddress">
    <div class="address" v-if="addressNow" @click="$router.push('/address')">
      <div class="left">
        <i class="iconfont">&#xe61b;</i>
      </div>
      <div class="center">
        <div class="head">
          <span>收货人:{{addressNow.name}}</span>
          <span>{{addressNow.tel}}</span>
        </div>
        <div class="content">
          收货地址：{{addressNow.area}}{{addressNow.address}}
        </div>
      </div>
      <div class="right">
        <i class="cubeic-arrow"></i>
      </div>
    </div>
    <div class="no_address" v-else @click="$router.push('/address')">
      <div class="left">
        <i class="iconfont">&#xe61b;</i>
        <span>请先添加收货地址</span>
      </div>
      <div class="right">
        <i class="cubeic-arrow"></i>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'OrderAddress',
  data () {
    return {
      shouList: true
    }
  },
  computed: {
    ...mapState(['address']),
    addressNow () {
      const result = this.address.find(item => {
        return item.check === true
      })
      return result
    }
  },
  created () {
    if (!this.address.lenght) {
      this.$store.dispatch('getaddress')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .OrderAddress {
    height: 78px;
    position: relative;
    background-color: #eee;
    display: flex;
    align-items: center;
    padding: 0 15px 12px;

    .address {
      display: flex;
      align-items: center;
      color: #333333;
      width: 100%;
      justify-content: space-between;
      .left {
        width: 30px;

        .iconfont {
          font-size: 20px;
        }
      }

      .center {
        flex: 1;

        .head {
          margin-top: 4px;
          line-height: 14px;
          display: flex;
          justify-content: space-between;
        }

        .content {
          margin-top: 6px;
          line-height: 20px;
        }
      }

      .right {
        margin-left: 15px;
        width: 18px;
      }
    }

    .no_address {
      width: 100%;
      display: flex;
      font-size: 15px;
      color: #999;
      justify-content: space-between;

      .left {
        .iconfont {
          margin-right: 5px;
          font-size: 20px;
        }
      }
    }

    .line {
      position: absolute;
      bottom: 7px;
      left: 0;
      width: 100%;
      height: 5px;
      @include bg-image("../../img/dddizxl");
      background-repeat: no-repeat;
      -webkit-background-size: contain;
      background-size: contain;
    }
  }
</style>

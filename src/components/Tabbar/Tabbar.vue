<template>
  <div class="Tabbar">
    <router-link to="/home" class="bar" :class="{active:$route.path==='/home'}">
      <div class="icon">
        <i class="iconfont">&#xe626;</i>
      </div>
      <h3 class="title">首页</h3>
    </router-link>
    <router-link to="/other" class="bar" :class="{active:$route.path==='/other'}">
      <div class="icon">
        <i class="iconfont">&#xe604;</i>
      </div>
      <h3 class="title">家乡地</h3>
    </router-link>
    <router-link to="/shop" class="bar" :class="{active:$route.path==='/shop'}">
      <div class="icon">
        <i class="iconfont">&#xe655;</i>
      </div>
      <h3 class="title">购物</h3>
    </router-link>
    <router-link to="/person" class="bar" :class="{active:$route.path==='/person'}">
      <div class="icon">
        <i class="iconfont">&#xe611;</i>
      </div>
      <h3 class="title">我的</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
  @import "~styles/variable.scss";

  .Tabbar {
    position: fixed;
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding: 6px 0;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;
    box-shadow: 0 -7px 18px #E1E1E2;
    /*box-shadow: 0 -7px 18px blur rgba(255,255,255,.24);*/
    .bar {
      /*width: 24px;*/
      text-align: center;

      &.active {
        color: $color-red-2;
      }

      .icon {
        margin: 0 auto;

        .iconfont {
          font-size: 23px;
        }
      }

      .title {
        font-size: 11px;
        line-height: 12px;
        margin-top: 2px;
      }
    }
  }
</style>

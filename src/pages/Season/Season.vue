<template>
  <div class="Season">
    <div class="banner">
      <img src="./img/bannerjz@2x.png" alt="">
    </div>
    <div class="content">
      <img src="./img/wz@2x.png" alt="">
    </div>
    <div class="footer"></div>
    <div class="back" @click="$router.back()">
      <i class="iconfont">&#xe606;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Season'
}
</script>

<style scoped lang="scss">
  .Season {
    width: 100%;

    .banner {
      img {
        width: 100%;
        height: auto;
      }
    }

    .content {
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }

    .footer {
    }
    .back {
      position: fixed;
      left: 15px;
      top: 15px;
      background-color: rgba(0,0,0,.1);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      .iconfont {
        font-size: 20px;
        color: #fff;
      }
    }
  }
</style>

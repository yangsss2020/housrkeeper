<template>
  <div class="Season">
    <div class="banner">
      <img src="./img/bannerjz@2x.png" alt="">
    </div>
    <div class="content">
      <img src="./img/wz@2x.png" alt="">
    </div>
    <div class="footer"></div>
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
  }
</style>

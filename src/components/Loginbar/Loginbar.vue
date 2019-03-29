<template>
  <div class="Loginbar" :style="{color: color}">
    <i class="iconfont back" @click="$router.back()">&#xe606;</i>
    <h2 class="title" v-if="title">{{title}}</h2>
    <span @click="$router.push('/register')" class="right">{{more}}</span>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'Loginbar',
  props: {
    title: String,
    color: String,
    more: String
  }
}
</script>

<style scoped lang="scss">
  .Loginbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 43px;
    display: flex;
    justify-content: space-between;
    padding: 0 13px;
    background-color: #fff;
    z-index: 9;

    .back {
      font-size: 18px;
    }

    .right {
      font-size: 15px;
    }

    .title {
      position: absolute;
      font-size: 22px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>

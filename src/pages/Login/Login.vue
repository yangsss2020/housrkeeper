<template>
  <div class="Login" >
    <Loginbar color="#F83478" more="注册">
      <div slot="default" class="tab_bar">
        <router-link tag="span" to="phonelogin" class="bar_item">手机登陆</router-link>
        <router-link tag="span" to="accountlogin" class="bar_item">账号登陆</router-link>
      </div>
    </Loginbar>
    <transition :name="translateStyl">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Loginbar from '@/components/Loginbar/Loginbar'

export default {
  name: 'Login',
  data () {
    return {}
  },
  computed: {
    translateStyl () {
      let translateStyl = 'left'
      if (this.$route.name === 'login') {
        translateStyl = 'right'
      } else {
        translateStyl = 'left'
      }
      return translateStyl
    }
  },
  components: { Loginbar }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .Login {
    padding-top: 43px;
    overflow-x: hidden;

    .right-enter {
      opacity: 0;
      transform: translateX(100%);
    }

    .right-leave-to {
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
    }

    .left-enter {
      opacity: 0;
      transform: translateX(-100%);
    }

    .left-leave-to {
      opacity: 0;
      transform: translateX(100%);
      position: absolute;
    }

    .right-enter-active,
    .right-leave-active,
    .left-enter-active,
    .left-leave-active {
      transition: all 0.5s ease;
    }

    .tab_bar {
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      left: 50%;
      width: 200px;
      line-height: 43px;
      display: flex;
      justify-content: space-between;

      .bar_item {
        font-size: 20px;
        color: #111111;

        &.router-link-active {
          color: $color-red-1;
        }
      }
    }

  }
</style>

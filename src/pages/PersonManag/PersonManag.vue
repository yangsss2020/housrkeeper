<template>
  <div class="PersonManag">
    <topbar title="账号管理" color="#F83478"/>
    <cube-button @click.prevent="showBtn">退出登录</cube-button>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'

export default {
  name: 'PersonManag',
  methods: {
    async loginOut () {
      this.$store.dispatch('reqLogout')
    },
    showBtn () {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '确认退出登录?',
        content: '在看看吧',
        confirmBtn: {
          text: '确认退出',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消退出',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.loginOut()
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '退出登录'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '取消'
          }).show()
        }
      }).show()
    }
  },
  components: { Topbar }
}
</script>

<style scoped lang="scss">
  .PersonManag {
    padding-top: 43px;
  }
</style>

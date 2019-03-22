<template>
  <div class="Register">
    <topbar color="#F83478" title="注册"/>
    <form action="#" class="form" @submit.prevent="register">
      <div class="section">
        <cube-input v-model="nickname" placeholder="请输入昵称" type="text"></cube-input>
      </div>
      <div class="section">
        <cube-input v-model="name" placeholder="请输入用户名" type="text" :autofocus="autofocus"></cube-input>
      </div>
      <div class="section">
        <cube-input v-model="tel" placeholder="请输入手机号" type="tel" :autofocus="autofocus"></cube-input>
      </div>
      <div class="section">
        <cube-input v-model="pwd" placeholder="请输入密码" type="password" :eye="eye"></cube-input>
      </div>
      <div class="tip">
        温馨提示：登录时就表示已同意掌上管家登录协议:
        <a href="#">《用户服务协议》</a>
      </div>
      <div class="section">
        <cube-button type="submit">注册</cube-button>
      </div>
      <div class="about_us">关于我们</div>
    </form>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar'
import { register } from '../../api/index'

export default {
  name: 'Register',
  components: { Topbar },
  data () {
    return {
      autofocus: true,
      name: '', //用户名
      pwd: '', //密码
      nickname: '', //昵称
      tel: '',
      errContent: '',
      eye: {
        open: true,
        reverse: true
      }
    }
  },
  methods: {
    async register () {
      if (!/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/.test(this.nickname)) {
        this.errContent = '请输入正确的昵称'
        this.showAlert()
        return false
      } else if (!/^\w{2,20}/.test(this.name)) {
        this.errContent = '请输入正确的用户名'
        this.showAlert()
        return false
      } else if (!/^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/.test(this.tel)) {
        this.errContent = '请输入正确的手机号'
        this.showAlert()
        return false
      } else if (!this.pwd || !/^[a-zA-Z0-9]{6,10}$/.test(this.pwd)) {
        this.errContent = '请输入6-10位的密码'
        this.showAlert()
        return false
      }
      //注册
      const result = await register(this.name, this.nickname, this.pwd, this.tel)
      if (result.code === 1) {
        this.errContent = result.msg
        this.showAlert()
        return false
      } else {
        await this.$store.dispatch('reqInfo')
        this.$router.push('/person')
      }
    },
    showAlert () {
      this.$createDialog({
        type: 'alert',
        title: '错误',
        content: this.errContent,
        icon: 'cubeic-wrong'
      }).show()
    }
  }
}
</script>

<style scoped lang="scss">
  .Register {
    padding-top: 43px;

    .form {
      .section {
        margin-bottom: 10px;
      }

      .tip {
        font-size: 14px;
        color: #999;
        margin-bottom: 20px;
        line-height: 24px;

        a {
          color: #F83478;
        }
      }

      .about_us {
        color: #999;
        font-size: 14px;
        margin-top: 12px;
        text-align: center;
      }
    }
  }
</style>

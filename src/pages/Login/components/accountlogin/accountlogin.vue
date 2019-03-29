<template>
  <div class="accountlogin">
    <form action="#" class="form" @submit.prevent="login">
      <div class="section">
        <cube-input v-model="name " placeholder="用户名/手机/邮箱" type="text" :autofocus="autofocus"></cube-input>
      </div>
      <div class="section">
        <cube-input v-model="pwd" placeholder="请输入密码" type="password" :eye="eye"></cube-input>
      </div>
      <div class="section verification">
        <cube-input v-model="captcha" placeholder="请输入验证码" type="text"></cube-input>
        <div class="verification_code">
          <img
            src="http://47.102.192.219/api/captcha"
            alt=""
            class="code_img"
            ref="getCaptcha"
            @click="getCaptcha"
          >
        </div>
      </div>
      <div class="section">
        <cube-button type="submit">登陆</cube-button>
      </div>
    </form>
  </div>
</template>

<script>
import { loginPwd } from '../../../../api/index'

export default {
  name: 'accountlogin',
  data () {
    return {
      autofocus: true,
      imgCaptcha: 'http://47.102.192.219/api/captcha',
      name: '', //用户名
      pwd: '', //用户秘密
      captcha: '', //验证码
      errContent: '', //错误提示
      eye: {
        open: true,
        reverse: true
      }
    }
  },
  methods: {
    async getCaptcha (e) {
      e.target.src = 'http://47.102.192.219/api/captcha/?id=' + Date.now()
      // const result = await reqCaptcha()
      // this.imgCaptcha = result
    },
    async login () {
      if (!/^\w{2,20}$/.test(this.name)) {
        this.errContent = '请输入正确的用户名'
        this.showAlert()
        this.$refs.getCaptcha.src = 'http://47.102.192.219/api/captcha/?id=' + Date.now()
        return false
      } else if (!this.pwd || !/^[a-zA-Z0-9]{6,10}$/.test(this.pwd)) {
        this.errContent = '请输入正确的密码'
        this.showAlert()
        this.$refs.getCaptcha.src = 'http://47.102.192.219/api/captcha/?id=' + Date.now()
        return false
      } else if (!/^\w+$/.test(this.captcha)) {
        this.errContent = '请输入正确的验证码'
        this.showAlert()
        this.$refs.getCaptcha.src = 'http://47.102.192.219/api/captcha/?id=' + Date.now()
        return false
      }
      //登录
      const result = await loginPwd(this.name, this.pwd, this.captcha)
      if (result.code === 1) {
        this.errContent = result.msg
        this.$refs.getCaptcha.src = 'http://47.102.192.219/api/captcha/?id=' + Date.now()
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
  .accountlogin {
    .form {
      .section {
        margin-bottom: 10px;
      }

      .verification {
        position: relative;

        .verification_code {
          position: absolute;
          right: 0;
          top: 50%;
          width: 150px;
          height: 40px;
          transform: translateY(-50%);

          .code_img {
            height: 100%;
          }
        }
      }
    }
  }
</style>

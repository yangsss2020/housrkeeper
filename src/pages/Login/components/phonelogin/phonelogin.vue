<template>
  <div class="phonelogin">
    <form action="#" class="form" @submit.prevent="login">
      <div class="section code">
        <cube-input v-model="tel" placeholder="请输入手机号" type="tel" :autofocus="autofocus"></cube-input>
        <button
          @click.prevent="get_telverification"
          class="get_verification"
          :disabled="!rightPhone"
          :class="{get_verificat:rightPhone} "
        >{{count>0? `还剩${count}秒`:'获取验证码'}}
        </button>
      </div>
      <div class="section">
        <cube-input v-model="code" placeholder="请输入短信验证码" type="number"></cube-input>
      </div>
      <div class="section">
        <cube-button type="submit">登陆</cube-button>
      </div>
    </form>
  </div>
</template>

<script>
import { reqSendcode, loginSms } from '../../../../api/index'

export default {
  name: 'phonelogin',
  data () {
    return {
      autofocus: true,
      tel: '', //手机号
      code: '', //短信验证码
      // rightPhone: false, //验证码正确
      count: 0, //剩余时间
      errContent: '' //错误提示
    }
  },
  methods: {
    //获取短信验证码
    async get_telverification () {
      this.count = 30
      this.timeId = setInterval(() => {
        if (this.count > 0) {
          this.count--
        } else {
          this.count = 0
          clearInterval(this.timeId)
        }
      }, 1000)
      //发送验证码
      await reqSendcode(this.tel)
      // console.log(result)
      // if (result.code === 1) {
      //   this.errContent = result.msg
      //   this.showAlert()
      //   clearInterval(this.timeId)
      //   return false
      // }
    },
    async login () {
      if (!this.rightPhone) {
        this.errContent = '请输入正确的手机号'
        this.showAlert()
        return false
      } else if (!this.code) {
        this.errContent = '请输入验证码'
        this.showAlert()
        return false
      }
      //登陆
      const result = await loginSms(this.phone, this.code)
      console.log(result)
    },
    showAlert () {
      this.$createDialog({
        type: 'alert',
        title: '错误',
        content: this.errContent,
        icon: 'cubeic-wrong'
      }).show()
    }
  },
  computed: {
    rightPhone () {
      return /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/.test(this.tel) && this.count === 0
    }
  }
}
</script>

<style scoped lang="scss">
  .phonelogin {
    .form {
      .section {
        margin-bottom: 10px;
      }

      .code {
        position: relative;

        .get_verification {
          overflow: hidden;
          position: absolute;
          border: none;
          background-color: #fff;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: #ddd;

          &.get_verificat {
            color: #000;
          }

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="EditAddress">
    <topbar title="编辑地址" color="#F83478" class="border-bottom-1px">
      <div class="edit_shop" @click="subAddress">保存</div>
    </topbar>
    <div class="form_wrapper">
      <cube-form :model="model">
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
        <cube-form-item :field="fields[2]"></cube-form-item>
        <cube-form-item :field="fields[3]"></cube-form-item>
        <cube-form-item :field="fields[4]"></cube-form-item>
      </cube-form>
    </div>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar/Topbar'
import { mapState } from 'vuex'
import { upaddress } from '../../api/index'

export default {
  name: 'EditAddress',
  components: { Topbar },
  data () {
    return {
      validity: {},
      valid: undefined,
      model: {
        name: '',
        tel: '',
        area: '',
        address: '',
        code: '',
        pcaValue: [],
        dateValue: ''
      },
      test: '',
      fields: [
        {
          type: 'input',
          modelKey: 'name',
          label: '联系人',
          props: {
            placeholder: '名字'
          },
          rules: {
            required: true,
            min: 2,
            max: 20
          }
        },
        {
          type: 'input',
          modelKey: 'tel',
          label: '手机号码',
          props: {
            placeholder: '11位手机号'
          },
          rules: {
            required: true,
            type: 'tel'
          }
        },
        {
          type: 'input',
          modelKey: 'area',
          label: '选择地区',
          props: {
            placeholder: '地区信息'
          },
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'address',
          label: '详细地址',
          props: {
            placeholder: '街道门牌信息'
          },
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'code',
          label: '邮政编码',
          props: {
            placeholder: '邮政编码'
          },
          rules: {
            required: true,
            type: 'number'
          }
        }
      ]
    }
  },
  computed: {
    ...mapState(['address']),
    nowAddress () {
      return this.address[this.$route.query.index]
    }
  },
  activated () {
    const address = this.nowAddress
    this.model.name = address.name
    this.model.tel = address.tel
    this.model.area = address.area
    this.model.address = address.address
    this.model.code = address.code
  },
  methods: {
    async subAddress () {
      const { name, tel, area, address, code } = this.model
      const data = { username: this.nowAddress.username, name, tel, area, address, code }
      const result = await upaddress({ data })
      if (result.code === 0) {
        this.$router.back()
      }
    }
  }
}
</script>
<style lang="scss">
  .EditAddress {
    .cube-form-item_required {
      .cube-form-label::before {
        display: none;
      }
    }

    .cube-form-label {
      width: 80px;
    }
  }
</style>
<style scoped lang="scss">
  .EditAddress {
    padding-top: 43px;

    .edit_shop {
      font-size: 15px;
    }

    .form_wrapper {
      padding-left: 15px;
      border-bottom: 1Px solid #999;
    }
  }
</style>

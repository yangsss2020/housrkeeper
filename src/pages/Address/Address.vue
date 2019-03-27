<template>
  <div class="Address">
    <topbar title="管理收货地址" color="#F83478" class="border-bottom-1px"/>
    <div class="wrapper ">
      <cube-scroll>
        <ul class="address_list" v-if="shouList">
          <li class="list_item border-bottom-1px " v-for="(item,index) in address" :key="index">
            <div class="head border-bottom-1px">
              <div class="info">
                <span>{{item.name}}</span>
                <span>{{item.tel}}</span>
              </div>
              <p class="address_Info">{{item.area}}{{item.address}}</p>
            </div>
            <div class="footer">
              <div class="left" @click="check(index)">
                <div class="circle" :class="{on:item.check}">
                  <i class="iconfont">&#xe67f;</i>
                </div>
                <div class="all">选择默认</div>
              </div>
              <div class="right" @click="editaddress(index)">
                <span>
                  <i class="iconfont">&#xe62b;</i>
                  编辑
                </span>
                <span>
                  <i class="iconfont">&#xe614;</i>
                  删除
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div class="no_address" v-else>
          <div class="img"></div>
          <p class="titel">您还未设置收货地址哦！</p>
        </div>
      </cube-scroll>
    </div>
    <div class="tab_bar" @click="addAddress">
      添加新地址
    </div>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar/Topbar'
import { mapState } from 'vuex'

export default {
  name: 'Address',
  data () {
    return {
      shouList: true
    }
  },
  computed: {
    ...mapState(['address'])
  },
  methods: {
    editaddress (index) {
      this.$router.push({ path: '/editaddress', query: { index } })
    },
    addAddress () {
      this.$router.push({ path: '/addaddress' })
    },
    check (index) {
      this.address.forEach(item => {
        item.check = false
      })
      this.address[index].check = true
      // console.log(this.address)
    }
  },
  mounted () {
    this.$store.dispatch('reqInfo').then(() => {
      this.$store.dispatch('getaddress')
    })
  },
  components: { Topbar }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .Address {
    .wrapper {
      position: fixed;
      top: 44px;
      bottom: 45px;
      left: 0;
      right: 0;
      overflow: hidden;
      background-color: #eee;

      .address_list {
        .border-bottom-1px::after {
          border-color: #999999;
        }

        .list_item {
          background-color: #fff;
          padding: 0 15px;
          color: #333333;
          font-size: 13px;
          margin-bottom: 10px;

          .border-bottom-1px::after {
            border-color: #999999;
          }

          .head {
            padding-bottom: 12px;

            .info {
              display: flex;
              justify-content: space-between;
              line-height: 45px;
            }

            .address_Info {
              /*margin-bottom: 12px;*/
            }
          }

          .footer {
            line-height: 48px;
            display: flex;
            justify-content: space-between;

            .left {
              .circle {
                width: 16px;
                height: 16px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                border: 1px solid #666;
                border-radius: 50%;
                text-align: center;
                line-height: 16px;
                display: inline-block;
                margin-right: 4px;

                &.on {
                  background-color: #FE275C;
                  border-color: #FE275C;
                }

                .iconfont {
                  font-size: 12px;
                  color: #fff;
                }
              }

              .all {
                display: inline-block;
              }
            }

            .right {
              span {
                margin-left: 24px;
              }
            }
          }
        }
      }

      .no_address {
        position: fixed;
        top: 43px;
        bottom: 48px;
        left: 0;
        right: 0;
        height: 300px;
        background-color: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .img {
          width: 68px;
          height: 68px;
          -webkit-background-size: contain;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url("./img/glshdz@2x.png");
        }

        .titel {
          font-size: 12px;
          color: #999999;
          margin-top: 18px;
        }
      }
    }

    .tab_bar {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 45px;
      right: 0;
      color: #fff;
      line-height: 45px;
      text-align: center;
      font-size: 18px;
      background: linear-gradient(to left, #FF1346, #FF3D78);
    }
  }
</style>

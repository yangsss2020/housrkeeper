<template>
  <div class="Person">
    <topbar title="个人中心" color="#F83478"/>
    <div class="headr">
      <div class="info">
        <div class="info_img">
          <img src="./img/avatar1.jpg" alt="" class="img_content">
        </div>
        <h3 class="name" @click="$router.push({path:singinPath})">{{userinfo.name? userinfo.name :'登陆/注册'}}</h3>
      </div>
      <div class="manage">
        <i class="iconfont">&#xe651;</i>
      </div>
      <div class="nav">
        <div class="nav_content oreder">
          <div class="head">
            <div class="left">我的订单</div>
            <div class="right">查看全部订单></div>
          </div>
          <div class="content">
            <ul class="oreder_list">
              <li class="list_item">
                <div class="imgico">
                  <div class="number">1</div>
                </div>
                <span class="title">待付款</span>
              </li>
              <li class="list_item">
                <div class="imgico">
                  <div class="number">1</div>
                </div>
                <span class="title">待发货</span>
              </li>
              <li class="list_item">
                <div class="imgico">
                  <div class="number">1</div>
                </div>
                <span class="title">待收货</span>
              </li>
              <li class="list_item">
                <div class="imgico">
                  <div class="number">1</div>
                </div>
                <span class="title">待评价</span>
              </li>
              <li class="list_item">
                <div class="imgico">
                  <div class="number">1</div>
                </div>
                <span class="title">售后/退款</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav_content tool">
          <div class="head border-bottom-1px">
            必备工具
          </div>
          <div class="content">
            <ul class="tool_list">
              <li class="list_item">
                <div class="imgico"></div>
                <span class="title">收货地址</span>
              </li>
              <li class="list_item">
                <div class="imgico"></div>
                <span class="title">我的收藏</span>
              </li>
              <li class="list_item">
                <div class="imgico"></div>
                <span class="title">我的消息</span>
              </li>
              <li class="list_item">
                <div class="imgico"></div>
                <span class="title">账户管理</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Topbar from '@/components/Topbar/Topbar'
import { mapState } from 'vuex'

export default {
  name: 'Person',
  computed: {
    ...mapState(['userinfo']),
    singinPath () {
      if (this.userinfo.name) {
        return '/personmanag'
      } else {
        return '/singin'
      }
    }
  },
  components: { Topbar }
}
</script>

<style scoped lang="scss">
  @import "~styles/index.scss";

  .Person {
    position: fixed;
    top: 43px;
    bottom: 48px;
    left: 0;
    right: 0;
    background-color: #eee;

    .headr {
      width: 100%;
      height: 115px;
      position: relative;
      @include bg-image("./img/banner4");
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;

      .info {
        padding: 18px 0 0 36px;
        display: flex;

        .info_img {
          width: 53px;
          height: 53px;
          box-sizing: border-box;
          /*border: 1px solid #fff;*/
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;

          .img_content {
            width: 100%;
          }
        }

        .name {
          font-size: 24px;
          line-height: 53px;
          color: #fff;
        }
      }

      .manage {
        position: absolute;
        right: 20px;
        top: 20px;

        .iconfont {
          color: #fff;
          font-size: 16px;
        }
      }

      .nav {
        position: absolute;
        left: 50%;
        width: 350px;
        transform: translate(-50%, 28px);

        .nav_content {
          background-color: #fff;
          margin-bottom: 10px;
          border-radius: 10px;
          box-shadow: 0 0 13px #C0C0C0;
          padding: 12px;
        }

        .oreder {
          .head {
            display: flex;
            justify-content: space-between;

            .left {
              font-size: 13px;
              color: #333333;
            }

            .right {
              font-size: 11px;
              color: #999999;
            }
          }

          .content {
            padding-top: 34px;

            .oreder_list {
              display: flex;
              justify-content: space-around;

              .list_item {
                text-align: center;

                .imgico {
                  width: 24px;
                  height: 24px;
                  margin: 0 auto 5px;
                  /*-webkit-background-size: cover;*/
                  /*background-size: cover;*/
                  /*-webkit-background-size: 20px 23px;*/
                  /*background-size: 20px 23px;*/
                  -webkit-background-size: contain;
                  background-size: contain;
                  background-repeat: no-repeat;
                  position: relative;

                  .number {
                    position: absolute;
                    right: 0;
                    top: 0;
                    transform: translate(50%, -50%);
                    width: 19px;
                    height: 19px;
                    border: 1px solid #FF2645;
                    box-sizing: border-box;
                    border-radius: 50%;
                    font-size: 13px;
                    line-height: 18px;
                    text-align: center;
                    color: #FF3544;
                    background-color: #fff;
                  }
                }

                &.list_item:nth-of-type(1) {
                  .imgico {
                    @include bg-image("./img/dfk")
                  }
                }

                &.list_item:nth-of-type(2) {
                  .imgico {
                    @include bg-image("./img/dfh")
                  }
                }

                &.list_item:nth-of-type(3) {
                  .imgico {
                    @include bg-image("./img/dsh")
                  }
                }

                &.list_item:nth-of-type(4) {
                  .imgico {
                    @include bg-image("./img/dpj")
                  }
                }

                &.list_item:nth-of-type(5) {
                  .imgico {
                    @include bg-image("./img/sh／tk")
                  }
                }

                .title {
                  line-height: 22px;
                  font-size: 13px;
                  color: #666666;
                }
              }
            }
          }
        }

        .tool {
          .head {
            font-size: 13px;
            color: #333333;
            padding-bottom: 12px;

            &.border-bottom-1px::after {
              border-color: #999999;
            }
          }

          .content {
            padding-top: 34px;

            .tool_list {
              display: flex;
              justify-content: space-around;

              .list_item {
                text-align: center;

                .imgico {
                  width: 24px;
                  height: 24px;
                  margin: 0 auto 5px;
                  -webkit-background-size: contain;
                  background-size: contain;
                  background-repeat: no-repeat;
                }

                &.list_item:nth-of-type(1) {
                  .imgico {
                    @include bg-image("./img/shdz")
                  }
                }

                &.list_item:nth-of-type(2) {
                  .imgico {
                    @include bg-image("./img/wdsc")
                  }
                }

                &.list_item:nth-of-type(3) {
                  .imgico {
                    @include bg-image("./img/wdxx")
                  }
                }

                &.list_item:nth-of-type(4) {
                  .imgico {
                    @include bg-image("./img/zhgl")
                  }
                }

                .title {
                  line-height: 22px;
                  font-size: 13px;
                  color: #666666;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

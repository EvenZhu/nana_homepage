<template>
    <div class="FooterComponent">
      <div>
        <h2>{{ $t("m.life") }}</h2>
      </div>
      <div class="left">
        <h2>{{ $t("m.discover") }}</h2>
        <ul>
          <div>
          <router-link to="/">{{ $t("m.home") }}</router-link>
          </div>
          <div>
            <router-link to="about">{{ $t("m.about") }}</router-link>
          </div>
          <div>
          <router-link to="/show_case">{{ $t("m.show_case") }}</router-link>
          </div>
          <div>
          <router-link to="/other">{{ $t("m.other") }}</router-link>
          </div>
          <div>
          <router-link to="/example">{{ $t("m.example") }}</router-link>
          </div>
        </ul>
      </div>
      <div>
        <h2>{{ $t("m.contact") }}</h2>
        <ul>
          <li>17611792362</li>
          <li>changnaxin1991@gmail.com</li>
        </ul>
      </div>
      <div class="col_center">
        <h2>{{ $t("m.elsewhere") }}</h2>
        <div class="row_center" style="margin-left: 30px">
          <div class="col_center" style="align-items: center; align-content: space-between" v-for="index in 3" v-bind:key="index"
                  @mouseover="mouseover(index)"
                  @mouseleave="mouseleave(index)">
            <img class="icon" :src="iconWithIndex[index]">
            <img class="qr" :src=srcWithIndex[index] v-show="showWithIndex(index)">
          </div>
<!--          <img class="icon" src="../assets/icon_qq.png">-->
<!--          <img class="icon" src="../assets/icon_sina.png">-->
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
      data() {
        return {
          wechatShow: false,
          qqShow: false,
          sinaShow: false,
        };
      },
      methods: {
        iconWithIndex(index) {
          // let srcs = ["icon_wechat", "iconn_qq", "icon_sina"]
          let src = "../assets/icon_wechat.png"
          console.log(index)
          return src
        },
          srcWithIndex(index) {
            let srcs = ["qr_wechat", "qr_qq", "qr_sina"]
            return "../assets/" + srcs[index - 1] + ".png"
          },
        mouseover(index) {
          let srcs = ["icon_wechat", "iconn_qq", "icon_sina"]
          let src = "../assets/" + srcs[index - 1] + ".png"
          console.log(src)
          console.log("进入悬停区域" + index)
          switch (index) {
            case 1:
              return this.wechatShow = true
            case 2:
              return this.qqShow = true
            case 3:
              return this.sinaShow = true
          }
        },
        mouseleave(index) {
          console.log("离开悬停区域" + index)
          switch (index) {
            case 1:
              return this.wechatShow = false
            case 2:
              return this.qqShow = false
            case 3:
              return this.sinaShow = false
          }
        },
        showWithIndex(index) {
          switch (index) {
            case 1:
              return this.wechatShow
            case 2:
              return this.qqShow
            case 3:
              return this.sinaShow
          }
        }
      }
    };
</script>

<style scoped>
  .FooterComponent {
    display: flex;
    justify-content: space-around;
    align-items: start;
    background-color: #0A0B0C;
    height: 300px;
    width: 100px;
  }
  .left{
    font-size: 18px;
  }
  .icon {
    height: 35px;
    width: 35px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 10px;
  }

  h2 {
    margin-left: 40px;
    margin-top: 60px;
    font-size: 26px;
    color: white;
    text-align: left;
  }


  li {
    text-align: left;
    list-style: none;
    font-size: 18px;
    color: white;
    margin: 5px 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .qr {
    width: 80px;
    height: 80px;
  }

</style>
<template>
    <div class="FooterComponent">
      <div>
        <h2>{{ t("life") }}</h2>
      </div>
      <div class="left">
        <h2>{{ t("discover") }}</h2>
        <ul>
          <li v-for="index in views.length" v-bind:key="'view' + index">
            <router-link :to="'/' + views[index - 1]">{{ t(views[index - 1]) }}</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h2>{{ t("contact") }}</h2>
        <ul>
          <li>17611792362</li>
          <li>changnaxin1991@gmail.com</li>
        </ul>
      </div>
      <div class="col_center">
        <h2>{{ t("elsewhere") }}</h2>
        <div class="row_center" style="margin-left: 30px">
          <div class="col_center" style="justify-content: start" v-for="index in 3" v-bind:key="index"
                  @mouseover="mouseover(index)"
                  @mouseleave="mouseleave(index)">
            <img class="icon" :src="require('../assets/'+iconWithIndex(index))">
            <img class="qr" :src="require('../assets/'+srcWithIndex(index))" v-show="qrShow[index - 1]">
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
      data() {
        return {
          views: ['home', 'about', 'show_case', 'other'],
          qrShow: [false, false, false]
        };
      },
      methods: {
        iconWithIndex(index) {
          let icons = ['icon_wechat', 'icon_qq', 'icon_sina']
          return icons[index - 1] + '.png'
        },
        srcWithIndex(index) {
          let icons = ['qr_wechat', 'qr_qq', 'qr_sina']
          return icons[index - 1] + '.png'
        },
        mouseover(index) {
          this.$set(this.qrShow, index - 1, true)
        },
        mouseleave(index) {
          this.$set(this.qrShow, index - 1, false)
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
    margin: 0 30px 15px 30px;
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
    width: 90px;
  }

</style>
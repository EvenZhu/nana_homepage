<template>
  <div class="col">
    <div class="row_center bg_text_view">
      <h1 class="bg_text">If you can design one thing, you can design every thing.</h1>
    </div>
    <div style="margin-left: 10%; width: 80%;">
      <div class="row introduce">
        <div class="left col_center">
          <h1>{{ t("who") }}</h1>
          <p style="font-size: 28px" v-for="index in 3" v-bind:key="'who' + index">{{ ti('introduce', index) }}</p>
        </div>
        <img class="art_img" src="../assets/icon_head.png" alt="logo">
      </div>
      <!--    introduce    -->
      <!--   Work with me   -->
      <div class="row work">
        <img class="mine_img" src="../assets/head.png">
        <div style="margin-right: 150px">
          <h1>{{ t("work") }}</h1>
          <p v-for="index in 4" v-bind:key="'work' + index">{{ ti('work_with_me', index) }}</p>
          <h2>{{ t("areas")}}</h2>
          <li v-for="index in 4" v-bind:key="'areas' + index">{{ ti('area_of_expertise', index) }}</li>
          <h2>{{ t("familiar")}}</h2>
          <p style="margin-top:20px;margin-bottom:60px">{{ t("those")}}</p>
          <li v-for="index in 4" v-bind:key="'familiar' + index">{{ ti('familiar_place', index) }}</li>
          <div class="tag">
            <router-link to="/about" class="more">{{ t("more") }}</router-link>
          </div>
        </div>
      </div>

      <!--  THE SEMPLICE SHOWCAS  -->
      <div class="line_view">
        <p>{{ t("show") }}</p>
        <hr>
      </div>
      <h1>{{ t("proudly") }}</h1>
      <router-link to="/show_case">{{ t("see") }}</router-link>
      <div class="row_center scroll" v-for="index in 3" :class="'scroll' + index" v-bind:key="'img' + index" >
        <img class="img" src="../assets/auto.png">
        <img class="img" src="../assets/auto.png">
        <img class="img" src="../assets/auto.png">
      </div>
      <div class="top_button">
        <a href="/#">
          <el-button icon="el-icon-top" circle>
          </el-button>
        </a>
      </div>
    </div>
    <FooterComponent style="width: 100%; position: static; bottom: 0"></FooterComponent>
  </div>
</template>

<script>
  import FooterComponent from '../components/FooterComponent.vue'
  export default {
    name: "HomeView",
    components:{
      FooterComponent
    },
    methods: {
      
    }
}
</script>

<style scoped>
  .more {
    border-color: white;
    border-width: 1px;
    border-style: solid;
    padding: 5px;
    border-radius: 5px;
  }

  .footer{
    margin-right: -170px;
    margin-left: -170px;
  }

  .introduce {
    justify-content: center;
    align-items: start;
  }

  .bg_text_view {
    margin-top: -70px;
    margin-bottom: -40px;
    position: absolute;
    top: 620px;
    width: 100%;
    z-index: 0;
  }

  .bg_text {
    color: #4B4B4B;
    font-size: 69px;
    animation: marquee 20s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .left {
    z-index: 100;
    padding-left: 10%;
    align-items: start;
  }

  .art_img {
    z-index: 99;
    margin-left: -50px;
    height: 556px;
  }

  .work {
    margin-top: 100px;
    justify-content: center;
  }

  .mine_img {
    width: 300px;
    height: 300px;
    margin-right: 100px;
  }
  .tag {
    margin-left: 80%;
    margin-top: 80px;
  }
  .line_view {
    display: flex;
    align-items: center;
  }
  .img{
    height: 250px;
    margin-right: 40px;
  }

  .scroll {
    margin-top: 50px;
    animation: marquee 15s linear infinite alternate;
  }

  .scroll2 {
    animation-delay: 1.5s;
  }

  .scroll3 {
    animation-delay: 3s;
    margin-bottom: 50px;
  }

  /deep/ .el-carousel__indicators {
    width: 80px !important;
  }

  /deep/ .el-carousel__button {
    padding: 0 !important;
    width: 0px !important;
    height: 0px !important;
  }

  .top_button {
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
  }
  h1 {
    margin-bottom:10px;
    color: white;
    font-size: 37px;
    white-space: nowrap;
    overflow: hidden;
  }
  h2{
    margin-top: 60px;
    margin-bottom:-10px;
    color: #ffffff;
    font-size: 16px;
  }

  hr {
    border: 0.5px solid gray;
    margin-top: 52px;
    width: 70%;
  }

  p {
    margin-top: 40px;
    height: 0;
    color: white;
    font-size: 14px;
  }
  li {
    margin-bottom: 50px;
    margin-top: 30px;
    height: 0;
    color: white;
    font-size: 12px;
  }

  a {
    color: white;
    text-decoration: none;
  }
</style>
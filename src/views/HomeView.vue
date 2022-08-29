<template>
  <div class="col">
    <div style="margin-left: 10%; width: 80%;">
      <div class="row introduce">
        <div class="left col_center">
          <h1>{{ t("who") }}</h1>
          <p style="font-size: 32px" v-for="index in 3" v-bind:key="'who' + index">{{ ti('introduce', index) }}</p>
        </div>
        <img class="art_img" src="../assets/icon_head.png" alt="logo">
      </div>
      <!--    introduce    -->
      <div class="row_center bg_text_view">
        <h1 class="bg_text">If you can design one thing, you can design every thing.</h1>
      </div>
      <!--   Work with me   -->
      <div class="row_center work">
        <img class="mine_img" src="../assets/head.png">
        <div style="margin-right: 150px">
          <h1>{{ t("work") }}</h1>
          <p v-for="index in 4" v-bind:key="'work' + index">{{ ti('work_with_me', index) }}</p>
          <h3>{{ t("areas")}}</h3>
          <p v-for="index in 4" v-bind:key="'areas' + index">{{ ti('area_of_expertise', index) }}</p>
          <h3>{{ t("familiar")}}</h3>
          <p v-for="index in 5" v-bind:key="'familiar' + index">{{ ti('familiar_place', index) }}</p>
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
      <el-carousel height="1000px" direction="horizontal" :autoplay="true" interval="2000" loop="true">
        <el-carousel-item  v-for="item in 3" :key="item" >
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
          <img  height="180" class="art_img_img" src="../assets/auto.png">
        </div>
        </el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img  height="180" class="art_img_img" src="../assets/auto.png">

        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img  height="180" class="art_img_img" src="../assets/auto.png">

        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img  height="180" class="art_img_img" src="../assets/auto.png">

        </div></el-col>
      </el-row>
        </el-carousel-item>
      </el-carousel>
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
    margin-top: -130px;
    z-index: 0;
  }

  .bg_text {
    color: #4B4B4B;
    font-size: 69px;
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

  .my_works {
    margin-top: 50px;
    margin-bottom: 100px;
    height: 500px;
    background-color: antiquewhite;
  }

  .top_button {
    display: flex;
    justify-content: end;
    margin-bottom: 100px;
  }
  h1 {
    color: white;
    font-size: 74px;
    white-space: nowrap;
    overflow: hidden;
  }
  h3{
    color: white;
    font-size: 32px;
  }

  hr {
    margin-top: 60px;
    width: 70%;
  }

  p {
    margin-top: 40px;
    height: 0;
    color: white;
    font-size: 16px;
  }

  a {
    color: white;
    text-decoration: none;
  }
</style>
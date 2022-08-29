<template>
  <div class="HomeView col_center">
    <div class="row introduce">
      <div class="left col_center">
        <h1>{{ $t("m.who") }}</h1>
        <p style="font-size: 32px" v-for="index in 3" v-bind:key="index">{{ getWord(index, 'introduce') }}</p>
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
        <h1>{{ $t("m.work") }}</h1>
        <p v-for="index in 4" v-bind:key="index">{{ getWord(index, 'work_with_me') }}</p>
        <h3>{{$t("m.areas")}}</h3>
        <p v-for="index in 4" v-bind:key="index">{{ getWord(index, 'area_of_expertise') }}</p>
        <h3>{{$t("m.familiar")}}</h3>
        <p v-for="index in 5" v-bind:key="index">{{ getWord(index, 'familiar_place') }}</p>
        <div class="tag">
          <router-link to="/about" class="more">{{ $t("m.more") }}</router-link>
        </div>
      </div>
    </div>

    <!--  THE SEMPLICE SHOWCAS  -->
    <div class="line_view">
      <p>{{ $t("m.show") }}</p>
      <hr>
    </div>
    <h1>{{ $t("m.proudly") }}</h1>
    <router-link to="/show_case">{{ $t("m.see") }}</router-link>
    <div class="my_works">
      <p style="color: burlywood">这里放设计图</p>
    </div>
    <div class="top_button">
      <a href="/#">
        <el-button icon="el-icon-top" circle>
        </el-button>
      </a>
    </div>
    <div class="footer">
    <FooterComponent style="width: 100%; position: static; bottom: 0"></FooterComponent>
  </div>
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
      test() {
        console.log("到顶部");
        this.$refs.home.scrollTop = 0
      },
      getWord(index, key) {
        return this.$t("m." + key + "[" + index + "]");
      },
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
  .HomeView {
    margin-left: 10%;
    width: 80%;
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
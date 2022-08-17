<template>
  <div class="HomeView col_center">
    <div class="row introduce">
      <div class="left col_center">
        <h1>{{ $t("m.who") }}</h1>
        <p>{{ $t("m.introduce[0]") }}</p>
        <p>{{ $t("m.introduce[1]") }}</p>
        <p>{{ $t("m.introduce[2]") }}</p>
      </div>
      <img class="art_img" src="../assets/icon_head.png" alt="logo">
    </div>
    <!--    introduce    -->
      <div class="row_center bg_text_view">
        <h1 class="bg_text">A houston-base designer and illustrator focusing on visual design, web interactions</h1>
      </div>
    <!--   Work with me   -->
    <div class="row_center work">
      <img class="mine_img" src="../assets/icon_wechat.png">
      <div style="margin-right: 150px">
        <h1>Work with me</h1>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
        <p>I enjoy being on the</p>
      </div>
    </div>

    <!--  THE SEMPLICE SHOWCAS  -->
    <div class="line_view">
      <p>THE SEMPLICE SHOWCAS</p>
      <hr>
    </div>
    <h1>Proudly serving a ni</h1>
    <p>-> See inspiring portfo </p>
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
      }
    }
}
</script>

<style scoped>
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

  hr {
    margin-top: 60px;
    width: 70%;
  }

  p {
    height: 0;
    color: white;
    font-size: 37px;
  }
</style>
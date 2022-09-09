<template>
  <div class="AboutView">
      <div class="border">
        <p style="margin-left:20px; color:white;">{{ t("life") }}</p> 
        <p style=" margin-left:90px; color:white;">{{ t("life") }}</p>
      </div>
      <div class="left">
        <div class="introduce"> 
          <p style="color:white; font-size:20px">{{ t("name1") }}</p>
          <p style="color:white; font-size:20px">{{ t("gender") }}</p>
          <p style="color:white; font-size:20px">{{ t("name2") }}</p>
          <p style="color:white; font-size:20px">{{ t("hobby") }}</p>
        </div>
        <div class="border2">
          <h2 style="margin-left:-1350px; margin-top:-250px">{{ t("personal") }}</h2>
          <img src="../assets/person.png" style="margin-left:-350px;;margin-top:-20px" > 
        </div>
      </div>
       
    <div class="row">

    </div>
   <div class="block">
     <h2>{{ t("experience") }}</h2>
    <el-timeline>
        <el-timeline-item timestamp="2021.07-2022…" placement="top" >
        <el-card>
            <h3>{{ t("experience") }}</h3>
            <p>{{ t("foot") }}</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>{{ t("experience") }}</h3>
            <p>{{ t("foot") }}</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>{{ t("experience") }}</h3>
            <p>{{ t("foot") }}</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>{{ t("experience") }}</h3>
            <p>{{ t("foot") }}</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>{{ t("experience") }}</h3>
            <p>{{ t("foot") }}</p>
        </el-card>
        </el-timeline-item>
    </el-timeline>
    <div class="top_button">
        <a href="/#">
          <el-button icon="el-icon-top" circle>
          </el-button>
        </a>
      </div>
    <FooterComponent style="width: 100%; position: static; bottom: 0"></FooterComponent>
    </div>
  </div>
</template>
<script>
    import FooterComponent from '../components/FooterComponent.vue'
    export default {
        name: "AboutView",
        components:{
        FooterComponent
      },
    }
</script>
<style scoped>
  .border{
    border: 1px solid rgb(252, 248, 248);
    border-width:2px;
    border-right: none;
    margin-left: 800px;
    width: 400px;
    height: 150px;
  }

  .left{
    margin-left: 800px;
    color: white;
  }

  .introduce{
    margin-top:70px;

  }

  .bg_text_view{
          margin-left: 425px;
      }

  .row{
          margin-top: -500px;
          height: 350px;
          background-image: url(../assets/logo.png);
          opacity: 0.1;
  }

  .block{
          margin-top: 200px;
      }

  .el-timeline{
          margin-left: 700px;
          margin-right: 700px;
      }

  /deep/.el-timeline-item__node--normal{
          left: -50px;
          width: 100px;
          height: 100px;
          background-image: url(../assets/logo.png);
          background-size: 100px 100px;
          box-shadow: 0 0 10px rgb(253, 251, 251);
          border:3px solid white

      }
  /deep/.el-timeline-item__wrapper {
          margin-left: 60px;
          justify-content: center;
      }
  .el-card{
          height: 200px;
          width: 316px;
          border: 1px ;
          background-color:transparent;
          overflow: hidden;
          color:white;
          transition: .3s;
          }

      img{
        border: 1px solid orange;
      }

       p{
          color:grey;
         }

      h2{
          margin-bottom: 20px;
          text-align-last: center;
          color: white;
        }

      .top_button {
          display: flex;
          justify-content: end;
          margin-bottom: 50px;
        }
</style>


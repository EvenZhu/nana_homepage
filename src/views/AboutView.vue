<template>
  <div class="AboutView">
        <p style="margin-left:900px; color:white;">Life is wonderful because of design</p> 
        <p style="margin-left:1000px; color:white;">Life is wonderful because of design</p>
        <h2 style="margin-right:600px">Personal introduction</h2>
        <div class="bg_text_view">
        <img src="../assets/person.png" style="margin-right:600px" >
      </div>
    <div class="row"></div>
   <div class="block">
     <h2>Work experience</h2>
    <el-timeline>
        <el-timeline-item timestamp="2021.07-2022…" placement="top" >
        <el-card>
            <h3>Work experience</h3>
            <p>Footi is an in-house Little Thunder passion project. Built with a Jamstack methodology, all content is pre-rendered at build time and served as static HTML/</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>Work experience</h3>
            <p>Footi is an in-house Little Thunder passion project. Built with a Jamstack methodology, all content is pre-rendered at build time and served as static HTML/</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>Work experience</h3>
            <p>Footi is an in-house Little Thunder passion project. Built with a Jamstack methodology, all content is pre-rendered at build time and served as static HTML/</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>Work experience</h3>
            <p>Footi is an in-house Little Thunder passion project. Built with a Jamstack methodology, all content is pre-rendered at build time and served as static HTML/</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021.07-2022…" placement="top">
        <el-card>
            <h3>Work experience</h3>
            <p>Footi is an in-house Little Thunder passion project. Built with a Jamstack methodology, all content is pre-rendered at build time and served as static HTML/</p>
        </el-card>
        </el-timeline-item>
    </el-timeline>
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
   .bg_text_view{
          margin-left: 425px;
      }
  .row{
          margin-top: -450px;
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
          left: -40px;
          width: 100px;
          height: 100px;
          background-image: url(../assets/logo.png);
          background-size: 100px 100px;

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
       p{
          color:grey;
         
         }
      h2{
          margin-bottom: 20px;
          text-align-last: center;
          color: white;
        }
</style>


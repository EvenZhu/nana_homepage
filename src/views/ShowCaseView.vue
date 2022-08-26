<template>
    <div class="ShowCaseView">
      <el-carousel height="1000px" direction="vertical" :autoplay="true" trigger="click">
        <el-carousel-item v-for="item in 10" :key="item" :label="'2022年'+item + '月'">
          <h3>showcase</h3>
          <h3>A selection of current and past projects</h3>
          <div class="rank">
            <div class="left col_center">
              <h1>CHOOSE AUTO-PC</h1>
              <img class="mine_img" src="../assets/auto.png">
            </div>
            <div class="right col_center">
              <h4>CLIENT: Dieste</h4>
              <h4>AGENACY: DJNR</h4>
              <p style="color: #4B4B4B">"As soon as we knew we had the budget to do a new company website, we reached out to DJNR Interactive. We have been working with them for several years and knew the quality of work they do. Our latest project before Dieste.com was a mock up travel agency site for a bookstore that won several awards and got worldwide recognition. The goal for our site was to have our work be the main selling point of our company and we worked closely with DJNR´s team to achieve the best solution. They brought a lot of input onto what things would enhance what we had in mind. We needed an easy to update site and DJNR built a custom CMS that allow us to do changes quickly. We are really proud of the final product."</p>
              <h4 class="left" style="color: #4B4B4B"> Roberto Hernández, Director Social & Digital Strategy </h4>
              <p>VIEW PROJECT ></p>
              <div>
                <el-tag type="info" color="white" size="mini">HTML</el-tag>
                <el-tag type="info" color="white" size="mini">JAVASCRIPT</el-tag>
                <el-tag type="info" color="white" size="mini">CSS3</el-tag>
                <el-tag type="info" color="white" size="mini">SCROLL MAGIC</el-tag>
              </div>
              <div>
                <el-tag type="info" color="white" size="mini">NETLIFY FORWS</el-tag>

              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "ShowCaseView",
        data() {
            return {

            };
        },
        methods: {
            scrollMethod() {
                console.log('滚动')
                console.log(document.documentElement.scrollTop)
            }
        },
        mounted() {
            // 挂载时，添加监听滚动事件，然后用 scrollMethod 方法进行处理
            window.addEventListener('scroll',this.scrollMethod)
        },
        destroyed() {
            // 销毁时，删除监听滚动事件，否则其他.vue文件也会受影响
            window.removeEventListener('scroll',this.scrollMethod)
        }

    };

</script>

<style scoped>
    .ShowCaseView {
      height: 100%;
    }
    .rank{
        height: 350px;
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        padding: 60px;
        background-color: #151719;
    }

    .left {
        z-index: 100;
        padding-bottom:3%;
        padding-left: 18%;
        align-items: start;
    }
    .right{
        padding-right: 20%;
        align-items: start;
        font-size: 12px;
    }

    .mine_img {
        width: 350px;
        height: 200px;
        margin-right: 100px;
    }

    h1{
        color: crimson;
        font-size: 50px;
    }
    h3 {
        margin-left: 50px;
        color: white;
        font-size: 16px;
    }
    h4{
       color: white;
    }
    p{
        color: white;
    }

    /deep/ .el-carousel__indicators {
      width: 80px !important;
    }

    /deep/ .el-carousel__button {
      padding: 0 !important;
      width: 80px !important;
      height: 20px !important;
    }

</style>
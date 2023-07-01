<template>
  <div class="AboutView">
    <HeaderComponent />
    <div class="Personal">
      <div class="left_personal">
        <h1>Personal introduction</h1>
        <img src="../assets/person.png" />
      </div>
      <div class="right_personal">
        <div class="text_border">
          <p v-for="index in 2" v-bind:key="life + index">{{ t("life") }}</p>
        </div>
        <div class="personal_info">
          <p>{{ t("name1") }}</p>
          <p>{{ t("gender") }}</p>
          <p>{{ t("name2") }}</p>
          <p>{{ t("hobby") }}</p>
        </div>
      </div>
    </div>
    <div class="row"></div>
    <div class="block">
      <h2>{{ t("experience") }}</h2>
      <el-timeline style="width: 10%; padding-left: 150px">
        <el-timeline-item v-for="info in infos" v-bind:key="info.date" :timestamp="info.date" placement="top">
          <el-card class="left_card">
            <h3>{{ t(info.title) }}</h3>
            <p style="color: gray">{{ t(info.desc) }}</p>
          </el-card>
          <el-card>
            <h3>{{ t("experience") }}</h3>
            <p style="color: gray">{{ t("foot") }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <div class="top_button">
        <a href="/#">
          <el-button icon="el-icon-top" circle> </el-button>
        </a>
      </div>
      <FooterComponent style="width: 100%; position: static; bottom: 0"></FooterComponent>
    </div>
  </div>
</template>
<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue"
export default {
  name: "AboutView",
  data() {
    return {
      infos: [
        { date: "2015-12-12", title: "experience", desc: "foot" },
        { date: "2015-12-12", title: "experience", desc: "foot" },
        { date: "2015-12-12", title: "experience", desc: "foot" },
        { date: "2015-12-12", title: "experience", desc: "foot" },
        { date: "2015-12-12", title: "experience", desc: "foot" },
        { date: "2015-12-12", title: "experience", desc: "foot" },
        { date: "2015-12-12", title: "experience", desc: "foot" },
      ],
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style scoped>
.Personal {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 60px;
  background-color: #151719;
}

.left_personal {
  margin-left: 20%;
}

.right_personal {
  padding-right: 20%;
  margin-top: -20px;
}

.text_border {
  border: 1.5px solid white;
  border-right: none;
  padding: 28.5px 0px 39px 35px;
}

.personal_info {
  color: white;
  font-size: 20px;
  margin-top: 60px;
}

.left_card {
  position: absolute;
  left: -450px;
}

.row {
  margin-top: -550px;
  height: 350px;
  background-image: url(../assets/logo.png);
  opacity: 0.09;
}

.block {
  margin-top: 200px;
}

.el-timeline {
  margin-left: 700px;
  margin-right: 700px;
}

/deep/.el-timeline-item__node--normal {
  left: -50px;
  width: 100px;
  height: 100px;
  background-image: url(../assets/logo.png);
  background-size: 100px 100px;
  box-shadow: 0 0 10px rgb(253, 251, 251);
  border: 3px solid white;
}

/deep/.el-timeline-item__wrapper {
  margin-left: 60px;
  justify-content: center;
}

.el-card {
  height: 200px;
  width: 316px;
  border: 1px;
  background-color: transparent;
  overflow: hidden;
  color: white;
  transition: 0.3s;
}

img {
  border: 1.5px solid orange;
  border-top: none;
  border-right: none;
  margin-left: 90px;
  padding-left: 15px;
  padding-bottom: 15px;
}

p {
  color: white;
}

h1 {
  color: white;
}

h2 {
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

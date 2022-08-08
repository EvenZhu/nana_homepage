<template>
  <div id="bg">
    <HeaderComponent msg="Welcome to Your Vue.js App"/>
    <HomePage style="height: 800px"></HomePage>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HomePage from './page/HomePage.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    HomePage
  },
  data() {
    return {
      contentHeight: 1000,
    }
  }
}
</script>


<style>
  @import "css/global.css";
  #bg {
    height: 1250px;
    background-color: #151719;
  }
</style>

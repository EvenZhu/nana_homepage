<template>
  <div id="app">
    <HeaderComponent msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
    <FooterComponent style="width: 100%; position: static; bottom: 0"></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
  @import "../static/css/global.css";
</style>

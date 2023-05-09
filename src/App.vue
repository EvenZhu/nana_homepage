<template>
  <div id="app">
    <HeaderComponent msg="Welcome to Your Vue.js App" />
    <router-view></router-view>
    <el-backtop :visibility-height="1000" :bottom="100" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
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

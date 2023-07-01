<template>
  <div id="app">
    <router-view></router-view>
    <el-backtop :visibility-height="1000" :bottom="100" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      showHeader: true
    }
  }
}
</script>

<style>
@import "../static/css/global.css";
@import "../static/css/normalize.css";
</style>

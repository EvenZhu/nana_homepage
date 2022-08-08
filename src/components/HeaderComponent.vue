<template>
  <div class="HeaderComponent">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Home</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Showcase</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">About</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Other</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HeaderComponent {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}

.logo {
  height: 24px;
  width: 24px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 18px;
}
a {
  color: #ffffff;
  text-decoration: none;
}
</style>

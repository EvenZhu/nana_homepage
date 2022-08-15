<template>
  <div class="HeaderComponent">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/example">Example</router-link>

      <el-select v-model="value" placeholder="Language">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  },
  data() {
    return {
      options: [{
        value: 'Chinese',
        label: '中文'
      }, {
        value: 'English',
        label: 'English'
      }],
      value: ''
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      console.log(newValue + "-" + oldValue);
      if (newValue == 'English'){
        this.lang='en';
        localStorage.setItem("locale",this.lang)
        this.$i18n.locale = this.lang;
      }else {
        this.lang="zh";
        localStorage.setItem("locale",this.lang)
        this.$i18n.locale = this.lang;
      }
    }
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
  background-color: #151719;
}

.logo {
  height: 24px;
  width: 24px;
}

h3 {
  margin: 40px 0 0;
}
router-link {
  margin: 10px;
  font-size: 18px;
}

a {
  color: #ffffff;
  margin: 0 15px;
  text-decoration: none;
}

</style>

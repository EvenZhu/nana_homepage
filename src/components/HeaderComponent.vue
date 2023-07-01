<template>
  <div class="HeaderComponent">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <nav class="row_center">
      <router-link to="/">{{ t("home") }}</router-link>
      <router-link to="/about">{{ t("about") }}</router-link>
      <router-link to="/show_case">{{ t("show_case") }}</router-link>
      <router-link to="/other">{{ t("other") }}</router-link>
      <router-link to="/example">{{ t("example") }}</router-link>

      <el-select popper-class="selectFrom" v-model="value" :placeholder="placeholder()" size="small"
        :popper-append-to-body="false">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
      lang: "en",
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
    value: function (newValue, oldValue) {
      console.log(newValue + "-" + oldValue);
      if (newValue === 'English') {
        this.lang = 'en';
        localStorage.setItem("locale", this.lang)
        this.$i18n.locale = this.lang;
      } else {
        this.lang = "zh";
        localStorage.setItem("locale", this.lang)
        this.$i18n.locale = this.lang;
      }
    }
  },
  methods: {
    placeholder() {
      let locale = localStorage.getItem("locale")
      return locale === "en" ? "English" : "中文"
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
  padding: 50px 50px 0;
  background-color: #151719;
}

.el-select {
  width: 100px !important;
  margin-left: 20px !important;
}

/deep/ .el-select,
/deep/ .el-input,
/deep/ .is-focus,
/deep/ .el-input__inner {
  background: none;
  border-color: white !important;
}

/deep/ .el-popper {
  background: none !important;
}

/deep/ .el-select-dropdown__item {
  color: white;
}

/deep/ .el-select-dropdown__item.hover {
  /*color: black;*/
  background-color: dimgray;
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

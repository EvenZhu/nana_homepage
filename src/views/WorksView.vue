<template>
  <div class="main">
    <el-carousel :interval="3000" :height="carouselHeight()" autoplay loop arrow="always" trigger="click">
      <el-carousel-item :label="item" v-for="item in 14" :key="item">
        <img :src="imgPath(item)" alt="加载中...">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "WorksView",
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      screenHeightPx: window.innerHeight + "px",
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    imgPath(index) {
      const cover = "img_works_cover";
      return `${this.publicPath}${index == 1 ? cover : "img_works_" + (index - 1)}.png`
    }
  },
  computed: {
    carouselHeight() {
      return () => {
        if (this.screenWidth > this.screenHeight) return this.screenHeight + "px"
        const height = this.screenWidth / (1920 / 1080)
        return height + "px";
      }
    },
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        that.screenWidth = window.innerWidth
        that.screenHeight = window.innerHeight
        that.screenHeightPx = window.innerHeight + "px"
      })()
    }
  },

};

</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: v-bind(screenHeightPx);
}

.el-carousel__item img {
  height: 100%;
}

/deep/ .el-carousel__button {
  background-color: #ccc;
  color: white;
  border-radius: 9px;
}
</style>
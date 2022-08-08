<template>
  <div class="HomePage">
    <div style="position: relative; height: 60px">
      <h1 class="bg_text">If you can design on If you can design on design</h1>
      <img src="../assets/icon_head.png" alt="logo">
      <div class="left">
        <h1>Who am I?</h1>
        <p>A houston-base designer and illustrator</p>
        <p>focusing on visual design, web interactions,</p>
        <p>brand development, and tangible goods.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
  .HomePage {
    height: 500px;
  }

  .bg_text {
    position: absolute;
    color: #333333;
    font-size: 69px;
    top: 400px;
    align-self: center;
  }

  .left {
    position: absolute;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  img {
    position: absolute;
    top: 100px;
    margin-right: 200px;
    height: 500px;
  }

  h1 {
    color: white;
    font-size: 74px;
  }

  p {
    height: 0;
    color: white;
    font-size: 37px;
  }
</style>
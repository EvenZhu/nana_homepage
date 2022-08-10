<template>
    <div class="FooterComponent">
      <div>
        <h2>Life is wonderful because of design</h2>
      </div>
      <div class="left">
        <h2>Discover</h2>
        <ul>
          <li>Home</li>
          <li>Showcase</li>
          <li>About me</li>
          <li>Other</li>
        </ul>
      </div>
      <div>
        <h2>CONTACT</h2>
        <ul>
          <li>17611792362</li>
          <li>changnaxin1991@gmail.com</li>
        </ul>
      </div>
      <div>
        <h2>ELSEWHERE</h2>
        <div>
          <img class="icon" src="../assets/icon_wechat.png">
          <img class="icon" src="../assets/icon_qq.png">
          <img class="icon" src="../assets/icon_weibo.png">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent'
    };
</script>

<style scoped>
  .FooterComponent {
    display: flex;
    justify-content: space-around;
    align-items: start;
    background-color: #0A0B0C;
    height: 300px;
  }

  .icon {
    height: 35px;
    margin:15px;
    margin-top: 0px;
    margin-right:auto;
  }

  ul {
  }

  h2 {
    margin-left: 40px;
    margin-top: 60px;
    font-size: 26px;
    color: white;
    text-align: left;
  }

  li {
    text-align: left;
    list-style: none;
    font-size: 18px;
    color: white;
  }

</style>
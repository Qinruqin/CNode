<template>
  <div class="header">
    <div class="header-con">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
      <router-link :to="{name:'root'}"><img src="../assets/logo.svg" /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #444;
  }
  .header .header-con{
    width: 90%;
    margin:0 auto;
  }
  .header img{
    display: inline-block;
    width:120px;
    height: 34px;
    margin-top: 6px;
  }
  .header ul{
    float: right;
    display: flex;
    font-size: 12px;
  }
  .header ul li{
    display: inline-block;
    height: 50px;
    text-align: center;
  }
  .header ul li a{
    padding: 0 15px;
    color:#ccc;
    font-size: 13px;
    line-height: 20px;
  }
</style>

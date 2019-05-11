<template>
  <div id="app">
    <cn-header></cn-header>
    <div class="main">
      <router-view name='sidebar'></router-view>
      <router-view name='main'></router-view>
    </div>
  </div>
</template>

<script>
  import cnHeader from './components/Header'
  export default {
    name: 'App',
    components:{
      cnHeader,
    },
  }
</script>

<style>
*{ 
  margin: 0;
  padding: 0;
  font-size: 14px;
}
a{
  color: #000;
  text-decoration: none;
}
body{
  background-color: #e1e1e1;
}
.main{
  width: 90%;
  margin:14px auto;
}
</style>

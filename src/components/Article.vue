<template>
  <div class="article">
    <div class="loading" v-if="loading">Loading...</div>
    <div class="article-con" v-else>
        <div class="article-box">
            <h3 class="title">{{aData.title}}</h3>
            <ul class="info">
              <li>• 发布于{{ aData.create_at | formatDate}}</li>
              <li>• 作者 {{aData.author.loginname}}</li>
              <li>• {{aData.visit_count}} 次浏览</li>
              <li>• 来自 分享</li>
            </ul>
            <div class="line"></div>
            <div id="content" v-html="aData.content"></div>
        </div>
        <div class="reply-box">
          <h4 class="reply-head">{{aData.reply_count}}回复</h4>
          <ul class="reply-list">
            <li v-for="(item,index) in aData.replies" :key="item.id">
              <div class="pic"><router-link :to="{ name: 'userinfo', params: { name: item.author.loginname }}"><img :src="item.author.avatar_url" ></router-link></div>
              <div class="reply-con">
                <div class="user-info">
                  {{item.author.loginname}} <span>{{index}}楼·{{item.create_at | formatDate}}</span>
                  <span class="praise" v-if="item.ups.length > 0">{{item.ups.length}}赞</span>
                </div>
                <p class="reply-detail" v-html="item.content"></p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Article',
    data () {
      return {
        aData:{
            author:{
              loginname: 'username'//设置默认值
            }
        },
        loading:false
      }
    },
   
    methods:{
      getData(){
        //获取文章信息
        this.$http({
              url: `api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
              method: 'get',
              params:{
                mdrender:true
              }
            })
          .then( (result) => {
            if( result.data.success === true ){
              this.aData = result.data.data;
              this.loading = false;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    beforeMount(){
      this.loading = true;
      this.getData();
    },
    watch:{
      $route(){
        this.getData();
      }
    }
  }
</script>

<style>
  @import url("../assets/markdown-github.css");
  .article{
    margin-right: 310px;
    
  }
  .article-box,.reply-box{
    background-color: #fff;
    border-radius: 4px;
  }
  .title{
    padding: 10px;
    font-size: 22px;
    line-height: 32px;
  }
  .info{
    height: 30px;
    padding: 0 10px;
  }
  .info li{
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }
  .line{
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
  }
  .article #content{
    padding: 10px;  
  }
  .reply-box{
    margin: 14px 0; 
  }
  .reply-head{
    height: 40px;
    padding: 0 10px;
    font-weight: normal;
    line-height: 40px;
    background-color: #f6f6f6;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .reply-list li{
    padding:10px;
    border:1px solid #e1e1e1;
    list-style: none;
  }
  .reply-list li:last-child{
    border-bottom: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .reply-list .pic{
    float: left;
    display: inline-block;
    width: 30px;
  }
  .reply-list .pic img{
    width: 30px;
    height: 30px;
  }

  .reply-list .reply-con{
    margin-left: 40px;
  }
  .reply-con .user-info{
    margin-bottom: 4px;
    line-height: 22px;
    font-size: 12px;
    font-weight: bold;
  }
  .reply-con .user-info span{
    color: #08c;
    font-size: 12px;
    font-weight: normal;
  }
  .reply-con .user-info .praise{
    float: right;
    color: #666;
  }
  .reply-list > p {
    padding-left: 50px;
    clear: both;
  }
  .reply-list p img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
</style>

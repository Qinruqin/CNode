<template>
  <div class="userinfo">
    <div class="box">
        <h4 class="box-head green">主页/</h4>
        <div class="content">
            <div class="pic-name">
              <img :src="userData.avatar_url" alt="">
              <span>{{userData.loginname}}</span>
            </div>
            <p>{{userData.score}}积分</p>
            <p class="create-time">注册时间{{userData.create_at | formatDate}}</p>
        </div>
    </div>
    <div class="box c-list">
        <h4 class="box-head">最近创建的话题</h4>
        <ul class="list-box">
           <li v-for="post in userData.recent_topics">
            <router-link :to="{ name: 'userinfo', params: { name: post.author.loginname }}"><img :src="post.author.avatar_url"  /></router-link>
            <router-link :to="{ name: 'post_content', params: { id: post.id }}">{{post.title}}</router-link>
            <span class="last-reply">{{post.last_reply_at | formatDate }}</span>
          </li>
        </ul>
    </div>
    <div class="box c-list">
        <h4 class="box-head">最近参与的话题</h4>
        <ul class="list-box">
           <li v-for="post in userData.recent_replies">
            <router-link :to="{ name: 'userinfo', params: { name: post.author.loginname }}"><img :src="post.author.avatar_url"  /></router-link>
            <router-link :to="{ name: 'post_content', params: { id: post.id }}">{{post.title}}</router-link>
            <span class="last-reply">{{post.last_reply_at | formatDate }}</span>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userData:{},
      loading: false
    }
  },
  methods:{
    getUserData(){
      this.$http({
        url:`api/v1/user/${this.$route.params.name}`,
        method:"get"
      }).then((result)=>{
        if(result.data.success === true){
          this.userData = result.data.data;
          this.loading = false;
        }
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  beforeMount(){
    this.getUserData();
  }
}
</script>

<style scoped>
  .userinfo .box{
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 4px;
  }
  .box .box-head{
    height: 40px;
    padding: 0 10px;
    font-weight: normal;
    line-height: 40px;
    background-color: #f6f6f6;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .box .green{
    color: #80bd01;
  }
  .box .content{
    padding: 10px;
    line-height: 26px;
  }
  .content .create-time{
    color: #666;
  }
  .content .pic-name{
    height: 40px;
    margin-bottom: 10px;
    line-height: 40px;
  }
  .content .pic-name img{
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .list-box li{
    display: block;
    height: 50px;
    line-height: 50px;
    list-style: none;
    border-bottom: 1px solid #eee;
  }
  .list-box li img{
    float: left;
    height: 30px;
    margin-left: 10px;
  }
  .list-box li a{
    display: inline-block;
    max-width: 70%;
    vertical-align: middle;
    color: #08c;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .list-box li .last-reply{
    float: right;
    margin-right: 10px;
    color: #666;
    font-size: 12px;
  }
</style>

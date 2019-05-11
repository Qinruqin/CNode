<template>
  <div class="sidebar">
      <div class="loding" v-if="loading">Loading...</div>
      <div v-else>
        <div class="box">
          <h4 class="box-head">作者</h4>
          <div class="userinfo">
              <div class="pic-name">
                <img :src="userData.avatar_url" alt="">
                <span>{{userData.loginname}}</span>
              </div>
              <p>积分：{{userData.score}}</p>
          </div>
        </div>
        <div class="box">
          <h4 class="box-head">作者其它话题</h4>
          <ul class="topics-list">
            <li v-for="item in topicsLimit5">
                <router-link :to="{ name: 'post_content', params: { id: item.id,name:item.author.loginname }}" :title="item.title">
                  {{item.title}}
                </router-link>            
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      userData:{},
      loading:false
    }
  },
  computed:{
    topicsLimit5(){
      return this.userData.recent_topics.slice(0,5);
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
    this.loading = true;
    this.getUserData();
  }
}
</script>

<style scoped>
  .sidebar{
    width: 290px;
    float: right;
  }
  .box{
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 4px;
  }
  .box .box-head{
    height: 40px;
    padding: 0 10px;
    font-weight: normal;
    font-size: 13px;
    line-height: 40px;
    background-color: #f6f6f6;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .userinfo{
    padding:10px;
  }
  .pic-name{
    height: 40px;
    margin-bottom: 10px;
    line-height: 40px;
  }
  .pic-name img{
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .topics-list li{
    width: 92%;
    height: 30px;
    margin: 0 auto;
    color: #666;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }
</style>

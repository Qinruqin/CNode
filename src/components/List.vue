<template>
  <div class="cnlist">
    <div class="loading" v-if="loading">
        Loading...
    </div>
    <div class="list-box" v-else>
      <ul>
        <li v-for="item in listData">
          <router-link :to="{ name: 'userinfo', params: { name: item.author.loginname }}"><img :src="item.author.avatar_url"  /></router-link>
          <span class="count">{{item.reply_count}}/{{item.visit_count}}</span>
          <router-link :to="{ name: 'post_content', params: { id: item.id,name:item.author.loginname }}">{{item.title}}</router-link>
          <span class="last-reply">{{item.last_reply_at | formatDate }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      listData:{},
      loading:false
    }
  },
  methods:{
    getData(){
      this.$http({
        url:'api/v1/topics',
        method:'get',
        params:{
          page:1,
          limit:20
        }
      }).then((result)=>{
        if(result.data.success == true){
            this.listData = result.data.data;
            this.loading = false;
        }
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  beforeMount(){
    this.loading = true;
    this.getData();
  }
}
</script>

<style scoped>
  .list-box{
    background-color: #fff;
    border-radius: 4px;
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
  .list-box li .count{
    display: inline-block;
    width: 70px;
    margin: 0 10px;
    color: #b4b4b4;
    font-size: 12px;
    text-align: center;
  }
  .list-box li a{
    display: inline-block;
    max-width: 70%;
    vertical-align: middle;
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

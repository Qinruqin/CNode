import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'root',
	    components: {
	      	main:List
	    }
    },
    {
    	path:'/user/:name',
    	name:'userinfo',
    	components:{
    		main:UserInfo
    	}
    },
    {
    	path:'/topic/:id&auther=:name',
    	name:'post_content',
    	components:{
    		main:Article,
    		sidebar:Sidebar
    	}
    }
  ]
})

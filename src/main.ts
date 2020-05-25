import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './api' // 导入api接口
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.prototype.$http = axios;
//路由拦截
router.beforeEach((to, from, next) => {
	//获取用户登录成功后储存的登录标志
	let getFlag = localStorage.getItem("Flag")
	let getuserName = localStorage.getItem("userName")
	let getuserType = localStorage.getItem("userType")
	//如果登录标志存在且为isLogin，即用户已登录
	if(getFlag === "isLogin" && getuserName !== null){
		//设置vuex登录状态为已登录
		store.state.isLogin = true
		next()
		// if(getuserType === 'admin' && to.meta.auth === 'admin'){
		// 	console.log('admin')
		// 	next({
		// 		path:'/adminCenter'
		// 	})
		// }
		// if(getuserType === 'user' && to.meta.auth === 'user'){
		// 	console.log('user')
		// 	next({
		// 		path:'/personCenter'
		// 	})
		// }
	//如果标志不存在，即为未登录
	}else{
		//用户想进入需要登录的页面，则重定向回登录界面
		if(to.meta.isLogin){
			next({
				path:'/signIn'
			})
		//用户进入无需登录的界面，则跳转继续
		}else{
			next()
		}
	}
})

router.afterEach(() => {
    window.scroll(0, 0);
});

axios.interceptors.request.use(
  config => {
    if (localStorage.userToken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.common['Authorization'] = localStorage.userToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });



Vue.use(Element)

Vue.prototype.$api = api // 将api挂载到vue的原型上

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

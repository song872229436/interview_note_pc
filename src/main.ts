import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api' // 导入api接口
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.prototype.$api = api // 将api挂载到vue的原型上

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h: (arg0: any) => any) => h(App)
}).$mount('#app')

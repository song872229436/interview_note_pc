import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './api' // 导入api接口
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

require('./mock')//引入mock数据，关闭则注释该行

Vue.prototype.$http = axios;
Vue.use(Element)

Vue.prototype.$api = api // 将api挂载到vue的原型上

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

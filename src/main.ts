import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 判断是否是开发 如果是开发模式引入mock文件
if (process.env.NODE_ENV === 'development') require('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

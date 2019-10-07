// 导入 vue
import Vue from 'vue'
// 导入组件 App.vue(根组件)
import App from './App.vue'
// 导入 路由
import router from './router'
// 导入 vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import global from './global'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(global)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

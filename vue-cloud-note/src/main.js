import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
Vue.prototype.Editor = window.wangEditor
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router:router,
  store:store,
  components: { App },
  template: '<App/>',
})

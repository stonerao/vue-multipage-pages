// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './login' 
import axios from 'axios'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css';
import router from './router/router.js'
import store from '@/vuex'
import '@/styles/reset.css'
import '@/utils/rem'
import VueLazyload from 'vue-lazyload' 
import error from '@/assets/logo.png'
Vue.use(VueLazyload, {
  preLoad: 1.5,
  error:error,
  loading:error,
  attempt: 1
})
Vue.use(YDUI);
Vue.config.productionTip = false 
// axios set
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = '';
  for (let it in data) {
    ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
  }
  return ret;
}]
Vue.prototype.$http = axios; 
/* eslint-disable no-new */
// 路由开始加载执行
router.beforeEach((to, from, next) => { 
   next();
})
// 路由结束之后执行
router.afterEach(() => {});
new Vue({
  el: '#app',
  router,
  store,
  render:(h)=>h(App) ,
  template: '<App/>',
  components: { App },
}) 

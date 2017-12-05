import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index/index.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/index',
    component: Index
  }, {
    path: '/',
    redirect: "/index"
  }]
})

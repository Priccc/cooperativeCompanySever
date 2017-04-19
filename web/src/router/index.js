import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})

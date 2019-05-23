import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import NoteBookModule from '../components/NoteBookModule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/notebook',
      name: 'NoteBookModule',
      component: NoteBookModule
    },
    {
      path: '/',
      redirect: '/login'
    }

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home/Home'
import Destination from 'pages/Destination/Destination'
import Category from 'pages/Category/Category'
import My from 'pages/My/My'
import City from 'pages/City/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home', // 重定向
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

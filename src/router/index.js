import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home/Home'
import Destination from 'pages/Destination/Destination'
import Category from 'pages/Category/Category'

// 对不是立马显示在首页的路由进行懒加载
const My =() =>import('pages/My/My');
const City =() =>import('pages/City/City');
const Detail =() =>import('pages/Detail/Detail');
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
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

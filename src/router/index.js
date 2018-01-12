import Vue from 'vue'
import Router from 'vue-router'

import Home from '../page/home/index.vue'
import News from '../page/home/news.vue'
import Report from '../page/home/report.vue';
import Charge from '../page/home/charge.vue';
import Skill from '../page/home/skill.vue';
import NewsDetail from '../page/home/newsDetail.vue';
import Shop from '../page/home/shop.vue';
import ShopDetail from '../page/home/shopdetail.vue';
import IntegralPay from '../page/home/integralPay.vue';
import IntePaySucess from '../page/home/intepaysucess.vue';

import Search from '../components/search.vue';

import Hello from '../components/allHello.vue';
import Login from '../page/login/login.vue';
import Register from '../page/login/register.vue';
import Edit from '../page/login/editorpassword.vue';


import Car from '../page/personal/order.vue';
import Me from '../page/personal/order3.vue';
import Share from '../page/personal/orders.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'news', name: 'News', component: News, redirect: '/new/report', children: [
            { path: 'report', name: 'Report', component: Report },
            { path: 'charge', name: 'Charge', component: Charge },
            { path: 'skill', name: 'Skill', component: Skill },
          ]
        },
        { path: 'newsDetail', name: 'NewsDetail', component: NewsDetail },
        { path: 'shop', name: 'Shop', component: Shop },
        { path: 'shopdetail', name: 'ShopDetail', component: ShopDetail },
        { path: 'integralPay', name: 'IntegralPay', component: IntegralPay },
        { path: 'intepaysucess', name: 'IntePaySucess', component: IntePaySucess },
        { path: 'search', name: 'Search', component: Search },
      ]
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
  ]
})

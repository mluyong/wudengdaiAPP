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


import CarTaber from '../components/cartaber.vue';
import Car from '../page/car/car.vue';
import NewCarSearch from '../page/car/newcarsearch.vue';
import NewCarDetail from '../page/car/newcardetail.vue';
import CarPay from '../page/car/carpay.vue';
import CarPaySuccess from '../page/car/carpaysuccess.vue';

import UsedCar from '../page/usedcar/usedcar.vue';
import UserCarDetail from '../page/usedcar/usercardetail.vue';
import SaleCar from '../page/usedcar/salecar.vue';
import CarAssess from '../page/usedcar/carassess.vue';
import AssessResult from '../page/usedcar/assessresult.vue';
import UsedCarSearch from '../page/usedcar/usedcarsearch.vue';
import Appointment from '../page/usedcar/appointment.vue';
import MakeSuccess from '../page/usedcar/makesuccess.vue';

import Finance from '../page/finance/finance.vue';

import Me from '../page/personal/user.vue';
import Order from '../page/personal/orders.vue';
import Share from '../page/Share/share.vue';

// import Taber from '../components/allHello.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/news', name: 'News', component: News,redirect:'/news/report', children: [
        { path: 'report', name: 'Report', component: Report },
        { path: 'charge', name: 'Charge', component: Charge },
        { path: 'skill', name: 'Skill', component: Skill },
      ]
    },
    { path: '/shop', name: 'Shop', component: Shop },
    { path: '/shopdetail', name: 'ShopDetail', component: ShopDetail },
    { path: '/newsDetail', name: 'NewsDetail', component: NewsDetail },
    { path: '/integralPay', name: 'IntegralPay', component: IntegralPay },
    { path: '/intepaysucess', name: 'IntePaySucess', component: IntePaySucess },
    { path: '/search', name: 'Search', component: Search },


    {path: '/cartaber',name: 'CarTaber',component: CarTaber,children:[
      {path:'car',name: 'Car',component: Car},
      // 二手车
      {path:'usedcar',name: 'UsedCar',component: UsedCar},
      // 金融
      {path:'finance',name: 'Finance',component: Finance}
    ]},
    {path: '/newcarsearch',name: 'NewCarSearch',component: NewCarSearch},
    {path: '/newcardetail',name: 'NewCarDetail',component: NewCarDetail},
    {path: '/carpay',name: 'CarPay',component: CarPay},
    {path: '/carpaysuccess',name: 'CarPaySuccess',component: CarPaySuccess},

    {path: '/share',name: 'Share',component: Share,},
    {path: '/me',name: 'Me',component: Me}, 
    {path: '/order',name: 'Order',component: Order},
    {path: '/login',name: 'Login',component: Login},
    {path: '/register',name: 'Register',component: Register},
    {path: '/edit',name: 'Edit',component: Edit},   

    {path: '/usercardetail',name: 'UserCarDetail',component: UserCarDetail},
    {path: '/salecar',name: 'SaleCar',component: SaleCar},  
    {path: '/carassess',name: 'CarAssess',component: CarAssess},  
    {path: '/assessresult',name: 'AssessResult',component: AssessResult},  
    {path: '/usedcarsearch',name: 'UsedCarSearch',component: UsedCarSearch}, 
    {path: '/appointment',name: 'Appointment',component: Appointment}, 
    {path: '/makesuccess',name: 'MakeSuccess',component: MakeSuccess}, 
  ]
})

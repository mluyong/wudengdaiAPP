import Vue from 'vue'
import Router from 'vue-router'


import Taber from '../components/taber.vue';


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

import Login from '../page/login/login.vue';
import Register from '../page/login/register.vue';
import Edit from '../page/login/editorpassword.vue';


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
import Fund from '../page/finance/fund.vue';
import FundDetail from '../page/finance/funddetail.vue';
import CarLoan from '../page/finance/carloan.vue';
import CarLoanDetail from '../page/finance/carloandetail.vue';
import Insurance from '../page/finance/insurance.vue';
import InsuranceDetail from '../page/finance/insurancedetail.vue';


import Me from '../page/personal/personal.vue';
import MyOrder from '../page/personal/myorder.vue';
import OrderDetail from '../page/personal/orderdetail.vue';
import MyValue from '../page/personal/myvalue.vue';
import Code from '../page/personal/code.vue';
import MyCollent from '../page/personal/mycollent.vue';
import FriendDetail from '../page/personal/frienddetail.vue';
import MyFriend from '../page/personal/myfriend.vue';
import MyCarHouse from '../page/personal/mycarhouse.vue';
import Integralcenter from '../page/personal/integralcenter.vue';

import Share from '../page/Share/share.vue';


import AppointPop from '../components/appointPop.vue';



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/appointpop', name: 'AppointPop', component: AppointPop },
   
    {
      path: '/', name: 'Taber', redirect:"/home", component: Taber, children: [
        { path: 'home', name: 'Home', component: Home },
        //选车
        { path:'car',name: 'Car',component: Car },
        //二手车
        { path:'usedcar',name: 'UsedCar',component: UsedCar},
        //金融
        { path:'finance',name: 'Finance',component: Finance},
        //分享
        { path: 'share',name: 'Share',component: Share },
        //个人中心
        { path: 'me',name: 'Me',component: Me }, 
      ]
    },

    {
      //最新资讯
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


   
    
    
   

    {path: '/newcarsearch',name: 'NewCarSearch',component: NewCarSearch},
    {path: '/newcardetail',name: 'NewCarDetail',component: NewCarDetail},
    {path: '/carpay',name: 'CarPay',component: CarPay},
    {path: '/carpaysuccess',name: 'CarPaySuccess',component: CarPaySuccess},

    
    
  
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


    {path: '/fund',name: 'Fund',component: Fund}, 
    {path: '/funddetail',name: 'FundDetail',component: FundDetail}, 
    {path: '/carloan',name: 'CarLoan',component: CarLoan}, 
    {path: '/carloandetail',name: 'CarLoanDetail',component: CarLoanDetail}, 
    {path: '/insurance',name: 'Insurance',component: Insurance}, 
    {path: '/insurancedetail',name: 'InsuranceDetail',component: InsuranceDetail}, 


    // 我的订单
    {path: '/myorder',name: 'MyOrder',component: MyOrder},
    // 订单详情
    {path: '/orderdetail',name: 'OrderDetail',component: OrderDetail},
    // 优惠劵
    {path: '/myvalue',name: 'MyValue',component: MyValue}, 
    // 二维码
    {path: '/code',name: 'Code',component: Code}, 
    // 我的收藏 
    {path: '/mycollent',name: 'MyCollent',component: MyCollent},
    // 我的好友
    {path: '/myfriend',name: 'MyFriend',component: MyFriend},
    // 好友详情
    {path: '/frienddetail',name: 'FriendDetail',component: FriendDetail}, 
    // 我的车库 
    {path: '/mycarhouse',name: 'MyCarHouse',component: MyCarHouse}, 
    // 积分中心
    {path: '/integralcenter',name: 'Integralcenter',component: Integralcenter},
  ]
})

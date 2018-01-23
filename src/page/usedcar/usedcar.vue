<template>
  <div>
        <div class="cartaber">
            <ul> 
                <li><router-link to="/car"><p>选车</p></router-link></li> 
                <li><p  class="active-two">二手车</p></li>
                <li><router-link to="/finance"><p>金融</p></router-link></li> 
                <li><img src="../../../static/img/search.png" alt=""></li>
            </ul> 
            <router-view></router-view>
        </div>
        <div class="cartaber-div"></div>


       <div class="car-top-img">
           <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../../static/img/choosecar.png" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/choosecar.png" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/choosecar.png" /></mt-swipe-item>
          </mt-swipe>
       </div>
        <div class="secondhandcar-opintion text-center text-size12 background_white">
          <ul class="text-size">
              <li class="line-block border-right text-size12">3万以下</li>
              <li class="line-block border-right text-size12">3-5万</li>
              <li class="line-block border-right text-size12">5-8万</li>
              <li class="line-block text-size12">8-10万</li>
          </ul>
          <ul class="text-size">
              <li class="line-block border-right text-size12">上班代步</li>
              <li class="line-block border-right text-size12">有娃家庭</li>
              <li class="line-block border-right text-size12">新人练手</li>
              <li class="line-block text-size12">拉人拉货</li>
          </ul>
          <ul class="text-size">
              <li class="line-block border-right text-size12">华晨金杯</li>
              <li class="line-block border-right text-size12">一汽大众</li>
              <li class="line-block border-right text-size12">广汽丰田</li>
              <li class="line-block text-size12">日产</li>
          </ul>
      </div>
      <div class="secondhandcar-btn text-size15 text-center background_white">
          <ul class="text-size">
              <router-link to="/usedcarsearch"><li class="width100 border-radius6 padding5 text-size15">查看全部优选车型</li></router-link>
          </ul>
          <ul class="text-size">
              <router-link to="/salecar"><li class="line-block border-radius6 padding5 text-size15">我要卖车</li></router-link>
              <li class="second-btn line-block border-radius6 padding5"><router-link to="/carassess">帮您估价</router-link></li>
          </ul>
          <div style="height:10px;background:white;"></div>
      </div>
      <div class="secondhandcar-service background_white">
          <ul class="text-size">
              <li class="line-block text-center">
                  <img src="../../../static/img/homes.png"  alt="">
                  <p class="text-size10">汽车估价</p>
            </li>
             <li class="line-block text-center">
                  <img src="../../../static/img/homes.png"  alt="">
                  <p class="text-size10">帮看服务</p>
             </li>
              <li class="line-block text-center">
                  <img src="../../../static/img/homes.png"  alt="">
                  <p class="text-size10">汽车贷款</p>
                </li>
              <li class="line-block text-center">
                  <img src="../../../static/img/homes.png"  alt="">
                  <p class="text-size10">服务保障</p>
            </li>
          </ul>
      </div>
       <div class="secondhandcar-jb  clearfix">
           <div class="secondhandcar-jb-nav clearfix">
             <div class="clearfix secondhandcar-title">
                 <h3 class="text-size15 color-333 line-block padding-bottom5">金杯汽车</h3>
                 <h4 class="secondhandcar-h4 text-size12 color-333" >查看更多</h4>
              </div>
            </div>
            <ul class="text-size">
                <li class="line-block">
                    <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">金杯T50</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥4.58</span>万</p>
                </li>
                <li class="line-block">
                     <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">金杯金海狮</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥5.16</span>万</p>
                </li>
                <li class="line-block">
                     <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">金杯750</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥5.29</span>万</p>
                </li>
            </ul>
       </div>
      <div class="secondhandcar-jb  clearfix">
           <div class="secondhandcar-jb-nav clearfix">
             <div class="clearfix secondhandcar-title">
                 <h3 class="text-size15 color-333 line-block padding-bottom5">大众汽车</h3>
                 <h4 class="secondhandcar-h4 text-size12 color-333" >查看更多</h4>
              </div>
            </div>
            <ul class="text-size">
                <li class="line-block">
                    <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">一汽-大众-宝来</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥4.58</span>万</p>
                </li>
                <li class="line-block">
                     <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">一汽-大众-宝来</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥5.16</span>万</p>
                </li>
                <li class="line-block">
                     <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">一汽-大众-速腾</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥5.29</span>万</p>
                </li>
            </ul>
       </div>
        <div class="height_47"></div>
  </div>
</template>

<script>
export default {
 
  };
</script>

<style scoped>
@import "../../../static/css/common.css";
@import url('../../../static/css/header.css');
.car-top-img{
    width:100%;
    height: 140px;
    overflow: hidden;
}
.car-top-img img{
    width:100%;
}

.secondhandcar-opintion ul li{
    width: calc( 100% / 4 - 2px );
    color: #333333;
    margin: 5px 0px;
}
.secondhandcar-btn{
    padding: 0 20px;
    padding-top: 10px;
}
.secondhandcar-btn ul{
    width: 100%;
    padding: 4px 0px;
    font-size: 0;
}
.secondhandcar-btn ul:nth-child(1) li{
    background-color: #E7943C;
    color: white;
}
li{
    list-style: none;
} 
.secondhandcar-btn ul:nth-child(2) li:first-child{
    width: 60%;
    border: 1px solid #E7943c;
    color: #CF791E;
}
.secondhandcar-btn .second-btn{
    width: calc( 100% - 60% - 2% - 4px );
    border: 1px solid #E7943c;
    margin-left: 2%;
    background-color: #F9F9F9;
    color: #CF791E;
}
.secondhandcar-btn .second-btn a{
    color: #CF791E;
    font-size:15px;
}
.secondhandcar-service{
   border-bottom: 1px solid #E9E9E9;
   border-top: 1px solid #E9E9E9;
}
.secondhandcar-service ul li{
    width: calc( 100% / 4 - 2px );
    padding: 16px 0px 9px 0px;
}
.secondhandcar-service ul li p{
    margin-top: 4px;
    color: #4d4d4d;
}
.secondhandcar-service ul li img{
    width: 26px;
    height: 26px;
}
.secondhandcar-jb{
    padding: 10px;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;
    background-color: white;
}
.secondhandcar-jb ul li{
    width: calc(100% / 3 - 6px);
    margin-right: 8px;
}
.secondhandcar-jb ul li:last-child{
    margin-right:0px;
}
.secondhandcar-dz{
    margin: 0px 10px;
    padding: 8px 0px;
    border-top: 1px solid #E6E6E6;
}
.secondhandcar-dz ul li{
    width: calc(100% / 3 - 10px);
    margin: 0px 4px;
}
.secondhandcar-h4{
    float: right;
    padding-right: 3px;
}
</style>

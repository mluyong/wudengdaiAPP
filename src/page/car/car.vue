<template>
  <div>
<div class="cartaber">
      <ul> 
        <li><p class="active-two">选车</p></li> 
        <li><router-link to="/taber/usedcar"><p>二手车</p> </router-link></li>
        <li><router-link to="/taber/finance"><p>金融</p></router-link></li> 
        <li><img src="../../../static/img/search.png" alt=""></li>
      </ul> 
       <router-view></router-view>
 </div>



       <div class="car-top-img">
           <img src="../../../static/img/4.jpg" alt="">
       </div>

      <div class="opintion text-center">
          <ul class="text-size">
              <li class="line-block text-center border-right text-size12">3万以下</li>
              <li class="line-block text-center border-right text-size12">3-5万</li>
              <li class="line-block text-center border-right text-size12">5-8万</li>
              <li class="line-block text-center text-size12">8-10万</li>
          </ul>
          <ul class="text-size ">
              <li class="line-block text-center border-right text-size12">上班代步</li>
              <li class="line-block text-center border-right text-size12">有娃家庭</li>
              <li class="line-block text-center border-right text-size12">新人练手</li>
              <li class="line-block text-center text-size12">拉人拉货</li>
          </ul>
          <ul class="text-size">
              <li class="line-block text-center border-right text-size12">华晨金杯</li>
              <li class="line-block text-center border-right text-size12">一汽大众</li>
              <li class="line-block text-center border-right text-size12">广汽丰田</li>
              <li class="line-block text-center text-size12">日产</li>
          </ul>
      </div>
      <div class="buycar">
          <ul class="text-size15">
              <router-link to="/newcarsearch">
                <li class="text-center width100 color-white">查看全部优选车型</li>
              </router-link>
              <router-link to="/newcarsearch">
                <li class="text-center width100 color-white">我要买车</li>
              </router-link>
          </ul>
      </div>
    <ul class="car-all clearfix">
        <div class="title">
           <h3 class="text-size15 color-333 line-block">热门车型</h3>
           <h4 class="text-size12 car-all-h4">查看更多</h4>
        </div>
        <mt-swipe style="height:120px;width:100%" :auto="5000">
            <mt-swipe-item>
              <li class="clearfix">
                <div class="float_left car-hot-img">
                    <img src="../../../static/img/dzbl.jpg" alt="">
                </div>
                <div class="float_left car-hot-word">
                    <div class="text-size15">金杯750 2015款 1.5L 豪华型</div>
                    <div class="text-size13">厂商指导价：8.88万</div>
                    <div class="color-red text-size13">
                        优惠价
                        <span class="text-size18">7.92</span>
                        万
                    </div>
                </div>
              </li>
            </mt-swipe-item>
            <mt-swipe-item>
              <li class="clearfix">
                <div class="float_left car-hot-img">
                    <img src="../../../static/img/dzbl.jpg" alt="">
                </div>
                <div class="float_left car-hot-word">
                    <div class="text-size15">金杯750 2015款 1.5L 豪华型</div>
                    <div class="text-size13">厂商指导价：8.88万</div>
                    <div class="color-red text-size13">
                        优惠价
                        <span class="text-size18">7.92</span>
                        万
                    </div>
                </div>
              </li>
            </mt-swipe-item>
            <mt-swipe-item>
              <li class="clearfix">
                <div class="float_left car-hot-img">
                    <img src="../../../static/img/dzbl.jpg" alt="">
                </div>
                <div class="float_right car-hot-word">
                    <div class="text-size15">金杯750 2015款 1.5L 豪华型</div>
                    <div class="text-size13">厂商指导价：8.88万</div>
                    <div class="color-red text-size13">
                        优惠价
                        <span class="text-size18">7.92</span>
                        万
                    </div>
                </div>
              </li>
            </mt-swipe-item>
          
       
        </mt-swipe>
    </ul>
        <div class="jb jb-car clearfix">
           <div class="jb-nav clearfix">
             <div class="left-list clearfix">
                 <h3 class="text-size15 color-333 line-block padding-bottom5">金杯汽车</h3>
                 <h4 class="text-size12 jb-jbnav-h4" >查看更多</h4>
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
        <div class="dz dz-car clearfix">
           <div class="dz-nav clearfix">
             <div class="clearfix padding-bottom5">
                 <h3 class="text-size15 color-333 color-333 line-block dz-dznav-h3" >大众汽车</h3>
                 <h4 class="text-size12 dz-dznav-h4" >查看更多</h4>
              </div>
            </div>
            <ul class="text-size">
                <li class="line-block text-size12">
                    <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">一汽-大众-宝来</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥4.58</span>万</p>
                </li>
                <li class="line-block text-size12">
                     <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">一汽-大众-宝来</p>
                    <p class="text-size12"><span class="text-size14 color-red">￥5.16</span>万</p>
                </li>
                <li class="line-block text-size12">
                    <img src="../../../static/img/jbT50.jpg" class="width100" alt="">
                    <p class="text-size12">一汽-大众-宝来</p>
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
@import url('../../../static/css/common.css');
@import url('../../../static/css/cartaber.css');


.car-top-img{
    width:100%;
    height: 140px;
    overflow: hidden;
}
.car-top-img img{
    width:100%;
}

.opintion,.buycar,.car-all,.jb,.dz{
    background-color: white;
}
.opintion ul li{
    width: calc( 100% / 4 - 2px );
    color: #333333;
    margin: 5px 0px;
}
.buycar{
    color: #FFFFFF;
    padding-top:5px;
    padding-bottom:5px;
}
.buycar ul{
    width: 80%;
    margin: 0 auto;
}
.buycar ul li{
    list-style: none;
    border: 1px solid #E7943C;
    display: inline-block;
    border-radius: 8px;
    margin: 5px 0;
    line-height: 30px;
    background-color: #E7943C;
}
.topcar{
    margin-top: 16px;
    border-top: none;
    padding: 10px 10px;
}
 .car-all-h4,.jb-jbnav-h4,.dz-dznav-h4{
    float: right;
    font-weight: normal;
    color: #333333;
}
.car-all {
    margin-top: 1px;
    background-color: white;
}
.car-all .title{
    padding:10px 10px;
}
.car-all li {
    list-style: none;
    padding: 0px 10px;
    position: relative;
}

.car-hot-img{
    width:40%;
    height: 90px;
    overflow: hidden;
}
.car-hot-img img{
    width:100%;
}
.car-hot-word{
     width:60%;
     padding-left:6px;
}
.car-hot-word div{
    line-height: 20px;
}

.topcar .right p span{
    font-size: 18px;
}
.jb{
    padding: 10px;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;
    background-color: white;
}
.jb ul li{
    width: calc(100% / 3 - 10px);
    margin: 0px 4px;
}
.dz{
    padding: 10px;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;
}
.dz ul li{
    width: calc(100% / 3 - 10px);
    margin: 0px 4px;
}

</style>

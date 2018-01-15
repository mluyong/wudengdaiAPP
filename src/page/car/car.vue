<template>
  <div>
      <div>
          <img src="../../../static/img/gs.jpg" class="width100" alt="">
      </div>
      <div class="opintion text-center text-size12">
          <ul class="text-size12 text-size">
              <li class="line-block text-center border-right text-size12">3万以下</li>
              <li class="line-block text-center border-right text-size12">3-5万</li>
              <li class="line-block text-center border-right text-size12">5-8万</li>
              <li class="line-block text-center text-size12">8-10万</li>
          </ul>
          <ul class="text-size12 text-size ">
              <li class="line-block text-center border-right text-size12">上班代步</li>
              <li class="line-block text-center border-right text-size12">有娃家庭</li>
              <li class="line-block text-center border-right text-size12">新人练手</li>
              <li class="line-block text-center text-size12">拉人拉货</li>
          </ul>
          <ul class="text-size12 text-size text-size12">
              <li class="line-block text-center border-right text-size12">华晨金杯</li>
              <li class="line-block text-center border-right text-size12">一汽大众</li>
              <li class="line-block text-center border-right text-size12">广汽丰田</li>
              <li class="line-block text-center text-size12">日产</li>
          </ul>
      </div>
      <div class="buycar">
          <ul class="text-size text-size15">
              <li class="text-center width100">查看全部优选车型</li>
              <li class="text-center width100">我要买车</li>
          </ul>
      </div>
    <ul class="car-all clearfix">
        <div class="title">
           <h3 class="text-size15 color-333 line-block">热门车型</h3>
           <h4 class="text-size12 car-all-h4">查看更多</h4>
        </div>
        <mt-swipe style="height:120px;width:100%" :auto="3000">
            <mt-swipe-item>
              <li class="clearfix">
                <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
                  <div>
                    <h6 class="text-size15">金杯750 2015款 1.5L 豪华型</h6>
                    <p>厂商指导价：8.88万</p >
                    <p class="color-red">优惠价<span class="text-size18 color-red">7.92</span>万</p>
                 </div>
                </li>
            </mt-swipe-item>
            <mt-swipe-item>
                  <li class="clearfix">
                   <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
                   <div>
                   <h6 class="text-size15">金杯750 2015款 1.5L 豪华型</h6>
                   <p>厂商指导价：8.88万</p >
                   <p class="color-red">优惠价<span class="text-size18 color-red">7.92</span>万</p>
                  </div>
                 </li>
            </mt-swipe-item>
            <mt-swipe-item>
                <li class="clearfix">
                    <div class="float_left">
                        <img src="../../../static/img/dzbl.jpg" alt="">
                    </div>
                    <div>
                        <h6 class="text-size15">金杯750 2015款     1.5L 豪华型</h6>
                        <p>厂商指导价：8.88万</p >
                        <p class="color-red">优惠价<span   class="text-size18 color-red">7.92</span>万</p>
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
         <Taber></Taber>
  </div>
</template>

<script>
import Taber from "../../components/taber";
export default {
    components: {
    Taber
  }
};
</script>

<style scoped>
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
    margin:0px 10px;
}
.car-all li {
    list-style: none;
    padding: 9px 10px;
    position: relative;
}
.car-all li div:first-child {
    width: 120px;
    padding-right: 10px;
}
.car-all li div:first-child img {
    width: 100%;
}
.car-all li div:last-child h6 {
    font-weight: normal;
    color: rgba(51, 51, 51, 1);
    letter-spacing: 0.5px;
}
.car-all li div:last-child p:nth-of-type(1) {
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
}
.car-all li div:last-child p:nth-of-type(2) {
    font-size: 13px;
    color: red;
    position: absolute;
    bottom: 12px;
    left: 140px;
}
#car-span{
    color: #FF3600;
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

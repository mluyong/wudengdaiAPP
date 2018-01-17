<template>
  <div>
         <mt-header title="估价结果" class="border-bottom">
           <router-link to="/carassess" slot="left">
         <mt-button icon="back"></mt-button>
        </router-link>
       </mt-header>
      <div class="car-category">
          <h3 class="text-size15">汽车品牌名称</h3>
          <p class="text-size12 color66">城市/上牌年份/行驶里程</p>
          <div class="price">
             <ul class="text-size text-center">
                 <li class="line-block text-size15">
                     车商收购价
                 </li>
                 <li class="line-block text-size15">
                     个人交易价格
                 </li>
                 <li class="line-block text-size15">
                      车商出售价
                 </li>
             </ul>
          </div>
          <div class="car-detail">
             <ul class="text-size">
                 <li class="line-block text-size15 text-center">
                   <span>￥</span>
                   <span>12.3</span>
                   <span class="color51 text-size13">万</span></li>
                 <li class="line-block text-size15 text-center">
                   <span>￥</span>
                   <span>12.3</span>
                   <span class="color51 text-size13">万</span>
                 </li>
                 <li class="line-block text-size15 text-center">
                   <span>￥</span>
                   <span>12.3</span>
                   <span class="color51 text-size13">万</span>
                 </li>
             </ul>
          </div>
      </div>
     
     <div class="car-category margin-top5">
           <h3 class="text-size15">汽车品牌名称</h3>
           <p class="text-size12 color66">城市/上牌年份/行驶里程</p>
            <ul class="text-size">
                <li class="bespeak">网上预约</li>
                <li class="bespeak margin-right0">直接联系</li>
            </ul>
            <p class="text-size13 line-height20 color66">线下评估地址：</p>
            <p class="text-size13 line-height20 text-indent2 color66">中山路天目山路交叉口33333号</p>
            <p class="text-size13 line-height20 padding-top10 color66">联系方式：</p>
            <p class="text-size13 line-height20 text-indent2 color66">13800000000</p>
     </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url('../../../static/css/common.css');

.color66{
  color:#666;
}
.car-category {
  background-color: #ffffff;
  padding: 10px 20px 20px 20px;
}
h3 {
  font-size: 15px;
  margin: 5px 0px 8px 0px;
}
.price {
  width: 100%;
  border: 1px solid #e7943c;
  margin-top: 20px;
  border-radius: 6px;
}
.price li {
  width: calc(100% / 3 - 2px);
  padding: 12.5px 0px;
  color: #e7943c;
}
.price li:nth-child(2) {
  background-color: #e7943c;
  color: #ffffff;
}
.car-detail {
  padding-top: 14px;
}
.car-detail ul li {
  width: calc(100% / 3 - 2px);
}
.car-detail ul li span {
  font-size: 21px;
  color: #ff0000;
  font-weight: 600;
}
.bespeak {
  width: calc(100% / 2 - 15px);
  display: inline-block;
  text-align: center;
  line-height: 40px;
  border-radius: 6px;
  background-color: #e7943c;
  color: white;
  font-size: 15px;
  margin-right: 30px;
  margin-top: 19px;
  margin-bottom: 21px;
}
.color51{
  color:#333 !important;
}
</style>

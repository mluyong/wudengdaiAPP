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
          <div class="price text-center">
             <ul>
                 <li class="text-size15">
                     个人交易价格
                 </li>
                 <li class="">
                     <span class="text-size21 color-red">￥13</span>
                     <span class="color51">万</span>
                 </li>
                 <div class="clear"></div>
             </ul>
          </div>
          <div class="owntop">以上信息仅供参考</div>
      </div>
     
     <div class="car-category margin-top-6 ">
           <h3 class="text-size15">预约线下评估</h3>
           <p class="text-size12 color66">评估更精准</p>
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
ul,li{
  list-style: none;
}
.color66{
  color:#666;
}
.margin-top-6{
  margin-top:6px;
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
  height: 48px;
  border: 1px solid #e7943c;
  margin-top: 20px;
  border-radius: 6px;
}
.price li {
  width: 50%;
  line-height: 46px;
  float: left;
  color: #e7943c;
}
.price li:nth-child(1) {
  background-color: #e7943c;
  color: #ffffff;
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
.text-size21{
  font-size:21px;
  font-weight: bold;
}
.owntop{
  width:100%;
  text-align: right;
  font-size:12px;
  color:#666;
  line-height: 26px;
}
</style>

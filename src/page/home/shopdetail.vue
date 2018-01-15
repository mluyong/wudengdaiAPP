<template>
  <div>
    <mt-header title="商品详情">
      <router-link to="/shop" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="detail_img_box">
      <img src="../../../static/img/backgrounds.jpg" />
    </div> 
    <div class="padding_10 background_white margin-bottom-5">
      <div class="nav-word margin-bottom-5">现代车载充电器</div>
      <div class="line-height-20">
        <img src="../../../static/img/integral.png" style="width:16px;margin-right:10px;"/>
        <span class="font-size-16 color-r">800</span>
        <span>积分</span>
      </div>
      <div class="line-height-20">市场参考价：98元</div>
    </div>

    <div class="padding_10 background_white margin-bottom-5">
      <div class="line-height-20 margin-bottom-5">商品描述</div>
      <div class="line-height-20">
        <span>品名：</span>
        <span>现代车载充电器</span>
      </div>
      <div class="line-height-20">
        <span>品牌：</span>
        <span>现代</span>
      </div>
      <div class="line-height-20">
        <span>颜色：</span>
        <span>黑色、银色、红色、蓝色</span>
      </div>
      <div class="line-height-20">
        <span>型号：</span>
        <span>SPS12</span>
      </div>
    </div>



    <div class="height_47"></div>
    <div class="bottom_pay">
      <div class="float_left">
           <div class="online_img"><img src="../../../static/img/online.png"/></div>
           <div class="online_word">网上咨询</div>
      </div>
      <div class="float_right line_height_47">
           <span>
             <span class="small_word">单价：</span>
             <span class="normal_word">800</span>
             <span class="small_word">积分</span>
           </span>

      <router-link to="/integralPay">
           <button class="pay_btn">我要兑换</button>
      </router-link>
           
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("../../../static/css/common.css");
div,span{
  font-size:12px;
  color:#666;
}
.nav-word{
  font-size:15px;
  color:#333;
}
.line-height-20{
  line-height: 20px;
}
.margin-bottom-5{
  margin-bottom: 5px;

}
.detail_img_box{
  width:100%;
  max-height: 350px;
  overflow: hidden;
}
.detail_img_box img{
width: 100%
}
.padding_10{
  padding: 10px;
}
.font-size-16{
  font-size:16px;
}
.color-r{
   color:red;
}




</style>

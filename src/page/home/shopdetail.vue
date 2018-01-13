<template>
  <div>
    <mt-header title="商品详情">
      <router-link to="/shop" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="detail_img_box">
      <img src="../../../static/img/bck.jpg" />
    </div> 
    <div class="padding_10 background_white">
      <div class="">现代车载充电器</div>
      <div>
        <img/>
        <span>800积分</span>
      </div>
      <div >市场参考价：98元</div>
    </div>
    <div class="gray_line"></div>
    <div class="padding_10 background_white">
      <div>商品描述</div>
      <div>品名：现代车载充电器</div>
      <div>品牌：现代</div>
      <div>颜色：黑色、银色、红色、蓝色</div>
      <div>型号：SPS12</div>
    </div>
    <div class="gray_line"></div>



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
.background_white{
  background:white;
}
.gray_line{
  width:100%;
  height: 6px;

}
.detail_img_box{
  width:100%;
}
.detail_img_box img{
width: 100%
}
.padding_10{
  padding: 10px;
}




</style>

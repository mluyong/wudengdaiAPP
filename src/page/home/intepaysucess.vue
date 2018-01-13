<template>
  <div class="homeBox">
   <mt-header title="订单详情">
      <router-link to="/integralPay" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="gray_line_d"></div>
    <div class="padding_lr background_white">
        <div class="line_height_30">收件人：赵桐</div>
        <div>地址：浙江省杭州市西湖区文新街道翠苑1区25栋302</div>
        <div class="line_height_30">15806471397</div>
    </div>
    <div class="gray_line_d"></div>
    <div class="padding_lr line_height_30 background_white">
        <div class="float_left">订单编号330581284</div>
        <div class="float_right">2018-01-02 16:23</div>
        <div class="clear"></div>
        <div class="gray_line_d"></div>
        <div class="padding_tt">
            <div class="img_box float_left"></div>
            <div class="padding_lr float_left">
              <div class="line_height_30">现代车载充电器</div>
              <div class="line_height_30">市场价：89元</div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="gray_line_d"></div>
    </div>
    <div class="padding_lr line_height_50 background_white">
      <div class="float_left">支付金额：</div>
      <div class="float_right">800积分</div>
      <div class="clear"></div>
    </div>
    <div class="gray_line_d"></div>
    <div class="padding_lr line_height_50 background_white">
      <div class="float_left">邮寄方式</div>
      <div class="float_right">快递</div>
      <div class="clear"></div>
    </div>
    <div class="gray_line_d"></div>
    <div class="padding_lr line_height_50 background_white">
      <div>留言：尽快联系我</div>
    </div>

    
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url("../../../static/css/common.css");
.gray_line_d{
  width:100%;
  height: 1px;
  background:#e1e1e1;
}
.padding_lr{
  padding-left:15px;
  padding-right: 15px;
}
.padding_tt{
  padding-top:10px;
  padding-bottom:10px;
}
.line_height_30{
  line-height: 30px;
}
.line_height_50{
  line-height: 50px;
}
.img_box{
  width:100px;
  height: 100px;
  background: pink;
  overflow: hidden;
}
.img_box img{
  width: 100%;
}


</style>

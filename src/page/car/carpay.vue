<template>
  <div class="font-color-all">
     <mt-header title="订单详情">
      <router-link to="/newcardetail" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="gray_line_d"></div>
    <div class="padding_lr background_white">
        <div class="line_height_30">
          <div class="float_left">
            <span>收件人：</span>
            <span>赵桐</span>
          </div>
          <div class="float_right">新增地址</div>
          <div class="clear"></div>
        </div>
        <div>地址：浙江省杭州市西湖区文新街道翠苑1区25栋302</div>
        <div class="line_height_30">15806471397</div>
    </div>
    <div class="gray_line_d"></div>
    <div class="padding_lr line_height_30 background_white">
        <div class="float_left">
          <span class="font-size-16">订单编号</span>
          <span class="font-color">330581284</span>
        </div>
        <div class="float_right">
          <span class="font-color  font-size-12">2018-01-02 16:23</span>
        </div>
        <div class="clear"></div>
        <div class="gray_line_d"></div>
        <div class="padding_tt">
            <div class="img_box float_left">
              <img src="../../../static/img/backgrounds.jpg"/>
            </div>
            <div class="padding_lr float_left">
              <div class="line_height_20">现代车载充电器</div>
              <div class="line_height_20">
                <span>厂商指导价：</span>
                <span>8.88万</span>
              </div>
              <div class="line_height_20">
                <span>尊享价：</span>
                <span>7.92万</span>
              </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="gray_line_d"></div>
    </div>
    <div class="padding_lr line_height_50 background_white c-red">
      <div class="float_left">支付金额：</div>
      <div class="float_right">
        <span>￥</span>
        <span>1000</span>
        <span>（订金）</span>
      </div>
      <div class="clear"></div>
    </div>
    <div class="gray_line_d"></div>

   <div class=" line_height_50 background_white">
      <mt-cell title="二维码" label="" is-link></mt-cell>
  </div>


    <div class="gray_line_d"></div>
    <div class="padding_lr line_height_50 background_white margin-bottom-6">
      <div>
        <span>留言：</span>
        <span class="font-color">尽快联系我</span>
      </div>
    </div>
    <div class="padding_lr line_height_50 background_white">
      <div class="float_left">预计消费方式</div>
      <div class="float_right">
          <select class="select-box">
            <option>贷款</option>
            <option>全款</option>
          </select>
      </div>
      <div class="clear"></div>
    </div>
    <div class="gray_line_d"></div>
    <div class="padding_lr line_height_50 background_white">
      <div class="float_left">订金支付方式</div>
      <div class="float_right">
         <select class="select-box">
            <option>支付宝</option>
            <option>微信</option>
          </select>
      </div>
      <div class="clear"></div>
    </div>




    <div class="height_47"></div>
    <div class="bottom_pay">
      <div class="text-right line_height_47">
           <span class="small_word">金额</span>
           <span class="normal_word">￥</span>
           <span class="normal_word">1000</span>
           <router-link to="/carpaysuccess">
              <button class="pay_btn_small">立即支付</button>
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
@import url("../../../static/css/pay.css");
</style>

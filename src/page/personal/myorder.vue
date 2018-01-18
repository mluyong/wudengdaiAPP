<template>
  <div>
     <mt-header title="我的订单">
        <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    <div class="order-all">
        <ul id="all" class="color-666">
           <li class="li-box" v-for="(order,index) in order" v-bind:key="order.text" v-bind:class="{checked:index==nowIndex}" v-on:click="orderClick(index)">{{order.text}}</li>
        </ul>
    </div>
<router-link to="/orderdetail">
    <div class="user-order margin-bottom-5">
        <div class="bgc">
            <div class="clearfix order-number">
                <p class="float_left text-size14">订单编号
                    <span class="text-size14">330581284</span>
                </p>
                <p class="float_right color2 text-size10">2018-01-02 16:23</p>
            </div>
            <div class="clearfix user-car-all border-bottom">
                <div class="car-img float_left">
                    <img src="../../../static/img/4.jpg" alt="">
                </div>
                <div class="float_left user-car-all-right padding-left10">
                    <p class="text-size13 line-height20">金杯750 2015款 1.5L 豪华型 </p>
                    <p class="text-size12 line-height20">产商指导价：8.88万</p>
                    <p class="text-size12 line-height20">尊享价：7.92万</p>
                    <div class="clearfix text-size padding-top15">
                        <p class="float_left text-size12 color-red">支付金额：1000（定金）</p>
                        <div class="refund float_right">申请退款</div>
                    </div>
                </div>
            </div>
            <div class="clearfix">
                <div class="btn1 float_right">确认收货</div>
                <div class="btn1 float_right">二维码</div>
            </div>
        </div>  
    </div>
</router-link>


    <div class="user-order margin-bottom-5">
        <div class="bgc">
            <div class="clearfix order-number">
                <p class="float_left text-size14">订单编号
                    <span class="text-size14">330581284</span>
                </p>
                <p class="float_right color2 text-size14">待付款</p>
            </div>
            <div class="clearfix user-car-all border-bottom">
                <div class="car-img float_left">
                    <img src="../../../static/img/backgrounds.jpg" alt="">
                </div>
                <div class="float_left user-car-all-right padding-left10">
                    <p class="text-size13 line-height20">金杯750 2015款 1.5L 豪华型 </p>
                    <p class="text-size12 line-height20">产商指导价：8.88万</p>
                    <p class="text-size12 line-height20">尊享价：7.92万</p>
                    <div class="clearfix text-size padding-top15">
                        <p class="float_left text-size12 color-red">支付金额：1000（定金）</p>
                    </div>
                </div>
            </div>
            <div class="clearfix">
                <div class="btn1 float_right">立即支付</div>
            </div>
        </div>  
    </div>

     <div class="user-order margin-bottom-5">
        <div class="bgc">
            <div class="clearfix order-number">
                <p class="float_left text-size14">订单编号
                    <span class="text-size14">330581284</span>
                </p>
                <p class="float_right color2 text-size14">待付款</p>
            </div>
            <div class="clearfix user-car-all border-bottom">
                <div class="car-img float_left">
                    <img src="../../../static/img/cars.png" alt="">
                </div>
                <div class="float_left user-car-all-right padding-left10">
                    <p class="text-size13 line-height20">金杯750 2015款 1.5L 豪华型 </p>
                    <p class="text-size12 line-height20">产商指导价：8.88万</p>
                    <p class="text-size12 line-height20">尊享价：7.92万</p>
                    <div class="clearfix text-size padding-top15">
                        <p class="float_left text-size12 color-red">积分：1000</p>
                    </div>
                </div>
            </div>
            <div class="clearfix">
                <div class="btn1 float_right">快递单号</div>
            </div>
        </div>  
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      order: [{ text: "全部" }, { text: "待付款" }, { text: "进行中" }, { text: "已完成" }],
      nowIndex: 0
    };
  },
  methods: {
    orderClick: function(index) {
      this.nowIndex = index;
    }
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
@import url("../../../static/css/persion.css");

.checked{ 
 background: rgba(231,148,60,1); 
 color: white;
}
.color-666{
    color:#666;
}
.li-box{
    padding: 6px;
    font-size:14px;
}
</style>

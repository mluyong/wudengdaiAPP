<template>
  <div>
    <mt-header title="我要买车">
      <router-link to="/usedcar" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="salecar">
      <div style="height:200px;"><img src="../../../static/img/xhs.jpg" alt="图片显示出错，请刷新重试"></div>
      <div class="salecar-phone-all clearfix">
          <div class="salecar-phone-all2 clearfix">
            <div class="salecar-phone clearfix">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <div class="salecar-phone-bgi">
                <input type="text" placeholder="请输入手机号">
              </div>
            </div> 
            <router-link to="/appointment"><div class="salecar-phone-car">预约卖车</div></router-link>
            <ul class="salecar-estimate-price">
              <router-link to="/carassess"><li>爱车估价</li></router-link>
              <li @click="appointShow()">免费咨询</li>
            </ul>
          </div>
        </div>
    </div>
    <div class="salecar-process">
      <p class="salecar-p"><span class="border"></span> 卖车流程 <span class="border"></span></p>
      <table>
        <tr>
          <td><img src="../../../static/img/txxx.png" alt=""></td>
          <td><img src="../../../static/img/jiantou.png" alt=""></td>
          <td><img src="../../../static/img/yuyue.png" alt=""></td>
          <td><img src="../../../static/img/jiantou.png" alt=""></td>
          <td><img src="../../../static/img/ok.png" alt=""></td>
        </tr> 
        <tr>
          <td>填写信息</td>
          <td></td>
          <td>填写信息</td>
          <td></td>
          <td>填写信息</td>
        </tr> 
      </table>
    </div>
    <div class="salecar-common-problem">
       <p class="salecar-p"><span class="border"></span> 常见问题 <span class="border"></span></p>
       <h6>Q1：卖车需要准备什么？</h6>
       <p class="padding-left3 color2 text-size10">本人需要提供车主身份证（委托人还需要提供车主委托证明 及委托人身份证）、行驶证、登记证、购置税本、购车发票、 本人名下银行卡，如果车辆为公户，还需要提供相关的组织 机构代码信息。</p>
       <h6>Q1：卖车需要准备什么？</h6>
        <p class="padding-left3 color2 text-size10">1、提交车辆信息及联系方式； </p>
        <p class="padding-left3 color2 text-size10">2、预约门店进行检测，并在检测完成后获得车辆报价；</p> 
        <p class="padding-left3 color2 text-size10">3、当日交易，当日收款；</p> 
        <p class="padding-left3 color2 text-size10">4、过户完成支付车辆尾款，返还相关证件。</p>
        
    </div>






   <div class="appoint-pop-box" v-show="appointPop">
      <div class="appoint-pop-box-pad">
        <div class="appoint-pop">
            <div class="appoint-word">400-85692</div>
            <div class="appoint-line"></div>
            <div>
              <div class="float_left appoint-call">拨打</div>
              <div class="float_left appoint-cancel" @click="appointHide()">取消</div>
            </div>
        </div>
      </div>
    </div
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointPop:false,
      options: [
        {
          value: "选项1",
          label: "唐山"
        },
        {
          value: "选项2",
          label: "唐山"
        },
        {
          value: "选项3",
          label: "唐山"
        },
        {
          value: "选项4",
          label: "唐山"
        },
        {
          value: "选项5",
          label: "唐山"
        }
      ],
      value: ""
    };
  },
   methods: {
       appointShow(){
         this.appointPop = true;
       },
       appointHide(){
         this.appointPop = false;
       }
  },
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
@import url("../../../static/css/persion.css");
.salecar {
  width: 100%;
  height: 350px;
  position: relative;
}
.salecar img {
  width: 100%;
  height: 100%;
  z-index: -999;
}
.salecar .salecar-phone-all{
  width: 100%;
  position: absolute;
  top: 53%;
  padding: 0 10px;
  background-color: #ffffff00;
}
.salecar .salecar-phone-all2 {
  padding: 0px 10px;
  background-color: white;
}
.salecar-phone{
  padding: 4.5px 0px 4.5px 10px;
  border-bottom: 1px solid #dbdbdb;
}
.salecar-phone-bgi {
  width: calc( 100% - 120px );
  height: 30px;
  float: left;
  margin: 5px 0px;
  padding: 0 0 0 30px;
  margin-left: 15px;
  background: url("../../../static/img/salecar.jpg") no-repeat;
  background-size: 20px 100%;
}
.salecar-phone-bgi input {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 15px;
}
.salecar .salecar-phone-car{
  background-color: rgba(231,148,60,1);
  border-radius: 6px;
  font-size: 15px;
  margin: 10px;
  text-align: center;
  color: white;
  padding: 5px 0px;
}
.salecar-estimate-price{ 
  font-size:0px;
  padding: 0px 10px 18px 10px;
}
.salecar-estimate-price li{
  font-size: 15px;
  line-height: 30px;
  border: 1px solid rgba(231,148,60,1);
  background-color: white;
  display: inline-block;
  color: rgba(231,148,60,1);
  text-align: center;
  border-radius: 6px;
}
.salecar-estimate-price a li:first-child{
  width: 60%;
  margin-right: 5%;
}
.salecar-estimate-price li:last-child{
  width: calc( 100% - 60% - 5% );
}
.salecar-process{
  background-color: rgb(255, 255, 255);
  margin-top: 10px;  
  text-align: center;
  padding: 5px 0px 20px 0;
  border-bottom: 1px solid #dbdbdb;
}
p.salecar-p{
  line-height: 30px;
  padding-bottom: 17px;
  color: rgba(0,0,0,1);
  font-size: 15px;
  text-align: center;
}
p.salecar-p .border{
  display: inline-block;
  width: 40px;
  height: 1px;
  background-color: rgba(201,201,201,1);
  margin: 4px 5px;
}
.salecar-process table{
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
.salecar-process table tr td{
  font-size: 12px;
  color: rgba(231,148,60,1);
  line-height: 20px;
}
.salecar-process table tr:first-child td:nth-of-type(1) img{
  width: 30.5px;
}
.salecar-process table tr:first-child td:nth-of-type(2) img{
  width: 30px;
}
.salecar-process table tr:first-child td:nth-of-type(3) img{
  width: 33px;
}
.salecar-process table tr:first-child td:nth-of-type(4) img{
  width: 33px;
}
.salecar-process table tr:first-child td:nth-of-type(5) img{
  width: 32.5px;
}
.salecar-common-problem{
  background-color: white;
  padding: 0 25px;
}
.salecar-common-problem h6{
  font-weight: normal;
  font-size: 14px;
  color: rgba(51,51,51,1);
  line-height: 30px;
}
</style>

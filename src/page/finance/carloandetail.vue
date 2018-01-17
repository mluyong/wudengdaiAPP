<template>
    <div>
        <mt-header title="贷款详情" class="border-bottom">
           <router-link to="/carloan" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
        <div class="carloan-detail-title clearfix">
           <div class="carloan-detail-title-left"><img src="../../../static/img/esc.png" alt=""></div>
           <div class="carloan-detail-title-right">
               <h4>中国银行个人消费类汽车贷款</h4>
               <p class="line-height35">首付<span>20%</span>起</p>
               <p>两证一卡，审批快</p>
           </div>
        </div>
        <div class="carloan-detail-content">
            <div class="carloan-detail-content-one">
                <h4>产品介绍</h4>
                <p>产品名称：中国银行个人消费类汽车贷款</p>
                <p>产品性质：抵押贷款</p>
                <p>首付：20%起</p>
            </div>
            <div class="carloan-detail-content-two">
                <h4>产品介绍</h4>
                <p>中国银行个人消费类汽车贷款个人消费类汽车贷款是指借款人在购买消费类自用车（不含二手车）时已支付一定比 例金额的首期款项、不足部分由银行向其发放并直接支付给 汽车经销商的人民币贷款。</p>
                <ul>    
                    <li>一、贷款条件</li>
                    <li>1、具有完全民事行为能力的自然人；</li>
                    <li>2、个人身份有效证明；</li>
                    <li>3、具有合法的足够偿还贷款本息的能力；</li>
                    <li>4、个人信用良好；</li>
                    <li>5、持有经办行认可的购车合同、协议或购车意向书；</li>
                    <li>6、提供经办行认可的抵/质押物或有足够代偿能力的个人或 单位提供第三方不可撤销的连带责任保证；或提供满足《中国银行个人信用循环贷款额度暂行管理办法》客户准入条件 的相应资料； </li>
                    <li>7、能够支付本办法规定限额的首期购车款能力证明； 8、经办行规定的其他条件。</li>
                </ul>
                <ul>    

                    <li>二、贷款申请材料</li>
                    <li>（一）借款申请书；</li>
                    <li>（二）身份证、户口簿或其他有效居留证件原件，并提供其 复印件；</li>
                    <li>（三）职业和经济收入证明，包括但不限于单位开具的收入 证明、银行存单、信用卡对账单、纳税证明等；</li>
                    <li>（四）与经销商签订的购车协议、合同或者购车意向书；</li>
                    <li>（五）担保所需的证明或文件，包括抵（质）押物清单和有 处分权人（含财产共有人）同意抵、质押的证明；有权部门 出具的抵押物所有权或使用权证明、书面估价证明（车辆发 票价格结合市场公布价格所做的书面估价）、同意保险的文 件；质押物需交付质押物或权利证明文件；保证人同意履行 连带责任保证的保证合同、有关资信证明材料；或满足信用 贷款条件的证明 文件；</li>
                    <li>（六）已缴付首期购车款的相关证明；</li>
                    <li>（七）分行要求提供的其他文件资料。</li>
                </ul>
            </div>
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
    </div>


    
    <div class="height_47"></div>
    <div class="bottom_pay">
      <div class="float_left">
           <div class="online_img"><img src="../../../static/img/online.png"/></div>
           <div class="online_word">网上咨询</div>
      </div>
      <div class="float_right line_height_47">
           <button class="pay_btn" @click="appointShow()">预约了解</button>
           
      </div>
    </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      appointPop:false
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
}
</script>

<style scoped>
@import url("../../../static/css/common.css");
.carloan-detail-title{
    padding: 10px 10px 15px 15px;
    background-color: white;
}
.carloan-detail-title-left {
  width: 90px;
  float: left;
}
.carloan-detail-title-left img {
  width: 100%;
}
.carloan-detail-title-right {
  width: calc( 100% - 90px );
  float: left;
  padding: 0 0 0 10px;
}
.carloan-detail-title-right h4{
    font-weight: normal;
    font-size: 15px;
}
.carloan-detail-title-right p{
    font-size: 12px;
}
.carloan-detail-title-right p span{
    font-size: 15px;
    color: rgba(255,3,3,1);
}
.carloan-detail-content{
    margin-top: 5px;
    background-color: white;
}
.carloan-detail-content h4{
    font-weight: normal;
    font-size: 15px;
}
.carloan-detail-content .carloan-detail-content-one{
    padding-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;
}
.carloan-detail-content .carloan-detail-content-one p{
    font-size: 12px;
    line-height: 28px;
    text-indent: 3em;
    color: rgba(51,51,51,1);
}
.carloan-detail-content .carloan-detail-content-two{
    padding-bottom: 10px;
    padding: 10px;
}
.carloan-detail-content .carloan-detail-content-two p{
    font-size: 12px;
    color: rgba(51,51,51,1);
    text-indent: 2em;
    line-height: 20px;
    padding: 8px 0px 10px 0;
}
.carloan-detail-content .carloan-detail-content-two ul{
    padding-bottom: 10px;
}
.carloan-detail-content .carloan-detail-content-two ul li{
     font-size: 12px;
    color: rgba(51,51,51,1);
    list-style: none;
    line-height: 20px;
}
</style>

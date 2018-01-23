<template>
    <div>
        <mt-header title="基金详情" class="border-bottom">
           <router-link to="/fund" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="fundetail-title">
            <div class="fundetail-title-one clearfix">
                <div class="fundetail-title-one-left float_left">
                    <h4>中银转债<span>{{fundList.Code}}</span></h4>
                    <p><span>风险评级</span><span>{{fundList.risk}}</span></p> 
                </div>
                <div class="fundetail-title-one-right float_right">{{fundList.TypeName}}</div>
            </div>
            <div class="fundetail-title-two">
                <div class="fundetail-title-left">
                    <p>年收益率（%）</p>
                    <h2>{{fundList.Return0}}</h2>
                </div>
                <div class="fundetail-title-right">
                    <p>起购金额（￥）</p>
                    <h2>{{fundList.Starting}}</h2>
                </div>
            </div>
        </div>
        <div class="fundetail-content">
            <div class="product-detail">
                <h4>产品介绍</h4>
                <ul>
                    <li>种类</li>
                    <li>开放式基金产品</li>
                </ul>

                 <ul>
                    <li>基金公司</li>
                    <li>中银基金管理公司</li>
                </ul>
                 <ul>
                    <li>交易币种</li>
                    <li>人民币元</li>
                </ul>
                 <ul>
                    <li>收费方式</li>
                    <li>前收</li>
                </ul>
                 <ul>
                    <li>默认分红方式</li>
                    <li>现金分红</li>
                </ul>
                 <ul>
                    <li>产品成立日期</li>
                    <li>2011/06/28</li>
                </ul>
                 <ul>
                    <li>基金规模</li>
                    <li>65280067</li>
                </ul>
                 <ul>
                    <li>风险评测</li>
                    <li>R2低风险</li>
                </ul>
                 <ul>
                    <li>银河评级</li>
                    <li class="star-level">★★★★☆</li>
                </ul>
            </div>
             
            <div class="purchase-attribute">
                <h4>购买属性</h4>
                <ul>
                    <li>首次购买下限</li>
                    <li>1000.00</li>
                </ul>
                <ul>
                    <li>追认购买下限</li>
                    <li>0.00</li>
                </ul>
                <ul>
                    <li>申购下限</li>
                    <li>1000.00</li>
                </ul>
                <ul>
                    <li>定期定额申购下限</li>
                    <li>0.00</li>
                </ul>
                <ul>
                    <li>单日购买上限</li>
                    <li>2000.00</li>
                </ul>
            </div>
            <div>
                <h4>赎回属性</h4>
                <ul>
                    <li>赎回下限</li>
                    <li>0.00</li>
                </ul>
                <ul>
                    <li>最低持有份额</li>
                    <li>0.00</li>
                </ul>
                <ul>
                    <li>单日赎回上限</li>
                    <li>99,999,999,999,999,99</li>
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
      appointPop: false,
      fundList:""
    };
  },
  methods: {
    appointShow() {
      this.appointPop = true;
    },
    appointHide() {
      this.appointPop = false;
    },
    FundDetail() {
        var Fundid=this.$route.query.id;
      this.$http.get("http://192.168.2.178:53960/api/Fund/"+Fundid).then(
        data => {
          this.fundList = data.body.Data;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  created(){
      this.FundDetail()
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.fundetail-title,
.fundetail-content {
  background-color: white;
  padding: 5px 10px;
}
.fundetail-title-one div:nth-of-type(2) {
  text-align: right;
}
.fundetail-title-one > div h4 {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  font-weight: 500;
}
.fundetail-title-one > div h4 span {
  font-size: 13px;
  color: rgba(77, 77, 77, 1);
  font-weight: normal;
}
.fundetail-title-one > div p span:last-child {
  padding-right: 0px;
}
.fundetail-title-one > div p span {
  font-size: 10px;
  color: rgba(77, 77, 77, 1);
  display: inline-block;
  padding-right: 40px;
}
.fundetail-title-one .fundetail-title-one-right {
  background-color: rgba(220, 155, 41, 1);
  border-radius: 4px;
  font-size: 12px;
  color: white;
  padding: 0px 5px;
  margin-top: 5px;
}
.fundetail-title-two {
  font-size: 0px;
  padding-top: 10px;
}
.fundetail-title-two > div {
  width: calc(100% / 2);
  display: inline-block;
  text-align: center;
}
.fundetail-title-two > div p {
  font-size: 13px;
  color: rgba(102, 102, 102, 1);
  line-height: 25px;
}
.fundetail-title-two > div h2 {
  font-size: 24px;
  color: red;
}
.fundetail-content {
  margin-top: 5px;
}
.fundetail-content > div h4 {
  font-size: 15px;
  font-weight: 500;
  margin: 0px 9px;
}
.fundetail-content > div ul {
  font-size: 0px;
  text-align: left;
}
.fundetail-content > div ul:first-child {
  padding-top: 15px;
}
.fundetail-content > div ul li {
  list-style: none;
  display: inline-block;
  font-size: 12px;
}
.fundetail-content > div ul li:first-child {
  color: rgba(51, 51, 51, 1);
  width: 32%;
}
.fundetail-content > div ul li:last-child {
  color: rgba(77, 77, 77, 1);
  width: calc(100% - 32%);
}
.fundetail-content ul {
  padding: 10px;
}
.fundetail-content .product-detail {
  border-bottom: 1px solid #dbdbdb;
}
.fundetail-content .product-detail .star-level {
  color: #f3b03d;
}
.fundetail-content .purchase-attribute {
  padding-top: 10px;
}
</style>

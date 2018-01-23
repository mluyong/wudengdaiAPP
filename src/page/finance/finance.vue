<template>
    <div>

        <div class="cartaber">
            <ul> 
                <li><router-link to="/car"><p>选车</p></router-link></li> 
                <li><router-link to="/usedcar"><p>二手车</p> </router-link></li>
                <li><p class="active-two">金融</p></li> 
                <li><img src="../../../static/img/search.png" alt=""></li>
            </ul> 
            <router-view></router-view>
        </div>
        <div class="cartaber-div"></div>


        <div class="car-top-img">
           <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../../static/img/fund.png" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/fund.png" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/fund.png" /></mt-swipe-item>
          </mt-swipe>
       </div>

        <div class="finance-title">
            <div class="finance-title-top clearfix">
                <h3 class="text-size15 float_left">热门车贷</h3>
                <router-link to="/carloan"><p class="text-size10 float_right color-more">更多车贷</p></router-link>
            </div>
            <div class="finance-downpayment">
                <ul class="text-size text-center">
                  <router-link v-for="CarLoan in CarLoanList" :key="CarLoan.loanID" :to="`/carloandetail?id=`+CarLoan.LoanID">
                    <li>
                        <img src="../../../static/img/jtyh.jpg" alt="">
                        <p class="text-size12">{{CarLoan.Title}} 
                            <span class="text-size15 color-red">{{CarLoan.Starting}}%</span> 
                        </p>
                    </li> 
                    </router-link> 
                </ul>
            </div> 
        </div>   


        <div class="finance-foundation">
            <div class="finance-title-top clearfix">
                <h3 class="text-size15 float_left">热门基金</h3>
                <router-link to="/fund"><p class="text-size10 float_right color-more">更多基金</p></router-link>
            </div>
            <div class="income">
                <ul class="text-size">
                    <router-link :to="`/funddetail?id=`+finances.FundID" v-for="finances in financeList" :key="finances.id">
                    <li>
                    <div class="income-left">
                        <span class="text-size13"> {{finances.Type}}</span>
                        <span class="text-size12">({{finances.Code}}) </span>
                        <span class="text-size12">{{finances.risk}} </span>
                        <span class="color-red text-size14">{{finances.Return0}}</span>
                        <span class="text-size12">年收益率(%)</span>
                    </div> 
                    <div class="income-right">
                        <span class="income-btn">{{finances.TypeName}}</span>
                    </div>
                    <div class="clear"></div>
                    
                    </li>   
</router-link>
                  
                </ul>
            </div>
        </div>
        <div class="car-insurance">
            <div class="finance-title-top clearfix">
                <h3 class="text-size15 float_left">热门车险</h3>
                <router-link to="/insurance"><p class="text-size10 float_right color-more">更多车险</p></router-link>
            </div>
            <div class="insurance-category">
                <ul>
                    <li v-for="InsuranceLists in InsuranceList" :key="InsuranceLists.AutoInsuranceID">
                        <router-link :to="`/insurancedetail?id=`+InsuranceLists.AutoInsuranceID">
                        <div><img :src="InsuranceLists.ImgUrl" class="width100" alt=""></div>
                        <div class="finance-instruction text-right">
                            <p>年年递减</p>
                            <p>
                                <span>6.5折</span>第四年
                            </p>
                        </div>
                        </router-link> 
                    </li>
                </ul>
            </div> 
        </div>
        <div class="height_47"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      financeList: [],
      CarLoanList:[],
      InsuranceList:[]
    };
  },
  methods: {
    financeClick() {
      this.$http
        .get("http://192.168.2.178:53960/api/Fund?PageIndex=1&PageSize=3")
        .then(
          data => {
            this.financeList = data.body.Data.Data;
          },
          err => {
            console.log(err);
          }
        );
    },
    CarLoanClick() {
      this.$http
        .get("http://192.168.2.178:53960/api/Loan?PageIndex=1&PageSize=3")
        .then(
          data => {
            this.CarLoanList = data.body.Data.Data;
            // console.log(this.newsList);
          },
          err => {
            console.log(err);
          }
        );
    },
      InsuranceClick() {
      this.$http
        .get("http://192.168.2.178:53960/api/AutoInsurance?PageIndex=1&PageSize=2")
        .then(
          data => {
            this.InsuranceList = data.body.Data.Data;
          },
          err => {
            console.log(err);
          }
        );
    }
  },
  created() {
    this.financeClick();
    this.CarLoanClick();
    this.InsuranceClick();
  }
};
</script>

<style scoped>
@import "../../../static/css/common.css";
@import url("../../../static/css/header.css");

.car-top-img {
  width: 100%;
  height: 140px;
  overflow: hidden;
}
.car-top-img img {
  width: 100%;
}

.color-more {
  color: rgba(202, 132, 23, 1);
}
.finance-header {
  width: 100%;
  background-color: white;
}
.finance-header img {
  width: 100%;
}
.finance-title,
.finance-foundation,
.car-insurance {
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
}
.finance-title-top {
  padding-top: 0px;
  padding-bottom: 5px;
}
.finance-downpayment {
  background-color: white;
}
.finance-downpayment ul {
  font-size: 0px;
  padding: 10px 0;
}
.finance-downpayment ul li {
  width: calc(100% / 3 - 20px);
  display: inline-block;
  margin: 0 10px;
}
.finance-downpayment ul li img {
  width: 100%;
}

.income-left {
  width: 80%;
  float: left;
}
.income-right {
  width: 20%;
  float: right;
  text-align: right;
}
.income-btn {
  display: inline-block;
  width: 50px;
  line-height: 16px;
  font-size: 12px;
  background: rgba(220, 155, 41, 1);
  color: white;
  text-align: center;
  border-radius: 3px;
}

.insurance-category ul {
  font-size: 0px;
}
.insurance-category ul li {
  width: calc( 100% / 2 - 10px );
  list-style: none;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 10px;
}
.insurance-category ul li:nth-of-type( 2n ) {
  margin-right: 0px;
}
.insurance-category ul li div:nth-of-type(1){
    width: 100%;
    height: 50px;
}
.insurance-category ul li img {
  width: 100%;
    height: 100%;
  vertical-align: middle;
}
.insurance-category ul li:nth-of-type(2) img {
  margin-bottom: 8px;
}
.finance-instruction {
  text-align: right;
  font-size: 12px;
}
.finance-instruction p:first-child {
  font-size: 18px;
  font-weight: 600;
  color: #ea5404;
}
</style>

<template>
    <div>
        <mt-header title="车险详情">
            <router-link to="/insurance" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="insurance-img">
              <img :src="InsuranceDetails.ImgUrl"/>
        </div>
        <div class="insurance-word">{{InsuranceDetails.Name}}</div>
        <div class="insurance-word-two">{{InsuranceDetails.ContentIntroduce}}</div>
        <div class="require" @click="valueShow()">
            领取优惠券
        </div>
        <div>

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


<div class="value-box" v-show="value" @click="valueHide()">
    <div class="value-nav">优惠券</div>
    <div class="value-detail-box">
        <div class="value-detail">
            <img src="../../../static/img/value.jpg"/>
            <div class="value-detail-menoy">
                <span class="text-size18 color-yeelow">￥1000</span>
                <span class="text-size15 color-white">优惠券</span>
            </div>
            <div class="value-date">
                <div>2018-2-10到期</div>
                <div>限购买指定车型时使用</div>
            </div>
        </div>

    </div>
    <div class="height_47"></div>
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
      value: false,
      InsuranceDetails:[]
    };
  },
  methods: {
    appointShow() {
      this.appointPop = true;
    },
    appointHide() {
      this.appointPop = false;
    },
    valueShow() {
      this.value = true;
    },
    valueHide() {
      this.value = false;
    },
    InsuranceDetailClick() {
        var InsuranceId=this.$route.query.id
      this.$http
        .get(
          "http://192.168.2.178:53960/api/AutoInsurance?id="+InsuranceId
        )
        .then(
          data => {
            this.InsuranceDetails = data.body.Data;
            console.log(this.InsuranceDetails)
          },
          err => {
            console.log(err);
          }
        );
    }
  },
  created() {
    this.InsuranceDetailClick();
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
@import url("../../../static/css/cardetail.css");

.insurance-img {
  width: 100%;
  height: 110px;
  overflow: hidden;
}
.insurance-img img {
  width: 100%;
  height: 100%;
}
.insurance-word {
  font-size: 16px;
  color: #333;
  text-indent: 1em;
  line-height: 40px;
  background: white;
  border-top: 1px solid #e1e1e1;
}
.insurance-word-two {
  font-size: 12px;
  color: #666;
  text-indent: 1.4em;
  padding-bottom: 10px;
  background: white;
}
.require {
  width: 100%;
  line-height: 40px;
  color: #666;
  font-size: 12px;
  text-indent: 1em;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  background: rgba(255, 252, 252, 1);
}
</style>

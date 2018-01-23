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
               <h4>{{carloanDetails.Title}}</h4>
               <p class="line-height35">首付<span>{{carloanDetails.Starting}}%</span>起</p>
               <p>{{carloanDetails.description}}</p>
           </div>
        </div>
        <div class="carloan-detail-content">
            <div class="carloan-detail-content-one">
                <h4>产品介绍</h4>
                <p>产品名称：{{carloanDetails.Title}}</p>
                <p>产品性质：{{carloanDetails.Type}}</p>
                <p>首付{{carloanDetails.Starting}}%起</p>
            </div>
            <div class="carloan-detail-content-two">
                <h4>产品介绍</h4>
                <p>{{carloanDetails.profile}}</p>
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
      getData: "",
      carloanDetails: ""
    };
  },
  methods: {
    appointShow() {
      this.appointPop = true;
    },
    appointHide() {
      this.appointPop = false;
    },
    carloanDetail() {
      var ids =this.$route.query.id
      console.log(ids)
      this.$http.get("http://192.168.2.178:53960/api/Loan?id="+ids).then(
        data => {
          this.carloanDetails = data.body.Data;
          console.log(this.carloanDetails);
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  created() {
    this.carloanDetail()
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.carloan-detail-title {
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
  width: calc(100% - 90px);
  float: left;
  padding: 0 0 0 10px;
}
.carloan-detail-title-right h4 {
  font-weight: normal;
  font-size: 15px;
}
.carloan-detail-title-right p {
  font-size: 12px;
}
.carloan-detail-title-right p span {
  font-size: 15px;
  color: rgba(255, 3, 3, 1);
}
.carloan-detail-content {
  margin-top: 5px;
  background-color: white;
}
.carloan-detail-content h4 {
  font-weight: normal;
  font-size: 15px;
}
.carloan-detail-content .carloan-detail-content-one {
  padding-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
}
.carloan-detail-content .carloan-detail-content-one p {
  font-size: 12px;
  line-height: 28px;
  text-indent: 3em;
  color: rgba(51, 51, 51, 1);
}
.carloan-detail-content .carloan-detail-content-two {
  padding-bottom: 10px;
  padding: 10px;
}
.carloan-detail-content .carloan-detail-content-two p {
  font-size: 12px;
  color: rgba(51, 51, 51, 1);
  text-indent: 2em;
  line-height: 20px;
  padding: 8px 0px 10px 0;
}
.carloan-detail-content .carloan-detail-content-two ul {
  padding-bottom: 10px;
}
.carloan-detail-content .carloan-detail-content-two ul li {
  font-size: 12px;
  color: rgba(51, 51, 51, 1);
  list-style: none;
  line-height: 20px;
}
</style>

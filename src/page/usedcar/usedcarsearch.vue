<template>
  <div class="position">
    <div class="search-car clearfix">
      <router-link to="/taber/usedcar"><div class="search-car-go"><img src="../../../static/img/go-back-left.png" alt=""></div></router-link>
      <div class="search-car-input clearfix"><img src="../../../static/img/search.png" alt=""><input type="text" placeholder="搜索"></div>
      <div class="Reset">重置</div>
    </div>
    <ul class="condition">
      <li v-if="cond"><p>条件<span @click="conditions()">X</span></p></li>
      <li v-if="cond"><p>条件<span @click="conditions()">X</span></p></li>
    </ul>
    <div class="screen-car">
      <select name="" id="">
        <option value="">默认排序</option>
        <option value="">热门车型</option>
      </select>
      <select name="" id="">
        <option value="">品牌</option>
        <option value="">奥迪</option>
        <option value="">大众</option>
      </select>
      <select name="" id="">
        <option value="">价格</option>
        <option value="">3万以下</option>
        <option value="">3万-5万</option>
        <option value="">5万-8万</option>
        <option value="">8万-15万</option>
      </select>
      <div style="width:25%; float:right;" class="text-center">
      <p @click="screenCar()"><span class="text-size13">筛选</span><i class="el-icon-caret-bottom"></i></p>
      </div>
      <div v-if="screenIf" class="screen-down  clearfix">
        <div>
              <p>品牌</p> 
              <select name="" id="">
                <option value="" selected = "selected">品牌</option>
                <option value="">奥迪</option>
                <option value="">金杯</option>
                <option value="">大众</option>
              </select>
            <div style="border:1px solid #dbdbdb; height:0px;padding:0;margin:0 10%;"></div>
        </div>
        <div>
          <p>级别</p> 
          <select name="" id="">
          <option value="">不限</option>
          <option value="">微型</option>
          <option value="">小车</option>
          <option value="">紧凑型</option>
          <option value="">中型型</option>
          <option value="">SUV</option>
        </select>
        <div style="border:1px solid #dbdbdb; height:0px;padding:0;margin:0 10%;"></div>
        </div>
        <div>
          <p>价格</p> 
          <select name="" id="">
          <option value="">不限</option>
          <option value="">3万以下</option>
          <option value="">3万-5万</option>
          <option value="">5万-8万</option>
          <option value="">8万-15万</option>
        </select>
        <div style="border:1px solid #dbdbdb; height:0px;padding:0;margin:0 10%;"></div>
        </div>
        <div>
          <p>变速箱</p> 
          <select name="" id="">
          <option value="">不限</option>
          <option value="">自动</option>
          <option value="">手动</option>
        </select>
        <div style="border:1px solid #dbdbdb; height:0px;padding:0;margin:0 10%;"></div>
        </div>
        <div>
          <p>排量</p> 
          <select name="" id="">
          <option value="">不限</option>
          <option value="">1L及以下</option>
          <option value="">1.1L~1.6L</option>
          <option value="">1.7L~2.0L</option>
        </select>
        <div style="border:1px solid #dbdbdb; height:0px;padding:0;margin:0 10%;"></div>
        </div>
        <div class="search-screen">搜索</div>
      </div>
    </div>
    <ul class="car-all clearfix">
      <router-link to="/usercardetail">
      <li class="clearfix">
        <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
        <div>
          <h6>金杯750 2015款 1.5L 豪华型</h6>
          <p>厂商指导价：8.88万</p>
          <p class="color-red">优惠价<span class="text-size18">7.92</span>万</p>
        </div>
      </li>
      </router-link>
      <router-link to="/usercardetail">
      <li class="clearfix">
        <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
        <div>
          <h6>金杯750 2015款 1.5L 豪华型</h6>
          <p>厂商指导价：8.88万</p>
          <p class="color-red">优惠价<span class="text-size18">7.92</span>万</p>
        </div>
      </li>
      </router-link>
    </ul>
    
      <div class="car-intent" v-if="carIntentIf">
        <div class="clearfix"><h3 class="line-block float_left">二手车意向</h3><span class="line-block float_right" @click="carIntent()">X</span></div>
        <div>
          <p>变速箱</p> 
          <select name="" id="">
          <option value="">不限</option>
          <option value="">自动</option>
          <option value="">手动</option>
        </select>
        <div style="border:1px solid #dbdbdb; height:0px;padding:0;margin:0 10%;"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cond: true,
      screenIf:false,
      carIntentIf:true
    };
  },
  methods: {
    conditions: function () {
      this.cond = false;
    },
    screenCar:function (){
      if(this.screenIf==false){
        this.screenIf=true;
      }else{
        this.screenIf=false
      }
    },
    carIntent:function (){
      this.carIntentIf=false
    }
  },
  created() {
    this.conditions;
    this.screenCar;
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
option{
  font-size: 13px;
  border: none !important;
}
.car-intent{
  width: 80%;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #F5B07F;
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 10%;
}
.car-intent div:first-child{
  background-color: #EB6100;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: white;
}
.car-intent div:nth-of-type(2){
  padding: 10px;
}
.car-intent div select{
  float: right;
  width: 25%;
  border: none;
  margin: 15px 0px;
}
.car-intent div p{
  display: inline-block;
  padding: 15px 0;
}
.filter-drop-down {
  width: 100%;
  background-color: rgb(255, 255, 255) !important;
  left: 0px !important;
}
.condition {
  width: 100%;
  font-size: 0px;
}
.condition li:first-child {
  margin-left: 10px;
}
.condition li {
  display: inline-block;
  border: 0.5px solid rgba(153, 153, 153, 1);
  padding: 0 7px;
  height: 20px;
  background-color: white;
  margin: 5px 5px 5px 0;
}
.condition li p,
.condition li p span {
  font-size: 10px;
  line-height: 17px;
  color: rgba(132, 132, 132, 1);
}
.condition li p span {
  display: inline-block;
  padding-left: 8px;
  cursor: pointer;
}
.screen-car {
  padding: 9px 3px;
  background-color: white;
  font-size: 0px;
  position: relative;
}
.screen-down{
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0px;
  z-index: 9999;
  background-color: white;
}
.screen-down>div{
  width: 90%;
  height:60px;
  margin: 0 auto;
}
.screen-down div p{
  display: inline-block;
  padding: 15px 0;
}
.screen-down div select{
  float: right;
  width: 25%;
  border: none;
  margin: 15px 0px;
}
.screen-car>select{
  width: 25%;
  text-align: center;
  font-size: 13px;
  border: 1px solid rgb(255, 255, 255);
}
.search-screen{
  text-align: center;
  background-color: rgba(231,148,60,1);
  padding: 10px 0px;
  width: 60% !important;
  margin: 20px auto !important;
  color: white;
  border-radius: 8px;
  border: 1px solid #BBBBBB;
}
.el-col{
  float: right;
  text-align: center;
}
.el-col span {
  font-size: 13px;
}
.el-dropdown-menu{
  width: 100%;
  background-color: aqua;
  left: 0px !important;
}
.search-car {
  text-align: center;
  padding: 7px 10px 2px 10px;
  background-color: white;
}
.search-car>div {
  display: inline-block;
}
.search-car-go {
  float: left;
  width: 11.5px;
}
.search-car-go img {
  padding: 5px 0px;
  width: 100%;
  /* vertical-align: middle;  */
}
.search-car-input {
  border: 0.5px solid rgba(128, 128, 128, 1);
  width: calc(100% - 11.5px - 80px);
  padding: 3px;
  border-radius: 8px;
}
.search-car-input img {
  float: left;
  width: 19.5px;
  /* vertical-align:middle; */
}
.search-car-input input {
  float: left;
  width: calc(100% - 36px);
  border: none;
  padding: 0px 8px;
}
.Reset {
  width: 35px;
  float: right;
  font-size: 15px;
  line-height: 25px;
  color: rgba(102, 102, 102, 1);
}
.car-all {
  background-color: white;
}
.car-all li {
  list-style: none;
  padding: 9px 10px;
  position: relative;
  border-bottom: 1px solid #ededed;
}
.car-all li div:first-child {
  width: 120px;
  padding-right: 10px;
}
.car-all li div:first-child img {
  width: 100%;
}
.car-all li div:last-child h6 {
  font-weight: normal;
  font-size: 15px;
  color: rgba(51, 51, 51, 1);
  letter-spacing: 0.5px;
}
.car-all li div:last-child p:nth-of-type(1) {
  font-size: 13px;
  color: rgba(102, 102, 102, 1);
}
.car-all li div:last-child p:nth-of-type(2) {
  font-size: 13px;
  color: red;
  position: absolute;
  bottom: 8px;
  left: 130px;
}
</style>

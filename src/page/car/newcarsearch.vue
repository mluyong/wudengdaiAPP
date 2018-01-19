<template>
  <div>
    <div class="nav-search">
      <router-link to="/car"><div class="float_left">
        <img src="../../../static/img/go-back-left.png"/>
      </div></router-link>
      <div class="float_right nav-search-new">重置</div>
      <div class="float_right nav-search-input">
        <input placeholder="搜索"/>
        <img src="../../../static/img/search.png"/>
      </div>
      <div class="clear"></div>
    </div>

    <div class="choose-select-box">
      <div class="choose-select">
        <select>
          <option>默认排序</option>
          <option>热门车型</option>
        </select>
      </div>
      <div class="choose-select">
        <select>
          <option>品牌</option>
          <option>奥迪</option>
          <option>大众</option>
        </select>
      </div>
      <div class="choose-select">
        <select>
          <option>价格</option>
          <option>3万以下</option>
          <option>3万以上</option>
        </select>
      </div>
      <div class="choose-select choose-select-paticulur" @click="screenCar()">
          <div class="choose-again" >筛选</div>
          <div class="triangle-down"></div>
      </div>
      <div class="clear"></div>
      


          <div class="choose-detail" v-if="screenIf">
               <div class="choose-one">
                  <div class="float_left choose-main">品牌</div>
                  <div class="float_right">
                    <select>
                      <option value="">品牌</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">级别</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">价格</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">变速箱</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">排量</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">车身颜色</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">驱动形式</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">排放标准</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>

              <div class="choose-btn">搜索</div>

          </div>
           

    </div>

   <ul class="condition">
      <li v-for="(newcardetail,index) in newcardetails" v-bind:key="newcardetail.text"  v-if="index"><p>{{newcardetail.text + index }}<span @click="newcardetailClick(index)">X</span></p></li>
  </ul>


    <ul class="car-all clearfix">
      <router-link to="/newcardetail">
      <li class="clearfix">
        <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
        <div>
          <h6>金杯750 2015款 1.5L 豪华型</h6>
          <p>厂商指导价：8.88万</p>
          <p class="color-red">优惠价<span class="text-size18">7.92</span>万</p>
        </div>
      </li>
      </router-link>
      <router-link to="/newcardetail">
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

  <div class="first-enter-pop-box" v-if="carIntentIf">
      <div class="first-enter-pop">
         <div class="pop-top">
           <span>选车意向</span>
           <span class="float_right" style="margin-right:20px;" @click="carIntent()">X</span>
         </div>
         <div class="choose-detail-two">
               <div class="choose-one">
                  <div class="float_left choose-main">品牌</div>
                  <div class="float_right">
                    <select>
                      <option value="">品牌</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">级别</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
               <div class="choose-one">
                  <div class="float_left choose-main">价格</div>
                  <div class="float_right">
                    <select>
                      <option value="">不限</option>
                    </select>
                  </div>
                  <div class="clear"></div>
               </div>
          </div>
      </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      index: true,
      screenIf: false,
      carIntentIf: true,
      newcardetails: [
        { text: "" },
        { text: "条件" },
        { text: "条件2" },
        
      ]
    };
  },
  methods: {
    newcardetailClick: function(index) {
      this.newcardetails.splice(index, 1);
    },
    screenCar: function() {
      if (this.screenIf == false) {
        this.screenIf = true;
      } else {
        this.screenIf = false;
      }
    },
    carIntent: function() {
      this.carIntentIf = false;
    }
  },
  created() {
    this.newcardetailClick;
    this.screenCar;
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");

.first-enter-pop-box {
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 120px;
  left: 0;
  border-radius: 5px;
}
.first-enter-pop {
  width: 100%;
  border: 1px solid rgba(235, 97, 0, 1);
  border-radius: 5px;
}
.pop-top {
  width: 100%;
  line-height: 40px;
  background: rgba(235, 97, 0, 1);
  color: white;
  text-indent: 1em;
}
.choose-detail-two {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background: white;
  z-index: 6666666666;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.nav-search {
  width: 100%;
  line-height: 44px;
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
.nav-search img {
  width: 10px;
}
.nav-search-input {
  width: 70%;
}
.nav-search-new {
  width: 20%;
  color: #666;
  font-size: 15px;
}
.nav-search-input {
  position: relative;
}
.nav-search-input input {
  width: 100%;
  height: 30px;
  border: 1px solid rgba(128, 128, 128, 1);
  border-radius: 5px;
  text-indent: 2em;
}
.nav-search-input img {
  width: 16px;
  position: absolute;
  top: 14px;
  left: 4px;
}

.choose-select-box {
  width: 100%;
  height: 44px;
  background: white;
  position: relative;
}
.choose-select {
  text-align: center;
  width: 25%;
  line-height: 44px;
  float: left;
  position: relative;
}
.choose-select select {
  border: none;
}
.choose-again {
  font-size: 13px;
  color: #333;
}
.choose-select>div{
  display: inline-block;
}
.triangle-down {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid #333;
  margin-left: 2px;
}
.choose-select-paticulur {
  padding-left: 15px;
  padding-right: 15px;
}
.choose-detail {
  width: 100%;
  padding: 10px 20px;
  background: white;
  position: absolute;
  top: 48px;
  left: 0px;
  z-index: 666666;
}
.choose-one {
  width: 100%;
  line-height: 50px;
  border-bottom: 1px solid #e1e1e1;
}
.choose-one select {
  border: none;
  color: #666;
  font-size: 12px;
  padding: 0 10px;
}
.choose-main {
  font-size: 15px;
  color: #666;
}
.choose-btn {
  width: 60%;
  line-height: 40px;
  margin: 0 auto;
  background: rgba(231, 148, 60, 1);
  color: white;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
}

.condition {
  width: 100%;
  font-size: 0px;
}
.condition li {
  width:  calc( 100% / 5  - 10px );
  display: inline-block;
  border: 0.5px solid rgba(153, 153, 153, 1);
  padding: 0 0px 0 3px;
  background-color: white;
  margin: 2.5px 5px;
  
}
.condition li:first-child{
  margin-top: 5px;
}
.condition li:last-child{
   margin-bottom: 5px;
}
.condition li p{
  position: relative;
}
.condition li p,
.condition li p span {
  font-size: 10px;
  text-align: left;
  color: rgba(132, 132, 132, 1);
  line-height: 20px;
}
.condition li p span {
  display: inline-block;
  cursor: pointer;
  position: absolute;
  right: 3px;
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

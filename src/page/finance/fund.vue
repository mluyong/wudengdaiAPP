<template>
    <div>
        <mt-header title="基金" class="border-bottom">
           <router-link to="/finance" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="fund-title">
           <ul>
                <li v-for="(funds,index) in fund" v-bind:key="funds.text" v-bind:class="{checked:index==nowIndex}" v-on:click="fundClick(index)">{{funds.text}}</li>
               <li>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          更多<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>黄金糕</el-dropdown-item>
                          <el-dropdown-item>狮子头</el-dropdown-item>
                          <el-dropdown-item>螺蛳粉</el-dropdown-item>
                          <el-dropdown-item>双皮奶</el-dropdown-item>
                          <el-dropdown-item>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
           </ul>
        </div>
        <ul class="fund-content">
            <router-link to="/funddetail"><li>
                <div class="fund-content-one clearfix">
                    <div class="fund-content-one-left float_left">
                        <h4>中银转债<span>（163816）</span></h4>
                        <p><span>风险评级</span><span>R2低风险</span></p> 
                    </div>
                    <div class="fund-content-one-right float_right">债劵型</div>
                </div>
                <div class="fund-content-two">
                    <div class="fund-content-one-left">
                        <p>近一年收益率（%）</p>
                        <h1>1.12</h1> 
                    </div>
                </div>
            </li></router-link>
             <li>
                <div class="fund-content-one clearfix">
                    <div class="fund-content-one-left float_left">
                        <h4>中银转债<span>（163816）</span></h4>
                        <p><span>风险评级</span><span>R2低风险</span></p> 
                    </div>
                    <div class="fund-content-one-right float_right">债劵型</div>
                </div>
                <div class="fund-content-two">
                    <div class="fund-content-one-left">
                        <p>近一年收益率（%）</p>
                        <h1>1.12</h1> 
                    </div>
                </div>
            </li>
            <li>
                <div class="fund-content-one clearfix">
                    <div class="fund-content-one-left float_left">
                        <h4>中银转债<span>（163816）</span></h4>
                        <p><span>风险评级</span><span>R2低风险</span></p> 
                    </div>
                    <div class="fund-content-one-right float_right">债劵型</div>
                </div>
                <div class="fund-content-two">
                    <div class="fund-content-one-left">
                        <p>近一年收益率（%）</p>
                        <h1>1.12</h1> 
                    </div>
                </div>
            </li>
        </ul>




        
    </div>
</template>

<script>
import { Navbar, TabItem } from "mint-ui";
export default {
  data() {
    return {
      fund: [
        { text: "全部" },
        { text: "股票型" },
        { text: "债劵型" },
        { text: "货币型" },
        { text: "混合型" }
      ],
      nowIndex:0
    };
  },
   methods: {
    fundClick: function(index) {
      this.nowIndex = index;
    }
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.checked{
    border-bottom: 2px solid rgba(190,120,28,1) !important;
    color: rgba(190,120,28,1) !important;
}
.mint-button{
    height: 100% !important;
}
.fund-title ul {
  font-size: 0px;
  text-align: center;
  background-color: white;
}
.fund-title ul li {
  width: calc(100% / 6);
  display: inline-block;
  line-height: 37px;
  color: rgba(51,51,51,1);
  font-size: 13px;
  border-bottom: 2px solid rgb(255, 255, 255);
}
.fund-title ul li:last-child div span{
    font-size: 13px;
    color: rgba(51,51,51,1);
}
.el-dropdown-menu__item{
    font-size: 13px;
    padding: 0 5px;
    color: rgba(51,51,51,1);
}
.fund-content li{
    background-color: white;
    padding: 5px 10px;
    margin-top: 5px;
    list-style: none;
}
.fund-content-one div:nth-of-type(2){
    text-align: right;
}
.fund-content-one>div h4{
    color: rgba(51,51,51,1);
    font-size: 15px;
    font-weight:500;
}
.fund-content-one>div h4 span{
    font-size: 13px;
    color: rgba(77,77,77,1);
    font-weight: normal;
}
.fund-content-one>div p span:last-child{
    padding-right: 0px;
}
.fund-content-one>div p span{
    font-size: 10px;
    color: rgba(77,77,77,1);
    display: inline-block;
    padding-right: 40px;
}
.fund-content-one .fund-content-one-right{
    background-color: rgba(220,155,41,1);
    border-radius: 4px;
    font-size: 12px;
    color: white;
    padding: 0px 5px;
    margin-top: 5px;
}
.fund-content-two{
    padding-top: 19px;
}
 .fund-content-two p,.fund-content-two h1{
    display: inline-block;
}
.fund-content-two p{
   font-size: 13px;
    color: rgba(102,102,102,1); 
    line-height: 25px;
}
.fund-content-two h1{
    font-size: 36px;
    color: red;
}
</style>

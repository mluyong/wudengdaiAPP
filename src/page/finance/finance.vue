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



        <div class="car-top-img">
           <img src="../../../static/img/4.jpg" alt="">
       </div>

        <div class="finance-title">
            <div class="finance-title-top clearfix">
                <h3 class="text-size15 float_left">热门车贷</h3>
                <router-link to="/carloan"><p class="text-size10 float_right color-more">更多车贷</p></router-link>
            </div>
            <div class="finance-downpayment">
                <ul class="text-size text-center"> 
                    <li>
                        <img src="../../../static/img/jtyh.jpg" alt="">
                        <p class="text-size12">新车首付 
                            <span class="text-size15 color-red">20%</span> 
                        </p>
                    </li> 
                    <li> 
                        <img src="../../../static/img/jtyh.jpg" alt="">
                        <p class="text-size12">新车首付
                            <span class="text-size15 color-red">20%</span>
                        </p>
                    </li>
                    <li>
                        <img src="../../../static/img/jtyh.jpg" alt="">
                        <p class="text-size12">新车首付
                            <span class="text-size15 color-red">30%</span>
                        </p>
                    </li>
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
                    <li>
                    <div class="income-left">
                        <span class="text-size13">中银转债A </span>
                        <span class="text-size12">(163816) </span>
                        <span class="text-size12">R2低风险 </span>
                        <span class="color-red text-size14">1.12% </span>
                        <span class="text-size12">年收益率(%)</span>
                    </div> 
                    <div class="income-right">
                        <span class="income-btn">债券型</span>
                    </div>
                    <div class="clear"></div>
                    </li>   

                       <li>
                    <div class="income-left">
                        <span class="text-size13">中银转债A </span>
                        <span class="text-size12">(163816) </span>
                        <span class="text-size12">R2低风险 </span>
                        <span class="color-red text-size14">1.12% </span>
                        <span class="text-size12">年收益率(%)</span>
                    </div> 
                    <div class="income-right">
                        <span class="income-btn">债券型</span>
                    </div>
                    <div class="clear"></div>
                    </li> 
                       <li>
                    <div class="income-left">
                        <span class="text-size13">中银转债A </span>
                        <span class="text-size12">(163816) </span>
                        <span class="text-size12">R2低风险 </span>
                        <span class="color-red text-size14">1.12% </span>
                        <span class="text-size12">年收益率(%) </span>
                    </div> 
                    <div class="income-right">
                        <span class="income-btn">债券型</span>
                    </div>
                    <div class="clear"></div>
                    </li>  
                  
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
                     <li>
                        <img src="../../../static/img/pacx.png" class="width100" alt="">
                        <div class="finance-instruction text-right">
                            <p>年年递减</p>
                            <p>
                                <span>6.5折</span>第四年
                            </p>
                        </div>
                    </li>  
                    <li>  
                        <img src="../../../static/img/renshou.png" class="width100" alt="">
                        <div class="finance-instruction">  
                            <p>年年递减</p>
                            <p>
                                <span>6.5折</span>第四年
                            </p> 
                        </div> 
                    </li>
                </ul>
            </div> 
        </div>
        <div class="height_47"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
          ele: "&nbsp"  
        }
    }
};
</script>

<style scoped>
@import "../../../static/css/common.css";
@import url('../../../static/css/cartaber.css');

.car-top-img{
    width:100%;
    height: 140px;
    overflow: hidden;
}
.car-top-img img{
    width:100%;
    height: 100%;
}

.color-more{
    color: rgba(202,132,23,1);
}
.finance-header{
    width: 100%;
    background-color: white;
}
.finance-header img{
    width: 100%;
}
.finance-title,.finance-foundation,.car-insurance{
    background-color: white;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;
}
.finance-title-top{
    padding-top: 0px;
    padding-bottom: 5px;
}
.finance-downpayment{
    background-color: white;
}
.finance-downpayment ul{
    font-size: 0px;
    padding: 10px 0;
}
.finance-downpayment ul li{
    width: calc( 100% / 3 - 20px );
    display: inline-block;
    margin: 0 10px;
}
.finance-downpayment ul li img{
    width: 100%;
}

.income-left{
    width:80%;
    float: left;
}
.income-right{
    width:20%;
    float: right;
    text-align: right;
}
.income-btn{
    display: inline-block;
    width:50px;
    line-height: 16px;
    font-size:12px;
    background:rgba(220,155,41,1);
    color:white;
    text-align: center;
    border-radius: 3px;
}

.insurance-category ul{
    font-size: 0px;
}
.insurance-category ul li{
    width: calc( 100% / 2 - 20px );
    list-style: none;
    display: inline-block;
    margin-right: 20px;
}
.insurance-category ul li:last-child{
    margin-right: 0px;
}
.insurance-category ul li img{
    width: 100%;
    vertical-align: middle;
}
.insurance-category ul li:nth-of-type(2) img{
    margin-bottom: 8px;
}
.finance-instruction{
    text-align: center;
}
.finance-instruction p:first-child{
    font-size: 18px;
    font-weight: 600;
    color: #EA5404;
}
</style>

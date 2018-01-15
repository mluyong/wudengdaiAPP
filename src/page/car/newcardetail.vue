<template>
  <div>
    <mt-header title="汽车详情">
      <router-link to="/shop" slot="left">
      <mt-button icon="back"></mt-button>
      <div class="nav-img-box">
        <img class="nav-img" src="../../../static/img/shares2.png"/>
        <img src="../../../static/img/selected.png"/>
      </div>
      </router-link>
    </mt-header>

    <div class="main-img-box">
         <img src="../../../static/img/backgrounds.jpg"/>
    </div>

    <div class="background_white padding-all margin-bottom-5">
         <div class="title-word margin-bottom-6">红色金杯750 2015款 1.5L 五档手动 豪华型</div>
         <div class="line-height-20">
           <div class="width-60 float_left">
             <span>经销商参考价</span>
             <span class="color-red font-size-18">9.25</span>
             <span class="color-red">万</span>
           </div>
           <div class="width-40 float_left">
             <span>厂商指导价</span>
             <span>10.16</span>
             <span>万</span>
           </div>
           <div class="clear"></div>
         </div>
         <div class="line-height-20">
           <span>全款购车</span>
           <span class="color-red">10.08</span>
           <span class="color-red">万</span>
         </div>
         <div class="line-height-20">
           <div  class="width-60 float_left">
             <span>贷款购车首付</span>
             <span class="color-blue">3.6</span>
             <span class="color-blue">万（</span>
             <span class="color-blue">24</span>
             <span class="color-blue">期）</span>
           </div>
           <div  class="width-40 float_left comulite-box">
             <img src="../../../static/img/commulite.png"/>
             <span>贷款计算器</span>
           </div>
           <div class="clear"></div>
         </div>
    </div>
    <div class="background_white padding-all margin-bottom-5">
         <div @click.prevent="chooseshow()">款式选择</div>
    </div>
    <div class="background_white padding-all">
         <div class="color-gr margin-bottom_10">参数配置</div>
         <div class="line-height-20">
           <span class="detail-left">用户评分</span>
           <span class="star-img">
             <img src="../../../static/img/star.png"/>
             <img src="../../../static/img/star.png"/>
             <img src="../../../static/img/star.png"/>
             <img src="../../../static/img/star.png"/>
             <img src="../../../static/img/stars.png"/>
           </span>
           <span>4.88分</span>
        </div>
         <div class="line-height-20">
           <span class="detail-left">车身尺寸</span>
           <span>4560*1790*1795</span>
         </div>
         <div class="line-height-20">
           <span class="detail-left">发动机</span>
           <span>1.5L 112马力 L4</span>
         </div>
         <div class="line-height-20">
           <span class="detail-left">驱动方式</span>
           <span>前置前驱</span>
         </div>
         <div class="line-height-20">
           <span class="detail-left">综合油耗</span>
           <span>7L/100km(工信部)</span>
         </div>
         <div class="line-height-20">
           <span class="detail-left">整车质保</span>
           <span>三年或十万公里</span>
         </div>
         <div class="line-height-20">
           <span class="detail-left">变速箱</span>
           <span>5档手动</span>
         </div>
         <div class="line-height-20">
           <span class="detail-left">车身结构</span>
           <span>MPV</span>
         </div>

         <div class="more-information">更多参数</div>
    </div>




    
    <div class="height_47"></div>
    <div class="bottom_pay">
      <div class="float_left">
           <div class="online_img"><img src="../../../static/img/online.png"/></div>
           <div class="online_word">网上咨询</div>
      </div>
      <div class="float_right line_height_47">
           <span>
             <span class="small_word">订金：</span>
             <span class="normal_word">￥</span>
             <span class="normal_word">1000</span>
           </span>

      <router-link to="/carpay">
           <button class="pay_btn">支付订金</button>
      </router-link>
           
      </div>
    </div>


   <div class="tab-pop-all-box" v-show="chooses">
       <div class="tab-pop-box-padding">
         <div class="tab-pop-box">
           <div class="tab-title">款式选择<span class="close-x" @click.prevent="choosehide()">X</span></div>
           <div class="tab-content">
               <div class="tab-nub">型号</div>
               <ul>
                 <li v-bind:class="{ active: isActive }">2015款 1.5L 旗舰型</li>
                 <li>2015款 1.5L 旗舰型</li>
                 <li>2015款 1.5L 旗舰型</li>
                 <li>2015款 1.5L 旗舰型</li>
                 <li>2015款 1.5L 旗舰型4546546545454545</li>
                 <div class="clear"></div>
               </ul>
               <div class="line-d"></div>
               <div class="tab-nub" style="margin-top:6px;">颜色</div>
               <ul>
                 <li class="active">极光白</li>
                 <li>雅诗红</li>
                 <li>动感蓝</li>
                 <li>泰坦银</li>
                 <li>星际灰</li>
                 <div class="clear"></div>
               </ul>
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
      chooses: false,
      isActive:false
    };
  },
    methods: {
    //检查手机号的格式是否正确的方法
    chooseshow: function() {
      this.chooses = true;
    },
    choosehide: function(){
      this.chooses = false;
    },
    choosescontent: function(){
        
    }
 
  },
}
</script>

<style scoped>
@import url("../../../static/css/common.css");
@import url("../../../static/css/cardetail.css");

</style>

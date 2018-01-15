<template>
  <div class="background_white">
      <div class="header width100">
          <div class="border-bottom">
            <mt-header title="咨询详情">
              <router-link to="/news/report" slot="left">
               <mt-button icon="back"></mt-button>
                </router-link>
              <mt-button slot="right" class="header-right">
                <img src="../../../static/img/sc.png" alt="">
            </mt-button>
             <mt-button slot="right" class="header-right">
                <img src="../../../static/img/fx.png" alt="">
            </mt-button>
           </mt-header>
          </div>
        <div class="contents">
         <div>
           <h3 class="text-center">售5.39-6.69万 金杯750三款新车型上市</h3>
           <ul class="text-size"> 
             <li class="text-size12 text-center">作者: 赵桐</li>
             <li class="text-size12 text-center">点击量: 32000</li>
             <li class="text-size12 text-center">日期: 2018-1-5</li>
           </ul>
         </div>
         <div class="img">
           <img src="../../../static/img/gs.jpg" class="width100" alt="">
         </div>
         <div class="article">
            <p class="width100 text-size13"> 日前，华晨鑫源金杯750三款新增车型正式上市。 此次金杯750新增的3款新车型中，价格最低的1.5L舒 适天窗版配备有皮质座椅、电动天窗、四门电动车窗、 ABS+EBD，并提供5座/7座/8座布局可选，售价为 5.39万元；1.5L E动天窗版在前者基础上升级了前雾 灯、车身包围、车身镀铬装饰、行李架、电动调节外后 视镜、前气囊、倒车雷达；而售价6.69万元的1.6L卓 越型则进一步配备了16英寸轮圈、后雨刷、新内饰设计、 前排座椅加热、无钥匙进入/一键启动、自动空调、后 排空调出风口、4扬声器等。此外，3款车型还可选装8 英寸中控大屏系统。 根据车型不同，3款车型搭载1.5L/1.6L两种排量 的自然吸气发动机，最大功率分别为111.5马力和117 马力，峰值扭矩分别为147牛·米和160牛·米，传动系 统匹配5速手动变速箱。此外，电动助力转向和四轮盘 刹在新车上也为标配项目。</p>
            <p class="width100 text-size13">
               日前，华晨鑫源金杯750三款新增车型正式上市。 此次金杯750新增的3款新车型中，价格最低的1.5L舒 适天窗版配备有皮质座椅、电动天窗、四门电动车窗、 ABS+EBD，并提供5座/7座/8座布局可选，售价为 5.39万元；1.5L E动天窗版在前者基础上升级了前雾 灯、车身包围、车身镀铬装饰、行李架、电动调节外后 视镜、前气囊、倒车雷达；而售价6.69万元的1.6L卓 越型则进一步配备了16英寸轮圈、后雨刷、新内饰设计、 前排座椅加热、无钥匙进入/一键启动、自动空调、后 排空调出风口、4扬声器等。此外，3款车型还可选装8 英寸中控大屏系统。 根据车型不同，3款车型搭载1.5L/1.6L两种排量 的自然吸气发动机，最大功率分别为111.5马力和117 马力，峰值扭矩分别为147牛·米和160牛·米，传动系 统匹配5速手动变速箱。此外，电动助力转向和四轮盘 刹在新车上也为标配项目。
            </p>
         </div>
        </div>
        <div class="news clearfix">
          <h3 class="text-size15">文章推荐</h3>
            <div class="float-left">
              <img src="../../../static/img/dzbl.jpg" class="width100" alt="">
            </div>
            <div class="float-right">
                 <p class="text-left text-size15 color51">售5.39-6.69万 金杯750三款新车 型上市</p >
                <p class="text-right text-size15 color51">2018-1-5</p>
              </div>
           </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../../static/css/common.css";
.contents{
  padding-top: 5px;
}
 .contents h3{
    font-size: 18px;
    color: #1A1A1A;
    padding: 0px 1.5px;
 }
 .contents ul {
   margin: 0 auto;
 }
.contents ul li{  
  width: calc( 100% / 3 );
  display: inline-block;
  padding: 5px 0px;
 }
.contents .img img{
  margin: 0 auto;
}
.contents .article{
  margin: 0px 12.5px;
}
.contents .article p{
  word-wrap: normal;
  text-indent: 1.5rem;
  color: #333333;
  line-height: 20px;
}
.news{
  background-color: white;
  border: 1px solid #BFBFBF; 
  border-top: none;
  padding: 10px 10px;
  }
  .news:first-child{
  border-top: 1px solid #BFBFBF;
  }
  .float-left{
  width: 90px;
  padding-right: 10px;
  float: left;
  }
  .float-left img{
  vertical-align: middle;
  }
.news .float-right p:last-child{
   margin-top: 18px;
}

</style>

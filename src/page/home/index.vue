<template>
  <div class="content">
       <div class="title">勿等贷</div>
       <div class="index-img">
         <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../../static/img/index.png" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/index.png" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/index.png" /></mt-swipe-item>
          </mt-swipe>
       </div>

       <div class="icon-list">
           <ul class="icon-icon">
              <li class="list">
                  <router-link to="/finance">
                   <span>
                       <img src="../../../static/img/jr.png" alt="">
                   </span>
                   <p>金融服务</p>
                  </router-link>
               </li>
               <li class="list">
                  <router-link to="/usedcar"> 
                   <span>
                       <img src="../../../static/img/esc.png" alt="">
                   </span>
                   <p>二手车</p>
                   </router-link>
               </li>
               <li class="list">
                 <router-link to="/"> 
                   <span>
                       <img src="../../../static/img/zy.png" alt="">
                   </span>
                   <p>违章查询</p>
                   </router-link>
               </li>
               <li class="list">
                 <router-link to="/shop"> 
                   <span>
                       <img src="../../../static/img/jfsc.png" alt="">
                   </span>
                   <p>积分商城</p>
                   </router-link>                 
               </li>
               <div class="clear"></div>
           </ul>
       </div>
       <div class="boutique clearfix">
           <div class="b-nav clearfix">
             <div class="left-list">
                 <p>精品车型</p>
                 <p>为您甄选每一辆明星车型</p>
              </div>
             <router-link to="/newcarsearch"><p class="right-list">查看更多</p></router-link>
            </div>
            <ul>
                <li>
                    <img src="../../../static/img/jbT50.jpg" alt="">
                    <p>金杯T50</p>
                    <p><span>￥4.58</span>万</p>
                </li>
                <li>
                     <img src="../../../static/img/jbT50.jpg" alt="">
                    <p>金海狮CNG</p>
                    <p><span>￥5.16</span>万</p>
                </li>
                <li>
                     <img src="../../../static/img/jd.jpg" alt="">
                    <p>一汽-大众-捷达</p>
                    <p><span>￥4.58</span>万</p>
                </li>
            </ul>
       </div>
       <div class="article">
             <div class="b-nav clearfix">
               <div class="left-list">
                 <p>最新资讯</p>
                 <p>第一时间了解最新汽车动态</p>
               </div>
             <p class="right-list"><router-link to="/news/report">查看更多</router-link> </p>
            </div> 
            <div>
                <ul class="clearfix">
                    <li class="clearfix">
                      <router-link to="/newsDetail">
                        <div class="list-left"> 
                            <img src="../../../static/img/xhs.jpg"  alt="">
                        </div>
                        <div class="list-right">
                            <p><span>[最新资讯]</span> 金杯新海狮2018款将于1月3号荣耀登场，全新架...</p>
                            <p>1200阅读量</p>
                        </div>
                        </router-link>
                    </li>
                    <li class="clearfix">
                         <div  class="list-left">
                            <img src="../../../static/img/dzbl.jpg" style="width:80px;height:60px" alt="">
                        </div>
                        <div class="list-right">
                            <p><span>[最新资讯]</span> 同样挣3000元的汽修工 国内外的差距为何如此之大</p>
                            <p>3600阅读量</p>
                        </div>
                    </li>
                    <li class="clearfix">
                         <div class="list-left">
                            <img src="../../../static/img/dzbl.jpg" style="width:80px;height:60px" alt="">
                        </div>
                        <div class="list-right">
                            <p><span>[最新资讯]</span> 庆元旦，买车大优惠，到店立领1000元优惠券</p>
                            <p>16000阅读量</p>
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
 
};
</script>

<style scoped>
@import url('../../../static/css/common.css');
.content {
  background-color: white;
}

a {
  text-decoration: none;
}
.title {
  height: 45px;
  text-align: center;
  font-size: 18px;
  line-height: 44px;
  font-weight: 500;
}
.index-img{
  width: 100%;
  height: 187px;
  overflow: hidden;
}
.index-img img {
  width: 100%;
}
.icon-list{
  padding: 0 10px;
}
.icon-icon{
  width: 100%;
}
.icon-icon li {
  width: 25%;
  float: left;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;
}
.icon-icon li img {
  width: 36px;
  margin-bottom:6px;
}
.icon-icon li p {
  font-size: 10px;
  color: #000000;
}




.boutique {
  width: 100%;
  padding:10px;
  position: relative;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
}
.boutique .b-nav {
  width: 100%;
}
.boutique ul {
  width: 100%;
  font-size: 0px;
}
.boutique li {
  width: calc(100% / 3);
  font-size: 0;
  display: inline-block;
  padding: 0 6px 0 0;
}
.boutique li:last-child {
  padding: 0px；;
}
.boutique li img {
  width: 100%;
  height: 70px;
}
.boutique li p {
  padding: 2px 0px 3px 0px;
}
.boutique li p:nth-of-type(1) {
  font-size: 12px;
}
.boutique li p:nth-of-type(2) {
  font-size: 14px;
}
.boutique ul li span {
  color: #ff3600;
}

.b-nav .left-list {
  float: left;
}
.b-nav .left-list p:nth-of-type(1) {
  font-size: 15px;
}
.b-nav .left-list p:nth-of-type(2) {
  font-size: 10px;
  font-family: "微软雅黑";
  color: #666666;
}
.b-nav .right-list {
  float: right;
  font-size: 12px;
  line-height: 40px;
  padding: 0 10px;
}
.b-nav .right-list a{
  font-size: 12px;
}
.article {
  padding: 10px 10px;
}
.article ul {
  font-size: 0px;
}
.article li {
  font-size: 15px;
  padding: 3px 0px;
}
.article li .list-left {
  width: 80px;
  float: left;
}
.article li .list-left img {
  height: 60px;
}
.article li .list-right {
  width: calc(100% - 100px);
  float: left;
  padding: 0 0 0 5px;
  position: relative;
}
.article li img {
  width: 100%;
}

.article li .list-right p:nth-of-type(1) {
  font-size: 12px;
}
.article li .list-right p:nth-of-type(2) {
  font-size: 10px;
  color: #333333;
  margin: 14px 0px 0px 0px;
}
.article li .list-right p {
  color: #333333;
}
</style>
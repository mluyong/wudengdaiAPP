<template>
  <div>
      <mt-header class="border-bottom" title="我的好友">
              <router-link to="#" slot="left">
                   <mt-button icon="back"></mt-button>
           </router-link>
          </mt-header>
      <div class="myfriend-list clearfix">
          <div class="myfriend-list-content clearfix">
            <div class="myfriend-list-left">
               <img src="../../../static/img/me.png" alt="">
            </div>
            <div class="myfriend-list-right">
                <div class="clearfix">
                    <div class="myfriend-list-id">
                         <p class="text-size15">赵桐<span class="text-size12">&nbsp ID:123456</span></p>
                    </div>
                    <div class="myfriend-list-nature">
                        <span>我</span>
                        <span>发起人</span>
                    </div>
                    <div class="myfriend-list-number">
                        <p>推荐人 : 赵桐</p>
                        <p>推荐数<span>16</span>人</p>
                    </div>
                </div>
                <div class="myfriend-list-nature-right">
                    <img src="../../../static/img/go-back.png" alt="">
                </div>
            </div> 
          </div>
          <div class="myfriend-team">
             <ul class="text-size">
                 <li>个人创造积分<span>360</span></li>
                 <li>团队创造积分<span>3600</span></li>
             </ul>    
          </div>
       </div>
        <div class="myfriend-list-li clearfix">
          <div class="myfriend-list-content clearfix">
            <div class="myfriend-list-left">
               <img src="../../../static/img/me.png" alt="">
            </div>
            <div class="myfriend-list-right">
                <div class="clearfix">
                    <div class="myfriend-list-id">
                         <p class="text-size15">赵桐<span class="text-size12">&nbsp ID:123456</span></p>
                    </div>
                    <div class="myfriend-list-nature">
                        <!-- <span>我</span>
                        <span>发起人</span>  -->
                    </div>
                    <div class="myfriend-list-number">
                        <p>推荐人 : 赵桐</p>
                        <p>推荐数<span>16</span>人</p>
                    </div>
                </div>
                <div class="myfriend-list-nature-right">
                    <img src="../../../static/img/go-back.png" alt="">
                </div>
            </div> 
          </div>
          <div class="myfriend-team">
             <ul class="text-size">
                 <li>个人创造积分<span>360</span></li>
                 <li>团队创造积分<span>3600</span></li>
             </ul>    
          </div>
       </div>
       <div class="myfriend-list-li clearfix">
          <div class="myfriend-list-content clearfix">
            <div class="myfriend-list-left">
               <img src="../../../static/img/me.png" alt="">
            </div>
            <div class="myfriend-list-right">
                <div class="clearfix">
                    <div class="myfriend-list-id">
                         <p class="text-size15">赵桐<span class="text-size12">&nbsp ID:123456</span></p>
                    </div>
                    <div class="myfriend-list-nature">
                        <!-- <span>我</span>
                        <span>发起人</span>  -->
                    </div>
                    <div class="myfriend-list-number">
                        <p>推荐人 : 赵桐</p>
                        <p>推荐数<span>16</span>人</p>
                    </div>
                </div>
                <div class="myfriend-list-nature-right">
                    <img src="../../../static/img/go-back.png" alt="">
                </div>
            </div> 
          </div>
          <div class="myfriend-team">
             <ul class="text-size">
                 <li>个人创造积分<span>360</span></li>
                 <li>团队创造积分<span>3600</span></li>
             </ul>    
          </div>
       </div>
       <div class="myfriend-list-li clearfix">
          <div class="myfriend-list-content clearfix">
            <div class="myfriend-list-left">
               <img src="../../../static/img/me.png" alt="">
            </div>
            <div class="myfriend-list-right">
                <div class="clearfix">
                    <div class="myfriend-list-id">
                         <p class="text-size15">赵桐<span class="text-size12">&nbsp ID:123456</span></p>
                    </div>
                    <div class="myfriend-list-nature">
                        <!-- <span>我</span>
                        <span>发起人</span>  -->
                    </div>
                    <div class="myfriend-list-number">
                        <p>推荐人 : 赵桐</p>
                        <p>推荐数<span>16</span>人</p>
                    </div>
                </div>
                <div class="myfriend-list-nature-right">
                    <img src="../../../static/img/go-back.png" alt="">
                </div>
            </div> 
          </div>
          <div class="myfriend-team">
             <ul class="text-size">
                 <li>个人创造积分<span>360</span></li>
                 <li>团队创造积分<span>3600</span></li>
             </ul>    
          </div>
       </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('../../../static/css/common.css');
.myfriend-list,
.myfriend-list-li {
  background-color: white;
  padding: 8px;
}
.myfriend-list-left {
  float: left;
  width: 49px;
  height: 49px;
  margin-right: 10px;
}
.myfriend-list-left img,
.myfriend-list-li img {
  width: 100%;
  height: 100%;
}
.myfriend-list-right {
  float: left;
  width: calc(100% - 59px);
}
.myfriend-list-right > div:first-child {
  width: 90%;
  float: left;
}
.myfriend-list-id {
  float: left;
}
.myfriend-list-nature {
  float: right;
}
.myfriend-list-nature-right {
  float: right;
  width: 10px;
  margin-top: 20px;
  margin-right: 6px;
}
.myfriend-list-nature-right img {
  width: 100%;
  height: 100%;
}
.myfriend-list-nature span {
  border: 1px solid #e7943c;
  color: #e7943c;
  font-size: 10px;
}
.myfriend-list-number {
  text-align: left;
  margin-top: 20px;
}
.myfriend-list-number p:first-child {
  padding-top: 4px;
}
.myfriend-list-number p {
  font-size: 12px !important;
  color: #666666;
  text-align: left;
}
.myfriend-list-number p span {
  color: #d5590d;
}
.myfriend-list-content {
  border-bottom: 1px solid #e1e1e1;
  padding: 10px 0px;
}
li {
  list-style: none;
}
.myfriend-team ul {
  padding-top: 8px;
}
.myfriend-team ul li {
  width: calc(100% / 2 - 2px);
  display: inline-block;
  font-size: 12px;
  color: #666666;
  line-height: 16px;
}
.myfriend-team ul li span {
  color: #d5590d;
  float: right;
  margin-right: 8px;
}
.myfriend-list-li {
  margin-top: 5px;
}
.myfriend-footer {
  text-align: center;
  margin-top: 46px;
}
</style>

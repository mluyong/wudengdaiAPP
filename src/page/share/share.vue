<template>
  <div>
        <div class="share-nav">分享</div>
        <div class="share-img">
             <img src="../../../static/img/share.jpg"/>
        </div>
        <div class="share-btn-box">
             <mt-button size="normal">邀请好友</mt-button>
        </div>
        <div class="share-four-box">
              <div class="share-four">
                <img src="../../../static/img/share-three.png"/>
                <div>邀请好友</div>
                <div class="share-number">1</div>
              </div>
              <div class="share-four">
                <img src="../../../static/img/share-four.png"/>
                <div>好友注册</div>
                <div class="share-number">2</div>
              </div>
              <div class="share-four">
                <img src="../../../static/img/share-two.png"/>
                <div>好友消费</div>
                <div class="share-number">3</div>
              </div>
              <div class="share-four">
                <img src="../../../static/img/share-one.png"/>
                <div>获得佣金</div>
                <div class="share-number">4</div>
              </div>
              <div class="clear"></div>
              <div class="share-impress">*好友的邀请也能让你获得佣金哦</div>
        </div>
        <div class="share-active">
              <div class="share-active-title">活动规则</div>
              <div class="share-active-detail">
               
                  1.邀请新用户注册，新用户获取100积分（积分可购物提现）<br/>
                  2.您邀请注册的用户消费后您可以获得佣金返利<br/>
                    佣金返利规则<br/>
                    例：A邀请B、B邀请C、C邀请D<br/>
                    B消费100；A获得的佣金 = 100*20% = 20<br/>
                    C消费100；A获得的佣金 = 100*15% = 15<br/>
                    D消费100；A获得的佣金 = 100*10% = 10<br/>
                
              </div>
        </div>
        <div class="height_47"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.share-nav{
  width:100%;
  line-height: 40px;
  background: white;
  text-align: center;
}
.share-img{
  width:100%;
  height: 200px;
  overflow: hidden;
}
.share-img img{
  width:100%;
}
.share-btn-box{
  width:100%;
  padding:20px;
  background: white;
  text-align: center;
}
.mint-button--default{
  width:60%;
  background:rgba(231,148,60,1);
  color:white;
  font-size:18px;
}
.share-four-box{
  padding-left:10px;
  padding-right:10px;
  background: white;
}
.share-four{
  width:25%;
  float: left;
  text-align: center;
  color:#666;
  position: relative;
}
.share-four div{
  font-size:12px;
}
.share-four img{
  margin-top:20px;
}
.share-four:nth-of-type(1) img{
  width:40px;
}
.share-four:nth-of-type(2) img{
  width:43px;
}
.share-four:nth-of-type(3) img{
  width:52px;
}
.share-four:nth-of-type(4) img{
  width:45px;
}
.share-number{
  width:20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px 10px;
  background:rgba(231,148,60,1);
  color:white;
  position: absolute;
  top:0;
  left:0;
}
.share-impress{
  width:100%;
  padding-top:10px;
  padding-bottom:20px;
  font-size:12px;
  color:#333;
  text-align: right;
}
.share-active{
  padding:10px;
  background: white;
}
.share-active-title{
  font-size:16px;
  color:#666;
  line-height: 26px;
}
.share-active-detail{
  padding:10px;
  font-size:12px;
  color:#666;
}
</style>

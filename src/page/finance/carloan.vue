<template>
    <div>
        <div class="carloan-top-box">
            <router-link to="/finance"><div class="left-narrow"><img src="../../../static/img/go-back-left.png"/></div></router-link>
            <div class="carloan-left" @click="newloan()">
                  <span>新车贷</span>
                  <span class="line-d-h" v-if="news"></span>
            </div>
            <div class="carloan-left" @click="oldloan()">
                  <span>二手车贷</span>
                  <span class="line-d-h" v-if="old"></span>
            </div> 
            <div class="clear"></div>
        </div>

        <div class="carloan-detail-box">
              <ul class="carloan-detail">
                  <li>
                      <div class="carloan-detail-div">
                        <div class="carloan-detail-img"><img src="../../../static/img/jtyh.jpg"/></div>
                        <div class="carloan-detail-word">首付<span class="text-size14 color-red">20%</span></div>
                        <div class="carloan-detail-word">两证一卡，审批快</div>
                      </div>
                  </li>
                   <li>
                      <div class="carloan-detail-div">
                        <div class="carloan-detail-img"><img src="../../../static/img/jtyh.jpg"/></div>
                        <div class="carloan-detail-word">首付<span class="text-size14 color-red">20%</span></div>
                        <div class="carloan-detail-word">两证一卡，审批快</div>
                      </div>
                  </li>
                   <li>
                      <div class="carloan-detail-div">
                        <div class="carloan-detail-img"><img src="../../../static/img/jtyh.jpg"/></div>
                        <div class="carloan-detail-word">首付<span class="text-size14 color-red">20%</span></div>
                        <div class="carloan-detail-word">两证一卡，审批快</div>
                      </div>
                  </li>
                  <div class="clear"></div>
              </ul>
        </div>
      
    </div>
</template>

<script>
export default {
    data(){
        return{
           news:true,
           old:false
        }
    },
    methods:{
        newloan(){
            this.news = true;
            this.old = false;
        },
        oldloan(){
            this.news = false;
            this.old = true;
        }
    }
};
</script>

<style scoped>
@import url('../../../static/css/common.css');
.carloan-top-box{
    width:100%;
    line-height:44px;
    background:white;
    border:1px solid #e1e1e1;
    position: relative;
}
.carloan-left{
    width:50%;
    float: left;
    text-align:center;
    position: relative;
}
.line-d-h{
    display: inline-block;
    width:30px;
    height: 3px;
    background:black;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left:-15px;

}
.left-narrow{
    width:10px;
    height: 44px;
    position:absolute;
    top:0;
    left: 6px;
    z-index:55555555555555;
}
.left-narrow img{
    width:100%;
    margin-top:14px;
}
.carloan-detail-box{
    padding:0 2px;
}
ul,li{
    list-style: none;
}
.carloan-detail{
    width:100%;
}
.carloan-detail li{
   width:50%;
   height: 110px;
   float: left;
   padding:0 2px;
   margin-bottom: 4px;
   text-align: center;
}
.carloan-detail-div{
    width:100%;
    height: 100%;
    background: white;
    padding:5px;
    text-align: center;  
}
.carloan-detail-img{
    width:80px;
    height: 62px;
    margin:0 auto;
    overflow: hidden;
}
.carloan-detail-img img{
    width:100%;
}
.carloan-detail-word{
    font-size: 12px;
}
</style>

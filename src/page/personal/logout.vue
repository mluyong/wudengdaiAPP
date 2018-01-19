<template>
  <div>
     <mt-header title="设置">
        <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <div class="logout-user">
        <div class="logout-user-img">
            <img src="../../../static/img/backgrounds.jpg"/>
        </div>
        <div>
            <div class="user-name">赵俊</div>
            <div class="user-id">ID:56265464</div>
        </div>
        <div class="clear"></div>
      </div>

      <div class="version">
            <div class="version-left">版本号</div>
            <div class="version-right">1.16</div>
            <div class="clear"></div>
      </div>
      <div class="sub-btn">提交查询</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("../../../static/css/common.css");
.logout-user{
    width:100%;
    height:80px;
    padding:15px 20px;
    background: white;
    margin-bottom: 6px;
}
.logout-user-img{
    width:48px;
    height:48px;
    border-radius: 24px 24px;
    background:pink;
    overflow: hidden;
    float: left;
    margin-right: 30px;
}
.logout-user-img img{
    width:100%;
}
.user-name{
    font-size:14px;
    color:#333;
    line-height: 26px;
}
.user-id{
    font-size:14px;
    color:#666;
}
.version{
    width:100%;
    line-height: 50px;
    padding:0 20px;
    background:white;
}
.version-left{
    float: left;
    color:#333;
    font-size:14px;
}
.version-right{
    float:right;
    color:#666;
    font-size:14px;
}
.sub-btn{
    width:80%;
    margin:0 auto;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    background: rgba(231,148,60,1);
    color:white;
    font-size: 15px;
    margin-top:80px;
}
.sub-btn:active{
     background: rgb(214, 148, 77);
}

</style>

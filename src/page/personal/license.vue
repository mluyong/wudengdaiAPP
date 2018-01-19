<template>
  <div>
    <mt-header title="驾照查询">
      <router-link to="/me" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="break-box">
        <div class="break-box-left">身份证号</div>
        <div class="break-box-right">
            <input placeholder="请输入身份证号"/>
        </div>
        <div class="clear "></div>
    </div>
    <div class="break-box">
        <div class="break-box-left">档案编号</div>
        <div class="break-box-right">
            <input placeholder="请输入驾驶证档案编号"/>
        </div>
        <div class="clear "></div>
    </div>

    <div class="sub-btn">提交查询</div>
    





  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.break-box{
    width:100%;
    line-height: 50px;
    background: white;
    border-top:1px solid #e1e1e1;
}
.break-box-left{
    width:30%;
    float: left;
    text-align: center;
    font-size:14px;
}

.break-box-right{
    width:70%;
    float: left;
}
.break-box-right input{
    width:100%;
    height: 100%;
    outline: none;
    border:none;
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

<template>
  <div>
    <mt-header title="车辆添加">
      <router-link to="/mycarhouse" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="break-box">
        <div class="break-box-left">车牌号码</div>
        <div class="break-box-middle">
            <el-select v-model="value">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="break-box-right">
            <input placeholder="请输入"/>
        </div>
        <div class="clear "></div>
    </div>
    <div class="break-box">
        <div class="break-box-left">识别代码</div>
        <div class="break-box-r">
            <input placeholder="请输入车辆识别代码"/>
        </div>
        <div class="clear "></div>
    </div>
    <div class="break-box">
        <div class="break-box-left">车辆类型</div>
        <div class="break-box-rr">
           <el-select v-model="values">
                <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="clear "></div>
    </div>

    <div class="sub-btn">添加</div>
    





  </div>
</template>

<script>
export default {
  data() {
       return {
      options: [
        {
          value: "1",
          label: "鲁"
        },
        {
          value: "2",
          label: "沪"
        },
        {
          value: "3",
          label: "苏"
        },
        {
          value: "4",
          label: "冀"
        },
        {
          value: "5",
          label: "浙"
        }
      ],
      value: "",
       option: [
        {
          value: "1",
          label: "小型车"
        },
        {
          value: "2",
          label: "大型车"
        },
    
      ],
      values: ""
    };
  },
   methods: {

  },
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
    width:28%;
    float: left;
    text-align: center;
    font-size:14px;
}
.break-box-middle{
    width: 24%;
    float:left;
}
.break-box-right{
    width:48%;
    float: left;
}
.break-box-right input{
    width:100%;
    height: 100%;
    outline: none;
    border:none;
}
.break-box-r{
    width:60%;
    float: left;
}
.break-box-r input{
    width:100%;
    height: 100%;
    outline: none;
    border:none;
    margin-left:13px;
}
.break-box-rr{
    width:30%;
    float: right;
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

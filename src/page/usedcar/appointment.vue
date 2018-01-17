<template>
  <div>
    <mt-header title="预约验车">
      <router-link to="/salecar" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="gray_line_d"></div>
      <mt-cell title="预约日期"  is-link value="请选择"></mt-cell>
      <div class="gray_line_d"></div>
      <mt-cell title="预约门店"  is-link value="请选择"></mt-cell>
      <div class="gray_line_d"></div>
      <mt-field label="预约人" placeholder="请填写姓名" type="text"> </mt-field>
      <div class="gray_line_d"></div>
      <mt-field label="联系方式" placeholder="请填写手机号" type="text"> </mt-field>
      <div class="gray_line_d"></div>

 
     <router-link to="/makesuccess"><mt-button size="large">提交信息</mt-button></router-link>
  </div>
</template>

<script>
import { Popup } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
export default {
  data() {
    return {
      ele: "&nbsp",
      popupVisible:"5555"
    };
  },
    methods: {
      openPicker() {
        this.$refs.picker.open();
      }
    }
};
</script>

<style scoped>
@import "../../../static/css/common.css";
.mint-button--large{
  width:80% !important;
  background-color: #e7943c !important;
  color: #ffffff !important;
  font-size:15px;
  margin:0 auto;
  margin-top: 25px;
}
</style>

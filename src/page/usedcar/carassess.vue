<template>
  <div>
    <mt-header title="爱车估价">
      <router-link to="/usedcar" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="gray_line_d"></div>
      <mt-cell title="品牌车辆"  is-link value="请选择"></mt-cell>
      <div class="gray_line_d"></div>
      <mt-field label="当前里程" placeholder="点击填写公里数" type="text"> 
           <span v-html="ele"></span>
           <span class="text-size14">万公里</span>
      </mt-field>
      <div class="gray_line_d"></div>
      <mt-cell title="上牌时间"  is-link value="请选择" @click="openPicker()"></mt-cell>
      <div class="gray_line_d"></div>
      <mt-cell title="车辆所在地"  is-link value="请选择"></mt-cell>
      <div class="gray_line_d"></div>
      <mt-cell title="车况"  is-link value="请选择"></mt-cell>
      <div class="gray_line_d"></div>
      <mt-cell title="车辆用途" is-link value="请选择"></mt-cell>
      <div class="gray_line_d"></div>
      <mt-field label="购车价格" placeholder="点击填写公价格" type="text"> 
           <span v-html="ele"></span>
           <span class="text-size14">万元</span>
      </mt-field>
      <div class="gray_line_d"></div>
      <mt-field label="接收手机" placeholder="填写手机号" type="text"> </mt-field>

      <router-link to="/assessresult"><mt-button size="large">开始估值</mt-button></router-link>
      
  </div>
</template>

<script>
import { Button } from 'mint-ui';
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

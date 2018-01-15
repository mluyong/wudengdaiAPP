<template>
  
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1"><router-link to="/cartaber/car">选车</router-link></mt-tab-item>
      <mt-tab-item id="2"><router-link to="/cartaber/usedcar">二手车</router-link></mt-tab-item>
      <mt-tab-item id="3"><router-link to="/cartaber/finance">金融</router-link></mt-tab-item>
      <router-link class="search" to="/search"><img src="../../static/img/search.png" alt=""></router-link>
  </mt-navbar>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:""
    }
  }
};
</script>

<style>
@import url('../../static/css/common.css');
@import url('../../static/css/persion.css');
</style>

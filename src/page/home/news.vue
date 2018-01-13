<template>
  <div>
      <div class="div1"> 
        <mt-header title="咨询信息">
        <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
<mt-navbar v-model="selected">
  <mt-tab-item id="1"><router-link to="/news/report">最新报道</router-link></mt-tab-item>
  <mt-tab-item id="2"><router-link to="/news/charge">降价信息</router-link></mt-tab-item>
  <mt-tab-item id="3"><router-link to="/news/skill">用车技巧</router-link></mt-tab-item>
  <router-link class="search" to="/search"><img src="../../../static/img/search.png" alt=""></router-link>
</mt-navbar>
<router-view></router-view>
</div>
  </div>
</template>
<script>
export default {
    data(){
        return{
           selected:'' 
        }
        
    },
};
</script>

<style scoped>
@import url('../../../static/css/common.css');
@import url('../../../static/css/persion.css');

</style>

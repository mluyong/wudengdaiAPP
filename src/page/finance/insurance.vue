<template>

<div>
<mt-header title="车险">
      <router-link to="/taber/finance" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

  <div class="insurance-box">
      <ul class="insurance">
          <router-link to="/insurancedetail"><li><img src="../../../static/img/backgrounds.jpg"/></li></router-link>
          <router-link to="/insurancedetail"><li><img src="../../../static/img/backgrounds.jpg"/></li></router-link>
          <router-link to="/insurancedetail"><li><img src="../../../static/img/backgrounds.jpg"/></li></router-link>
        
          <div class="clear"></div>
      </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("../../../static/css/common.css");
ul,li{
    list-style: none;
}

.insurance-box{
    width:100%;
    padding:3px;
}
.insurance li{
   width:50%;
   height: 110px;
   overflow: hidden;
   padding: 2px;
   float: left;
   margin-bottom:2px;
}
.insurance li img{
    width:100%;
}
</style>

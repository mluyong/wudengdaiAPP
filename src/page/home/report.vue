<template>
  <div>
      <router-link to="/newsDetail">
      <div class="news clearfix">
        <div class="float-left">
          <img src="../../../static/img/jinbei750.jpg" alt="">
        </div>
        <div class="float-right">
          <p class="text-left text-size15 color51">售5.39-6.69万 金杯750三款新车 型上市</p>
          <p class="text-right text-size15 color51">2018-1-5</p>
        </div>
      </div>
      </router-link>
      <router-link to="/newsDetail">
      <div class="news clearfix">
        <div class="float-left">
          <img src="../../../static/img/jinbei750.jpg" alt="">
        </div>
        <div class="float-right">
          <p class="text-left text-size15 color51">售5.39-6.69万 金杯750三款新车 型上市</p>
          <p class="text-right text-size15 color51">2018-1-5</p>
        </div>
      </div>
      </router-link>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.news{
  background-color: white;
  border: 1px solid #BFBFBF; 
  border-top: none;
  padding: 10px 10px;
}
.news:first-child{
  border-top: 1px solid #BFBFBF;
}
.float-left{
  width: 90px;
 padding-right: 10px;
  float: left;
}
.float-left img{
width: 100%;
vertical-align: middle;
}

</style>

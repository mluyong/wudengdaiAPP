<template>
  <div>
     <mt-search v-model="value" cancel-text="取消" placeholder="搜索"> </mt-search>
      <div class="search-one">
        <p>热门词汇</p>
        <ul>
          <li>金杯</li>
          <li>金杯</li>
          <li>金杯</li>
          <li>金杯</li> 
          <li>金杯</li>
          <li>金杯</li>
          <li>金杯</li>
          <li>金杯</li> 
          <li>金杯</li>
          <li>金杯</li>
          <li>金杯</li>
          <li>金杯</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:""
    }
  }
};
</script>

<style>
@import url('../../static/css/persion.css');
.search-one p,.search-one ul li{
  color: rgba(66,66,66,1);
  font-size: 15px;
}
.search-one p{
  padding: 13px 16px;
 }
.search-one ul{
  padding: 0px 6px;
  font-size: 0px;
}
.search-one ul li{
  text-align: center;
  width: calc( 100% / 4 - 9px );
  text-indent: none;
  display: inline-block;
  background-color: white;
  line-height: 30px;
  border-radius: 4px;
  margin: 0px 4.5px;
  margin-bottom: 15px;
 }
</style>

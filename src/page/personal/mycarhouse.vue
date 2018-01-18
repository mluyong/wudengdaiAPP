<template>
  <div>
      <mt-header class="border-bottom" title="我的车库">
        <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    <ul class="car-all clearfix">
        <li class="clearfix">
          <router-link to="/newcardetail">
              <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
              <div>
                <h6>金杯750 2015款 1.5L 豪华型</h6>
                <div>
                    <p>车牌号：浙A52630</p>
                    <p>上牌时间：2016-12-5</p>
                </div>
              </div>
          </router-link>
          <p class="peccancy">违章查询</p>
        </li>
        <li class="clearfix">
          <router-link to="/newcardetail">
              <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
              <div>
                <h6>金杯750 2015款 1.5L 豪华型</h6>
                <div>
                    <p>车牌号：浙A52630</p>
                    <p>上牌时间：2016-12-5</p>
                </div>
              </div>
          </router-link>
          <p class="peccancy">违章查询</p>
        </li>
    </ul>
    <div class="add-cars"><button>添加车辆</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.car-all {
  background-color: white;
}
.car-all li {
  list-style: none;
  padding: 9px 10px;
  position: relative;
  border-bottom: 1px solid #ededed;
}
.car-all li div:first-child {
  width: 120px;
  padding-right: 10px;
}
.car-all li div:first-child img {
  width: 100%;
}
.car-all li div:last-child h6 {
  font-weight: normal;
  font-size: 15px;
  color: rgba(51, 51, 51, 1);
  letter-spacing: 0.5px;
}
.car-all li div:last-child>div p {
  font-size: 13px;
  color: rgba(102, 102, 102, 1);
}
.car-all li div:last-child>div {
  font-size: 13px;
  position: absolute;
  bottom: 10px;
  left: 130px; 
 }
.peccancy{
  font-size: 12px;
  position: absolute;
  bottom: 8px;
  right: 10px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background-color: rgba(41,123,200,1);
  border-radius: 6px;
  padding: 2px 5px;
}
.add-cars{
    width: 100%;
    text-align: center;
}
.add-cars button{
    border: none;
    font-size: 15px;
    width: 80%;
    margin: 30px auto;
    margin-bottom: 0px; 
    border-radius: 6px;
    padding: 10px 0px;
    background-color: rgba(231,148,60,1);
    color: white;
    cursor: pointer;
}
</style>

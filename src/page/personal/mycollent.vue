<template>
  <div>
      <mt-header class="border-bottom" title="我的收藏">
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
                  <p>厂商指导价：8.88万</p>
                  <p class="color-red">优惠价<span class="text-size18">7.92</span>万</p>
                </div>
            </router-link>
            <p class="cancel">取消收藏</p>
        </li>
        <li class="clearfix" v-if="cancelIf">
          <router-link to="/newcardetail">
              <div class="float_left"><img src="../../../static/img/dzbl.jpg" alt=""></div>
              <div>
                <h6>金杯750 2015款 1.5L 豪华型</h6>
                <p>厂商指导价：8.88万</p>
                <p class="color-red">优惠价<span class="text-size18">7.92</span>万</p>
              </div>
          </router-link>
          <p class="cancel" @click="cancelClick()">取消收藏</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        cancelIf:true
    };
  },
  methods: {
    cancelClick:function(){
        this.cancelIf=false
    }
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
.car-all li div:last-child p:nth-of-type(1) {
  font-size: 13px;
  color: rgba(102, 102, 102, 1);
}
.car-all li div:last-child p:nth-of-type(2) {
  font-size: 13px;
  color: red;
  position: absolute;
  bottom: 8px;
  left: 130px;
}
.cancel{
  font-size: 12px;
  position: absolute;
  bottom: 8px;
  right: 10px;
  color: rgba(78,78,78,1);
  cursor: pointer;
}
</style>

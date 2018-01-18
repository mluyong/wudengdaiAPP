<template>
  <div>
    <mt-header title="我的优惠券">
        <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>


    <div class="value-detail-box" style="margin-top:10px;">
        <div class="value-detail">
            <img src="../../../static/img/value.jpg"/>
            <div class="value-detail-menoy">
                <span class="text-size18 color-yeelow">￥1000</span>
                <span class="text-size15 color-white">优惠券</span>
            </div>
            <div class="value-date">
                <div>2018-2-10到期</div>
                <div>限购买指定车型时使用</div>
            </div>
        </div>
        <div class="value-detail">
            <img src="../../../static/img/value.jpg"/>
            <div class="value-detail-menoy">
                <span class="text-size18 color-yeelow">￥1000</span>
                <span class="text-size15 color-white">优惠券</span>
            </div>
            <div class="value-date">
                <div>2018-2-10到期</div>
                <div>限购买指定车型时使用</div>
            </div>
        </div>
    </div>
    
    <div class="height_47"></div>
  </div>
</template>

<script>
export default {
  data() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
</style>

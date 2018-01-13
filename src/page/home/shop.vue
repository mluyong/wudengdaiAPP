<template>
  <div>
    <mt-header title="积分商城">
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="imgall_box">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../../static/img/bck.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/bck.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/bck.jpg" /></mt-swipe-item>
          </mt-swipe>
    </div>

    <div class="shop_box">
      <router-link to="/shopdetail">
        <div class="float_left" >
          <div class="shop_box_pa background_white">
            <div class="img_box">
              <img src="../../../static/img/bck.jpg" />
            </div>
            <div class="shop_box_bottom">
              <div>现在车载充电器</div>
              <div>800积分</div>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/shopdetail">
        <div class="float_left" >
          <div class="shop_box_pa background_white">
            <div class="img_box">
              <img src="../../../static/img/bck.jpg" />
            </div>
            <div class="shop_box_bottom">
              <div>现在车载充电器</div>
              <div>800积分</div>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/shopdetail">
        <div class="float_left" >
          <div class="shop_box_pa background_white">
            <div class="img_box">
              <img src="../../../static/img/bck.jpg" />
            </div>
            <div class="shop_box_bottom">
              <div>现在车载充电器</div>
              <div>800积分</div>
            </div>
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    beforeCreate: function() {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  },
  },
  created() {
    beforeCreate()
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.imgall_box {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.imgall_box img {
  width: 100%;
}
.shop_box {
  width:100%;
 font-size:0px;
}
.shop_box a>div{
  width:  calc( 100% / 2  ); 
}
.shop_box a>div img{
  width: 100%;
}
.shop_box_pa{
  margin:5px;
}
.shop_box_bottom{
  padding:5px 10px;
}

</style>

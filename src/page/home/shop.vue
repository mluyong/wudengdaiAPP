<template>
  <div>
    <mt-header title="积分商城">
      <router-link to="/home" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="imgall_box">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../../static/img/backgrounds.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/backgrounds.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/backgrounds.jpg" /></mt-swipe-item>
          </mt-swipe>
    </div>

    <div class="shop_box">
      <router-link to="/shopdetail">
        <div class="float_left" >
          <div class="shop_box_pa background_white">
            <div class="img_box">
              <img src="../../../static/img/backgrounds.jpg" />
            </div>
            <div class="shop_box_bottom">
              <div class="title-tetx">现在车载充电器</div>
              <div>
                <span class="nubmer-text">800</span>
                <span class="word-text">积分</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/shopdetail">
        <div class="float_left" >
          <div class="shop_box_pa background_white">
            <div class="img_box">
              <img src="../../../static/img/backgrounds.jpg" />
            </div>
            <div class="shop_box_bottom">
              <div class="title-tetx">现在车载充电器</div>
              <div>
                <span class="nubmer-text">800</span>
                <span class="word-text">积分</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/shopdetail">
        <div class="float_left" >
          <div class="shop_box_pa background_white">
            <div class="img_box">
              <img src="../../../static/img/backgrounds.jpg" />
            </div>
            <div class="shop_box_bottom">
              <div class="title-tetx">现在车载充电器</div>
              <div>
                <span class="nubmer-text">800</span>
                <span class="word-text">积分</span>
              </div>
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
}
.shop_box a>div{
  width:  calc( 100% / 2  ); 
}
.shop_box a>div img{
  width: 100%;
}
.img_box{
  height: 150px;
  overflow: hidden;
}
.title-tetx{
  font-size:15px;
  line-height:24px;
  color:#333;
}
.nubmer-text{
  color:red;
  font-size:14px;
}
.shop_box_pa{
  margin:5px;
}
.shop_box_bottom{
  padding:5px 10px;
}
.word-text{
  font-size:12px;
  color:#666;
}

</style>

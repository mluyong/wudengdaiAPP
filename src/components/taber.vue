<template>
  <div>
      <mt-tabbar class="fixed" v-model="selected">

        <mt-tab-item id="主页">
          <router-link to="/">
          <img class="img1" src="../../static/img/home.png" alt=""><p>主页</p></router-link>
        </mt-tab-item>

        <mt-tab-item id="选车">
          <router-link to="/car">
          <img class="img2" src="../../static/img/car.png" alt=""><p>选车</p></router-link>
        </mt-tab-item>

        <mt-tab-item id="分享">
          <router-link to="/share">
          <img class="img3" src="../../static/img/share.png" alt=""><p>分享</p> </router-link>
        </mt-tab-item>
        
        <mt-tab-item id="个人中心">
          <router-link to="/me">
          <img class="img4" src="../../static/img/me.png" alt=""><p>个人中心</p></router-link>
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  data(){
        return{
           selected:'' 
        }
        
    },
}
</script>

<style scoped>
.fixed{
  position: fixed;
  bottom: 0px;
}
img{
  margin-top: 5px;
}
.img1{
  width: 28px;
  margin-top: 5px;
}
.img2{
  width: 28.5px;
}
.img3{
  width: 27px;
}
.img4{
  width: 23px;
}
*{
  font-size: 10px;
  padding: 0px;
}
p{
  line-height: 15px
}
</style>

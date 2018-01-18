<template>
  <div>
      <ul class="taber-box"> 
        <li v-for="item in nav" @click="selectNav(item.title)" v-bind:key="item.title">
         <img :src="isSelect === item.title ? item.url_one : item.url"> 
         <p :class="isSelect === item.title ? 'active' : ''">{{item.title}}</p> 
        </li> 
      </ul> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelect: "主页",
    
      nav: [
        {
          title: "主页",
          url: require("../../static/img/home.png"),
          url_one: require("../../static/img/homes.png")
        },
        {
          title: "选车",
          url: require("../../static/img/car.png"),
          url_one: require("../../static/img/cars.png")
        },
        {
          title: "分享",
          url: require("../../static/img/share.png"),
          url_one: require("../../static/img/shares.png")
        },
        {
          title: "个人中心",
          url: require("../../static/img/me.png"),
          url_one: require("../../static/img/mes.png")
        }
      ]
    };
  },

  methods: {
    selectNav(title) {
      this.isSelect = title;
      switch (title) {
        case "主页":
          this.$router.push("/");
          break;
        case "选车":
          this.$router.push("/car");
          break;
        case "分享":
          this.$router.push("/share");
          break;
        case "个人中心":
          this.$router.push("/me");
          break;
      }
     sessionStorage.setItem("isSelect", this.isSelect);
    }
  }
};
</script>

<style scoped>
.active{
  color:rgba(231,148,60,1);;
}
ul,li{
  list-style: none;
}
.taber-box{
  width:100%;
  height: 47px;
  background: white;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top:1px solid #e1e1e1;
  z-index:5555555;
  text-align: center;
  
}
.taber-box li{
  width:25%;
  height: 47px;
  float: left;
}
.taber-box li p{
  font-size:12px;
}

ul li:nth-of-type(1) img{
  width: 24px;
  margin-top:2px;
}
ul li:nth-of-type(2) img{
  width: 24px;
  margin-top:2px;
  margin-bottom: 1px;
  
}
ul li:nth-of-type(3) img{
  width: 22px;
  margin-top:2px;
}
ul li:nth-of-type(4) img{
  width: 21px;
  margin-top:2px;
}
</style>

<template>
  <div>
      <ul> 
        <li v-for="item in nav" @click="selectNav(item.title)" v-bind:key="item.title"> 
         <img :src="isSelect === item.title ? item.url_one : item.url" alt="item.title"> 
         <p :class="isSelect === item.title ? 'active' : ''">{{item.title}}</p> 
        </li> 
      </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
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
    }
  },
  methods: {
    selectNav(title) {
      this.isSelect = title;
      switch (title) {
        case "主页":
          this.$router.push("/");
          break;
        case "选车":
          this.$router.push("/cartaber/car");
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
img {
  margin-top: 5px;
  position: absolute;
  bottom: 20px;
  left: 38%;
}
ul li:nth-of-type(1) img{
  width: 26px;
}
ul li:nth-of-type(2) img{
  width: 28px;
}
ul li:nth-of-type(3) img{
  width: 24px;
}
ul li:nth-of-type(4) img{
  width: 21px;
}
* {
  font-size: 10px;
  padding: 0px;
}
p {
  line-height: 15px;
  padding-top: 32px;
  width: 100%;;
}
ul{
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  font-size: 0px;
  text-align: center;
  background-color: white;
}
ul li{
  width: calc( 100% / 4 );
  display: inline-block;
  cursor: pointer;
  position: relative;
}
</style>

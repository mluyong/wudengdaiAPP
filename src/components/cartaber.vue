<template>
  <div class="cartaber">
      <ul> 
        <li v-for="item in nav" @click="selectNav(item.title)" v-bind:key="item.title">
         <p :class="isSelect === item.title ? 'active' : ''">{{item.title}}</p> 
        </li> 
        <li><img src="../../static/img/search.png" alt=""></li>
      </ul> 
<router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
      isSelect: "选车",
      nav: [
        {
          title: "选车"
        },
        {
          title: "二手车"
        },
        {
          title: "金融"
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
        case "选车":
          this.$router.push("/cartaber/car");
          break;
        case "二手车":
          this.$router.push("/cartaber/usedcar");
          break;
        case "金融":
          this.$router.push("/cartaber/finance");
          break;
      }
      sessionStorage.setItem("isSelect", this.isSelect);
    }
  }
};
</script>

<style scoped>
.active{
  border-bottom: 2px solid black;
}
.cartaber{
  background-color: white;
}
.cartaber ul{
  font-size: 0px;
  position: relative;
}
.cartaber ul li{
  display: inline-block;
  width: calc( 100% / 3.5 );
  font-size: 15px;
 
  text-align: center;
}
.cartaber ul li p{
   padding: 10px 0px;
}
.cartaber ul li img{
  width: 100%;
  vertical-align: middle;
}
.cartaber ul li:last-child{
  width: 20px !important;
  position: absolute;top: 9px;
  right: 10px;
}
</style>

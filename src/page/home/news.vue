<template>
  <div>
      <div class="div1"> 
        <mt-header title="咨询信息">
        <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
  <div class="cartaber">
      <ul> 
        <li v-for="item in nav" @click="selectNav(item.title)" v-bind:key="item.title">
         <p :class="isSelect === item.title ? 'actives' : ''">{{item.title}}</p> 
        </li> 
        <li><img src="../../../static/img/search.png" alt=""></li>
      </ul> 
    <router-view></router-view>
  </div>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
      isSelect: "最新报道",
      nav: [
        {
          title: "最新报道"
        },
        {
          title: "降价信息"
        },
        {
          title: "用车技巧"
        }
      ]
    };
  } ,
  methods: {
    selectNav(title) {
      this.isSelect = title; 
    }
  },
  methods: {
    selectNav(title) {
      this.isSelect = title;
      switch (title) {
        case "最新报道":
          this.$router.push("/news/report");
          break;
        case "降价信息":
          this.$router.push("/news/charge");
          break;
        case "用车技巧":
          this.$router.push("/news/skill");
          break;
      }
      sessionStorage.setItem("isSelect", this.isSelect);
    }
  }
};
</script>

<style scoped>
@import url('../../../static/css/common.css');
@import url('../../../static/css/persion.css');
.actives {
  border-bottom: 2px solid black;
}
.cartaber {
  background-color: white;
}
.cartaber ul {
  font-size: 0px;
  position: relative;
}
.cartaber ul li {
  display: inline-block;
  width: calc(100% / 3.5);
  font-size: 15px;

  text-align: center;
}
.cartaber ul li p {
  padding: 10px 0px;
}
.cartaber ul li img {
  width: 100%;
  vertical-align: middle;
}
.cartaber ul li:last-child {
  width: 20px !important;
  position: absolute;
  top: 9px;
  right: 10px;
}
</style>


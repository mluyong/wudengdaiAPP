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
      isSelect: "二手车",
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
      switch (title) {
        case "选车":
          this.$router.push("/taber/car");
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

</style>

<template>
  <div class="background_white">
    <div class="header width100">
      <div class="border-bottom">
        <mt-header title="咨询详情">
          <router-link to="/report" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button slot="right" class="header-right">
            <img src="../../../static/img/sc.png" alt="">
          </mt-button>
          <mt-button slot="right" class="header-right">
            <img src="../../../static/img/fx.png" alt="">
          </mt-button>
        </mt-header>
      </div>
      <div class="contents">
        <div>
          <h3 class="text-center">{{getNewsDatail.Title}}</h3>
          <ul class="text-size">
            <li class="text-size12 text-center">作者: {{getNewsDatail.author}}</li>
            <li class="text-size12 text-center">点击量: {{getNewsDatail.Visit}}</li>
            <li class="text-size12 text-center">日期: 2018-1-5</li>
          </ul>
        </div>
        <div class="img">
          <img src="../../../static/img/4.jpg" class="width100" alt="">
        </div>
        <div class="article">
          <p class="width100 text-size13">{{getNewsDatail.content}} </p>
          
        </div>
      </div>
      <div class="news clearfix">
        <h3 class="text-size15">文章推荐</h3>
        <div class="float-left">
          <img src="../../../static/img/dzbl.jpg" class="width100" alt="">
        </div>
        <div class="float-right">
          <p class="text-left text-size15 color51">售5.39-6.69万 金杯750三款新车 型上市</p>
          <p class="text-right text-size15 color51">2018-1-5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        getNewsDatail: []
      }
    },
    methods: {
      getNewsDatails() {
        var ids = this.$route.params.newsID;
        this.$http.get("http://wddapi.jiechikeji.com/api/news/?id="+ids).then(
          data => {
            this.getNewsDatail = data.body.Data;
            console.log(this.getNewsDatail)
          }, err => {
            console.log(err)
          }
        )
      }
    },
    created() {
      this.getNewsDatails()
    }
  };
</script>

<style scoped>
  @import "../../../static/css/common.css";

  .contents {
    padding-top: 5px;
  }

  .contents h3 {
    font-size: 18px;
    color: #1A1A1A;
    padding: 0px 1.5px;
  }

  .contents ul {
    margin: 0 auto;
  }

  .contents ul li {
    width: calc(100% / 3);
    display: inline-block;
    padding: 5px 0px;
  }

  .contents .img img {
    margin: 0 auto;
  }

  .contents .article {
    margin: 0px 12.5px;
  }

  .contents .article p {
    word-wrap: normal;
    text-indent: 1.5rem;
    color: #333333;
    line-height: 20px;
  }

  .news {
    background-color: white;
    border: 1px solid #BFBFBF;
    border-top: none;
    padding: 10px 10px;
  }

  .news:first-child {
    border-top: 1px solid #BFBFBF;
  }

  .float-left {
    width: 90px;
    padding-right: 10px;
    float: left;
  }

  .float-left img {
    vertical-align: middle;
  }

  .news .float-right p:last-child {
    margin-top: 18px;
  }

</style>

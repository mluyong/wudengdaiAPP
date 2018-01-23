<template>
  <div>
    <div class="div1">
      <mt-header title="咨询信息">
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="cartaber">
        <ul>
          <li v-for="(item,index) in nav" v-bind:key="item.title" v-bind:class="{actives:index==nowIndex}" v-on:click="newsClick(index,item.type,0) ">{{item.title}}
          </li>
          <li><img src="../../../static/img/search.png" alt=""></li>
        </ul>
        <router-view></router-view>
      </div>

    </div>
      <div class="loadmoreCon">
        <div class="bgw scroll">
          <v-loadmore :bottom-all-loaded="allLoaded" :autoFill='false' :bottom-method='newsClick' ref='loadmore'>
            <router-link :to="{ name:'NewsDetail', params: { newsID: i.newsID}}" v-for="i in getReport" :key="i.newsID">
              <div class="news clearfix">
                <div class="float-left">
                  <img src="../../../static/img/jinbei750.jpg" alt="">
                </div>
                <div class="float-right">
                  <p class="text-left text-size15 color51">售5.39-6.69万 {{i.Title}} 型上市</p><br>
                  <p class="text-right text-size15 color51">{{i.AddDate}}</p>
                </div>
              </div>
            </router-link>
          </v-loadmore>
        </div>
      </div>
  </div>
</template>
<script>
import loadmore from 'mint-ui/lib/loadmore';
import 'mint-ui/lib/style.css';

export default {
  data(){
    return {
      nowIndex: 0,
      nav: [
        {
          title: "最新报道",
          type:"1",
        },
        {
          title: "降价信息",
          type:"2",
        },
        {
          title: "用车技巧",
          type:"3",
        }
      ],
      getReport:[],
      index:1,
      allLoaded:false,
      length:"",
      row:"",
      size:"",
      newsTypeID:"",
      typetemp:"",
    }
  },
  methods:{
    newsClick(index,type,term){
      var that = this;
      if(term == 0){
        that.index = 1;
        that.nowIndex = index;
        that.typetemp = type;
        that.$http.get("http://wddapi.jiechikeji.com/api/news?PageIndex="+that.index+"&PageSize=10&newsTypeID="+type).then(
          data=>{
            that.getReport = [];
            that.length = data.body.Data.RowcodCount;
            that.row = Math.ceil(that.length/10);
            that.size = data.body.Data.Data.length;
            for (var i=0;i<that.size;i++){
              that.getReport.push(data.body.Data.Data[i]);
            }
            if(that.index < that.row){
              that.allLoaded = false;
            }
            that.index++;
          },err =>{
            console.log(err);
          }
        );
      }
      else{
        setTimeout(function() {
          that.$http
            .get(
              "http://wddapi.jiechikeji.com/api/news?PageIndex="+that.index +"&PageSize=10&newsTypeID="+that.typetemp
            )
            .then(
              data => {
                that.length = data.body.Data.RowcodCount;
                that.row = Math.ceil(that.length / 10);
                that.size = data.body.Data.Data.length;
                for (var i = 0; i < that.size; i++) {
                  that.getReport.push(data.body.Data.Data[i]);
                }
                that.index++;
                if (that.index > that.row) {
                  that.allLoaded = true;
                }

              },
              err => {
                console.log(err);
              }
            );
          that.$refs.loadmore.onBottomLoaded();
        }, 1000);
      }


   }
  },
  components: {
    'v-loadmore': loadmore
  },
  created(){
    this.newsClick(0,1,0)
  }
}
</script>

<style scoped>
  @import url('../../../static/css/common.css');
  @import url('../../../static/css/persion.css');
.news{
  background-color: white;
  border-top: none;
  padding: 10px 10px;
}
.news:first-child{
  border-top: 1px solid #BFBFBF;
}
/*固定title属性文字的显示*/
.float-right p:first-child{
  width: 70%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  height: 18px;
}
.float-left{
  width: 90px;
 padding-right: 10px;
  float: left;
}
.float-left img{
width: 100%;
vertical-align: middle;
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
    padding: 10px 0px;
  }

  .cartaber ul li img {
    width: 100%;
  }
  .cartaber ul li:last-child {
    width: 20px !important;
    position: absolute;
    top: 2px;
    right: 10px;
  }
  .actives {
    border-bottom: 2px solid black;
  }
</style>

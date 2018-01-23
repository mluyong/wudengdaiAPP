<template>
    <div>
        <div class="carloan-top-box">
            <router-link to="/finance"><div class="left-narrow"><img src="../../../static/img/go-back-left.png"/></div></router-link>
            <div class="carloan-left" @click="loan(0)">
                  <span>新车贷</span>
                  <span class="line-d-h" v-if="news"></span>
            </div>
            <div class="carloan-left" @click="loan(1)">
                  <span>二手车贷</span>
                  <span class="line-d-h" v-if="old"></span>
            </div> 
            <div class="clear"></div>
        </div>

        <div class="loadmoreCon">
        <div class="bgw scroll">
          <div class="carloan-detail-box" >
                <ul class="carloan-detail">
                    <v-loadmore :bottom-all-loaded="allLoaded"  :autoFill='false' :bottom-method='loadmore' ref='loadmore'>
                    <li v-for="list in CarLoanList" :key="list.LoanID" :list="list">
                        <router-link :to="`/carloandetail?id=`+list.LoanID"  ><div class="carloan-detail-div">
                          <div class="carloan-detail-img"><img src="../../../static/img/jtyh.jpg"/></div>
                          <div class="carloan-detail-word">首付<span class="text-size14 color-red">{{list.Starting}}</span></div>
                          <div class="carloan-detail-word">{{list.description}}</div>
                        </div></router-link>
                    </li>
                    <div class="clear"></div>
                      </v-loadmore>
                </ul>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
import loadmore from "mint-ui/lib/loadmore";
import  'mint-ui/lib/style.css';  
export default {
  data() {
    return {
      news: true,
      old: false,
      CarLoanList: [],
      //判断是否加载全部数据
      index: 1,
      //隐藏的字
      allLoaded: false,
      //所有数据的长度
      length: "",
      //所有的数据可以分几页
      row: "",
      //每页的数据有几个
      size: "",
      indexstemp:"",
    };
  },
  methods: {
    //进入页面加载的方法，和选择车贷的方法
    loan(indexs) {
      this.index = 1;
      this.indexstemp = indexs;
      var that = this;
      if (indexs == 0) {
        that.news = true;
        that.old = false;
      } else {
        that.news = false;
        that.old = true;
      }
        that.$http
          .get(
            "http://192.168.2.178:53960/api/Loan?PageIndex=" +that.index +"&PageSize=10&Class0=" +indexs
          )
          .then(
            data => {
              that.CarLoanList = [];
              that.length = data.body.Data.RowcodCount;
              that.row = Math.ceil(that.length / 10);
              that.size = data.body.Data.Data.length;
              for (var i = 0; i < that.size; i++) {
                that.CarLoanList.push(data.body.Data.Data[i]);
              }
              that.index++;
              if (that.index < that.row) {
                that.allLoaded = false;
              }
            },
            err => {
              console.log(err);
            }
          );
    },
    //上拉加载的方法
    loadmore(){
    var that = this;
    setTimeout(function() {
       console.log(that.index);
        that.$http
          .get(
            "http://192.168.2.178:53960/api/Loan?PageIndex=" +that.index +"&PageSize=10&Class0 =" +that.indexstemp
          )
          .then(
            data => {
              that.length = data.body.Data.RowcodCount;
              that.row = Math.ceil(that.length / 10);
              console.log(that.row);
              that.size = data.body.Data.Data.length;
              console.log(data.body.Data);
              for (var i = 0; i < that.size; i++) {
                that.CarLoanList.push(data.body.Data.Data[i]);
              }
              that.index++;
              if (that.index > that.row) {
                alert(4444);
                that.allLoaded = true;
              }
            },
            err => {
              console.log(err);
            }
          );
           that.$refs.loadmore.onBottomLoaded();
      },1000);
    }
  },
  components: {
    "v-loadmore": loadmore
  },
  created() {
    this.loan(0);
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.carloan-top-box {
  width: 100%;
  line-height: 44px;
  background: white;
  border: 1px solid #e1e1e1;
  position: relative;
}
.carloan-left {
  width: 50%;
  float: left;
  text-align: center;
  position: relative;
}
.line-d-h {
  display: inline-block;
  width: 30px;
  height: 3px;
  background: black;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -15px;
}
.left-narrow {
  width: 10px;
  height: 44px;
  position: absolute;
  top: 0;
  left: 6px;
  z-index: 55555555555555;
}
.left-narrow img {
  width: 100%;
  margin-top: 14px;
}
.carloan-detail-box {
  padding: 0 2px;
}
ul,
li {
  list-style: none;
}
.carloan-detail {
  width: 100%;
}
.carloan-detail li {
  width: 50%;
  height: 110px;
  float: left;
  padding: 0 2px;
  margin-bottom: 4px;
  text-align: center;
}
.carloan-detail-div {
  width: 100%;
  height: 100%;
  background: white;
  padding: 5px;
  text-align: center;
}
.carloan-detail-img {
  width: 80px;
  height: 62px;
  margin: 0 auto;
  overflow: hidden;
}
.carloan-detail-img img {
  width: 100%;
}
.carloan-detail-word {
  font-size: 12px;
}
</style>

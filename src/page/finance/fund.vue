<template>
    <div>
        <mt-header title="基金" class="border-bottom headerFixed">
           <router-link to="/finance" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="fund-title navFixed">
           <ul>
                <li v-for="(funds,index) in fund" v-bind:key="funds.text" v-bind:class="{checked:index==nowIndex}" v-on:click="fundClick(index,funds.type,0) ">{{funds.text}}</li>
               <li>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          更多<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>黄金糕</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
           </ul>
        </div>
        <ul class="fund-content margin-top88">
            <div class="loadmoreCon">
                <div class="bgw scroll">
                    <v-loadmore :bottom-all-loaded="allLoaded"  :autoFill='false' :bottom-method='fundClick' ref='loadmore'>
                        <router-link :to="`/funddetail?id=`+FundLists.FundID" v-for="FundLists in fundList" :key="FundLists.id">
                            <li>
                                <div class="fund-content-one clearfix">
                                    <div class="fund-content-one-left float_left">
                                        <h4>{{FundLists.Type}}<span> ({{FundLists.Code}})</span></h4>
                                        <p><span>风险评级</span><span>{{FundLists.risk}}</span></p> 
                                    </div>
                                    <div class="fund-content-one-right float_right">{{FundLists.TypeName}}</div>
                                </div>
                                <div class="fund-content-two">
                                    <div class="fund-content-one-left">
                                        <p>近一年收益率（%）</p>
                                        <h1>{{FundLists.Return0}}</h1> 
                                    </div>
                                </div>
                            </li>
                        </router-link>
                    </v-loadmore>
                </div> 
		    </div>
        </ul>
    </div>
</template>

<script>
import loadmore from "mint-ui/lib/loadmore";
import { Navbar, TabItem } from "mint-ui";
export default {
  data() {
    return {
      fund: [
        { text: "全部", type: "''" },
        { text: "股票型", type: 1 },
        { text: "债劵型", type: 2 },
        { text: "货币型", type: 3 },
        { text: "混合型", type: 4 }
      ],
      nowIndex: 0,
      fundList: [],
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
      typetemp:"",
    };
  },
  methods: {
    fundClick(indexs, types, term) {
      var that = this;
      if (term == 0) {
          that.index = 1;
          that.nowIndex = indexs;//下划线的显示
          that.typetemp = types;
          that.indexstemp = indexs;
          that.$http
            .get(
              "http://192.168.2.178:53960/api/Fund?PageIndex="+that.index+"&PageSize=5&Type="+types
            )
            .then(
              data => {
                that.fundList = [];
                that.length = data.body.Data.RowcodCount;
                that.row = Math.ceil(that.length / 5);
                that.size = data.body.Data.Data.length;
                for (var i = 0; i < that.size; i++) {
                  that.fundList.push(data.body.Data.Data[i]);
                }
                 if (that.index < that.row) {
                  that.allLoaded = false;
                }
                that.index++;
              },
              err => {
                console.log(err);
              }
            );
      } else {
        setTimeout(function() {
          that.$http
            .get(
              "http://192.168.2.178:53960/api/Fund?PageIndex=" +that.index +"&PageSize=5&Type=" +that.typetemp
            )
            .then(
              data => { 
                that.length = data.body.Data.RowcodCount;
                that.row = Math.ceil(that.length / 5);
                that.size = data.body.Data.Data.length;
                for (var i = 0; i < that.size; i++) {
                  that.fundList.push(data.body.Data.Data[i]);
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
    "v-loadmore": loadmore
  },
  created() {
    this.fundClick(0, "''", 0);
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.checked {
  border-bottom: 2px solid rgba(190, 120, 28, 1) !important;
  color: rgba(190, 120, 28, 1) !important;
}
.mint-button {
  height: 100% !important;
}
.fund-title ul {
  font-size: 0px;
  text-align: center;
  background-color: white;
}
.fund-title ul li {
  width: calc(100% / 6);
  display: inline-block;
  line-height: 37px;
  color: rgba(51, 51, 51, 1);
  font-size: 13px;
  border-bottom: 2px solid rgb(255, 255, 255);
}
.fund-title ul li:last-child div span {
  font-size: 13px;
  color: rgba(51, 51, 51, 1);
}
.el-dropdown-menu__item {
  font-size: 13px;
  padding: 0 5px;
  color: rgba(51, 51, 51, 1);
}
.fund-content li {
  background-color: white;
  padding: 5px 10px;
  margin-top: 5px;
  list-style: none;
}
.fund-content-one div:nth-of-type(2) {
  text-align: right;
}
.fund-content-one > div h4 {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  font-weight: 500;
}
.fund-content-one > div h4 span {
  font-size: 13px;
  color: rgba(77, 77, 77, 1);
  font-weight: normal;
}
.fund-content-one > div p span:last-child {
  padding-right: 0px;
}
.fund-content-one > div p span {
  font-size: 10px;
  color: rgba(77, 77, 77, 1);
  display: inline-block;
  padding-right: 40px;
}
.fund-content-one .fund-content-one-right {
  background-color: rgba(220, 155, 41, 1);
  border-radius: 4px;
  font-size: 12px;
  color: white;
  padding: 0px 5px;
  margin-top: 5px;
}
.fund-content-two {
  padding-top: 19px;
}
.fund-content-two p,
.fund-content-two h1 {
  display: inline-block;
}
.fund-content-two p {
  font-size: 13px;
  color: rgba(102, 102, 102, 1);
  line-height: 25px;
}
.fund-content-two h1 {
  font-size: 36px;
  color: red;
}
</style>

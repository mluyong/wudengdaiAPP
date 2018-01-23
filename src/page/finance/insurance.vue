<template>

<div>
<mt-header title="车险">
      <router-link to="/finance" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="insurance-box">
        <ul class="insurance">
           <div class="carloan-detail-box" >
              <ul class="carloan-detail">
                	<v-loadmore :bottom-all-loaded="allLoaded"  :autoFill='false' :bottom-method='InsuranceClick' ref='loadmore'>
                        <li v-for="insurances in InsuranceList" :key="insurances.AutoInsuranceID">
                            <router-link :to="`/insurancedetail?id=`+insurances.AutoInsuranceID"><img :src="insurances.ImgUrl" :alt="insurances.Name"/>
                            </router-link>
                        </li>
                    </v-loadmore>
                </ul>
            </div>
        </ul>

    </div>
</div>
</template>

<script>
import loadmore from "mint-ui/lib/loadmore";
export default {
  data() {
    return {
      InsuranceList: [],
      index: 1,
      //隐藏的字
      allLoaded: false,
      //所有数据的长度
      length: "",
      //所有的数据可以分几页
      row: "",
      //每页的数据有几个
      size: ""
    };
  },
  methods: {
    InsuranceClick() {
      var that = this;
      setTimeout(function() {
        that.$http
          .get(
            "http://192.168.2.178:53960/api/AutoInsurance?PageIndex=" +
              that.index +
              "&PageSize=10"
          )
          .then(
            data => {
              that.length = data.body.Data.RowcodCount;
              that.row = Math.ceil(that.length / 10);
              that.size = data.body.Data.Data.length;
              for (var i = 0; i < that.size; i++) {
                that.InsuranceList.push(data.body.Data.Data[i]);
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
  },
  components: {
    "v-loadmore": loadmore
  },
  created() {
    this.InsuranceClick();
  }
};
</script>

<style scoped>
@import url("../../../static/css/common.css");
ul,
li {
  list-style: none;
}

.insurance-box {
  width: 100%;
  padding: 3px;
}
.insurance {
  width: 100%;
  font-size: 0px;
}
.insurance li {
  width: calc(100% / 2 - 0px);
  display: inline-block;
  height: 110px;
  overflow: hidden;
  padding: 2px;
  margin-bottom: 2px;
}
.insurance li img {
  width: 100%;
  height: 100%;
}
</style>

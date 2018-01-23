<template>
  <div>
    <mt-header title="积分商城" fixed>
      <a @click="goback()" slot="left">
      <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="imgall_box">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../../static/img/backgrounds.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/backgrounds.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/backgrounds.jpg" /></mt-swipe-item>
          </mt-swipe>
    </div>

  
    <div class="clear"></div>
   			
		      
	
		<div class="loadmoreCon">
			<div class="bgw scroll">
				<v-loadmore :bottom-all-loaded="allLoaded"  :autoFill='false' :bottom-method='loadbottom' ref='loadmore'>
					<div v-for="item in getdata" v-bind:key="item.IntegralProductID">
					  <div class="shop_box">
              <router-link :to="{ name: 'ShopDetail', params: { IntegralProductID: item.IntegralProductID }}" >
                <div class="float_left" >
                  <div class="shop_box_pa background_white">
                    <div class="img_box">
                      <img src="../../../static/img/backgrounds.jpg" />
                    </div>
                    <div class="shop_box_bottom">
                      <div class="title-tetx">{{item.Title}}</div>
                      <div>
                        <span class="nubmer-text">{{item.Cost}}</span>
                        <span class="word-text">积分</span>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
					</div>
				</v-loadmore>
			</div> 
		</div>


  </div>
</template>

<script>

import loadmore from 'mint-ui/lib/loadmore';  
import  'mint-ui/lib/style.css';  
export default {
  data() {
    return {
      //每次刷新得到的数据
        getdata:[],
      //判断是否加载全部数据
        index:1,
      //隐藏的字
        allLoaded:false,
      //所有数据的长度
        length:"",
      //所有的数据可以分几页
        row:"",
      //每页的数据有几个
        size:"",
  
    };
  },
  methods:{
      //上拉加载的效果
			loadbottom(){
				var that=this;
				setTimeout(function(){
          that.$http
              .get("http://192.168.2.178:53960/api/integralproduct?PageIndex="+that.index+"&PageSize=4")
              .then(
                data => {
                  that.length = data.body.Data.RowcodCount;
                  that.row = Math.ceil(that.length/4);
                  that.size = data.body.Data.Data.length;
                  for(var i =0;i<that.size;i++){
                    that.getdata.push(data.body.Data.Data[i]);
                  }
                  that.index++;
                  if(that.index>that.row){
                    that.allLoaded=true;
                  }
                },
                err => {
                  console.log(err);
                }
              );
					that.$refs.loadmore.onBottomLoaded();
				},1000)
      },
    
    //返回上一个页面的效果，有问题
		goback(){
			this.$router.go(-1);
		}
  },

  components: {
		   'v-loadmore':loadmore
    },
  //加载页面就执行的方法
  created() {
    this.loadbottom();
  }

};
</script>

<style scoped>
@import url("../../../static/css/common.css");







.imgall_box {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.imgall_box img {
  width: 100%;
}
.shop_box {
  width:100%;
}
.shop_box a>div{
  width:  calc( 100% / 2  ); 
}
.shop_box a>div img{
  width: 100%;
}
.img_box{
  height: 150px;
  overflow: hidden;
}
.title-tetx{
  font-size:15px;
  line-height:24px;
  color:#333;
}
.nubmer-text{
  color:red;
  font-size:14px;
}
.shop_box_pa{
  margin:5px;
}
.shop_box_bottom{
  padding:5px 10px;
}
.word-text{
  font-size:12px;
  color:#666;
}

</style>

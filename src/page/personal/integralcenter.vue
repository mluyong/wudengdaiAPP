<template>
  <div>
    <mt-header title="积分">
        <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    <div class="lots">
        <div class="text-size13">积分余额</div>
        <div class="number">500.00</div>
    </div>


   	<div class="user-own clearfix">
		<ul>
				<router-link to="/shop">
						<li>
								<div class="float_left">
									<img src="../../../static/img/jfsc.png" alt="">
									<span>积分商城</span>
								</div>
								<div class="float_right">
									<img src="../../../static/img/go-back.png" alt="">
								</div>
						</li>
				</router-link>
				<router-link to="/mycollent">
					<li>
						<a href="">
							<div class="float_left">
								<img src="../../../static/img/Collection.png" alt="">
								<span>提现</span>
							</div>
							<div class="float_right">
								<img src="../../../static/img/go-back.png" alt="">
							</div>
						</a>
					</li>
				</router-link>
		
		</ul>
	</div>






   
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
@import url("../../../static/css/common.css");
.lots{
  width:100%;
  height: 110px;
  background:rgba(231,148,60,1);
  color:white;
  padding:10px 20px;
}
.number{
  font-size:50px;
  font-family: "ArialMT";
  margin-top:10px;
}
.user-own {
  background-color: rgb(255, 255, 255);
}
.user-own ul li img:first-child {
  width: 22px;
  vertical-align: middle;
  margin: 0 10px 0 0;
}
.user-own ul li img:last-child {
  width: 10px;
  vertical-align: middle;
}
.user-own ul li {
  text-indent: none;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #dbdbdb;
}
</style>

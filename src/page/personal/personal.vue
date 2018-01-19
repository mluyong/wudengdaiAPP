<template>
  <div>
      <div class="text-center user-persion">
		<p>个人中心</p>
	</div>
	<div class="user-header text-center">
		<div class="user-img">
			<img src="" alt="">
		</div>
		<p class="user-user">用户名</p>
		<p class="user-id">ID 165586 </p>
		<router-link to="/logout"><div class="user-setup"></div></router-link>
	</div>
	<div class="clearfix welfare text-center">
		<div class="welfare-left float_left">
			<router-link to="/integralcenter">
			<img class="left-img" src="../../../static/img/integral.png" alt="">
			<span> 积分：500 </span>
			</router-link>
		</div>
		
		<div class="welfare-right float_right">
			<router-link to="/myvalue">
			<img class="right-img" src="../../../static/img/coupon.png" alt="">
			<span> 优惠劵：
				<span class="color"> 1 </span>
			</span>
			</router-link>
		</div>
		
	</div>
	<div class="demand text-center">
		<ul>
			<li>
				<router-link to="/break">
					<img class="wzcx" src="../../../static/img/wzcx.png" alt="">
					<p>违章查询</p>
				</router-link>
			</li>
			<li>
				<router-link to="/license">
					<img class="jzcf" src="../../../static/img/jzcf.png" alt="">
					<p>驾照查询</p>
				</router-link>
			</li>
			<li>
				<router-link to="/newcarsearch">
					<img class="wymc" src="../../../static/img/wymc.png" alt="">
					<p>我要买车</p>
				</router-link>
			</li>
			<li>
				<router-link to="/carassess">
					<img class="acpg" src="../../../static/img/acpg.png" alt="">
					<p>爱车评估</p>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="user-own clearfix">
		<ul>
				<router-link to="/myorder">
						<li>
								<div class="float_left">
									<img src="../../../static/img/order.png" alt="">
									<span>我的订单</span>
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
								<span>我的收藏</span>
							</div>
							<div class="float_right">
								<img src="../../../static/img/go-back.png" alt="">
							</div>
						</a>
					</li>
				</router-link>
				<router-link to="/myfriend">
					<li>
						<a href="">
							<div class="float_left">
								<img src="../../../static/img/frident.png" alt="">
								<span>我的好友</span>
							</div>
							<div class="float_right">
								<img src="../../../static/img/go-back.png" alt="">
							</div>
						</a>
					</li>
				</router-link>
				<router-link to="/mycarhouse">
					<li>
						<a href="">
							<div class="float_left">
								<img src="../../../static/img/kccl.png" alt="">
								<span>我的车库</span>
							</div>
							<div class="float_right">
								<img src="../../../static/img/go-back.png" alt="">
							</div>
						</a>
					</li>
				</router-link>
				<router-link to="/myorder">
					<li>
						<a href="">
							<div class="float_left">
								<img src="../../../static/img/xxzx.png" alt="">
								<span>消息中心
									<div class="new">3</div>
								</span>
							</div>
							<div class="float_right">
								<img src="../../../static/img/go-back.png" alt="">
							</div>
						</a>
					</li>
				</router-link>
		</ul>
	</div>
	<div class="height_47"></div>
  </div>
</template>

<script>
export default {
  
 
};
</script>

<style scoped>
@import url("../../../static/css/persion.css");
@import url("../../../static/css/common.css");
* {
  box-sizing: border-box;
  cursor: pointer;
}
body {
  background-color: #dbdbdb;
}
.user-persion {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  background-color: rgb(255, 255, 255);
}
.user-persion p {
  font-size: inherit;
  color: rgba(0, 0, 0, 1);
}
.user-header {
  width: 100%;
  height: 150px;
  padding: 15px 0px 0 0;
  background: linear-gradient(
    to top,
    rgba(245, 190, 112, 1),
    rgba(242, 153, 51, 1)
  );
  position: relative;
  background-color: rgb(255, 255, 255);
}
.user-img {
  width: 70px;
  margin: 0px auto;
  height: 70px;
  border-radius: 50px;
  border: 3px solid white;
  background: rgba(202, 202, 202, 1);
}
p.user-user {
  font-size: 15px;
  padding: 13px 0 0 0;
  color: rgba(51, 51, 51, 1);
}
p.user-id {
  font-size: 13px;
  padding: 0 0 13px 0;
  color: rgba(51, 51, 51, 1);
}
.user-setup {
  width: 20px;
  height: 19px;
  position: absolute;
  top: 9px;
  right: 5px;
  background: url("../../../static/img/setup.png") no-repeat;
  background-size: 100% 100%;
}
.welfare {
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #ededed;
  background-color: rgb(255, 255, 255);
}
.welfare > div {
  width: 50%;
  line-height: 30px;
  position: relative;
}
.welfare > div span {
  font-size: 15px;
}
.left-img {
  width: 25.5px;
  vertical-align: middle;
}
.right-img {
  width: 48px;
  vertical-align: middle;
}
.welfare-left {
  border-right: 1px solid rgba(138, 138, 138, 1);
}
.demand {
  width: 100%;
  background-color: rgb(255, 255, 255);
}
.demand ul {
  font-size: 0px;
  border-bottom: 5px solid #dbdbdb;
}
.demand ul li {
  display: inline-block;
  list-style: none;
  width: calc(100% / 4);
}
.demand ul li a p {
  font-size: 12px;
  line-height: 30px;
}
.wzcx {
  max-width: 37.5px;
  margin: 11px 0 0px 0px;
}
.jzcf {
  max-width: 36px;
  margin: 8px 0 0px 0px;
}
.wymc {
  max-width: 43.5px;
  margin: 13px 0 0px 0px;
}
.acpg {
  max-width: 34px;
  margin: 10px 0 0px 0px;
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

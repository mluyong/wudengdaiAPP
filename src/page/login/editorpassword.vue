<template>
  <div class="padding_67_75">
	  <div class="fixed"></div>
    	<div class="login margin-bottom_85">修改密码</div>
    	<form>
    		<div class="margin-bottom_10">
    			<input class="text_input_two" placeholder="输入密码" type="text"/>
    		</div>
    		<div class="margin-bottom_10">
    			<input class="text_input_two" placeholder="确认密码" type="text"/>
    		</div>
    		<div class="margin-bottom_47">
    			<input class="text_input_three float_left" placeholder="请输入验证码"/>
    			<input class="text_input_test float_right" value="发送验证码" type="button"/>
    			<span class="test-word float_right">向尾号1111的手机号发送验证码</span>
    			<div class="clear"></div>
    		</div>
    		<div class="text-align-center">
    			<input class="submit_input_200" value="确定" type="submit"/>
    		</div>
    	</form>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>

@import url('../../../static/css/login.css');

.fixed{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0px;
  background:url('../../../static/img/backgrounds.jpg');
  background-size: 100% 100%;
  z-index: -99999999999999999999;
}
</style>
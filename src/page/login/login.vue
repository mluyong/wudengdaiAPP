<template>
  <div class="padding_67_75">
    	<div class="login margin-bottom_231">登录</div>
    	<form>
    		<div class="text_input_box margin-bottom_30">
    			<img src="../../../static/img/user.jpg" />
    			<input class="text_input_one" placeholder="请输入帐号" v-model="phone" type="text"/>
    		</div>
    		<div class="text_input_box margin-bottom_75">
    			<img src="../../../static/img/password.jpg" />
    			<input class="text_input_one" placeholder="请输入密码" v-model="passwords" type="text"/>
    		</div>
    		<div class="margin-bottom_10">
    			<input class="submit_input" value="登录" @click.prevent="mysubmit" type="button"/>
    		</div>
    		<div class="login-e-l margin-bottom_47">
    			<router-link to="/register" class="float_left"> 立即注册</router-link>
    			<router-link to="/edit" class="float_right">忘记密码</router-link>
    			<div class="clear"></div>
    		</div>
    	</form>
    	<div class="imgbox">
    		<img src="../../../static/img/qq.jpg" class="float_left"/>
    		<img src="../../../static/img/weixin.jpg" class="float_right"/>
    	</div>
		<router-view></router-view>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      phone: "",
      passwords: ""
    };
  },
  methods: {
    mysubmit: function() {
      if (!this.phone) {
        return false;
      }
      if (!this.passwords) {
        return false;
      }

      this.$http
        .get("http://wddapi.jiechikeji.com/api/user", {
          params: {
            Password: this.passwords,
            Name: this.phone
          }
        })
        .then(
          data => {
            console.log(11111111111, data.body);
            var check = data.body.Status;
            console.log(check);
            if (check == 0) {
              MessageBox.alert('登录成功','提示信息');
            } else {
              MessageBox.alert('登陆失败，失败原因是：'+data.body.Msg, '提示信息');
            }
          },
          err => {
            console.log(222222, err);
          }
        );
    }
  },
  created() {}
};
</script>

<style>

</style>

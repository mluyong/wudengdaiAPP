<template>
  <div class="padding_67_75">
    <div class="fixed"></div>
		<div class="login margin-bottom_85">注册</div>
		<div class="margin-bottom_10">
			<input class="text_input_two" required="required" @blur="checkMobile()" v-model="phone" placeholder="请输入手机号" type="text" />
			<div class="alert_text" v-show="checkphone">手机格式不正确</div>
		</div>
		<div class="margin-bottom_10">
			<input class="text_input_two"  required="required" @blur="checkPassword()" v-model="passwords" placeholder="输入密码" type="password" id="psdinput" />
			<div class="alert_text" v-show="checkpassword">密码格式不对</div>
		</div>
		<div class="margin-bottom_10">
			<input class="text_input_two" required="required" @blur="checkPasswordAgain()" v-model="passwordagain" placeholder="确认密码" type="password" />
			<div class="alert_text" v-show="checkpasswordagain">两次输入密码不一致</div>
		</div>
		<div class="margin-bottom_47">
			<input class="text_input_three float_left" required="required" placeholder="请输入验证码" v-model="vcode" />
			<input class="text_input_test float_right" value="发送验证码" @click.prevent="sendtext" type="button"/>
			<div class="clear"></div>
			<div class="alert_text" v-show="checkvcode">请输入验证码</div>
		</div>
		<div class="text-align-center">
			<input id="mysubmit" class="submit_input_200" @click.prevent="mysubmit" value="确定" type="button" />
		</div>
	</div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {

  data() {
    return {
      phone: "",
      passwords: "",
      passwordagain: "",
			vcode: "",
			checkphone :false,
			checkpassword:false,
      checkpasswordagain:false,
      checkvcode:false,

    };
  },
  methods: {
    //检查手机号的格式是否正确的方法
    checkMobile: function() {
      this.checkphone=!(/^1[34578]\d{9}$/.test(this.phone));
    },
    //检查密码的格式是否正确的方法
    checkPassword: function() {
      this.checkpassword = !/^(?!_)\w+$/.test(this.passwords) || this.passwords.length < 6 || this.passwords.length > 20
    },
    //检查两次密码是否一致的方法
    checkPasswordAgain: function() {
      this.checkpasswordagain = !(this.passwords == this.passwordagain);
    },
    //注册提交的方法
    mysubmit: function() {
      if (!this.phone || this.checkphone == true) {
        return false;
      }
      if (!this.passwords || this.checkpassword == true) {
        return false;
      }
      if (!this.passwordagain || this.checkpasswordagain == true) {
        return false;
      }
      if (!this.vcode) {
        this.checkvcode = true;
        return false;
      }

      var pdata = {
          Password: this.passwords,
          Phone: this.phone
      }
      var a =JSON.stringify(pdata);
      console.dir(a);
      this.$http
        .post("http://wddapi.jiechikeji.com/api/user?Vcode="+this.vcode, pdata)
        .then(
          data => {
            console.log(data.body);
            var check = data.body.Status;
            console.log(check);
            if (check == 0) {
              MessageBox.alert('注册成功','提示信息');
              this.$router.push({
                name: 'Home',
                params: { userId: this.phone }, 
             
              })
            } else {
              MessageBox.alert('注册失败，失败原因是：'+data.body.Msg, '提示信息');
            }
          },
          err => {
            console.log(222222, err);
          }
        );
    },
    sendtext: function() {
      if (!this.phone || this.checkphone == true) {
        return false;
      }
      this.$http
        .get("http://wddapi.jiechikeji.com/api/SMS?id="+this.phone)
        .then(
          data => {
            MessageBox.alert("发送成功", "提示信息");
            var check = data.body.Status;
          },
          err => {
            console.log(err);
          }
        );
    }
  },
};
</script>


<style scoped>

@import url('../../../static/css/login.css');

</style>

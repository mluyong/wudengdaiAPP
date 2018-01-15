<template>
  <div class="padding_67_75">
    <div class="fixed"></div>
		<div class="login margin-bottom_85">注册</div>
		<div class="margin-bottom_10">
			<input class="text_input_two" required="required" @blur="checkMobile()" v-model="phone" placeholder="请输入手机号" type="text" />
			<div class="alert_text" id='phone' v-show="checkphone">手机格式不正确</div>
		</div>
		<div class="margin-bottom_10">
			<input class="text_input_two"  required="required" onblur="checkPassword(this.value,'password')" v-model="passwords" placeholder="输入密码" type="password" id="psdinput" />
			<div class="alert_text" id='password' v-show="checkpassword">密码格式不对</div>
		</div>
		<div class="margin-bottom_10">
			<input class="text_input_two" required="required" onblur="checkPasswordAgain(this.value,'passwordagain','psdinput')" v-model="passwordagain" placeholder="确认密码" type="password" />
			<div class="alert_text" id='passwordagain' v-show="false">两次输入密码不一致</div>
		</div>
		<div class="margin-bottom_47">
			<input class="text_input_three float_left" required="required" placeholder="请输入验证码" v-model="vcode" />
			<input class="text_input_test float_right" value="发送验证码" @click.prevent="sendtext" type="button" id="sendtext"/>
			<div class="clear"></div>
			<div class="alert_text" id="test" v-show="false">请输入验证码</div>
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
			checkpassword:false

    };
  },
  methods: {
    //检查手机号的格式是否正确的方法
    checkMobile: function() {

			this.checkphone=/^1[3|4|5|8]\d{10}$/.test(this.phone);

    },
    //检查密码的格式是否正确的方法
    checkPassword: function(password, id) {
      if (
        !/^(?!_)\w+$/.test(password) ||
        password.length < 6 ||
        password.length > 20
      ) {
        $("#" + id).show();
        return false;
      } else {
        $("#" + id).hide();
      }
    },
    //检查两次密码是否一致的方法
    checkPasswordAgain: function(passwordagain, id, beforeid) {
      var beforpasswrd = $("#" + beforeid).val();
      if (passwordagain != beforpasswrd) {
        $("#" + id).show();
      } else {
        $("#" + id).hide();
      }
    },
    //注册提交的方法
    mysubmit: function() {
      var checkphone = checkMobile(this.phone, "phone");
      if (!this.phone || checkphone == false) {
        return false;
      }
      var checkpassword = checkPassword(this.passwords, "password");
      if (!this.passwords || checkpassword == false) {
        return false;
      }
      var checkpasswordagain = checkPasswordAgain(
        this.passwordagain,
        "passwordagain",
        "psdinput"
      );
      if (!this.passwordagain || checkpasswordagain == false) {
        return false;
      }
      if (!this.vcode) {
        $("#test").show();
        return false;
      }
      $("#mysubmit").attr("disabled", true);
      this.$http
        .post("http://wddapi.jiechikeji.com/api/user/reg", {
          Password: this.passwords,
          Phone: this.phone,
          vcode: this.vcode
        })
        .then(
          data => {
            console.log(data.body);
            var check = data.body.Status;
            if (check == 0) {
              MessageBox.alert("注册成功", "提示信息");
            } else {
              $("#mysubmit").attr("disabled", false);
              MessageBox.alert("注册失败，失败原因是：" + data.body.Msg, "提示信息");
            }
            //userInfo = JSON.stringify(data);
          },
          err => {
            console.log(err);
          }
        );
    },
    sendtext: function() {
      var checkphone = checkMobile(this.phone, "phone");
      if (!this.phone || checkphone == false) {
        return false;
      }
      this.$http
        .get("http://wddapi.jiechikeji.com/api/user/vcode", {
          params: {
            phone: this.phone
          }
        })
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
  created() {}
};
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

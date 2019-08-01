<template>
  <div>
    <div class="form-container">
      <h1>注册</h1>

      <form :model="form" @submit.prevent="submit">
        <el-tabs v-model="signupby">
          <el-tab-pane label="手机注册" name="phone">
            <label>手机号</label>
            <el-input v-model="form.phone"></el-input>
          </el-tab-pane>
          <el-tab-pane label="邮箱注册" name="email">
            <label>邮箱</label>
            <el-input v-model="form.email"></el-input>
          </el-tab-pane>
        </el-tabs>

        <label>密码</label>
        <el-input type="password" v-model="form.password"></el-input>
        <label>验证码</label>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" @click="sendcode" :disabled="!!sendCodeCountDown">
            <span v-if="sendCodeCountDown">{{sendCodeCountDown}}s</span>
            <span v-if="!sendCodeCountDown">发送验证码</span>
          </el-button>
        </el-input>

        <label>
          <button type="submit">加入吃货团</button>
        </label>
      </form>
    </div>
  </div>
</template>
<script>
import api from "../lib/api.js";
export default {
  data() {
    return {
      signupby: "phone",
      form: {
        phone: "",
        email: ""
      },
      sendCodeCountDown: 0
    };
  },
  methods: {
    validate() {
        
    },
    submit(){

    },
    sendcode() {
      let action;

      if (this.sendCodeCountDown) return;

      this.sendCodeCountDown = 60;
      let time = setInterval(() => {
        this.sendCodeCountDown--;
        if (this.sendCodeCountDown == 0) {
          clearInterval(time);
          return;
        }
      }, 1000);
      if (this.signupby == "phone") {
        action = "sms";
      } else {
        action = "mail";
      }

      api(`captcha/${action}`, {
        phone: this.form.phone,
        mail: this.form.email
      });
    }
  }
};
</script>
<style scoped>
</style>

<template>
  <div>
    <div class="form-container">
      <h1>账号找回</h1>

      <el-form @submit.native.prevent="submit()">
        <el-tabs v-model="recoverby" v-if="step == 1">
              <el-tab-pane name="phone" label="手机账号">
                <el-form-item label="手机号">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane name="email" label="邮箱账号">
                <el-form-item label="邮箱">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
              </el-tab-pane>
        </el-tabs>
        
        <el-form-item label="验证码" v-if="step == 2">
          <el-input v-model="form.code">
            <el-button slot="append" @click="sendcode()">发送验证码<span v-if="countDown"></span> <span></span> </el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="输入新密码" v-if="step == 3">
          <el-input v-model="form.password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="next()">下一步</el-button>
        </el-form-item>
        <div v-for="e in error" :key="e">{{e}}</div>
      </el-form>
    </div>
  </div>
</template>
<script>
import session from "../lib/session.js";
import api from "../lib/api.js";
import {send} from "../lib/captcha.js"
export default {
  data() {
    return {
      send,
      api,
      form: {
        phone:"",
        email:"",
        password: "",
        code:"",
      },
      user:null,
      error: [],
      step:1,
      recoverby:"phone",
      returnCode:null,
    };
  },
  methods: {
    validate(){
      let recoverby = this.recoverby;
      let form =this.form;
      this.error = [];
        if(recoverby == "phone"){
          if(!form.phone || !/^1[3-9]\d{9}$/.test(form.phone)){
            this.error.push("手机格式有误");
          }
        }
        if(recoverby == "email"){
          if(!form.email || !/^\w+@\w+\.\w+$/.test(form.email)){
            this.error.push("邮箱格式错误");
          }
        }
        return this.error;
    },
    next(){
      this.error = [];
      let recoverby = this.recoverby;
      if(this.step == 1){
        if(this.validate().length != 0){
          return;
        }else{
          api("user/first",{where:{and:{
            [recoverby]:this.form[recoverby]
            
          }}}).then(r=>{
            let data = r.data;
            if(!data){
                this.error.push("账号不存在");
            }else{
              this.user = data;
              this.step++;
            }
          })
        }
      }
      if(this.step == 2){
        if(!this.form.code || this.returnCode!=this.form.code){
            this.error.push("验证码错误");
        }else{
          this.step ++;
        }
      }
      if(this.step == 3){
          let params = {
            id:this.user.id,
            recoverby:this.form[recoverby],
            password:this.form.password,
          }
          if(!this.form.password || !/\w{6,12}/.test(this.form.password)){
            this.error.push("密码错误，密码长度应在6-12位之间");
          }else{
            this.form.id = this.user.id;
            api("user/update",params).then(r=>{
              this.$router.push('/login');
            })
          }
      }
        
    },
    sendcode(){

      send(this.recoverby,this.form[this.recoverby],code=>{
        this.return = code;
      })
      // let recoverby = this.recoverby;
      // let action;
      // if(recoverby == "phone"){
      //   action = "sms";
      // }
      // if(recoverby == "email"){
      //   action = "mail";
      // }
      // api(`captcha/${action}`,{
      //   phone:this.form.phone,
      //   email:this.form.email,
      // }).then(r=>{
      //   this.returnCode = atob(r.data.result);
      // })
    }
  
  }
};
</script>
<style scoped>
</style>

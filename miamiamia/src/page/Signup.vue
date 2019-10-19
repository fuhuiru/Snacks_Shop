<template>
  <div>
    <div class="form-container">
      <h1>注册</h1>
      <el-form @submit.native.prevent="submit()" aria-label="手机号/邮箱">
          <el-tabs v-model="signupby">
              <el-tab-pane name="phone" label="手机注册">
                <el-form-item label="手机号">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane name="email" label="邮箱注册">
                <el-form-item label="邮箱">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
              </el-tab-pane>
          </el-tabs>
          
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          
          <el-form-item label="验证码">
            <el-input placeholder="请输入内容" v-model="form.code">
              <el-button slot="append" @click="sendCode()" :disabled="!!sendCodeCountDown"><span v-if="sendCodeCountDown">{{sendCodeCountDown}}s后重新发送验证码</span> <span v-else>发送验证码</span> </el-button>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" native-type="submit">加入吃货团</el-button>
            <el-button type="text"><router-link to="/login" class="text">已有账号？直接登录</router-link></el-button>
          </el-form-item>
          <div>
            <div v-for="e in error" :key="e">{{e}}</div>
          </div>
      </el-form>
      
    </div>
  </div>
</template>
<script>
import session from "../lib/session.js";
import api from "../lib/api.js";
export default{
    data(){
      return{
        session,
        api,
        signupby:"phone",
        form:{
          phone:"",
          email:"",
          password:"",
          username:"",
          code:""
        },
        error:[

        ],
        timer:null,
        sendCodeCountDown:0,
        returnCode:null,
      }
    },
    methods: {
      validatePhoneOrEmail(){
        this.error = [];
        let form = this.form;
        let signupby = this.signupby;
        if(signupby == "phone"){
          if(!form.phone || !/^1[3-9]\d{9}$/.test(form.phone)){
            this.error.push("手机格式有误");
          }
        }
        if(signupby == "email"){
          if(!form.email || !/^\w+@\w+\.\w+$/.test(form.email)){
            this.error.push("邮箱格式错误");
          }
        }
        return this.error;

      },
      validateAll(){

        this.error = [];
        let form = this.form;
        this.validatePhoneOrEmail();
    
        if(!form.password || !/\w{6,12}/.test(form.password)){
          this.error.push("密码错误，密码长度应在6-12位之间");
        }

      console.log(this.returnCode,form.code)
        if(!form.code || this.returnCode != form.code){
          this.error.push("验证码错误");
        }

        return this.error;
      },
      sendCode(){

        if(this.validatePhoneOrEmail().length != 0)
        return;

        this.sendCodeCountDown = 5;

        this.timer = setInterval(() => {
          this.sendCodeCountDown--;
          if(this.sendCodeCountDown == 0){
            clearInterval(this.timer);
          }
        }, 1000);
        
        let form = this.form;
        let signupby = this.signupby;
        let action;
        if(signupby == "phone"){
          action = "sms";
        }
        if(signupby == "email"){
          action = "mail";
        }

        api(`captcha/${action}`,{phone:form.phone,mail:form.email})
          .then(r=>{
            this.returnCode = atob(r.data.result);
          })


      },
      submit(){
        if(this.validateAll().length != 0)
        return;

        api("user/first",{where:{or:{phone:this.form.phone,email:this.form.email}}}).then(r=>{
          this.error = [];
          if(r.data){
            this.error.push("账号已被注册");
          }else{
            api("user/create",this.form).then(r=>{
                console.log(r.data);
                this.$router.push("/login");
            })
          }
          return;
        })

      }
    },
}
</script>
<style scoped>
.text{
  color:#66b1ff;
  text-decoration: none;
}
</style>

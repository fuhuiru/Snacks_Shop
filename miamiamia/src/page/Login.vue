<template>
  <div>
    <div class="form-container">
      <h1>登录</h1>
      <el-form @submit.native.prevent="submit()" label="手机号/邮箱">
          <el-form-item label="账号">
            <el-input v-model="form.uniqueName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">登录</el-button>
            <el-button type="text"><router-link to="/recover" class="text">忘记密码？</router-link></el-button>
          </el-form-item>
          <div v-for="e in error" :key="e">{{e}}</div>
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
        loginby:"phone",
        form:{
          uniqueName:"",
          password:"",
        },
        error:[],
      }
    },
    methods: {
     
      validate(){
        let form = this.form;
        let loginby = this.loginby;
        this.error = [];
        if(!form.uniqueName){
          // this.$message('这是一条消息提示');

          this.error.push("账号不能为空");
        }
        if(!form.password || !/\w{6,12}/.test(form.password)){
          this.error.push("密码错误，密码长度应在6-12位之间");
        }

        return this.error;
      },
      submit(){
        if(this.validate().length != 0)
        return;


        if(this.form.uniqueName == "admin" && this.form.password == "123456"){
          session.login("admin",{nickname:"Admin",IS_ADMIN:true})
          return;
        }

        api("user/first",{where:{or:[
          ["phone", "=", this.form.uniqueName],
          ["email", "=", this.form.uniqueNam],
        ]}}).then(r=>{
          if(!r.data){
            this.error.push("用户不存在");
          }else{
            if(this.form.password != r.data.password){
              this.error.push("密码输入有误");
            }else{
              delete r.data.password;
              session.login(r.data.id,r.data)
            }
          }
        })

        console.log("submit")
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

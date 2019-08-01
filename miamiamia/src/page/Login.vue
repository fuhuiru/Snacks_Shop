<template>
  <div>
    <div class="form-container">
      <h1>登录</h1>

      <el-form :model="form">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="手机登录" name="first">
             <el-form-item label="手机号">
          <el-input v-model="form.uniquename"></el-input>
        </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="邮箱登录" name="second">
             <el-form-item label="邮箱">
          <el-input v-model="form.uniquename"></el-input>
        </el-form-item>
          </el-tab-pane>
        </el-tabs>
       
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">立即创建</el-button>
          <el-button type="text" @click="submit">
            <router-link to="/">忘记密码？</router-link>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        uniquename: "",
        password: ""
      }
    };
  }
};
</script>
<style scoped>
</style>

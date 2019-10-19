<template>
  <div class="nav">
    <div class="container">
      <el-row>
        <el-col :span="12" class="text-left">
          <a class="nav-item" href="#">item</a>
          <a class="nav-item" href="#">item</a>
          <a class="nav-item" href="#">item</a>
          <a class="nav-item" href="#">item</a>
          <a class="nav-item" href="#">item</a>
        </el-col>
        <el-col :span="12" class="text-right">
          <a class="nav-item" href="#">item</a>
          <a class="nav-item" href="#">item</a>
          <a class="nav-item" href="#">item</a>
          <span v-if="session.loggedIn()">
            <router-link class="nav-item" to="/my/setting">{{session.user("nickname") || session.user("phone") || session.user("email")}}</router-link>
            <span class="nav-item" @click="session.logout()">登出</span>
          </span>
          <span v-else>
            <router-link class="nav-item" to="/login">登录</router-link>
            <router-link class="nav-item" to="/signup">注册</router-link>
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import session from "../lib/session";
export default {
  data(){
    return{
      session,
    }
  }
};
</script>
<style scoped>
.nav-item {
  display: inline-block;
  padding: 0.4em 0.6em;
  color: #555;
  text-decoration: none;
}
.nav-item:hover {
  color: black;
  text-decoration: underline;
}
.nav {
  background: rgba(0, 0, 0, 0.1);
}
</style>

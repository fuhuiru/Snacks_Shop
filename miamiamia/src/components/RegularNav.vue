<template>
  <div class="nav">
    <div class="container">
      <el-row :gutter="10">
        <el-col :span="6">
          <router-link to="/">
            <div class="logo">
              <img src="../image/mia.png" alt="logo">
            </div>
          </router-link>
        </el-col>
        <el-col :span="12">
          <form class="search">
            <el-input suffix-icon="el-icon-search"></el-input>
          </form>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// import mia from "../image/mia.png";
// export default {
//   data() {
//     return {
//       logoimg: mia
//     };
//   }
// };
</script>
<style scoped>
.logo {
  /* padding: 1em; */
  max-width: 10em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
img {
  width: 100%;
  height: 100%;
}
.search {
  margin-top: 22px;
}
</style>

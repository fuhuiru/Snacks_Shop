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
          <a class="nav-item" href="#">item</a>
          <a class="nav-item" href="#">item</a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
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
.nav{
    background: rgba(0,0,0,0.1);
}
</style>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="3">
        <el-menu
          default-active="user"
          :router="true"
          class="el-menu-vertical-demo"
         
        >
          <el-menu-item index="user">
            <!-- <i class="el-icon-menu"></i> -->
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="order">
            <!-- <i class="el-icon-document"></i> -->
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="brand">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">品牌设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
          <router-view></router-view>

      </el-col>
    </el-row>
    
  </div>
</template>
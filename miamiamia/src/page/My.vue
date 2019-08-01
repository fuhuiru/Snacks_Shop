<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="3">
        <el-menu
          default-active="cart"
          :router="true"
          class="el-menu-vertical-demo"
         
        >
          <el-menu-item index="cart">
            <!-- <i class="el-icon-menu"></i> -->
            <span slot="title">购物车</span>
          </el-menu-item>
          <el-menu-item index="order">
            <!-- <i class="el-icon-document"></i> -->
            <span slot="title">订单</span>
          </el-menu-item>
          <el-menu-item index="setting">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
          <router-view></router-view>

      </el-col>
    </el-row>
    
  </div>
</template>
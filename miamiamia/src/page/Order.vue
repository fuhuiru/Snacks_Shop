<template>
  <div>
    <div class="order">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="260"></el-table-column>
        <el-table-column prop="name" label="姓名" width="260"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped>
.order{
    margin-right: 80px;
}
</style>

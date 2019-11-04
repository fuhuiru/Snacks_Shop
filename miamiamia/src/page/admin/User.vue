<template>
  <div>
    <h1>用户管理</h1>
    <div>
      <el-button-group>
        <el-button @click="ui.formVisible = !ui.formVisible" size="mini">创建</el-button>
      </el-button-group>
    </div>
    <div v-if="ui.formVisible">
      <h2>添加/修改</h2>
      <form @submit.prevent="createOrUpdate()">
        <label>
          <span class="title">昵称</span>
          <input type="text" v-model="form.nickname">
          <span class="error-list">
            <span v-if="invalid" v-for="(invalid, e) in errors.nickname"  :key="e" class="error">{{rules.nickname[e].msg}}</span>
          </span>
        </label>
        <label>
          <span class="title">电话</span>
          <input type="text" v-model="form.phone">
          <span class="error-list">
            <span v-if="invalid" v-for="(invalid, e) in errors.phone"  :key="e" class="error">{{rules.phone[e].msg}}</span>
          </span>
        </label>
        <label>
          <span class="title">邮箱</span>
          <input type="email" v-model="form.mail">
          <span class="error-list">
            <span v-if="invalid" v-for="(invalid, e) in errors.mail"  :key="e" class="error">{{rules.mail[e].msg}}</span>
          </span>
        </label>
        <label>
          <span class="title">密码</span>
          <input type="text" v-model="form.password">
          <span class="error-list">
            <span v-if="invalid" v-for="(invalid, e) in errors.password"  :key="e" class="error">{{rules.password[e].msg}}</span>
          </span>
        </label>
        <label>
          <button class="el-button el-button--default el-button--mini" type="submit">提交</button>
        </label>
      </form>
    </div>
    <div>
      <h2>列表</h2>
      <p>总数：{{total}}</p>
      <el-table
              :data="list"
              stripe
              style="width: 100%">
        <el-table-column
                prop="nickname"
                label="昵称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="phone"
                label="手机号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="mail"
                label="邮箱">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
          <template slot-scope="scope">
            <el-button @click="fill(scope.row)" type="text" size="small">更新</el-button>
            <el-button @click="remove(scope.row.id)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="text-center">
        <el-pagination
                :page-size="readParam.limit"
                :current-page="readParam.page"
                layout="prev, pager, next"
                :total="total"
                @current-change="flip"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import { call as valee } from '../../lib/valee';
  import admin             from '../../mixin/admin';

  export default {
    mixins  : [ admin ],
    data () {
      return {
        model  : 'user',
        rules  : {
          mail     : {
            unique : {
              params : [ 'user', 'exists', 'mail' ],
              msg    : '邮箱已存在',
            },
            mail   : {
              msg : '邮箱格式有误',
            },
          },
          phone    : {
            required : {
              msg : '手机号为必填项',
            },
            unique   : {
              params : [ 'user', 'exists', 'phone' ],
              msg    : '手机号已存在',
            },
            phone    : {
              msg : '手机号格式有误',
            },
          },
          password : {
            required      : {
              msg : '密码为必填项',
            },
            lengthBetween : {
              params : [ 6, 24 ],
              msg    : '密码长度需在6位24位之间',
            },
            regex         : {
              params : [ /(?=[^0-9]*[0-9]+)(?=[^a-zA-Z]*[a-zA-Z]+)/ ],
              msg    : '密码必须包含字母和数字',
            },
          },
          nickname : {
            lengthBetween : {
              params : [ 2, 24 ],
              msg    : '昵称长度需在2至24位之间',
            },
            // required : {
            //   msg : '此项为必填项',
            // },
          },
        },
      };
    },
    methods : {},
  };
</script>
<style scoped>
  form label{
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  form label .title{
    padding-right: 20px;
  }
</style>


<template>
  <div>
    <div class="form-container">
      <h1>账号恢复</h1>
      <form @submit.prevent="nextStep()">
        <div v-if="step == 1">
          <el-tabs v-model="recoverBy">
            <el-tab-pane label="通过手机恢复" name="phone">
              <label>
                <span class="title">手机号</span>
                <el-input v-model="form.phone"></el-input>
              </label>
            </el-tab-pane>
            <el-tab-pane label="通过邮箱恢复" name="mail">
              <label>
                <span class="title">邮箱</span>
                <el-input v-model="form.mail"></el-input>
              </label>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div v-if="step == 2">
          <label>
            <el-row>
              <el-col :span="18">
                <el-input v-model="form.code" placeholder="请输入内容" class="input-with-select">
                </el-input>
              </el-col>
              <el-col :span="6">
                <Captcha :sendBy="recoverBy"
                         @send="onCaptchaSend"
                         className="el-button el-button--default"
                         :receiver="form[recoverBy]"/>
              </el-col>
            </el-row>
          </label>
        </div>
        <div v-if="step == 3">
          <label label="密码">
            <el-input type="text" v-model="form.password" placeholder="请输入新密码"></el-input>
          </label>
        </div>
        <div class="error">
          <div v-for="e in errors" :key="e">{{e}}</div>
        </div>
        <label>
          <button type="submit" class="el-button el-button--primary">下一步</button>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
  import { is }   from '../lib/valee';
  import { send } from '../lib/captcha';
  import Captcha  from '../components/Captcha';

  export default {
    components : { Captcha },
    data () {
      return {
        recoverBy         : 'phone',
        form              : {
          phone    : '',
          mail     : '',
          password : '',
          code     : '',
        },
        sendCodeCountDown : 0,
        errors            : [],
        code              : null,
        codeTimer         : null,
        step              : 1,
        user              : null,
      };
    },
    methods    : {
      validate () {
        let f         = this.form;
        let e         = this.errors = [];
        let recoverBy = this.recoverBy;

        if (!this.form[ this.recoverBy ]) {
          e.push('邮箱或手机为必填项');
        }

        if (recoverBy == 'phone' && !is.phone(f.phone))
          e.push('手机格式有误');

        if (recoverBy == 'mail' && !is.mail(f.mail))
          e.push('邮箱格式有误');

        if (f.password.length < 6)
          e.push('密码长度不可小于6');

        if (f.code != this.code)
          e.push('验证码有误');

        if (e.length)
          return false;

        return true;
      },
      onCaptchaSend(code) {
        this.code = code;
      },
      nextStep () {
        let f       = this.form;
        let by      = this.recoverBy;
        this.errors = [];

        switch (this.step) {
          case 1:
            if (!f[ by ]) {
              this.errors.push('请输入账号');
              return;
            }

            api('user/first', {
              where : {
                and : {
                  [ by ] : f[ by ],
                },
              },
            })
              .then(r => {
                let user = r.data;
                if (!user) {
                  this.errors.push('账号不存在');
                } else {
                  this.user = user;
                  this.step++;
                }
              });
            break;
          case 2:
            if (this.code !== f.code) {
              this.errors.push('验证码有误');
            } else {
              this.step++;
            }
            break;
          case 3:
            let params = {
              id       : this.user.id,
              password : f.password,
              [ by ]   : f[ by ],
            };

            api('user/update', params)
              .then(r => {
                this.$router.push('/login');
              });
            break;
        }
      },
      sendCode () {
        send(this.recoverBy, this.form[ this.recoverBy ], (code) => {
          this.code = code;
        });
      },
    },
  };
</script>

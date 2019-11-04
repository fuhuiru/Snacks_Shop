import { call as valee } from '../lib/valee';

export default {
  mounted () {
    this.read();
  },
  data () {
    return {
      ui           : {
        formVisible : false,
      },
      readParam    : {
        limit : 2,
        page  : 1,
      },
      list         : [],
      form         : {},
      total        : 0,
      formOriginal : null,
      rules        : {},
      errors       : {},
    };
  },
  methods : {
    flip (page) {
      this.readParam.page = page;
      this.read();
    },

    validate (field) {
      let value      = this.form[ field ];
      let fieldValid = true;
      // 先拿到所有的规则
      // {
      //   lengthBetween : {
      //     params : [ 4, 12 ],
      //       msg    : '最小长度需在4至12位之间',
      //   }
      //   required : {
      //       msg    : '此项为必填项',
      //   }
      // }
      let rules = this.rules[ field ];

      // 检查每一条规则是否合法
      for (let key in rules) {
        // 比如说是lengthBetween
        // {
        //   params : [ 4, 12 ],
        //     msg    : '最小长度需在4至12位之间',
        // }
        let rule   = rules[ key ];
        let params = rule.params || [];

        // 调用biao valee对应的验证函数
        // 比如说valee.lengthBetween('whh', 4, 12)
        let valid = valee(key, value, ...params);

        if (typeof valid == 'boolean') {
          this.afterValidate(field, key, valid);
          if (!valid)
            fieldValid = false;
        } else {
          valid.then(r => {
            this.afterValidate(field, key, r);
            // if (!r)
            //   fieldValid = false;
          });
        }
      }

      return fieldValid;
    },

    /**
     * 验证表单中所有的属性
     * 如果有一个属性未通过验证就返回false
     */
    validateForm () {
      let rules    = this.rules;
      let valid    = true;
      let f        = this.form;
      let isUpdate = !!f.id;

      for (let field in rules) {
        // 如果是更新，且这个属性完全没有改，那就没必要做验证
        // 比如说whh的昵称改为whhhh，但是手机号没有变，
        // 那就没必要验证手机号
        if (isUpdate && f[ field ] === this.formOriginal[ field ])
          continue;

        if (!this.validate(field))
          valid = false;
      }

      return valid;
    },

    /**
     * 当某一个字段的某一个规则验证完毕时
     * @param {string} field
     * @param {bool} valid
     */
    afterValidate (field, rule, valid) {
      // 拿到对应的错误对象
      let fieldObj = this.errors[ field ];

      // 如果不存在，就初始化一个空对象
      if (!fieldObj)
        fieldObj = this.$set(this.errors, field, {});

      // 将对象中对应的验证规则设为valee返回的结果
      // 如：fieldObj['lengthBetween'] = true;
      this.$set(fieldObj, rule, !valid);
    },

    fill (row) {
      this.ui.formVisible = true;
      this.formOriginal   = row;
      this.form           = { ...row };
    },

    remove (id) {
      if (!confirm('确定要删除此项吗？'))
        return;

      api(`${this.model}/delete`, { id })
        .then(r => {
          this.read();
        });
    },

    read () {
      api(`${this.model}/read`, this.readParam)
        .then(r => {
          this.list  = r.data;
          this.total = r.total;
        });
    },

    createOrUpdate () {
      if (!this.validateForm())
        return;

      let f = this.form;
      let action;

      if (f.id)
        action = 'update';
      else
        action = 'create';

      api(`${this.model}/${action}`, f)
        .then(r => {
          this.resetForm();
          this.read();
        });
    },

    resetForm () {
      this.ui.formVisible = false;
      this.form           = {};
    },
  },
};

<template>
  <div>
    <button @click="send()"
            type="button"
            :class="className"
            :disabled="count !== 0">
      <span v-if="count">{{count}}s</span>
      <span v-else>发送验证码</span>
    </button>
  </div>
</template>

<script>
  import {send} from '../lib/captcha';

  export default {
    props: ['sendBy', 'receiver', 'className', 'countDown'],

    data() {
      return {
        timer: null,
        count: 0, // 验证码发送倒计时
      }
    },

    methods: {
      send() {
        if (this.count)
          return;

        this.count = this.countDown || 60;

        this.timer = setInterval(() => {
          this.count--;

          if (this.count == 0)
            clearInterval(this.timer);
        }, 1000);

        send(this.sendBy, this.receiver)
          .then(r => {
            this.$emit('send', r);
          });
      }
    }
  };
</script>

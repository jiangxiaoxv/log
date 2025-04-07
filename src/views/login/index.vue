<template>
  <div class="login-wrap">{{ title }}</div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('请登录')
</script>
<style scoped lang="less">
.login-wrap {
  font-size: 28px;
  color: aqua;
}
</style>

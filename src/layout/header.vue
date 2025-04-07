<template>
  <div class="header-wrap">{{ title }}</div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('欢迎来到嵩山实验室--头部')
</script>
<style scoped lang="less">
.header-wrap {
  font-size: 28px;
  @apply tw-text-green-600 tw-text-center tw-py-25;
}
</style>

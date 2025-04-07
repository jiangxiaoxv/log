<template>
  <div class="layout-wrap">
    <Header />
    <slot name="default"> </slot>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './header.vue'

const route = useRoute()
const noNeedLayout = computed(() => {
  return route.meta?.noNeedLayout || false
})
onMounted(() => {
  console.log(noNeedLayout.value)
})
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped lang="less">
.layout-wrap {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>

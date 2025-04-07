<template>
  <el-breadcrumb v-if="routerList && routerList.length" separator-icon="ArrowRight">
    <template v-for="routerItem in routerList" :key="routerItem.path">
      <template v-if="routerItem.path">
        <el-breadcrumb-item :to="{ path: routerItem.path }">{{ routerItem.label }}</el-breadcrumb-item>
      </template>
      <template v-else>
        <el-breadcrumb-item>{{ routerItem.label }}</el-breadcrumb-item>
      </template>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  routerList: {
    type: Array,
    default: () => [],
    required: true
  }
})
onMounted(() => {})
</script>
<style scoped lang="less"></style>

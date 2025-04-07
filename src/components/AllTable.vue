<template>
  <el-table v-bind="$attrs" ref="tableRef" :data="tableData" style="width: 100%" size="large">
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </el-table>
</template>

<script setup>
import { ref, useSlots, onMounted, getCurrentInstance } from 'vue'

const props = defineProps({
  tableData: {
    type: Array,
    default: () => []
  }
})
// const slot = useSlots()

const { proxy } = getCurrentInstance()

const tableRef = ref()

defineExpose({
  tableRef
})

onMounted(() => {})
</script>

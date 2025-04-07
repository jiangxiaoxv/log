<template>
  <CustomTable v-loading="loading" :table-data="tableData" @selection-change="handleSelectChange">
    <template #empty>暂无数据</template>
    <CustomColumn :table-headers="tableHeaderMapper">
      <template #default-a="scope"> I am slot of a {{ scope.$index }}</template>

      <template #default-action="scope">
        <div class="tw-flex tw-items-center tw-flex-wrap">
          <p><el-button @click="handleEdit(scope.row)">编辑</el-button></p>
          <p class="tw-ml-8"><el-button @click="handleDelete(scope.row)">删除</el-button></p>
        </div>
      </template>
    </CustomColumn>
  </CustomTable>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import CustomColumn from '@/components/AllColumn.vue'
import CustomTable from '@/components/AllTable.vue'
import CustomButton from '@/components/CustomButton.vue'
import { getData } from '@/api/test'

const tableData = ref([])
// 定义新的Header结构，key为column的prop/key，value为column的label
const tableHeaderMapper = {
  selection: {
    type: 'selection',
    width: 55,
    fixed: true
  },
  a: {
    label: '列a',
    width: '200',
    inner: CustomButton,
    fixed: true
    // inner: h("h1", "function components!"),
    // inner: "<h1>hello</h1>",
  },
  b: '列b',
  c: '列c',
  d: '列d',
  e: '列e',
  f: '列f',

  action: {
    label: '操作',
    width: 200,
    fixed: 'right'
  }
}
const loading = ref(false)

function handleEdit(rowItem) {
  console.log('>>>>>>>>>>>>>>>>>>rowItem', rowItem)
}

function handleDelete(rowItem) {
  console.log('>>>>>>>>>>>>>>>>>>rowItem', rowItem)
}

function handleSelectChange(data) {
  console.log('>>>>>>>>>>>>>>>>>>tableData', data)
}
onMounted(() => {
  loading.value = true
  getData().then((res) => {
    tableData.value = res.data
    loading.value = false
  })
})
</script>

<template>
  <div class="log">
    <h1 class="tw-text-center tw-font-bold tw-py-8">{{ title }}</h1>

    <div class="log-table">
      <el-table :data="tableData" style="width: 100%; height: calc(100vh - 62px)">
        <el-table-column prop="id" label="异常执行体D" />
        <el-table-column prop="reason" label="异常原因" />
        <el-table-column prop="strategy" label="裁决策略" />
        <el-table-column prop="date" label="裁决时间" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getLogData } from '@/api/log'

const title = ref('拟态裁决日志')

const tableData = ref([])

async function getData() {
  try {
    const data = await getLogData()
    console.log('>>>>>>data', data)
    // tableData.value = [...data.data]
  } catch (err) {
    // tableData.value = err
    console.log('>>>>>>.err', err)
  }
}

onMounted(() => {
  const data = []
  // for (let i = 0; i < 10; i++) {
  //   data.push({
  //     id: i + 1,
  //     reason: 'Tom',
  //     strategy: '甲醛味太重',
  //     date: '2024-04-03'
  //   })
  // }

  // tableData.value = data
  getData()
})
</script>
<style scoped lang="less">
.log {
  // font-size: 28px;
  // color: aqua;
  background: linear-gradient(180deg, #ecfafa, #f8f8f8);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
}
</style>

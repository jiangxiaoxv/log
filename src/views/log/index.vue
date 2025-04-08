<template>
  <div class="log">
    <h1 class="tw-text-center tw-font-bold tw-py-12">{{ title }}</h1>

    <div class="log-table">
      <el-table :data="tableData" style="width: 100%; height: calc(100vh - 70px)">
        <el-table-column prop="id" label="异常执行体ID" />
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
    const result = await getLogData()
    if (result.data) {
      const data = JSON.parse(result.data)
      console.log(data)
      const logList = []
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          const item = {
            date: data[i]['event_header'][1],
            strategy: data[i]['event_entity']['event_action'],
            reason: data[i]['event_entity']['dmf_info.dmf_content'],
            id: data[i]['event_entity']['dmf_info.dmf_executor_ip']
          }
          logList.push(item)
        }
      }
      tableData.value = logList || []
    }
  } catch (err) {
    // tableData.value = err
    console.log('>>>>>>.err', err)
  }
}

onMounted(() => {
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

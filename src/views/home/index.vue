<template>
  <Layout>
    <div class="home-wrap">
      <div class="tw-ml-18 tw-text-center tw-pt-[50px]">
        <el-button type="primary" @click="handleClick">去about页面</el-button>
      </div>

      <div class="home-main-content">
        <router-view v-slot="{ Component }">
          <transition>
            <!-- <keep-alive> -->
            <component :is="Component" />
            <!-- </keep-alive> -->
          </transition>
        </router-view>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 如果只是用组件 API，您需要手动导入样式
import 'element-plus/es/components/button/style/css'
import Layout from '@/layout/index.vue'
import { useCounterStore } from '@/stores/counter.js'

const store = useCounterStore()

const router = useRouter()

function handleClick() {
  console.log('去about页面')
  router.push('/about')
}

onMounted(() => {
  console.log(store.count)

  setTimeout(() => {
    store.increment()
  }, 2000)
})
</script>

<style lang="less" scoped>
.home-wrap {
  @apply tw-text-red-500;
  font-size: 30px;

  .home-main-content {
    margin-top: 30px;
  }
}
</style>

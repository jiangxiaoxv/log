<template>
  <Layout>
    <div class="tw-text-center tw-mt-12">
      <el-button type="primary" @click="handleGoHome">去home页面</el-button>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '@/layout/index.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

function handleGoHome() {
  router.push('/home')
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

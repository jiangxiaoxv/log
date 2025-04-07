<template>
  <div class="tw-flex tw-items-center tw-justify-center home-wrap">
    <div>welcome 子页面</div>
    <div>count: {{ count }}</div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count } = storeToRefs(store)
</script>

<style lang="less" scoped></style>

<template>
  <div class="tw-relative tw-h-full tw-w-full">
    <div v-show="loading" :style="{ height: height + 'px' }">
      <div class="tw-absolute load-wrap" :style="{ top: top + 'px' }">
        <div class="tw-text-center">
          <img :src="LoadingPng" class="tw-object-cover tw-w-[400px] tw-h-[300px]" />
        </div>
        <div v-if="loadingText" class="tw-text-center tw-text-gray-350 tw-font-normal tw-text-12 tw-leading-3 tw-mt-[-140px]">
          {{ loadingText }}
        </div>
      </div>
    </div>

    <transition>
      <div v-show="!loading" class="tw-h-full tw-w-full"><slot name="default"></slot></div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, watchEffect } from 'vue'
import LoadingPng from '@/assets/loading.gif'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  top: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 500
  },
  loadingText: {
    type: String,
    default: ''
  }
})
onMounted(() => {})
</script>
<style scoped lang="less">
.load-wrap {
  left: 50%;
  transform: translateX(-50%);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

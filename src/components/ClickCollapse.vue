<template>
  <div class="collapse-wrap">
    <div class="tw-flex tw-items-center tw-bg-[#657fa8] tw-p-8 tw-text-white tw-cursor-pointer" @click="handleTitleClick">
      <el-icon :class="['arrow-icon', !collapseStatus ? 'rorate-icon' : '']"><ArrowUpBold /></el-icon>
      <span class="tw-ml-6">{{ title }}</span>
    </div>
    <div ref="stateDom" class="tab-content">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const collapseStatus = ref(true)
const stateDom = ref(null)
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

watch(
  () => collapseStatus.value,
  () => {
    if (stateDom.value.style.maxHeight) {
      stateDom.value.style.maxHeight = null
    } else {
      stateDom.value.style.maxHeight = stateDom.value.scrollHeight + 'px'
    }
  }
)

function handleTitleClick() {
  collapseStatus.value = !collapseStatus.value
}
</script>
<style scoped lang="less">
.collapse-wrap {
  background: #e9edf3;
  border-radius: 8px;
  margin-left: 8px;
  margin-right: 8px;

  .arrow-icon {
    transition: all 250ms ease-in;
  }

  .rorate-icon {
    transform: rotateZ(180deg);
  }

  .tab-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 300ms ease-out;
  }
}
</style>

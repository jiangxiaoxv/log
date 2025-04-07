<template>
  <router-view v-slot="{ Component }">
    <transition>
      <!-- <keep-alive> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </transition>
  </router-view>
</template>

<script setup></script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>

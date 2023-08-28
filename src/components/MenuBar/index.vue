<script setup lang="ts">
import { ElMenu, ElScrollbar } from 'element-plus'
import { useRouter } from 'vue-router'
import { computed, unref } from 'vue'

const { push, currentRoute } = useRouter()
const menuSelect = (index: string) => {
  push(index)
}

const activeMenu = computed(() => {
  const { meta, path } = unref(currentRoute)

  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
})
</script>

<template>
  <ElScrollbar>
    <ElMenu
      mode="vertical"
      backgroundColor="var(--left-menu-bg-color)"
      textColor="var(--left-menu-text-color)"
      activeTextColor="var(--left-menu-text-active-color)"
      @on-select="menuSelect"
      :defaultActive="unref(activeMenu)"
    />
  </ElScrollbar>
</template>

<style></style>

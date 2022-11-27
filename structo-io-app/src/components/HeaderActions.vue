<template>
  <div class="actions-container">
    <BaseIcon name="export" size="28px" />
    <BaseIcon name="add" size="36px" />
    <BaseIcon name="darkMode" size="28px" @click="toggleDark()" />
  </div>
</template>
<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style scoped>
.actions-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
}
</style>

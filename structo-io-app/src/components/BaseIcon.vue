<template>
  <component class="icon" :width="size" :height="size" :is="iconComponents[name.toLowerCase()]" viewBox="0 0 50 50" preserveAspectRatio="none" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'

type Props = { name: string; size: string; color?: string }

const props = defineProps<Props>()

const color = computed(() => {
  if (!props.color) return 'var(--color-text-active'
  return props.color
})

const iconRoutes = import.meta.glob('../assets/icons/*.vue')
const iconComponents: Record<string, unknown> = {}

// defining all available Icon Components as async Components
Object.keys(iconRoutes).forEach((key) => {
  const name = (key.match('../assets/icons/Icon(.*?).vue') as RegExpMatchArray)[1].toLowerCase()
  iconComponents[name] = defineAsyncComponent(() => iconRoutes[key]() as any)
})
</script>

<style scoped>
.icon {
  cursor: pointer;
  fill: v-bind(color);
}
</style>

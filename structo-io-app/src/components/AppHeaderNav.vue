<template>
  <div class="nav-container">
    <a href="#" class="nav-item-inactive">Account</a>
    <a href="#" class="nav-item-active"
      ><div>Editor</div>
      <div class="active-item-underline"></div
    ></a>
    <a href="#" class="nav-item-inactive">About</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  navIndex: number
  navItems: string[]
}

const emit = defineEmits(['update:navIndex'])
</script>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item-active {
  font-weight: var(--fw-medium);
  font-size: var(--fs-header-nav-item-active);
  color: var(--color-text-active-light);
  display: block;
}
.nav-item-inactive {
  font-weight: var(--fw-regular);
  font-size: var(--fs-header-nav-item-inactive);
  color: var(--color-text-inactive-light);
}
.dark .nav-item-active {
  color: var(--color-text-active-dark);
}

.dark .nav-item-inactive {
  color: var(--color-text-inactive-dark);
}

.active-item-underline {
  width: 100%;
  height: 0.2rem;
  border-radius: 0.5rem;
  background-color: var(--color-primary-500);
}
</style>

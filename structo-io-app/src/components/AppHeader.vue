<template>
  <div class="container">
    <a class="app-logo header-item" href="#">Structo.io</a>
    <HeaderNav class="header-nav header-item" />
    <HeaderActions class="header-item" />
  </div>
</template>

<script setup lang="ts">
import HeaderActions from './HeaderActions.vue'
import HeaderNav from './HeaderNav.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.app-logo {
  font-size: var(--fs-logo);
}
.header-item {
  flex: 1;
}
</style>

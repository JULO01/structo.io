<template>
  <div class="container">
    <a class="app-logo" href="#">Structo.io</a>
    <AppHeaderNav />
    <AppHeaderActions />
  </div>
</template>

<script setup lang="ts">
import AppHeaderActions from './AppHeaderActions.vue'
import AppHeaderNav from './AppHeaderNav.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.app-logo {
  font-size: var(--fs-logo);
}
</style>

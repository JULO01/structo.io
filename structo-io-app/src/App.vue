<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="header-container">
      <div style="text-align: center; height: 2rem">ddjfadsf/div</div>
    </div>
  </header>
  <main>
    <div class="main-container"></div>
  </main>
  <footer class="footer-container">
    <div style="height: 2rem">akdfjklajfkldsjf</div>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
</style>

<style scoped>
.header-container {
  --margin-top: 1rem;
  --height: fit-content;

  position: fixed;
  top: var(--margin-top);
  left: var(--padding-horizontal);
  right: var(--padding-horizontal);
  max-height: var(--height);

  background-color: red;
}

.footer-container {
  --height: fit-content;
  --margin-bottom: 1.5rem;

  position: fixed;
  left: var(--padding-horizontal);
  right: var(--padding-horizontal);
  bottom: var(--margin-bottom);
  background-color: red;
}

.main-container {
  --margin-vertical: clamp(4rem, 15vh, 5rem);
  --margin-bottom: 7.75rem;

  position: fixed;
  left: var(--padding-horizontal);
  right: var(--padding-horizontal);
  top: var(--margin-vertical);
  bottom: var(--margin-vertical);
  height: fit-content;

  background-color: aliceblue;
}
</style>

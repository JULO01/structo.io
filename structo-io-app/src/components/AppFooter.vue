<template>
  <div class="footer-container">
    <a href="https://www.paypal.com/pools/c/8PmAPBMmMW" target="_blank" class="footer-item"><img src="../assets/images/coffee.png" class="footer-link-image" />Buy me a coffee</a>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
}
.footer-item {
  font-size: var(--fs-footer-nav);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1.5ch;
}
.footer-link-image {
  height: 1.5rem;
  width: 1.5rem;
}
</style>

<template>
  <div class="item-container">
    <div class="item-argument-container">
      <div class="item-argument-if-display"></div>
      <div class="item-argument"></div>
      <div class="item-argument-else-display"></div>
    </div>
    <div class="item-childzone-container">
      <div class="item-childzone-if"></div>
      <div class="item-childzone-divider"></div>
      <div class="item-childzone-else"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IfRectangle from '../assets/svg/shapes/IfRectangle.vue'
</script>
<style scoped>
/* Creating a polygon :
clip-path: polygon(0% 0%,
                   100% 0%,
                   50% 50%,
                    50% 50%);
                    */
html:not(.dark) .item-container {
  border: 2px solid var(--color-text-active-light);
}
html:not(.dark) .item-childzone {
  border: 2px solid var(--color-text-active-light);
}
html:not(.dark) .item-childzone:hover {
  border: 2px solid var(--color-primary);
}
html:not(.dark) .item-argument-container {
  border: 2px solid var(--color-text-active-light);
}
html.dark .item-container {
  border: 2px solid var(--color-text-active-dark);
}
html.dark .item-childzone {
  border: 2px solid var(--color-text-active-dark);
}
html.dark .item-argument-container {
  border: 2px solid var(--color-text-active-dark);
}
html.dark .item-childzone:hover {
  border: 2px solid var(--color-primary);
}
.item-argument-container {
  height: fit-content;
  min-height: 5rem;
  position: relative;

  display: flex;
  flex-direction: row;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
}
html:not(.dark) .item-argument-container {
  background-image: url('data:image/svg+xml;charset=UTF-8, <svg preserveAspectRatio="none" viewBox="0 0 331 102" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.519784" y1="0.145702" x2="166.52" y2="101.146" stroke="rgb(53, 53, 53)" stroke-width="2"/><line x1="329.523" y1="0.852376" x2="166.523" y2="100.852" stroke="rgb(53, 53, 53)" stroke-width="2"/></svg>');
  background-size: 100% 100%;
}
html.dark .item-argument-container {
  background-image: url('data:image/svg+xml;charset=UTF-8, <svg preserveAspectRatio="none" viewBox="0 0 331 102" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.519784" y1="0.145702" x2="166.52" y2="101.146" stroke="rgba(256, 256, 256, 0.9)" stroke-width="2"/><line x1="329.523" y1="0.852376" x2="166.523" y2="100.852" stroke="rgba(256, 256, 256, 0.9)" stroke-width="2"/></svg>');
  background-size: 100% 100%;
}
.item-argument {
  min-height: 2rem;
  background-color: blue;
  height: fit-content;
}
.item-argument-if-display {
  width: 50%;
}
.item-argument-else-display {
}
.item-container {
  border-radius: 10px;
  min-height: 18vh;
  min-width: 22vw;
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
}
.item-childzone-container {
  min-height: 6rem;
  height: fit-content;
  display: flex;
  justify-content: center;
}
.item-childzone-divider {
  width: 2px;
  background-color: aliceblue;
}
html.dark .item-childzone-divider {
  background-color: var(--color-text-active-dark);
}
html:not(.dark) .item-childzone-divider {
  background-color: var(--color-text-active-light);
}
.example-child {
  width: 10rem;
  height: 10rem;
  border: 1px solid cyan;
}
.test-svg {
  position: absolute;
  top: 0;
  left: 0;
}
.test-svg-2 {
  position: absolute;
  left: 50%;
  top: 0;
}
</style>

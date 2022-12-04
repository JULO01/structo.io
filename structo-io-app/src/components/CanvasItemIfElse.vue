<template>
  <div class="item-container">
    <div class="item-argument-container triangle-background" data-colored="true">
      <div class="item-argument-if-display">Hallo</div>
      <div class="item-argument">Moin</div>
      <div class="item-argument-else-display">Else</div>
    </div>
    <div class="item-childzone-container">
      <div class="item-childzone-if"></div>
      <div class="item-childzone-divider"></div>
      <div class="item-childzone-else"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.item-argument-container {
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
}
.item-argument {
  min-height: 2rem;
  width: 33%;
  background-color: red;
  height: fit-content;
  display: flex;
  align-content: flex-end;
  justify-content: center;
}
.item-argument-if-display {
  text-align: center;
  width: 33%;
  display: flex;
  align-content: flex-end;
  justify-content: flex-start;
}
.item-argument-else-display {
  width: 33%;
  text-align: center;
}
.item-container {
  border-radius: 10px;
  min-height: var(--min-height-editor-item);
  min-width: var(--min-width-editor-item);
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
}
.item-childzone-container {
  min-height: var(--min-height-editor-childzone) jG;
  min-height: inherit;
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

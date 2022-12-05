<template>
  <div class="item-container">
    <div class="item-argument-container triangle-background" data-colored="true">
      <div class="item-argument-if-display">Hallo</div>
      <div class="item-argument">Moin</div>
      <div class="item-argument-else-display">Else</div>
    </div>
    <div class="item-childzone-container">
      <div class="item-childzone-if"></div>
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
  font-size: var(--fs-editor-canvas-item);
  min-height: 2rem;
  width: 33%;
  height: fit-content;
  display: flex;
  align-content: flex-end;
  justify-content: center;
}
.item-argument-if-display {
  font-size: var(--fs-editor-canvas-item);
  text-align: center;
  width: 33%;
  display: flex;
  align-content: flex-end;
  justify-content: flex-start;
}
.item-argument-else-display {
  font-size: var(--fs-editor-canvas-item);
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
  min-height: var(--min-height-editor-childzone);
  min-height: inherit;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}
.item-childzone-if {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  display: flex;
  flex-direction: column;
}
.item-childzone-if::after {
  content: '';
  height: 100%;
  border-right: 2px solid black;
  margin-right: -2px;
}
.item-childzone-else {
  grid-row: 1 / 1;
  grid-column: 2 / 2;
  display: flex;
  flex-direction: column;
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
  width: 5rem;
  height: 10rem;
  border: 1px solid cyan;
}
</style>

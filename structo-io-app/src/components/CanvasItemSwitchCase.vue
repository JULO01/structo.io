<template>
  <div class="item-container">
    <div class="item-argument-left-triangle"></div>
    <div class="item-argument-right-triangle">
      <!-- <div class="test-argument"></div>-->
    </div>
    <div class="item-childzone-if"><div class="example-child"></div></div>
    <div class="item-childzone-else"><div class="example-child"></div></div>
    <!--<div v-for="item in testItems" :key="item" class="item-childzone-case"> </div>
      <div class="item-childzone-else">
        <div class="item-childzone-else-child"></div>
      </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const testItems = ref([1, 2, 3, 4])
</script>
<style scoped>
/*.item-container {
  border-radius: 10px;
  min-height: var(--min-height-editor-item);
  min-width: var(--min-width-editor-item);
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
}*/
.item-container {
  min-height: var(--min-height-editor-item);
  min-width: var(--min-width-editor-item);
}
.item-argument-container {
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 2rem;
}
.item-argument-left-triangle {
  background-image: url('data:image/svg+xml;charset=UTF-8, <svg preserveAspectRatio="none" viewBox="0 0 331 102" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="332" y2="101.146" stroke="rgba(256, 256, 256, 0.9)" stroke-width="2"/></svg>');
  background-size: 100% 100%;
  display: flex;
}
.test-argument {
  min-width: 3rem;
}
.item-argument-right-triangle {
  background-image: url('data:image/svg+xml;charset=UTF-8, <svg preserveAspectRatio="none" viewBox="0 0 332 104" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="331.299" y1="0" x2="0" y2="103.146" stroke="rgb(35, 35, 35)" stroke-width="2"/></svg>');
  background-size: 100% 100%;
  display: flex;
}

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
.item-container {
  display: grid;
  grid-template-columns: auto, 10rem;
  grid-template-rows: auto;
}
.item-argument-left-triangle {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  justify-self: start;
  background-color: brown;
}
.item-argument-right-triangle {
  width: 100%;
  grid-column: 2;
  grid-row: 1;
  background-color: red;
  justify-self: end;
}
.item-childzone-container {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 2;
  width: 200%;
  background-color: green;
  display: flex;
  flex-direction: row;
}
.item-childzone-if {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row: 2;
  min-width: 3rem;
  width: fit-content;
  display: flex;
  flex-direction: row;
}
.item-childzone-else {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row: 2;
  width: 3rem;
  background-color: green;
  display: flex;
  flex-direction: row;
}

.example-child {
  width: 2rem;
  background-color: green;
}
</style>

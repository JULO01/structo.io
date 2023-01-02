<template>
  <div class="item-container">
    <div class="case-triangle"></div>
    <div class="else-triangle"></div>
    <div class="if-tree-container" ref="ifTreeContainer">
      <div v-for="(item, index) in testItems" :key="index" class="if-tree">
        <div class="if-statement" :data-index="index + 1" ref="ifTrees">
          <div v-if="index == 2" class="example-statement"></div>
        </div>
        <div class="if-childzone"><div v-if="index == 2" class="example-child"></div></div>
      </div>
    </div>
    <div class="else-tree">
      <div class="else-statement"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
// index des items in data-id oderso mitgeben, und in ::after pseudo element verwenden

const ifTrees = ref<HTMLElement[]>()
const ifTreeContainer = ref<HTMLElement>()
const testItems = ref([4, 4, 4])
const lengthOfItems = computed(() => {
  return testItems.value.length
})

onMounted(() => {
  testItems.value.forEach((item, index, array) => {
    if (!ifTrees.value) return
    ifTrees.value[index].style.setProperty('--item-divider-proportion', String(array.length - index))
  })
  if (!ifTreeContainer.value) return
  ifTreeContainer.value.style.setProperty('--amount-of-items', String(testItems.value.length))
})
</script>
<style scoped>
.case-triangle {
  background-image: url('data:image/svg+xml;charset=UTF-8, <svg preserveAspectRatio="none" viewBox="0 0 331 102" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="332" y2="101.146" stroke="rgb(35, 35, 35)" stroke-width="2"/></svg>');
  background-size: 100% 100%;
  background-color: rgb(var(--editor-canvas-background-light));
  display: flex;
}
.else-triangle {
  background-image: url('data:image/svg+xml;charset=UTF-8, <svg preserveAspectRatio="none" viewBox="0 0 332 104" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="331.299" y1="0" x2="0" y2="103.146" stroke="rgb(35, 35, 35)" stroke-width="2"/></svg>');
  background-size: 100% 100%;
  display: flex;
}

.item-container {
  min-height: var(--min-height-editor-item);
  min-width: var(--min-width-editor-item);
  /*  grid-template-rows: var(--switch-case-upper-row-height) auto; */
  grid-template-rows: 10rem auto;
  position: relative;
  display: grid;
  grid-template-columns: auto, 10rem;
  grid-template-rows: auto;
}
.case-triangle {
  height: var(--switch-case-upper-row-height);
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  justify-self: start;
}
.else-triangle {
  height: var(--switch-case-upper-row-height);
  width: 100%;
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  justify-self: end;
}
.if-tree-container {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row: 2;
  min-width: 3rem;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(var(--amount-of-items), 1fr);
}
.if-tree {
  border: 1px solid black;
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 5rem;
}
.else-tree {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row: 2;
  min-width: 3rem;
}

.if-statement {
  width: 100%;
}
.if-statement::before {
  --items-length: v-bind(lengthOfItems);
  content: '';
  position: absolute;
  border-left: 2px solid var(--color-text-active-light);
  bottom: 100%;
  height: calc(var(--switch-case-upper-row-height) * var(--item-divider-proportion) / var(--items-length));
  height: calc(10rem * var(--item-divider-proportion) / var(--items-length));
  overflow-y: hidden;
}
.example-statement {
}
.example-child {
  background-color: red;
  height: 5rem;
  width: 12rem;
}
</style>

<template>
  <div class="method-item-container">
    <div class="item-statement"></div>
    <div class="item-childzone"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.method-item-container {
  min-width: initial;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
}
.item-statement {
  position: relative;
  border-radius: 10px;
  border: 2px solid black;
  min-width: var(--min-width-editor-item);
  min-height: var(--min-height-editor-argument);
}
.item-statement::before {
  content: '';
  position: absolute;
  left: 10%;
  border-left: 2px solid black;
  height: 100%;
}
.item-statement::after {
  content: '';
  position: absolute;
  left: 90%;
  border-left: 2px solid black;
  height: 100%;
}
.item-childzone {
  border: none;
}
</style>

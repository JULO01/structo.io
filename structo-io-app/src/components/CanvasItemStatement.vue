<template>
  <div class="statement-item-container">
    <div class="item-statement"></div>
    <div class="item-childzone"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.statement-item-container {
  min-width: initial;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
}
.item-statement {
  /*border-radius: 10px;*/
  border: 2px solid black;
  min-width: var(--min-width-editor-item);
  min-height: var(--min-height-editor-argument);
}

.item-childzone {
  border: none;
}
</style>
